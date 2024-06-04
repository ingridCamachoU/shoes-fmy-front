import { TrashIcon } from '@heroicons/react/24/solid';
import { converterPrice } from '../../utils/converter';

const CardShoppinCart = ({
    name,
    images,
    price,
    quantity,
    onAddProduct,
    decrase,
    deleteProduct,
}) => {
    const priceN = parseInt(price * quantity);

    return (
        <div className="items-center flex justify-between mt-4 ml-2 bg-white p-2 flex-wrap sm:flex-row flex-col w-full sm:gap-0 gap-4">
            <div className="flex sm:w-8/12 w-full items-center">
                <picture className="sm:w-1/5 w-1/3">
                    <img className="w-20 h-20" src={images} alt="sin imagen" />
                </picture>

                <p className="font-light sm:w-3/4 w-11/12">{name}</p>
            </div>

            <div className="flex gap-2 sm:w-4/12 w-full items-center justify-between">
                <div className="flex gap-1 bg-slate-100 border shadow-sm p-1 rounded">
                    <button
                        className="border-r  hover:bg-slate-200 cursor-pointer disabled:text-gray-500 disabled:pointer-events-none active:scale-95 px-2"
                        disabled={quantity === 1}
                        onClick={decrase}
                    >
                        -
                    </button>
                    <p>{quantity}</p>
                    <button
                        className="border-l px-2  hover:bg-slate-200 cursor-pointer active:scale-95 disabled:text-gray-500 disabled:pointer-events-none"
                        disabled={quantity >= 10}
                        onClick={onAddProduct}
                    >
                        +
                    </button>
                </div>
                <div className="flex w-4/6 justify-between px-4">
                    <p>$ {converterPrice(priceN)}</p>
                    <button onClick={deleteProduct}>
                        <TrashIcon className="h-6 w-6 hover:text-red-500" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardShoppinCart;
