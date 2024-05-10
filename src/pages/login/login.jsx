import { useState } from 'react';
import LayoutBase from '../../layout/layout-base';
import { Link } from 'react-router-dom';
import { login } from '../../config/firebase';
import { useUserContext } from '../../context/user-contex';
import { useRedirectActiveUser } from '../../hooks/useRedirectActiveUser';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user } = useUserContext();
    useRedirectActiveUser(user, '/private');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('clikc');
        try {
            const credentialUser = await login({ email, password });
            console.log(credentialUser);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <LayoutBase>
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
                                    value={email}
                                    onChange={handleEmail}
                                    className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:leading-6"
                                />
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
                                    value={password}
                                    onChange={handlePassword}
                                    className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:leading-6"
                                />
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
                                className="flex w-full justify-center rounded-md bg-background-yellow px-3 py-1.5 font-semibold leading-6  shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-yellow-600"
                            >
                                Iniciar sesión
                            </button>
                        </div>
                    </form>

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
        </LayoutBase>
    );
};

export default Login;
