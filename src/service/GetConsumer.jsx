import { useFetch } from '../hooks/useFetch';
import { endPoints } from './endPoints/endPoints';

export const GetProduct = () => {
    const urlProduct = endPoints.products.getProducts;
    const {
        data: dataProducts,
        loading: loadingProduct,
        loadingData: loadDataProducts,
    } = useFetch(urlProduct);

    return { dataProducts, loadingProduct, loadDataProducts, urlProduct };
};

export const GetUser = () => {
    const urlUser = endPoints.users.getUsers;
    const {
        data: dataUser,
        loading: loadingUser,
        loadingData: loadDataUser,
    } = useFetch(urlUser);

    return dataUser, loadingUser, loadDataUser, urlUser;
};

export const GetCategorie = () => {
    const urlCategorie = endPoints.categories.getCategories;
    const {
        data: dataCategorie,
        loading: loadingCategorie,
        loadingData: loadDataCategorie,
    } = useFetch(urlCategorie);

    return dataCategorie, loadingCategorie, loadDataCategorie, urlCategorie;
};

export const GetOrder = () => {
    const urlOrder = endPoints.orders.getOrders;
    const {
        data: dataOrder,
        loading: loadingOrder,
        loadingData: loadDataOrder,
    } = useFetch(urlOrder);

    return dataOrder, loadingOrder, loadDataOrder, urlOrder;
};
