import { Outlet } from 'react-router-dom';
import UserContexProvider from '../context/user-contex';
import Header from '../components/header/header-index';
import Footer from '../components/footer/footer';
import WhaspBtn from '../components/WhaspBtn';

const RootLayout = () => {
    return (
        <UserContexProvider>
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow flex flex-col items-center justify-center mb-6">
                    <Outlet />
                </main>

                <WhaspBtn />
                <Footer />
            </div>
        </UserContexProvider>
    );
};

export default RootLayout;
