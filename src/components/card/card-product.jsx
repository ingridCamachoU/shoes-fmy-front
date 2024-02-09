import { HeartIcon } from '@heroicons/react/24/outline';
import { converterPrice } from '../../utils/converter';

const Card = ({ images, name, price }) => {
    return (
        <div className="w-70 py-2 px-2 flex flex-col hover:shadow-md bg-white ">
            <picture className="w-full flex items-center justify-center relative">
                <img
                    src={images}
                    alt="product"
                    className="shadow-md shadow-gray-200"
                />
                <span className="absolute top-5 right-5">
                    <HeartIcon className="h-5 w-5 text-orange-300" />
                </span>
            </picture>
            <h3 className="text-lg pt-2"> {name}</h3>
            <p className="flex justify-between">
                <span className="text-lg font-bold">
                    $ {converterPrice(price)}
                </span>
            </p>
        </div>
    );
};

export default Card;
