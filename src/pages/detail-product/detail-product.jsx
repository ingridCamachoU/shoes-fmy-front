import { useLocation, useParams } from 'react-router-dom';
import LayoutBase from '../../layout/layout-base';
import { converterPrice } from '../../utils/converter';
import { useUserContext } from '../../context/user-contex';
import { useFetch } from '../../hooks/useFetch';
import { endPoints } from '../../service/endPoints/endPoints';
import { useEffect } from 'react';

const DetailProduct = () => {
    const data = useLocation();
    let params = useParams();

    const urlProduct = endPoints.products.getDetailProducts(params.productId);

    const { onAddProduct, cart } = useUserContext();

    const { data: dataProducts, loadingData: loadDataProducts } =
        useFetch(urlProduct);

    useEffect(() => {
        loadDataProducts();
    }, [urlProduct]);

    console.log(dataProducts);

    return (
        <LayoutBase>
            {dataProducts.data?.map((product) => (
                <div
                    key={product.id}
                    className="w-full max-w-screen-xl flex my-4"
                >
                    <div className="w-3/5 mt-4">
                        <picture className="w-full">
                            <img
                                src={product?.images}
                                alt="product"
                                className="shadow-md shadow-gray-200"
                            />
                        </picture>
                    </div>
                    <div className="w-2/5 px-6 mt-4">
                        <h2 className="text-3xl font-bold">{product?.name}</h2>
                        <h3 className="text-2xl">
                            ${converterPrice(product?.price)}
                        </h3>

                        <div className="flex gap-4 items-center">
                            {cart.some((item) => item.id === product.id) ? (
                                <button
                                    type="button"
                                    className="bg-background-blue text-text-ligth py-1 px-2 rounded mt-4 hover:bg-background-blueHover disabled active:scale-95"
                                >
                                    Agregado al carrito
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="bg-background-blue text-text-ligth py-1 px-2 rounded mt-4 hover:bg-background-blueHover active:scale-95"
                                    onClick={() => onAddProduct(product)}
                                >
                                    Agregar al carrito
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </LayoutBase>
    );
};

export default DetailProduct;
