import { Outlet } from 'react-router-dom';
import UserContexProvider from '../context/user-contex';
import Header from '../components/header/header-index';
import Footer from '../components/footer/footer';
import WhaspBtn from '../components/WhaspBtn';

const RootLayout = () => {
    return (
        <UserContexProvider>
            <div>
                <Header />
                <Outlet />
                <WhaspBtn />
                <Footer />
            </div>
        </UserContexProvider>
    );
};

export default RootLayout;
