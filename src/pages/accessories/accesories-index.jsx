import { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import LayoutBase from '../../layout/layout-base';
import { endPoints } from '../../service/endPoints/endPoints';
import Card from '../../components/card/card-product';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';

const AccesoriesIndex = () => {
    //--- Load Data Product---//
    const urlProduct = endPoints.products.getFilterProducts('category', '3');
    const {
        data: dataProducts,
        loading,
        error,
        loadingData: loadDataProducts,
    } = useFetch(urlProduct);

    useEffect(() => {
        loadDataProducts();
    }, [urlProduct]);
    return (
        <LayoutBase>
            {loading ? (
                <Loading />
            ) : (
                <div className="w-full max-w-screen-xl">
                    {dataProducts.data?.length > 0 ? (
                        <section className="grid md:grid-cols-4 lg:gap-8 gap-6 mx-8 my-6 sm:grid-cols-3 grid-cols-2">
                            {dataProducts.data?.map((product) => (
                                <Link
                                    key={product.id}
                                    to={product.id}
                                    state={product}
                                >
                                    <Card {...product} />
                                </Link>
                            ))}
                        </section>
                    ) : (
                        <div className="w-full flex justify-center items-center mt-10">
                            No hay coincidencias
                        </div>
                    )}
                </div>
            )}
            {error !== null ? console.log('Error de conexión', 'error') : null}
        </LayoutBase>
    );
};

export default AccesoriesIndex;
