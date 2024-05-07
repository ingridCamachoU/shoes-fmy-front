import { createBrowserRouter } from 'react-router-dom';
import PrivateLayout from '../layout/private-layout';
import Home from '../pages/home/home-index';
import WomanIndex from '../pages/woman/woman-index';
import ManIndex from '../pages/man/man-index';
import BlogIndex from '../pages/blog/blog-index';
import AccesoriesIndex from '../pages/accessories/accesories-index';
import Login from '../pages/login/login';
import IndexAdministrator from '../pages/administrator/index-administrator';
import DetailProduct from '../pages/detail-product/detail-product';
import ShoppingCart from '../pages/shopping-cart/shopping-cart';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateLayout />,
        children: [
            {
                index: '/',
                element: <Home />,
            },
            {
                path: ':productId',
                element: <DetailProduct />,
            },
            {
                path: 'mujer',
                element: <WomanIndex />,
            },
            {
                path: 'mujer/:productId',
                element: <DetailProduct />,
            },
            {
                path: 'hombre',
                element: <ManIndex />,
            },
            {
                path: 'hombre/:productId',
                element: <DetailProduct />,
            },
            {
                path: 'blog',
                element: <BlogIndex />,
            },
            {
                path: 'complementos',
                element: <AccesoriesIndex />,
            },
            {
                path: 'complementos/:productId',
                element: <DetailProduct />,
            },
            {
                path: 'shopping',
                element: <ShoppingCart />,
            },
            {
                path: 'login',
                element: <Login />,
            },

            {
                path: 'administrator',
                element: <IndexAdministrator />,
            },
        ],
    },
]);
