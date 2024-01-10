import { Outlet } from 'react-router-dom';
import UserContexProvider from '../context/user-contex';
import Header from '../components/header/header-index';
import Footer from '../components/footer/footer';
import { DarkMode } from '../context/DarkMode';
import { useContext } from 'react';
import WhaspBtn from '../components/WhaspBtn';

const PrivateLayout = () => {
    const { darkMode } = useContext(DarkMode);
    return (
        <UserContexProvider>
            <div className={darkMode ? `body dark` : `body light`}>
                <Header />
                <Outlet />
                <WhaspBtn />
                <Footer />
            </div>
        </UserContexProvider>
    );
};

export default PrivateLayout;
