import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StopIcon } from '@heroicons/react/24/solid';
import { useFetch } from '../../hooks/useFetch';
import LayoutBase from '../../layout/layout-base';
import { endPoints } from '../../service/endPoints/endPoints';
import Card from '../../components/card/card-product';
import Loading from '../../components/Loading';
import StoreInformation from '../../components/store-inf/store-information';
import posterFashionMan from '../../assets/home/poster-fashion-man.svg';

const ManIndex = () => {
    //--- Load Data Product---//
    const urlProduct = endPoints.products.getFilterProducts(
        'gender',
        'Masculino'
    );
    const urlCategorie = endPoints.categories.getCategories;
    const urlSize = endPoints.sizes.getSize;
    const {
        data: dataProducts,
        loading,
        error,
        loadingData: loadDataProducts,
    } = useFetch(urlProduct);

    const {
        data: dataCategorie,
        loadingCategorie,
        errorCateogrie,
        loadingData: loadDataCategorie,
    } = useFetch(urlCategorie);

    const {
        data: dataSize,
        loadingSize,
        errorSize,
        loadingData: loadDataSize,
    } = useFetch(urlSize);

    useEffect(() => {
        loadDataProducts();
        loadDataCategorie();
        loadDataSize();
    }, [urlProduct, urlCategorie, urlSize]);
    return (
        <LayoutBase>
            <div>
                <h1 className="font-bold text-2xl my-4">HOMBRE</h1>
            </div>
            <div className="w-full max-w-screen-xl flex my-4">
                <div className="w-1/5">
                    <form>
                        <fieldset className="mb-2">
                            <legend className="sr-only">Talla</legend>
                            <h2 className="my-2 font-bold">Talla</h2>

                            {dataSize.data?.length > 0 ? (
                                <div className="grid grid-cols-3">
                                    {dataSize.data?.map((size) => (
                                        <div
                                            key={size.id}
                                            className="flex items-center mb-4"
                                        >
                                            <input
                                                id="size-option-1"
                                                type="radio"
                                                name="size"
                                                value={size?.id}
                                                className="h-4 w-4 border-gray-300 "
                                                aria-labelledby="size-option-1"
                                                aria-describedby="size-option-1"
                                            />
                                            <label className="text-sm font-medium text-gray-900 ml-2 block">
                                                {size?.number}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex items-center mb-4">
                                    Proceso
                                </div>
                            )}
                        </fieldset>

                        <fieldset className="mb-2">
                            <legend className="sr-only">Categoria</legend>
                            <h2 className="my-2 font-bold">Categoria</h2>

                            {dataCategorie.data?.length > 0 ? (
                                <div>
                                    {dataCategorie.data?.map((categorie) => (
                                        <div
                                            key={categorie?.id}
                                            className="flex items-center mb-4"
                                        >
                                            <input
                                                id="categorie-option-1"
                                                type="radio"
                                                name="categorie"
                                                value={categorie?.id}
                                                className="h-4 w-4 border-gray-300 "
                                                aria-labelledby="categorie-option-1"
                                                aria-describedby="categorie-option-1"
                                            />
                                            <label className="text-sm font-medium text-gray-900 ml-2 block">
                                                {categorie?.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex items-center mb-4">
                                    Proceso
                                </div>
                            )}
                        </fieldset>

                        <fieldset className="mb-2">
                            <legend className="sr-only">Color</legend>

                            <h2 className="my-2 font-bold">Color</h2>

                            <div className="flex items-center mb-4">
                                <input
                                    id="colors-option-1"
                                    type="radio"
                                    name="colors"
                                    value="blanco"
                                    className="h-4 w-4 border-gray-300 "
                                    aria-labelledby="colors-option-1"
                                    aria-describedby="colors-option-1"
                                />
                                <label className="text-sm font-medium text-gray-900 ml-2 block">
                                    <span className="flex gap-1">
                                        <StopIcon className="h-4 w-4 text-white border border-black rounded-sm" />
                                        Blanco
                                    </span>
                                </label>
                            </div>

                            <div className="flex items-center mb-4">
                                <input
                                    id="colors-option-2"
                                    type="radio"
                                    name="colors"
                                    value="negro"
                                    className="h-4 w-4 border-gray-300"
                                    aria-labelledby="colors-option-2"
                                    aria-describedby="colors-option-2"
                                />
                                <label className="text-sm font-medium text-gray-900 ml-2 block">
                                    <span className="flex gap-1">
                                        <StopIcon className="h-4 w-4 text-black border border-black rounded-sm" />
                                        Negro
                                    </span>
                                </label>
                            </div>

                            <div className="flex items-center mb-4">
                                <input
                                    id="colors-option-3"
                                    type="radio"
                                    name="colors"
                                    value="beige"
                                    className="h-4 w-4 border-gray-300"
                                    aria-labelledby="colors-option-3"
                                    aria-describedby="colors-option-3"
                                />
                                <label className="text-sm font-medium text-gray-900 ml-2 block">
                                    <span className="flex gap-1">
                                        <StopIcon className="h-4 w-4 text-orange-100 border border-black rounded-sm" />
                                        Beige
                                    </span>
                                </label>
                            </div>

                            <div className="flex items-center mb-4">
                                <input
                                    id="colors-option-4"
                                    type="radio"
                                    name="colors"
                                    value="rojo"
                                    className="h-4 w-4 border-gray-300"
                                    aria-labelledby="colors-option-4"
                                    aria-describedby="colors-option-4"
                                />
                                <label className="text-sm font-medium text-gray-900 ml-2 block">
                                    <span className="flex gap-1">
                                        <StopIcon className="h-4 w-4 text-red-700 border border-black rounded-sm" />
                                        rojo
                                    </span>
                                </label>
                            </div>

                            <div className="flex items-center mb-4">
                                <input
                                    id="colors-option-5"
                                    type="radio"
                                    name="colors"
                                    value="azul"
                                    className="h-4 w-4 border-gray-300"
                                    aria-labelledby="colors-option-5"
                                    aria-describedby="colors-option-5"
                                />
                                <label className="text-sm font-medium text-gray-900 ml-2 block">
                                    <span className="flex gap-1">
                                        <StopIcon className="h-4 w-4 text-blue-500 border border-black rounded-sm" />
                                        Azul
                                    </span>
                                </label>
                            </div>

                            <div className="flex items-center mb-4">
                                <input
                                    id="colors-option-6"
                                    type="radio"
                                    name="colors"
                                    value="verde"
                                    className="h-4 w-4 border-gray-300"
                                    aria-labelledby="colors-option-6"
                                    aria-describedby="colors-option-6"
                                />
                                <label className="text-sm font-medium text-gray-900 ml-2 block">
                                    <span className="flex gap-1">
                                        <StopIcon className="h-4 w-4 text-green-600 border border-black rounded-sm" />
                                        Verde
                                    </span>
                                </label>
                            </div>

                            <div className="flex items-center mb-4">
                                <input
                                    id="colors-option-7"
                                    type="radio"
                                    name="colors"
                                    value="camel"
                                    className="h-4 w-4 border-gray-300"
                                    aria-labelledby="colors-option-7"
                                    aria-describedby="colors-option-7"
                                />
                                <label className="text-sm font-medium text-gray-900 ml-2 block">
                                    <span className="flex gap-1">
                                        <StopIcon className="h-4 w-4 text-red-300 border border-black rounded-sm" />
                                        Camel
                                    </span>
                                </label>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="w-4/5">
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
                    {error !== null
                        ? console.log('Error de conexión', 'error')
                        : null}
                </div>
            </div>

            <picture className="my-8">
                <img src={posterFashionMan} alt="outlet" />
            </picture>

            <StoreInformation />
        </LayoutBase>
    );
};

export default ManIndex;
