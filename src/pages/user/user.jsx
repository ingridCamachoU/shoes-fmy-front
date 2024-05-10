import React from 'react';
import { Link } from 'react-router-dom';
import LayoutBase from '../../layout/layout-base';
import { useUserContext } from '../../context/user-contex';
import { logout } from '../../config/firebase';

const User = () => {
    const { user } = useUserContext();

    const validation = () => {
        if (user && user.email === 'injuca28@hotmail.com') {
            return <Link to="products">Productos</Link>;
        }
        return null;
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <LayoutBase>
            <div className="relative h-full">
                <button onClick={handleLogout}>salir</button>
                <h1>Mi cuenta</h1>
                {validation()}
            </div>
        </LayoutBase>
    );
};

export default User;
