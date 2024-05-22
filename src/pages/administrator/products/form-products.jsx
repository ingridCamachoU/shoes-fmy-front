import { useEffect, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { initialFormProduct } from '../../../utils/initialialization';
import { TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { endPoints } from '../../../service/endPoints/endPoints';
import { helpAxios } from '../../../service/helpAxios';
import { useUserContext } from '../../../context/user-contex';

const FormAddProducts = ({
    titleProduct,
    isOpenModalAddProduct,
    setIsOpenModalAddProduct,
    editDataProduct,
    setEditDataProduct,
    loadDataProducts,
    dataCategorie,
    dataSize,
}) => {
    const [formData, handleChange, setFormData] = useForm(initialFormProduct);
    const [selectedSizes, setSelectedSizes] = useState([]);

    const { token } = useUserContext();

    //---Form Validation---//
    const [errors, setErrors] = useState({});
    const onValidate = (formData) => {
        let errors = {};
        let regexCode = /^([0-9-A-Za-zÑñÁáÉéÍíÓóÚúÜüs]){5,20}$/;
        let regexName = /^([0-9-A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]){5,20}$/;
        let regexDescription = /^.{1,60}$/;
        let regexPrice = /^[0-9]+$/;
        let regexStock = /^[0-9]+$/;

        if (!formData.code.trim()) {
            errors.code = 'El campo "Código" no debe ser vacio.';
        } else if (!regexCode.test(formData.code)) {
            errors.code =
                'El campo "Código" es incorrecto, no puede tener espacios en blanco y debe tener más de 5 caracteres';
        }

        if (!formData.name.trim()) {
            errors.name = 'El campo "Nombre" no debe ser vacio.';
        } else if (!regexName.test(formData.name)) {
            errors.name =
                'El campo "Nombre" es incorrecto debe tener más  de 5 caracteres.';
        }

        if (!formData.description.trim()) {
            errors.description = 'El campo "Descripción" no debe ser vacio.';
        } else if (!regexDescription.test(formData.description)) {
            errors.description =
                'El campo "Descripción" debe tener de 5 hasta  50 caracteres.';
        }

        if (!regexPrice.test(formData.price)) {
            errors.price = 'El campo "Precio" no debe estar vacio.';
        }

        if (!regexStock.test(formData.stock)) {
            errors.stock = 'El campo "Stock" no debe estar vacio.';
        }
        return errors;
    };

    useEffect(() => {
        if (editDataProduct !== null) {
            const copyData = {
                code: editDataProduct?.code || '',
                name: editDataProduct?.name || '',
                description: editDataProduct?.description || '',
                price: editDataProduct?.price || '',
                stock: editDataProduct?.stock || '',
                color: editDataProduct?.color || '',
                images: editDataProduct?.images || '',
                gender: editDataProduct?.gender || '',
                category: editDataProduct?.category?.id || '',
            };
            setFormData(copyData);
            setSelectedSizes(editDataProduct?.sizes || []);
        } else {
            setFormData(initialFormProduct);
            setSelectedSizes([]);
        }
    }, [editDataProduct, setFormData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = onValidate(formData);
        setErrors(err);
        if (Object.keys(err).length === 0) {
            if (formData.code && formData.name && formData.price) {
                const validSizes = getValidSizes();
                const formDataWithSizes = {
                    ...formData,
                    sizes: [
                        ...validSizes.map((size) => ({
                            size_id: size?.size_id || size?.id,
                            amount:
                                size?.amount || size?.sizes_products?.amount,
                        })),
                    ],
                };
                const config = {
                    url: editDataProduct
                        ? endPoints.products.updateProduct(editDataProduct.id)
                        : endPoints.products.getProducts,
                    method: editDataProduct ? 'PUT' : 'POST',
                    body: formDataWithSizes,
                    title: editDataProduct
                        ? 'Producto editado con éxito'
                        : 'Producto agregado',
                    icon: 'success',
                    token: token,
                    loadData: loadDataProducts,
                };
                helpAxios(config);
                setFormData(initialFormProduct);
                setIsOpenModalAddProduct(false);
                setErrors({});
            }
        } else {
            setErrors(err);
        }
    };

    const handleSizeChange = (index, field, value) => {
        const newSizes = [...selectedSizes];
        newSizes[index] = { ...newSizes[index], [field]: value };
        setSelectedSizes(newSizes);
    };

    const addNewSizeField = () => {
        setSelectedSizes([...selectedSizes, { size_id: '', amount: '' }]);
    };

    const removeSizeField = (index) => {
        const newSizes = selectedSizes.filter((_, i) => i !== index);
        setSelectedSizes(newSizes);
    };

    const getValidSizes = () => {
        return selectedSizes.filter(
            (size) =>
                (size.size_id && size.amount) ||
                (size.id && size.sizes_products.amount)
        );
    };

    const addImage = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: [...formData[name], value],
        });
    };

    const closeModalReset = () => {
        setErrors({});
        setEditDataProduct(null);
        setIsOpenModalAddProduct(false);
        setFormData(initialFormProduct);
        setSelectedSizes([]);
    };

    const handleModalClick = (e) => e.stopPropagation();

    const availableSizes = dataSize.data || [];

    const idsSizeSelectedSizes = selectedSizes.map((item) => item.id);

    const arrayFiltrado = availableSizes.filter(
        (item) => !idsSizeSelectedSizes.includes(item.id)
    );
    return (
        <div
            className={`${
                isOpenModalAddProduct
                    ? 'flex flex-col top-0 items-center justify-center flex-wrap z-40 w-full min-h-screen overflow-auto fixed '
                    : 'hidden'
            }`}
            onClick={closeModalReset}
        >
            <form
                className={`${
                    isOpenModalAddProduct &&
                    ' shadow-xl lg:p-6 rounded-lg flex absolute flex-col lg:w-[600px] flex-wrap md:w-4/6 sm:w-4/6 w-10/12 p-4 top-16 bg-white'
                }`}
                onClick={handleModalClick}
                onSubmit={handleSubmit}
            >
                <div className="flex justify-between mb-6 flex-wrap">
                    <h1 className="text-2xl ml-2">{titleProduct}</h1>
                    <span onClick={closeModalReset}>
                        <XMarkIcon className="h6 w-6 cursor-pointer" />
                    </span>
                </div>

                <div className=" flex mb-4 gap-6 justify-center md:flex-row flex-col w-full">
                    <div className="flex-col flex md:w-1/2 w-11/12">
                        <label>Código</label>
                        <input
                            type="text"
                            required
                            className="border rounded-lg p-1 w-full"
                            name="code"
                            value={formData.code}
                            onChange={handleChange}
                        />
                        {errors.code && (
                            <p className="text-text-red">{errors.code}</p>
                        )}
                    </div>

                    <div className="flex-col flex md:w-1/2 w-11/12">
                        <label>Nombre</label>
                        <input
                            type="text"
                            required
                            className="border rounded-lg p-1 w-full"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <p className="text-text-red">{errors.name}</p>
                        )}
                    </div>
                </div>

                <div className=" flex mb-4 gap-6 justify-center md:flex-row flex-col w-full">
                    <div className="flex-col flex md:w-1/2 w-11/12">
                        <label>Precio</label>
                        <input
                            type="number"
                            required
                            className="border rounded-lg p-1 w-full"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                        {errors.price && (
                            <p className="text-text-red">{errors.price}</p>
                        )}
                    </div>

                    <div className="flex-col flex md:w-1/2 w-11/12">
                        <label>Stock</label>
                        <input
                            type="number"
                            required
                            className="border rounded-lg p-1 w-full"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                        />
                        {errors.stock && (
                            <p className="text-text-red">{errors.stock}</p>
                        )}
                    </div>
                </div>

                <div className=" flex mb-4 gap-6 justify-center md:flex-row flex-col w-full">
                    <div className="flex-col flex md:w-1/2 w-11/12">
                        <label>Género</label>
                        <select
                            className="border rounded-lg mr-4 p-1 w-full"
                            name="gender"
                            onChange={handleChange}
                            value={formData.gender}
                        >
                            <option value=""></option>
                            <option value="Femenino">Femenino</option>
                            <option value="Masculino">Masculino</option>
                        </select>
                    </div>

                    <div className="flex-col flex md:w-1/2 w-11/12">
                        <label>Color</label>
                        <select
                            className="border rounded-lg mr-4 p-1 w-full"
                            name="color"
                            onChange={handleChange}
                            value={formData.color}
                        >
                            <option value=""></option>
                            <option value="blanco">Blanco</option>
                            <option value="negro">Negro</option>
                            <option value="beige">Beige</option>
                            <option value="rojo">Rojo</option>
                            <option value="azul">Azul</option>
                            <option value="verde">Verde</option>
                            <option value="camel">Camel</option>
                        </select>
                    </div>
                </div>

                <div className="flex mb-4 gap-6 justify-center md:flex-row flex-col w-full">
                    <div className="flex-col flex md:w-1/2 w-11/12">
                        <label>Categoria</label>
                        <select
                            className="border rounded-lg mr-4 p-1 w-full"
                            name="category"
                            onChange={handleChange}
                            value={formData.category}
                        >
                            <option></option>
                            {dataCategorie.data?.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category?.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* <div className="flex-col flex md:w-1/2 w-11/12">
                        <label>Tallas</label>
                        {selectedSizes.map((selectedSize, index) => (
                            <div key={index} className="flex mb-2 gap-2">
                                <select
                                    className="border rounded-lg mr-4 p-1 w-1/2  cursor-pointer"
                                    value={selectedSize.size_id || ''}
                                    onChange={(e) =>
                                        handleSizeChange(
                                            index,
                                            'size_id',
                                            e.target.value
                                        )
                                    }
                                >
                                    <option
                                        className="flex text-center"
                                        value={selectedSize?.number}
                                    >
                                        {selectedSize?.number
                                            ? selectedSize?.number
                                            : 'Talla'}
                                    </option>
                                    {dataSize.data?.map((availableSize) => (
                                        <option
                                            key={availableSize.id}
                                            value={availableSize.id}
                                            className="flex justify-center text-center"
                                        >
                                            {availableSize.number}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="number"
                                    className="border rounded-lg p-1 w-1/2 flex justify-center text-center"
                                    value={
                                        selectedSize?.sizes_products
                                            ? selectedSize?.sizes_products
                                                  ?.amount
                                            : selectedSize.amount
                                    }
                                    onChange={(e) =>
                                        handleSizeChange(
                                            index,
                                            'amount',
                                            e.target.value
                                        )
                                    }
                                    placeholder="Cantidad"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeSizeField(index)}
                                    className="text-red-500 cursor-pointer"
                                >
                                    <TrashIcon className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addNewSizeField}
                            className="text-blue-500 hover:text-blue-800 cursor-pointer hover:text-decoration hover:underline-offset-4 hover:underline"
                        >
                            Agregar Talla
                        </button>
                    </div> */}

                    <div className="flex-col flex md:w-1/2 w-11/12">
                        <label>Tallas</label>
                        {selectedSizes.map((selectedSize, index) => (
                            <div key={index} className="flex mb-2 gap-2">
                                <select
                                    className="border rounded-lg mr-4 p-1 w-1/2 cursor-pointer"
                                    value={selectedSize.size_id || ''}
                                    onChange={(e) =>
                                        handleSizeChange(
                                            index,
                                            'size_id',
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">
                                        {selectedSize?.number
                                            ? selectedSize?.number
                                            : 'Talla'}
                                    </option>
                                    {arrayFiltrado.map((availableSize) => (
                                        <option
                                            key={availableSize.id}
                                            value={availableSize.id}
                                            disabled={
                                                selectedSizes.some(
                                                    (size) =>
                                                        size.size_id ===
                                                        availableSize.id
                                                ) ||
                                                selectedSize.size_id ===
                                                    availableSize.id
                                            }
                                        >
                                            {availableSize.number}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="number"
                                    className="border rounded-lg p-1 w-1/2 flex justify-center text-center"
                                    value={
                                        selectedSize?.sizes_products
                                            ? selectedSize?.sizes_products
                                                  ?.amount
                                            : selectedSize.amount
                                    }
                                    onChange={(e) =>
                                        handleSizeChange(
                                            index,
                                            'amount',
                                            e.target.value
                                        )
                                    }
                                    placeholder="Cantidad"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeSizeField(index)}
                                    className="text-red-500 cursor-pointer"
                                >
                                    <TrashIcon className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addNewSizeField}
                            className="text-blue-500 hover:text-blue-800 cursor-pointer hover:text-decoration hover:underline-offset-4 hover:underline"
                        >
                            Agregar Talla
                        </button>
                    </div>
                </div>

                <div className="flex mb-4 gap-6 justify-center md:flex-row flex-col w-full">
                    <div className="flex-col flex md:w-1/2 w-11/12">
                        <label>Imagenes</label>
                        <input
                            type="text"
                            className="border rounded-lg p-1 w-full"
                            name="images"
                            value={formData.images}
                            onChange={addImage}
                        />
                    </div>
                    <div className="flex-col flex md:w-1/2 w-11/12">
                        <label>Descripción</label>
                        <textarea
                            className="border rounded-lg p-1 w-full"
                            name="description"
                            required
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className=" flex mb-4 gap-6 justify-end w-full">
                    <input
                        type="reset"
                        value="Cancelar"
                        onClick={closeModalReset}
                        className="rounded-lg bg-btn-red p-2 text-text-ligth cursor-pointer hover:bg-btn-redHover"
                    />
                    <input
                        type="submit"
                        value="Guardar"
                        className="rounded-lg bg-btn-style p-2 text-text-ligth cursor-pointer hover:bg-btn-styleHover"
                    />
                </div>
            </form>
        </div>
    );
};

export default FormAddProducts;
