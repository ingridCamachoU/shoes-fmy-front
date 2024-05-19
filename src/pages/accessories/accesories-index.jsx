import { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
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
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className="w-full max-w-screen-2xl">
                    {dataProducts.data?.length > 0 ? (
                        <section className="grid md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-6 mx-8 my-6 sm:grid-cols-2 grid-cols-1">
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
            {error && (
                <div className="text-red-500">
                    Error al cargar los datos. Por favor, inténtalo de nuevo más
                    tarde.
                </div>
            )}
        </div>
    );
};

export default AccesoriesIndex;
