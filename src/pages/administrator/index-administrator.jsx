import {
    PencilIcon,
    EyeIcon,
    TrashIcon,
    PlusCircleIcon,
} from '@heroicons/react/24/solid';
import FormAddProducts from './products/form-products';
import { useEffect, useState } from 'react';
import { useModal } from '../../hooks/useModal';
import { confirAlert } from '../../utils/alerts';
import { endPoints } from '../../service/endPoints/endPoints';
import { helpAxios } from '../../service/helpAxios';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import { converterPrice } from '../../utils/converter';
import FormAddCategorie from './categorie/form-categorie';
import FormAddSize from './size/form-size';
import { useUserContext } from '../../context/user-contex';
import DetailsProducts from './products/details-products-administ';

const IndexAdministrator = () => {
    const [
        isOpenModalAddProduct,
        setIsOpenModalAddProduct,
        isOpenModalDetailProduct,
        setIsOpenModalDetailProduct,
        isOpenModalCreateCategorie,
        setIsOpenModalCreateCategorie,
        isOpenModalCreateSize,
        setIsOpenModalCreateSize,
    ] = useModal();

    const { token } = useUserContext();

    //----------------------------- PRODUCTS----------------------------- //
    const [titleProduct, setTitleProduct] = useState('');
    const [editDataProduct, setEditDataProduct] = useState(null);

    //--- Load Data Product---//
    const urlProduct = endPoints.products.getProducts;
    const {
        data: dataProducts,
        loading: loadingProducts,
        error: errorProducts,
        loadingData: loadDataProducts,
    } = useFetch(urlProduct);

    //Update Product//
    const handleEditProduct = (product) => {
        setEditDataProduct(product);
        setIsOpenModalAddProduct(true);
        setTitleProduct('Editar Producto');
    };

    //Details Product//
    const handleDetailsProduct = (product) => {
        setEditDataProduct(product);
        setIsOpenModalDetailProduct(true);
    };

    //Delete Product//
    const handleDeleteProduct = (id) => {
        const config = {
            url: endPoints.products.deleteProduct(id),
            method: 'DELETE',
            title: 'El producto ha sido eliminado',
            icon: 'success',
            token: token,
            loadData: loadDataProducts,
        };
        confirAlert(
            'Eliminar producto',
            'Está seguro de eliminar el producto?',
            'warning',
            'Eliminar',
            helpAxios,
            config
        );
    };

    const addProduct = () => {
        setTitleProduct('Crear Producto');
        setIsOpenModalAddProduct(true);
    };

    //-----------------------------CATEGORIES----------------------------- //

    const [titleCategorie, setTitleCategorie] = useState('');
    const [editDataCategorie, setEditDataCategorie] = useState(null);

    //--- Load Data Categorie---//
    const urlCategorie = endPoints.categories.getCategories;
    const {
        data: dataCategorie,
        loading: loadingCategorie,
        error: errorCategorie,
        loadingData: loadDataCategories,
    } = useFetch(urlCategorie);

    //Update Categorie//
    const handleEditCategorie = (categorie) => {
        setEditDataCategorie(categorie);
        setIsOpenModalCreateCategorie(true);
        setTitleCategorie('Editar Categoria');
    };

    //Delete Categorie//
    const handleDeleteCategorie = (id) => {
        const config = {
            url: endPoints.categories.deleteCategories(id),
            method: 'DELETE',
            title: 'La categoria ha sido eliminada',
            icon: 'success',
            token: token,
            loadData: loadDataCategories,
        };
        confirAlert(
            'Eliminar categoria',
            'Está seguro de eliminar la categoria?',
            'warning',
            'Eliminar',
            helpAxios,
            config
        );
    };

    const addCategorie = () => {
        setTitleCategorie('Crear categoria');
        setIsOpenModalCreateCategorie(true);
    };

    //-----------------------------SIZES----------------------------- //

    //--- Load Data sizes---//
    const urlSize = endPoints.sizes.getSize;
    const {
        data: dataSize,
        loading: loadingSize,
        loadingData: loadDataSize,
        error: errorSize,
    } = useFetch(urlSize);

    //Delete sizes//
    const handleDeleteSizes = (id) => {
        const config = {
            url: endPoints.sizes.deleteSizes(id),
            method: 'DELETE',
            title: 'La talla ha sido eliminada',
            icon: 'success',
            token: token,
            loadData: loadDataSize,
        };
        confirAlert(
            'Eliminar talla',
            'Está seguro de eliminar la talla?',
            'warning',
            'Eliminar',
            helpAxios,
            config
        );
    };

    const addSize = () => {
        setIsOpenModalCreateSize(true);
    };

    useEffect(() => {
        loadDataProducts();
        loadDataCategories();
        loadDataSize();
    }, [urlProduct, urlCategorie, urlSize]);

    return (
        <div className="w-full flex justify-center flex-col items-center">
            <div className="flex w-4/5 justify-between flex-col sm:flex-row">
                <div className="sm:w-2/4 w-full">
                    <div className="flex my-8 font-bold justify-center gap-6 text-2xl">
                        <h2>Categorias</h2>
                        <button
                            className=" text-text-ligth px-1 rounded-lg bg-btn-blue hover:bg-btn-blueHover"
                            onClick={addCategorie}
                        >
                            <PlusCircleIcon className="h-5 w-5 font-bold" />
                        </button>
                    </div>
                    <div className="flex flex-col lg:overflow-hidden overflow-x-auto w-4/5 ">
                        <div className="sm:-mx-4 lg:-mx-4">
                            <div className="inline-block min-w-full sm:px-2 lg:px-2">
                                <div>
                                    {loadingCategorie ? (
                                        <Loading />
                                    ) : (
                                        <table className="w-full text-center font-light pb-4 mb-4">
                                            <thead>
                                                <tr className=" text-text-ligth">
                                                    <th className="px-2 py-2 font-medium text-lg">
                                                        Nombre
                                                    </th>

                                                    <th className="px-2 py-2 font-medium text-lg">
                                                        Acciones
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {dataCategorie?.data.length ===
                                                0 ? (
                                                    <tr className="border-b text-center w-full">
                                                        <td
                                                            colSpan="10"
                                                            className="px-4 py-2 text-center"
                                                        >
                                                            No hay datos
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    (dataCategorie?.data.map)(
                                                        (category) => (
                                                            <tr
                                                                key={
                                                                    category.id
                                                                }
                                                                className="border-b w-full"
                                                            >
                                                                <td className="py-2">
                                                                    {
                                                                        category.name
                                                                    }
                                                                </td>

                                                                <td className="flex py-2 gap-2 justify-center items-center pr-2 pt-4">
                                                                    <button
                                                                        className="bg-btn-yellow text-text-ligth p-1 rounded-lg hover:bg-btn-yellowHover"
                                                                        onClick={() =>
                                                                            handleEditCategorie(
                                                                                category
                                                                            )
                                                                        }
                                                                    >
                                                                        <PencilIcon className="h4 w-4" />
                                                                    </button>

                                                                    <button
                                                                        className="bg-btn-red text-text-ligth p-1 rounded-lg hover:bg-btn-redHover"
                                                                        onClick={() =>
                                                                            handleDeleteCategorie(
                                                                                category.id
                                                                            )
                                                                        }
                                                                    >
                                                                        <TrashIcon className="h4 w-4" />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    )}

                                    {errorCategorie && (
                                        <div className="text-red-500">
                                            Error al cargar los datos. Por
                                            favor, inténtalo de nuevo más tarde.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:w-2/4 w-full">
                    <div className="flex my-8 font-bold justify-center gap-6 text-2xl">
                        <h2>Tallas</h2>
                        <button
                            className=" text-text-ligth px-1 rounded-lg bg-btn-blue hover:bg-btn-blueHover"
                            onClick={addSize}
                        >
                            <PlusCircleIcon className="h-5 w-5 font-bold " />
                        </button>
                    </div>
                    <div className="flex flex-col lg:overflow-hidden overflow-x-auto w-4/5">
                        <div className="sm:-mx-4 lg:-mx-4">
                            <div className="inline-block min-w-full sm:px-2 lg:px-2">
                                <div>
                                    {loadingSize ? (
                                        <Loading />
                                    ) : (
                                        <table className="w-full text-center  font-light pb-4 mb-4">
                                            <thead>
                                                <tr className=" text-text-ligth">
                                                    <th className="px-2 py-2 font-medium text-lg">
                                                        Numero
                                                    </th>

                                                    <th className="px-2 py-2 font-medium text-lg">
                                                        Acciones
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {dataSize?.data.length === 0 ? (
                                                    <tr className="border-b text-center w-full">
                                                        <td
                                                            colSpan="10"
                                                            className="px-4 py-2 text-center"
                                                        >
                                                            No hay datos
                                                        </td>
                                                    </tr>
                                                ) : (
                                                    (dataSize?.data.map)(
                                                        (size) => (
                                                            <tr
                                                                key={size.id}
                                                                className="border-b w-full"
                                                            >
                                                                <td className="py-2">
                                                                    {
                                                                        size.number
                                                                    }
                                                                </td>

                                                                <td className="flex py-2 gap-2 justify-center items-center pr-2 pt-4">
                                                                    <button
                                                                        className="bg-btn-red text-text-ligth p-1 rounded-lg hover:bg-btn-redHover"
                                                                        onClick={() =>
                                                                            handleDeleteSizes(
                                                                                size.id
                                                                            )
                                                                        }
                                                                    >
                                                                        <TrashIcon className="h4 w-4" />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    )}

                                    {errorSize && (
                                        <div className="text-red-500">
                                            Error al cargar los datos. Por
                                            favor, inténtalo de nuevo más tarde.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex pt-8 my-8 gap-6 font-bold text-2xl">
                <h2>Productos</h2>
                <button
                    className=" text-text-ligth px-1 rounded-lg bg-btn-blue hover:bg-btn-blueHover"
                    onClick={addProduct}
                >
                    <PlusCircleIcon className="h-5 w-5 font-bold " />
                </button>
            </div>
            <div className="flex flex-col w-4/5 lg:overflow-hidden overflow-x-auto">
                <div className="sm:-mx-4 lg:-mx-4">
                    <div className="inline-block min-w-full sm:px-2 lg:px-2">
                        <div>
                            {loadingProducts ? (
                                <Loading />
                            ) : (
                                <table className="w-full text-center  font-light pb-4 mb-4">
                                    <thead>
                                        <tr className=" text-text-ligth">
                                            <th className="px-4 py-2 font-medium text-lg">
                                                Código
                                            </th>
                                            <th className="px-2 py-2 font-medium text-lg">
                                                Nombre
                                            </th>
                                            <th className="px-2 py-2 font-medium text-lg">
                                                Categoría
                                            </th>
                                            <th className="px-2 py-2 font-medium text-lg">
                                                Precio
                                            </th>
                                            <th className="px-2 py-2 font-medium text-lg">
                                                Stock
                                            </th>
                                            <th className="px-2 py-2 font-medium text-lg">
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {dataProducts?.data.length === 0 ? (
                                            <tr className="border-b text-center w-full">
                                                <td
                                                    colSpan="10"
                                                    className="px-4 py-2 text-center"
                                                >
                                                    No hay datos
                                                </td>
                                            </tr>
                                        ) : (
                                            (dataProducts?.data.map)(
                                                (product) => (
                                                    <tr
                                                        key={product.id}
                                                        className="border-b w-full"
                                                    >
                                                        <td className="px-4 py-4">
                                                            {product.code}
                                                        </td>
                                                        <td className="py-2">
                                                            {product.name}
                                                        </td>
                                                        <td className="py-2">
                                                            {
                                                                product.category
                                                                    .name
                                                            }
                                                        </td>

                                                        <td className="py-2">
                                                            $
                                                            {converterPrice(
                                                                product.price
                                                            )}
                                                        </td>
                                                        <td className=" py-2">
                                                            {product.stock}
                                                        </td>
                                                        <td className="flex py-2 gap-2 justify-center items-center pr-2 pt-4">
                                                            <button
                                                                className="bg-btn-yellow text-text-ligth p-1 rounded-lg hover:bg-btn-yellowHover"
                                                                onClick={() =>
                                                                    handleEditProduct(
                                                                        product
                                                                    )
                                                                }
                                                            >
                                                                <PencilIcon className="h4 w-4" />
                                                            </button>

                                                            <button
                                                                className="bg-btn-red text-text-ligth p-1 rounded-lg hover:bg-btn-redHover"
                                                                onClick={() =>
                                                                    handleDeleteProduct(
                                                                        product.id
                                                                    )
                                                                }
                                                            >
                                                                <TrashIcon className="h4 w-4" />
                                                            </button>

                                                            <button
                                                                className="bg-btn-blue text-text-ligth p-1 rounded-lg hover:bg-btn-blueHover"
                                                                onClick={() =>
                                                                    handleDetailsProduct(
                                                                        product
                                                                    )
                                                                }
                                                            >
                                                                <EyeIcon className="h4 w-4" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        )}
                                    </tbody>
                                </table>
                            )}

                            {errorProducts && (
                                <div className="text-red-500">
                                    Error al cargar los datos. Por favor,
                                    inténtalo de nuevo más tarde.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <FormAddProducts
                titleProduct={titleProduct}
                isOpenModalAddProduct={isOpenModalAddProduct}
                setIsOpenModalAddProduct={setIsOpenModalAddProduct}
                editDataProduct={editDataProduct}
                setEditDataProduct={setEditDataProduct}
                loadDataProducts={loadDataProducts}
                dataCategorie={dataCategorie}
                dataSize={dataSize}
            />

            <FormAddCategorie
                titleCategorie={titleCategorie}
                isOpenModalCreateCategorie={isOpenModalCreateCategorie}
                setIsOpenModalCreateCategorie={setIsOpenModalCreateCategorie}
                editDataCategorie={editDataCategorie}
                setEditDataCategorie={setEditDataCategorie}
                loadDataCategories={loadDataCategories}
            />

            <FormAddSize
                setIsOpenModalCreateSize={setIsOpenModalCreateSize}
                isOpenModalCreateSize={isOpenModalCreateSize}
                loadDataSize={loadDataSize}
            />

            <DetailsProducts
                isOpenModalDetailProduct={isOpenModalDetailProduct}
                editDataProduct={editDataProduct}
                setEditDataProduct={setEditDataProduct}
                setIsOpenModalDetailProduct={setIsOpenModalDetailProduct}
            />
        </div>
    );
};

export default IndexAdministrator;
