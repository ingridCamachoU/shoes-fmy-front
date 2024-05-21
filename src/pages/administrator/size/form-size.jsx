import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { initialFormSize } from '../../../utils/initialialization';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { endPoints } from '../../../service/endPoints/endPoints';
import { helpAxios } from '../../../service/helpAxios';
import { useUserContext } from '../../../context/user-contex';

const FormAddSize = ({
    setIsOpenModalCreateSize,
    isOpenModalCreateSize,
    loadDataSize,
}) => {
    const [formData, handleChange, setFormData] = useForm(initialFormSize);
    const { token } = useUserContext();

    //---Form Validation---//
    const [errors, setErrors] = useState({});
    const onValidate = (formData) => {
        let errors = {};
        let regexNumber = /^[0-9]+$/;

        if (!formData.number.trim()) {
            errors.number = 'El campo "Numero" no debe ser vacio.';
        } else if (!regexNumber.test(formData.number)) {
            errors.number = 'El campo "Numero" es incorrecto.';
        }

        return errors;
    };

    const err = onValidate(formData);

    const closeModalReset = () => {
        setErrors({});
        setIsOpenModalCreateSize(false);
        setFormData(initialFormSize);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(err);

        if (Object.keys(err).length === 0) {
            if (formData.number !== '') {
                const config = {
                    url: endPoints.sizes.getSize,
                    method: 'POST',
                    body: formData,
                    title: 'Talla Agregada',
                    icon: 'success',
                    token: token,
                    loadData: loadDataSize,
                };
                helpAxios(config);
                setFormData(initialFormSize);
                setIsOpenModalCreateSize(false);
                setErrors('');
            }
        } else {
            setErrors(err);
        }
        setFormData(initialFormSize);
    };

    const handleModalClick = (e) => e.stopPropagation();

    return (
        <div
            className={`${
                isOpenModalCreateSize
                    ? 'flex flex-col top-0 items-center justify-center flex-wrap z-40 w-full min-h-screen overflow-auto fixed '
                    : 'hidden'
            }`}
            onClick={closeModalReset}
        >
            <form
                className={`${
                    isOpenModalCreateSize &&
                    ' shadow-xl lg:p-4 rounded-lg flex absolute flex-col lg:w-[400px] flex-wrap md:w-4/6 sm:w-4/6 w-10/12 p-4  top-16 bg-white'
                }`}
                onClick={handleModalClick}
                onSubmit={handleSubmit}
            >
                <div className="flex justify-between mb-6 flex-wrap">
                    <h1 className="text-text-black text-2xl ml-2">
                        Crear talla
                    </h1>
                    <span onClick={closeModalReset}>
                        <XMarkIcon className="h6 w-6 text-text-gray cursor-pointer" />
                    </span>
                </div>

                <div className="text-text-gray flex mb-4 gap-6 justify-center lg:flex-row flex-col w-full">
                    <div className="flex-col flex w-full">
                        <label>Numero</label>
                        <input
                            type="number"
                            required
                            className="border border-border-gray rounded-lg p-1"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                        />
                        {errors.number && (
                            <p className="text-text-red">{errors.number}</p>
                        )}
                    </div>
                </div>

                <div className="text-text-gray flex mb-4 gap-6 justify-end w-full">
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

export default FormAddSize;
