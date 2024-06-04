import { useLocation, useParams } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { converterPrice } from '../../utils/converter';
import { useUserContext } from '../../context/user-contex';
import { useFetch } from '../../hooks/useFetch';
import { endPoints } from '../../service/endPoints/endPoints';
import metodoPago from '../../assets/products/metodos-pago.png';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';

const DetailProduct = () => {
    const data = useLocation();
    const { productId } = useParams();

    const urlProduct = endPoints.products.getDetailProducts(productId);
    const [hovered, setHovered] = useState(false);

    const { onAddProduct, cart, deleteProduct } = useUserContext();

    const {
        data: dataProducts,
        loadingData: loadDataProducts,
        loading,
        error,
    } = useFetch(urlProduct);

    const deleteShopping = (product) => {
        cart.some((item) => {
            if (item.id === product?.id) {
                deleteProduct(item);
            }
        });
    };

    useEffect(() => {
        loadDataProducts();
    }, [urlProduct]);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    {dataProducts?.data?.length > 0 ? (
                        <div>
                            {dataProducts.data?.map((product) => (
                                <div
                                    className="w-full flex my-6"
                                    key={product.id}
                                >
                                    <section className="w-full my-8 flex md:flex-row flex-col justify-center gap-8">
                                        <div className="md:w-6/12 w-full justify-center items-center flex">
                                            <picture className=" w-11/12 flex items-center justify-center">
                                                <img
                                                    src={product?.images}
                                                    alt={product?.name}
                                                    className="w-[544.7] hover:scale-110 duration-500 cursor-pointer"
                                                />
                                            </picture>
                                        </div>

                                        <div className="md:w-6/12 px-2 mt-4 w-full">
                                            <h2 className="text-3xl font-bold">
                                                {product?.name}
                                            </h2>
                                            <h3 className="text-2xl">
                                                $
                                                {converterPrice(product?.price)}
                                            </h3>
                                            <p className="text-lg mt-4">
                                                {product?.description}
                                            </p>

                                            <p className="text-lg mt-2">
                                                <strong>Código:</strong>{' '}
                                                {product?.code}
                                            </p>
                                            <p className="text-lg mt-2">
                                                <strong>Color:</strong>{' '}
                                                {product?.color}
                                            </p>

                                            <p className="text-lg mt-4">
                                                {product?.gender}
                                            </p>

                                            {product?.sizes.length > 0 ? (
                                                <p className="text-lg mt-2">
                                                    <strong>
                                                        Tallas disponibles:
                                                    </strong>{' '}
                                                    {product?.sizes
                                                        ?.map(
                                                            (size) =>
                                                                `${size.number} (${size.sizes_products.amount})`
                                                        )
                                                        .join(', ')}
                                                </p>
                                            ) : (
                                                <p></p>
                                            )}

                                            <div className="flex gap-4 items-center mt-4 w-80">
                                                {cart.some(
                                                    (item) =>
                                                        item.id === product.id
                                                ) ? (
                                                    <button
                                                        type="button"
                                                        className="flex w-full justify-center rounded-md border-yellow-500 border-2 px-3 py-1.5 font-semibold leading-6  shadow-sm hover:bg-yellow-600 focus-visible:bg-yellow-600"
                                                        onMouseEnter={() =>
                                                            setHovered(true)
                                                        }
                                                        onMouseLeave={() =>
                                                            setHovered(false)
                                                        }
                                                        onClick={() =>
                                                            deleteShopping(
                                                                product
                                                            )
                                                        }
                                                    >
                                                        {hovered
                                                            ? 'Quitar del carrito'
                                                            : 'Agregado al carrito'}
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="flex w-full justify-center rounded-md bg-background-yellow px-3 py-1.5 font-semibold leading-6  shadow-sm hover:bg-yellow-600 focus-visible:bg-yellow-600 border-2 border-yellow-500 gap-2"
                                                        onClick={() =>
                                                            onAddProduct(
                                                                product
                                                            )
                                                        }
                                                    >
                                                        <ShoppingBagIcon className="h-5 w-5" />
                                                        Agregar al carrito
                                                    </button>
                                                )}
                                            </div>

                                            <div className="mt-4 gap-4">
                                                <p>
                                                    Todas nuestras entregas en
                                                    Colombia se realizan con la
                                                    transportadora COORDINADORA
                                                    MERCANTIL.
                                                </p>
                                                <p>
                                                    Nuestros tiempos de entrega
                                                    son:
                                                </p>

                                                <p>
                                                    Ciudades principales: 2 a 3
                                                    días hábiles
                                                    <br />
                                                    Ciudades intermedias: 3 a 5
                                                    días hábiles
                                                    <br />
                                                    Destinos lejanos: 8 a 15
                                                    días hábiles
                                                </p>
                                            </div>
                                            <div className="pt-6">
                                                <picture>
                                                    <img
                                                        src={metodoPago}
                                                        alt="metodoPago"
                                                        className="max-w-md"
                                                    />
                                                </picture>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full flex justify-center items-center mt-10">
                            No hay coincidencias
                        </div>
                    )}
                </div>
            )}
            {error && (
                <div className="text-red-500">
                    Error al cargar los datos. Por favor, inténtalo de nuevo más
                    tarde.
                </div>
            )}
        </div>
    );
};

export default DetailProduct;
