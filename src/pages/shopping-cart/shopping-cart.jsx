import { useEffect } from 'react';
import { useUserContext } from '../../context/user-contex';
import { useFetch } from '../../hooks/useFetch';
import CardShoppinCart from '../../components/card/card-shoppin-cart';
import StoreInformation from '../../components/store-inf/store-information';
import { endPoints } from '../../service/endPoints/endPoints';
import { converterPrice } from '../../utils/converter';
import shoppin from '../../assets/shopping.png';

const ShoppingCart = () => {
    const {
        cart,
        onAddProduct,
        setCart,
        decrase,
        deleteProduct,
        total,
        countProducts,
    } = useUserContext();

    const price = parseInt(total);

    // load data //
    const urlProduct = endPoints.products.getProducts;
    const { loadingData } = useFetch(urlProduct);

    useEffect(() => {
        loadingData();
    }, [urlProduct]);

    return (
        <div className="w-full max-w-screen-xl">
            <div className="flex w-full my-12 flex-wrap lg:flex-row flex-col justify-center  bg-slate-50 p-4">
                <div className="lg:w-8/12 w-11/12 m-1">
                    {cart.length === 0 ? (
                        <div className="bg-white text-text-gray p-1 items-center flex flex-col gap-2 mt-2">
                            <img
                                src={shoppin}
                                alt="shopping"
                                className="w-40 h-40"
                            />
                            <h3 className="font-bold">
                                ¡Empieza un carrito de compras!{' '}
                            </h3>
                            <p className="m-2">
                                Una vez que añadas algo a tu carrito, aparecerá
                                aquí. ¿Listo para empezar?
                            </p>
                        </div>
                    ) : (
                        cart.map((product) => (
                            <CardShoppinCart
                                key={product.id}
                                cart={cart}
                                setCart={setCart}
                                onAddProduct={() => onAddProduct(product)}
                                decrase={() => decrase(product)}
                                deleteProduct={() => deleteProduct(product)}
                                {...product}
                            />
                        ))
                    )}
                </div>

                <div className="text-text-gray bg-white lg:w-3/12 w-11/12 px-6 py-4 shadow-md m-4 h-72 items-center flex justify-center">
                    {cart.length === 0 ? (
                        <div className="mt-2 text-text-gray">
                            <h5 className="mb-4 font-bold">
                                Resumen de Compra
                            </h5>
                            <p>
                                Aquí verás los importes de tu compra una vez que
                                agregues productos.
                            </p>
                        </div>
                    ) : (
                        <div className="gap-4 flex flex-col px-4">
                            <h5 className="font-bold text-lg">
                                Resumen del Predido
                            </h5>
                            <p className="font-light">
                                <span>{countProducts} productos</span>
                            </p>
                            <p className="flex gap-8 mt-2">
                                <span>Total:</span>{' '}
                                <span className="font-semibold">
                                    $ {converterPrice(price)}
                                </span>
                            </p>
                            <button className="bg-background-yellow text-text-ligth items-center flex justify-center gap-2 rounded-lg w-50 mt-4 hover:bg-yellow-600 py-1">
                                <a
                                    href="https://www.youtube.com/watch?v=R6MNlWagZhk"
                                    target="_blank"
                                >
                                    Continuar compra
                                </a>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <StoreInformation />
        </div>
    );
};

export default ShoppingCart;
