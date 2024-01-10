import { createBrowserRouter } from 'react-router-dom';
import PrivateLayout from '../layout/private-layout';
import Home from '../pages/home/home-index';
import WomanIndex from '../pages/woman/woman-index';
import ManIndex from '../pages/man/man-index';
import BlogIndex from '../pages/blog/blog-index';
import AccesoriesIndex from '../pages/accessories/accesories-index';
import Login from '../pages/login/login';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PrivateLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'mujer',
                element: <WomanIndex />,
            },
            {
                path: 'hombre',
                element: <ManIndex />,
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
                path: 'login',
                element: <Login />,
            },
        ],
    },
]);
