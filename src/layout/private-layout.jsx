import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../context/user-contex';

const PrivateLayout = () => {
    const { user } = useUserContext();
    return user ? (
        <div className="flex min-h-full flex-col justify-center px-8 py-8 w-full">
            <Outlet />
        </div>
    ) : (
        <Navigate to="/" />
    );
};

export default PrivateLayout;
