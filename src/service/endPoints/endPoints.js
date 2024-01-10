const URL = import.meta.env.VITE_BACKEND_URL;
const VERSION = import.meta.env.VITE_BACKEND_URL_VERSION;

export const endPoints = {
    users: {
        login: `${URL}${VERSION}/users/login`,
        getUsers: `${URL}${VERSION}/users/`,
        updateUsers: (id) => `${URL}${VERSION}/users/${id}/`,
        deleteUsers: (id) => `${URL}${VERSION}/users/${id}/`,
    },
    categories: {
        getCategories: `${URL}${VERSION}/categories/`,
        updateCategories: (id) => `${URL}${VERSION}/categories/${id}/`,
        deleteCategories: (id) => `${URL}${VERSION}/categories/${id}/`,
    },
    products: {
        getProducts: `${URL}${VERSION}/products/`,
        getSearchProducts: (product) =>
            `${URL}${VERSION}/products/?search=${product}`,
        getFilterProducts: `${URL}${VERSION}/products/?exclude=true`,
        updateProduct: (id) => `${URL}${VERSION}/products/${id}/`,
        deleteProduct: (id) => `${URL}${VERSION}/products/${id}/`,
    },
    orders: {
        getOrders: `${URL}${VERSION}/orders/`,
        deleteOrders: (id) => `${URL}${VERSION}/orders/${id}/`,
    },
};
