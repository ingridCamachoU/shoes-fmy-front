import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { endPoints } from '../../service/endPoints/endPoints';
import Loading from '../../components/Loading';
import Card from '../../components/card/card-product';
import StoreInformation from '../../components/store-inf/store-information';
import posterFashionWoman from '../../assets/home/poster-fashion-woman.svg';
import posterFashionWomanMovil from '../../assets/home/poster-fashion-movil-woman.svg';

const WomanIndex = () => {
    const [filtros, setFiltros] = useState({
        color: '',
        category: '',
        gender: 'Femenino',
        size: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFiltros({ ...filtros, [name]: value });
    };

    const handleResetFilters = () => {
        setFiltros({
            color: '',
            category: '',
            gender: 'femenino',
            size: '',
        });
    };

    const urlProduct = endPoints.products.getFilterProducts(filtros);
    const urlCategorie = endPoints.categories.getCategories;
    const urlSize = endPoints.sizes.getSize;
    const {
        data: dataProducts,
        loading,
        error,
        loadingData: loadDataProducts,
    } = useFetch(urlProduct);

    const { data: dataCategorie, loadingData: loadDataCategorie } =
        useFetch(urlCategorie);

    const { data: dataSize, loadingData: loadDataSize } = useFetch(urlSize);

    const colorOptions = [
        { value: 'blanco', label: 'Blanco', backgroundColor: 'white' },
        { value: 'negro', label: 'Negro', backgroundColor: 'black' },
        { value: 'beige', label: 'Beige', backgroundColor: 'beige' },
        { value: 'rojo', label: 'Rojo', backgroundColor: 'red' },
        { value: 'azul', label: 'Azul', backgroundColor: 'blue' },
        { value: 'verde', label: 'Verde', backgroundColor: 'green' },
        { value: 'camel', label: 'Camel', backgroundColor: 'tan' },
    ];

    useEffect(() => {
        loadDataProducts();
        loadDataCategorie();
        loadDataSize();
    }, [urlProduct, urlCategorie, urlSize]);

    return (
        <div>
            <div>
                <h1 className="font-bold text-2xl my-6 mx-6">MUJER</h1>
            </div>
            <div className="w-full flex my-4">
                <div className="w-1/5">
                    <form className="ml-4">
                        <button
                            onClick={handleResetFilters}
                            className="flex justify-center items-center font-bold p-2 rounded bg-yellow-50 border-2 mb-4"
                        >
                            Limpiar filtros
                        </button>
                        <fieldset className="mb-2">
                            <legend className="sr-only">Talla</legend>
                            <h2 className="my-2 font-bold">Talla</h2>

                            {dataSize.data?.length > 0 ? (
                                <div className="grid grid-cols-3">
                                    {dataSize.data?.map((size) => (
                                        <div
                                            key={size?.id}
                                            className="flex items-center mb-4"
                                        >
                                            <input
                                                id={`size-option-${size?.id}`}
                                                type="radio"
                                                name="size"
                                                value={size?.id}
                                                checked={
                                                    filtros.size === size?.id
                                                }
                                                onChange={handleInputChange}
                                                className="h-4 w-4 border-gray-300 cursor-pointer"
                                                aria-labelledby={`size-option-${size?.id}`}
                                                aria-describedby={`size-option-${size?.id}`}
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
                                            key={categorie.id}
                                            className="flex items-center mb-4"
                                        >
                                            <input
                                                id={`category-option-${categorie.id}`}
                                                type="radio"
                                                name="category"
                                                value={categorie?.id}
                                                checked={
                                                    filtros.category ===
                                                    categorie?.id
                                                }
                                                onChange={handleInputChange}
                                                className="h-4 w-4 border-gray-300 cursor-pointer"
                                                aria-labelledby={`category-option-${categorie?.id}`}
                                                aria-describedby={`category-option-${categorie?.id}`}
                                            />
                                            <label className="text-sm font-medium text-gray-900 ml-2 block">
                                                {categorie.name}
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

                            {colorOptions.map((colorOption, index) => (
                                <div
                                    className="flex items-center mb-4"
                                    key={index}
                                >
                                    <input
                                        id={`color-option-${index + 1}`}
                                        type="radio"
                                        name="color"
                                        value={colorOption.value}
                                        checked={
                                            filtros.color === colorOption.value
                                        }
                                        onChange={handleInputChange}
                                        className="h-4 w-4 border-gray-300 cursor-pointer"
                                        aria-labelledby={`color-option-${
                                            index + 1
                                        }`}
                                        aria-describedby={`color-option-${
                                            index + 1
                                        }`}
                                    />
                                    <label
                                        htmlFor={`color-option-${index + 1}`}
                                        className="text-sm font-medium text-gray-900 ml-2 block cursor-pointer"
                                    >
                                        <span className="flex gap-1">
                                            <span
                                                className="inline-block w-4 h-4 rounded-full border border-gray-400"
                                                style={{
                                                    backgroundColor:
                                                        colorOption.backgroundColor,
                                                }}
                                            ></span>
                                            {colorOption.label}
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </fieldset>
                    </form>
                </div>

                <div className="w-4/5">
                    {loading ? (
                        <Loading />
                    ) : (
                        <div className="w-full max-w-screen-xl">
                            {dataProducts?.data?.length > 0 ? (
                                <section className="grid lg:grid-cols-3 lg:gap-6 gap-4 mx-8 my-6 md:grid-cols-2 ">
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
                            Error al cargar los datos. Por favor, inténtalo de
                            nuevo más tarde.
                        </div>
                    )}
                </div>
            </div>

            <picture>
                <source
                    srcSet={posterFashionWomanMovil}
                    media="(max-width:640px)"
                />
                <img src={posterFashionWoman} alt="postPage" />
            </picture>

            <StoreInformation />
        </div>
    );
};

export default WomanIndex;
