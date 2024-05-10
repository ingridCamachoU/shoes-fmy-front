import LayoutBase from '../../layout/layout-base';
import { Link } from 'react-router-dom';

const Recover = () => {
    return (
        <LayoutBase>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-full">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        RETABLECE TU CONTRASEÑA
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label className="block font-medium leading-6 text-gray-900">
                                Escribe tu correo electrónico para recuperar la
                                contraseña:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-background-yellow px-3 py-1.5 font-semibold leading-6  shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-yellow-600"
                            >
                                RESTABLECE CONTRASEÑA
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-gray-500 flex">
                        <Link
                            to="/login"
                            className="pl-2 font-semibold leading-6 text-yellow-800 hover:text-yellow-900"
                        >
                            Cancelar
                        </Link>
                    </p>
                </div>
            </div>
        </LayoutBase>
    );
};

export default Recover;
