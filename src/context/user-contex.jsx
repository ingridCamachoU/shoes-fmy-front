import { createContext, useContext, useEffect, useState } from 'react';
import { endPoints } from '../service/endPoints/endPoints';
import { useFetch } from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('shopping')) || []
    );
    const [total, setTotal] = useState(
        JSON.parse(localStorage.getItem('total')) || 0
    );
    const [countProducts, setCountProducts] = useState(
        JSON.parse(localStorage.getItem('count')) || 0
    );

    //--user--//
    const [user, setUser] = useState(false);

    // search
    const [search, setSearch] = useState('');
    const [urlProduct, setUrlProduct] = useState(
        endPoints.products.getProducts
    );

    //--- Load Data Product---//
    const {
        data: dataProduct,
        loadingData: loadDataProduct,
        error,
        loading,
    } = useFetch(urlProduct);

    const data = useLocation();

    const url = () => {
        if (search !== '') {
            setUrlProduct(endPoints.products.getSearchProducts(search));
        } else {
            setUrlProduct(endPoints.products.getProducts);
        }
    };

    useEffect(() => {
        url();
        if (data.pathname !== '/') {
            setUrlProduct(endPoints.products.getProducts);
            setSearch('');
        }
        loadDataProduct();
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return unsuscribe;
    }, [urlProduct, search, data.pathname]);

    // Save localStorage
    const saveLocal = () => {
        localStorage.setItem('shopping', JSON.stringify(cart));
    };

    const countLocal = () => {
        localStorage.setItem('count', JSON.stringify(countProducts));
    };

    const totaltLocal = () => {
        localStorage.setItem('total', JSON.stringify(total));
    };

    saveLocal();
    countLocal();
    totaltLocal();

    // add Porduct shopping cart
    const onAddProduct = (product) => {
        const price = parseInt(product.price);

        setTotal(total + price);
        setCountProducts(countProducts + 1);

        const itemInCart = cart.find((element) => element.id === product.id);

        if (itemInCart) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...product, quantity: itemInCart.quantity + 1 }
                        : item
                )
            );
            setCountProducts(countProducts + 1);
            setTotal(total + price);
        } else {
            setCart((prevState) => [
                ...prevState,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    };

    // Reduce products from cart
    const decrase = (product) => {
        const productrepeat = cart.find((element) => element.id === product.id);
        const price = parseInt(product.price);

        setCountProducts(countProducts - 1);
        setTotal(total - price);
        setCart(
            cart.map((item) =>
                item.id === product.id
                    ? { ...product, quantity: productrepeat.quantity - 1 }
                    : item
            )
        );
    };

    // Remove products from cart
    const deleteProduct = (product) => {
        const foundId = cart.find((element) => element.id === product.id);

        const newCart = cart.filter((element) => {
            return element !== foundId;
        });

        const price = parseInt(product.price);
        setCountProducts(countProducts - product.quantity);
        setTotal(total - price * product.quantity);
        setCart(newCart);
    };

    return (
        <UserContext.Provider
            value={{
                cart,
                setCart,
                onAddProduct,
                decrase,
                deleteProduct,
                countProducts,
                total,
                setCountProducts,
                setTotal,
                user,

                dataProduct,
                setUrlProduct,
                urlProduct,
                search,
                setSearch,
                loadDataProduct,
                error,
                loading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);
