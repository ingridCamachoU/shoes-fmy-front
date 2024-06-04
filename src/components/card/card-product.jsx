import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { converterPrice } from '../../utils/converter';
import { useState } from 'react';
import { useUserContext } from '../../context/user-contex';

const Card = (product) => {
    const [icons, setIcons] = useState(false);
    const { onAddProduct, cart, deleteProduct } = useUserContext();

    const changeIcon = () => {
        !icons ? setIcons(true) : setIcons(false);
    };

    const addShopping = (e, product) => {
        e.preventDefault();
        changeIcon();
        onAddProduct(product);
    };

    const deleteShopping = (e) => {
        e.preventDefault();
        changeIcon();
        cart.some((item) => {
            if (item.id === product?.id) {
                deleteProduct(item);
            }
        });
    };

    return (
        <div className="w-70 py-2 px-2 flex flex-col  bg-white ">
            <picture className="w-full flex items-center justify-center cursor-pointer">
                <img
                    src={product?.images}
                    alt="product"
                    className="shadow-md shadow-gray-200 hover:scale-110 duration-500 object-cover h-64 w-64"
                />
            </picture>
            <h3 className="text-lg pt-4"> {product?.name}</h3>
            <p className="flex justify-between pr-2">
                <span className="text-lg font-bold">
                    $ {converterPrice(product?.price)}
                </span>
                <span>
                    {cart.some((item) => item.id === product?.id) ? (
                        <ShoppingBagIcon
                            className="h-5 w-5 text-text-yellow rounded hover:scale-110 duration-500 active:scale-95 cursor-pointer"
                            onClick={(e) => deleteShopping(e)}
                        />
                    ) : (
                        <ShoppingBagIcon
                            onClick={(e) => addShopping(e, product)}
                            className="h-5 w-5 hover:scale-110 duration-500  active:scale-95 cursor-pointer"
                        />
                    )}
                </span>
            </p>
        </div>
    );
};

export default Card;
