import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { initialFormLogin } from '../../utils/initialialization';
import { endPoints } from '../../service/endPoints/endPoints';
import { useUserContext } from '../../context/user-contex';
import { useRedirectActiveUser } from '../../hooks/useRedirectActiveUser';

const Login = () => {
    const [formData, handleChange, setFormData] = useForm(initialFormLogin);

    const { setUser, user, setToken, saveToken } = useUserContext();
    useRedirectActiveUser(user, '/private');
    const navigate = useNavigate();

    //---Form Validation---//
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const onValidate = (formData) => {
        let errors = {};
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexPassword = /^([0-9-A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]){2,20}$/;

        if (!formData.email.trim()) {
            errors.email = 'El campo "email" no debe ser vacio.';
        } else if (!regexEmail.test(formData.email)) {
            errors.email = 'El campo "email" es incorrecto.';
        }

        if (!formData.password.trim()) {
            errors.password = 'El campo "password" no debe ser vacio.';
        } else if (!regexPassword.test(formData.password)) {
            errors.password = 'El campo "password" es incorrecto.';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const err = onValidate(formData);
        setErrors(err);
        setServerError('');

        if (Object.keys(err).length === 0) {
            try {
                const response = await fetch(endPoints.login.getLogin, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error(
                        'Error en la solicitud: ' + response.statusText
                    );
                }

                const data = await response.json();

                if (data.data.user) {
                    setUser(data.data.user);
                    setToken(data.data.tokenSession);
                    saveToken(data.data.tokenSession);
                    localStorage.setItem(
                        'user',
                        JSON.stringify(data.data.user)
                    );
                    navigate('/private/');
                    setFormData(initialFormLogin);
                } else {
                    setServerError('Usuario no registrado');
                }
            } catch (error) {
                console.error(
                    'Hubo un problema con la solicitud de login:',
                    error
                );
                setServerError('Usuario no registrado');
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
        }
    }, [setToken]);

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    INICIAR SESIÓN
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                <form
                    className="space-y-6"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label className="block font-medium leading-6 text-gray-900">
                            Correo electrónico *
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:leading-6"
                            />
                            {errors.email && (
                                <p className="text-red-600">{errors.email}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label className="block font-medium leading-6 text-gray-900">
                                Contraseña *
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:leading-6"
                            />
                            {errors.password && (
                                <p className="text-red-600">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <div className=" mt-2">
                            <Link
                                to="/login/recover"
                                className="font-semibold text-yellow-800 hover:text-yellow-900"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-background-yellow px-3 py-1.5 font-semibold leading-6  shadow-sm hover:bg-yellow-600 focus-visible:bg-yellow-600"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </form>

                {serverError && (
                    <p className="text-red-600 text-center mt-4">
                        {serverError}
                    </p>
                )}

                <p className="mt-10 text-center text-gray-500 flex">
                    ¿No tienes cuenta?
                    <Link
                        to="/register"
                        className="pl-2 font-semibold leading-6 text-yellow-800 hover:text-yellow-900"
                    >
                        Registrate
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
