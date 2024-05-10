import { Link } from 'react-router-dom';
import LayoutBase from '../../layout/layout-base';

const Register = () => {
    return (
        <LayoutBase>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-full">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        REGISTRO
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label className="block font-medium leading-6 text-gray-900">
                                Nombre *
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block font-medium leading-6 text-gray-900">
                                Apellidos *
                            </label>
                            <div className="mt-2">
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    required
                                    className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:leading-6"
                                />
                            </div>
                        </div>

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
                                    className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="user"
                                className="block font-medium leading-6 text-gray-900"
                            >
                                Tipo de usuario *
                            </label>
                            <div className="mt-2">
                                <select
                                    id="user"
                                    name="user"
                                    required
                                    defaultValue="cliente"
                                    className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:leading-6"
                                >
                                    <option value="administrador">
                                        Administrador
                                    </option>
                                    <option value="cliente">Cliente</option>

                                    {/* Agrega más opciones según sea necesario */}
                                </select>
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
                                    className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-background-yellow px-3 py-1.5 font-semibold leading-6  shadow-sm hover:bg-yellow-600"
                            >
                                Iciciar sesión
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-gray-500">
                        ¿Ya tienes cuenta?
                        <Link
                            to="/login"
                            className="pl-2 font-semibold leading-6 text-yellow-800 hover:text-yellow-900"
                        >
                            Iniciar sesión
                        </Link>
                    </p>
                </div>
            </div>
        </LayoutBase>
    );
};

export default Register;
