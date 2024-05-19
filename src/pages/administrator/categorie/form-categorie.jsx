import { useEffect, useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { initialFormCategorie } from '../../../utils/initialialization';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { endPoints } from '../../../service/endPoints/endPoints';
import { helpAxios } from '../../../service/helpAxios';
import { useUserContext } from '../../../context/user-contex';

const FormAddCategorie = ({
    titleCategorie,
    isOpenModalCreateCategorie,
    setIsOpenModalCreateCategorie,
    editDataCategorie,
    setEditDataCategorie,
    loadDataCategories,
}) => {
    const [formData, handleChange, setFormData] = useForm(initialFormCategorie);

    const { token } = useUserContext();

    //---Form Validation---//
    const [errors, setErrors] = useState({});
    const onValidate = (formData) => {
        let errors = {};
        let regexName = /^([0-9-A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]){2,20}$/;

        if (!formData.name.trim()) {
            errors.name = 'El campo "Nombre" no debe ser vacio.';
        } else if (!regexName.test(formData.name)) {
            errors.name = 'El campo "Nombre" es incorrecto.';
        }

        return errors;
    };

    const err = onValidate(formData);

    const closeModalReset = () => {
        setErrors({});
        setEditDataCategorie(null);
        setIsOpenModalCreateCategorie(false);
        setFormData(initialFormCategorie);
    };

    useEffect(() => {
        if (editDataCategorie !== null) {
            const copyData = {
                name: editDataCategorie?.name,
            };
            setFormData(copyData);
        } else {
            setFormData(initialFormCategorie);
        }
    }, [editDataCategorie]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(err);
        if (Object.keys(err).length === 0) {
            if (formData.name !== '') {
                if (editDataCategorie !== null) {
                    const config = {
                        url: endPoints.categories.updateCategories(
                            editDataCategorie?.id
                        ),
                        method: 'PUT',
                        body: formData,
                        title: 'Categoria editada con éxito',
                        icon: 'success',
                        token: token,
                        loadData: loadDataCategories,
                    };
                    helpAxios(config);
                    setFormData(initialFormCategorie);
                    setIsOpenModalCreateCategorie(false);
                    setErrors('');
                } else {
                    const config = {
                        url: endPoints.categories.getCategories,
                        method: 'POST',
                        body: formData,
                        title: 'Categoria agregada',
                        icon: 'success',
                        token: token,
                        loadData: loadDataCategories,
                    };
                    helpAxios(config);
                    setFormData(initialFormCategorie);
                    setIsOpenModalCreateCategorie(false);
                }
            }
        } else {
            setErrors(err);
        }
    };

    const handleModalClick = (e) => e.stopPropagation();

    return (
        <div
            className={`${
                isOpenModalCreateCategorie
                    ? 'flex flex-col top-0 items-center justify-center flex-wrap z-40 w-full min-h-screen overflow-auto fixed '
                    : 'hidden'
            }`}
            onClick={closeModalReset}
        >
            <form
                className={`${
                    isOpenModalCreateCategorie &&
                    ' shadow-xl lg:p-4 rounded-lg flex absolute flex-col lg:w-[400px] flex-wrap md:w-4/6 sm:w-4/6 w-10/12 p-4  top-16 bg-white'
                }`}
                onClick={handleModalClick}
                onSubmit={handleSubmit}
            >
                <div className="flex justify-between mb-6 flex-wrap">
                    <h1 className="text-2xl ml-2">{titleCategorie}</h1>
                    <span onClick={closeModalReset}>
                        <XMarkIcon className="h6 w-6 cursor-pointer" />
                    </span>
                </div>

                <div className="flex mb-4 gap-6 justify-center lg:flex-row flex-col w-full">
                    <div className="flex-col flex w-full">
                        <label>Nombre</label>
                        <input
                            type="text"
                            required
                            className="border rounded-lg p-1"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && (
                            <p className="text-text-red">{errors.name}</p>
                        )}
                    </div>
                </div>

                <div className=" flex mb-4 gap-6 justify-end w-full">
                    <input
                        type="reset"
                        value="Cancelar"
                        onClick={closeModalReset}
                        className="rounded-lg bg-btn-red p-2  cursor-pointer hover:bg-btn-redHover"
                    />
                    <input
                        type="submit"
                        value="Guardar"
                        className="rounded-lg bg-btn-style p-2  cursor-pointer hover:bg-btn-styleHover"
                    />
                </div>
            </form>
        </div>
    );
};

export default FormAddCategorie;
