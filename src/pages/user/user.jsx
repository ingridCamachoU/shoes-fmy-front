import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/user-contex';

const User = () => {
    const { user, setUser, setToken } = useUserContext();
    const navigate = useNavigate();

    const validation = () => {
        if (user && user.role === 'administrador') {
            return <Link to="products">Productos</Link>;
        }
        return null;
    };

    const handleLogout = async () => {
        try {
            setUser(false);
            setToken(false);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/login'); // Redirigir al login
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="relative h-full">
            <button onClick={handleLogout}>Salir</button>

            <h1 className="text-2xl	font-bold mt-4">MI CUENTA</h1>

            <p>Nombre: {user.name}</p>
            <p>Correo: {user.email}</p>
            <p>Telefono: {user.phone}</p>
            <p>Dirección: {user.address}</p>
            {validation()}
        </div>
    );
};

export default User;
