import { Link } from 'react-router-dom';

import Card from '../../components/card/card-product';
import CardStore from '../../components/card/card-store';
import Loading from '../../components/Loading';
import Poster from '../../components/poster/poster';
import StoreInformation from '../../components/store-inf/store-information';

import poster from '../../assets/home/poster-home.svg';
import posterMovil from '../../assets/home/poster-movil-home.svg';
import woman from '../../assets/home/woman.svg';
import man from '../../assets/home/man.svg';
import cali from '../../assets/home/store-cali.svg';
import medellin from '../../assets/home/store-medellin.svg';
import bogota from '../../assets/home/store-bogota.svg';
import outletHome from '../../assets/home/outlet-home.svg';

import { useUserContext } from '../../context/user-contex';

const Home = () => {
    const { loading, dataProduct, error } = useUserContext();
    return (
        <div>
            <div>
                <picture className="flex">
                    <source srcSet={posterMovil} media="(max-width:640px)" />
                    <img src={poster} alt="postPage" />
                </picture>
            </div>
            <h1 className="text-2xl	font-bold mt-8 justify-center flex">
                NUEVA COLECCIÓN
            </h1>
            <div className="w-full flex justify-center my-6">
                {loading ? (
                    <Loading />
                ) : (
                    <div className="w-full max-w-screen-2xl">
                        {dataProduct?.data?.length > 0 ? (
                            <section className="grid md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-6 mx-8 my-6 sm:grid-cols-2 grid-cols-1">
                                {dataProduct.data?.map((product) => (
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
                        Error al cargar los datos. Por favor, inténtalo de nuevo
                        más tarde.
                    </div>
                )}
            </div>

            <Poster
                img1={woman}
                alt1="mujer"
                link1="mujer"
                img2={man}
                alt2="hombre"
                link2="hombre"
            />

            <section className="md:flex-row flex-col flex justify-between pt-4 gap-4">
                <CardStore
                    img={cali}
                    alt="Cali"
                    city="Cali"
                    address="Cll 3 #20-120 salas"
                />
                <CardStore
                    img={medellin}
                    alt="Medellin"
                    city="Medellin"
                    address="Cll 3 #20-120 ss"
                />
                <CardStore
                    img={bogota}
                    alt="Bogota"
                    city="Bogota"
                    address="Cll 3 #20-120 Sausa"
                />
            </section>

            <StoreInformation />

            <picture className="my-6">
                <img src={outletHome} alt="outlet" />
            </picture>
        </div>
    );
};

export default Home;
