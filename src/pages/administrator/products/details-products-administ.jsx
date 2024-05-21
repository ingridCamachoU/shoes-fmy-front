import { XMarkIcon } from '@heroicons/react/24/solid';
import { converterPrice } from '../../../utils/converter';

const DetailsProducts = ({
    isOpenModalDetailProduct,
    editDataProduct,
    setEditDataProduct,
    setIsOpenModalDetailProduct,
}) => {
    const closeModalReset = () => {
        setIsOpenModalDetailProduct(false);
        setEditDataProduct(null);
    };

    const handleModalClick = (e) => e.stopPropagation();

    return (
        <div
            className={`${
                isOpenModalDetailProduct
                    ? 'flex flex-col top-0 items-center justify-center flex-wrap z-40 w-full min-h-screen overflow-auto fixed'
                    : 'hidden'
            }`}
            onClick={closeModalReset}
        >
            <div
                className={`${
                    isOpenModalDetailProduct &&
                    ' shadow-xl lg:p-4 rounded-lg flex absolute flex-col lg:w-[600px] flex-wrap md:w-4/6 sm:w-4/6 w-10/12 p-4  top-16 bg-white'
                } `}
                onClick={handleModalClick}
            >
                <div className="flex justify-between mb-6 flex-wrap">
                    <h1 className="text-2xl ml-2 font-bold">
                        Detalles Producto
                    </h1>
                    <span onClick={closeModalReset}>
                        <XMarkIcon className="h6 w-6 cursor-pointer" />
                    </span>
                </div>

                <div className="flex mb-4 gap-6 justify-center lg:flex-row flex-col w-full">
                    <div className="flex-col flex w-full">
                        <p>Código</p>
                        <p className="border rounded-lg py-1 px-2">
                            {editDataProduct?.code}
                        </p>
                    </div>

                    <div className="flex-col flex w-full">
                        <p>Nombre</p>
                        <p className="border rounded-lg py-1 px-2">
                            {editDataProduct?.name}
                        </p>
                    </div>
                </div>

                <div className="flex mb-4 gap-6 justify-center lg:flex-row flex-col w-full">
                    <div className=" flex-col flex w-full">
                        <p>Categoria</p>
                        <p className="border rounded-lg py-1 px-2">
                            {editDataProduct?.category.name}
                        </p>
                    </div>

                    <div className="flex-col flex w-full">
                        <p>Precio</p>
                        <p className="border border-border-gray rounded-lg py-1 px-2">
                            ${converterPrice(editDataProduct?.price)}
                        </p>
                    </div>
                </div>

                <div className="flex mb-4 gap-6 justify-center lg:flex-row flex-col w-full">
                    <div className="flex-col flex w-full">
                        <p>Genero</p>
                        <p className="border rounded-lg py-1 px-2">
                            {editDataProduct?.gender}
                        </p>
                    </div>

                    <div className="flex-col flex w-full">
                        <p>Stock</p>
                        <p className="border rounded-lg py-1 px-2">
                            {editDataProduct?.stock}
                        </p>
                    </div>
                </div>

                <div className="text-text-gray flex mb-4 gap-6 justify-center lg:flex-row flex-col w-full">
                    <div className="flex flex-col w-full">
                        <p>Modelo</p>
                        <p className="border  rounded-lg py-1 px-2">
                            {editDataProduct?.color}
                        </p>
                    </div>
                    <div className="flex flex-col w-full">
                        <p>Tallas</p>
                        <select className="border border-border-gray rounded-lg py-1 px-2">
                            {editDataProduct?.sizes.map((size) => (
                                <option key={size.id} value={size.id}>
                                    Talla: {size?.number}; Cantidad:{' '}
                                    {size?.sizes_products?.amount}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="text-text-gray flex mb-4 gap-6 justify-center lg:flex-row flex-col w-full">
                    <div className="flex flex-col w-full">
                        <p>Imagenes</p>
                        <p className="flex w-full gap-2">
                            <img
                                className="border border-border-gray p-1 rounded-lg w-[130px] h-[100px]"
                                alt={editDataProduct?.name}
                                src={editDataProduct?.images?.[0]}
                            />
                        </p>
                    </div>
                    <div className="flex-col flex w-full">
                        <p>Descripción</p>
                        <p className="border border-border-gray rounded-lg py-1 px-2">
                            {editDataProduct?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsProducts;
