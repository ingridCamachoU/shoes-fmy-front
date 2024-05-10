import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../context/user-contex';

const PrivateLayout = () => {
    const { user } = useUserContext();
    return user ? (
        <div>
            <Outlet />
        </div>
    ) : (
        <Navigate to="/" />
    );
};

export default PrivateLayout;
