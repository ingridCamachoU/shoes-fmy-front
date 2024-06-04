import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user-contex';
import {
    ArrowRightStartOnRectangleIcon,
    UserCircleIcon,
    EnvelopeIcon,
    PhoneIcon,
    HomeIcon,
    PencilIcon,
    CommandLineIcon,
} from '@heroicons/react/24/outline';
import { endPoints } from '../../service/endPoints/endPoints';
import { useForm } from '../../hooks/useForm';
import { alert } from '../../utils/alerts';

const User = () => {
    const { user, setUser, setToken, token } = useUserContext();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, handleChange, setFormData] = useForm(user);

    const validation = () => {
        if (user && user.role === 'administrador') {
            return (
                <Link
                    to="products"
                    className="mt-4 text-blue-500 hover:underline"
                >
                    Gestionar Productos
                </Link>
            );
        }
        return null;
    };

    const handleLogout = async () => {
        try {
            setUser(false);
            setToken(false);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/login');
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const onValidate = (editedUser) => {
        let errors = {};
        let regexName = /^([0-9-A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]){2,20}$/;

        if (!editedUser.name.trim()) {
            errors.name = 'El campo "Nombre" no debe ser vacio.';
        } else if (!regexName.test(editedUser.name)) {
            errors.name = 'El campo "Nombre" es incorrecto.';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const err = onValidate(formData);
        setErrors(err);

        if (Object.keys(err).length === 0) {
            try {
                const copyData = {
                    cc: formData?.cc || '',
                    name: formData?.name || '',
                    phone: formData?.phone || '',
                    email: formData?.email || '',
                    address: formData?.address || '',
                };

                const headers = {
                    'Content-Type': 'application/json',
                };
                if (token) {
                    headers['Authorization'] = `Bearer ${token}`;
                }

                const response = await fetch(
                    endPoints.users.updateUser(user?.id),
                    {
                        method: 'PUT',
                        headers: headers,
                        body: JSON.stringify(copyData),
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        'Error en la solicitud: ' + response.statusText
                    );
                }

                const data = await response.json();

                setUser(data.data);
                localStorage.setItem('user', JSON.stringify(data.data));
                setIsEditing(false);
                alert('Usuario editado con éxito', 'success');
            } catch (error) {
                console.error('Hubo un problema con la solicitud', error);
            }
        }
    };

    const orders = user.orders || [];

    return (
        <div className="flex flex-col items-center justify-center py-8">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
                <div className="flex justify-end">
                    <button
                        onClick={handleLogout}
                        className="flex items-center text-red-600 hover:text-red-900"
                    >
                        <ArrowRightStartOnRectangleIcon className="h-6 w-6 mr-2" />{' '}
                        Salir
                    </button>
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-16">MI CUENTA</h1>
                </div>
                <div className="mt-6">
                    {isEditing ? (
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center mb-2">
                                <UserCircleIcon className="h-6 w-6 mr-2" />
                                <input
                                    type="text"
                                    name="cc"
                                    value={formData.cc}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            </div>
                            {errors.cc && (
                                <p className="text-red-600 mb-2 pl-6">
                                    {errors.cc}
                                </p>
                            )}
                            <div className="flex items-center mb-2">
                                <UserCircleIcon className="h-6 w-6 mr-2" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            </div>
                            {errors.name && (
                                <p className="text-red-600 mb-2 pl-6">
                                    {errors.name}
                                </p>
                            )}
                            <div className="flex items-center mb-2">
                                <EnvelopeIcon className="h-6 w-6 mr-2" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-600 mb-2 pl-6">
                                    {errors.email}
                                </p>
                            )}
                            <div className="flex items-center mb-2">
                                <PhoneIcon className="h-6 w-6 mr-2" />
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            </div>
                            {errors.phone && (
                                <p className="text-red-600 mb-2 pl-6">
                                    {errors.phone}
                                </p>
                            )}
                            <div className="flex items-center mb-2">
                                <HomeIcon className="h-6 w-6 mr-2" />
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                />
                            </div>
                            {errors.address && (
                                <p className="text-red-600 mb-2 pl-6">
                                    {errors.address}
                                </p>
                            )}
                            <div className="flex justify-end mt-4 gap-4">
                                <button
                                    onClick={handleEditToggle}
                                    className="flex items-center mr-4 hover:text-white hover:bg-red-500 p-1 rounded border border-red-600 text-red-600 px-2"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="flex items-center mr-4 hover:text-white hover:bg-green-500 p-1 rounded border border-green-600 text-green-600 px-2"
                                >
                                    Guardar
                                </button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <p className="flex items-center mb-2 text-lg text-gray-800">
                                <CommandLineIcon className="h-6 w-6 mr-2" /> CC:{' '}
                                {user.cc}
                            </p>
                            <p className="flex items-center mb-2 text-lg text-gray-800">
                                <UserCircleIcon className="h-6 w-6 mr-2" />{' '}
                                Nombre: {user.name}
                            </p>
                            <p className="flex items-center mb-2 text-lg text-gray-800">
                                <EnvelopeIcon className="h-6 w-6 mr-2" />{' '}
                                Correo: {user.email}
                            </p>
                            <p className="flex items-center mb-2 text-lg text-gray-800">
                                <PhoneIcon className="h-6 w-6 mr-2" /> Teléfono:{' '}
                                {user.phone}
                            </p>
                            <p className="flex items-center mb-2 text-lg text-gray-800">
                                <HomeIcon className="h-6 w-6 mr-2" /> Dirección:{' '}
                                {user.address}
                            </p>
                            <div className="flex justify-end mt-8">
                                <button
                                    onClick={handleEditToggle}
                                    className="flex items-center font-semibold hover:underline"
                                >
                                    <PencilIcon className="h-5 w-5 mr-2 " />{' '}
                                    Editar Perfil
                                </button>
                            </div>
                        </>
                    )}
                </div>
                {validation()}
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold mb-4">Mis Pedidos</h2>
                    {orders.length > 0 ? (
                        <ul className="space-y-4">
                            {orders.map((order) => (
                                <li
                                    key={order.id}
                                    className="border p-4 rounded-lg shadow-sm"
                                >
                                    <p className="text-lg font-semibold">
                                        Pedido #{order.id}
                                    </p>
                                    <p>Fecha: {order.date}</p>
                                    <p>Total: ${order.total}</p>
                                    <Link
                                        to={`/order/${order.id}`}
                                        className="text-blue-500 hover:underline mt-2 block"
                                    >
                                        Ver Detalles
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center mt-6">
                            <p className="text-lg text-gray-500">
                                Aún no has hecho ningún pedido.
                            </p>
                            <Link
                                to="/shopping"
                                className="mt-4 inline-block bg-background-yellow py-2 px-4 rounded-lg hover:bg-yellow-600 "
                            >
                                SEGUIR COMPRANDO
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default User;
