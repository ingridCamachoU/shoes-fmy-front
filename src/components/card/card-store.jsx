import { MapPinIcon } from '@heroicons/react/24/solid';

const CarStore = ({ img, alt, city, address }) => {
    return (
        <div className="items-center justify-center flex flex-col">
            <img
                src={img}
                alt={alt}
                className="w-3/4 hover:shadow-[0_02px_40px_-02px_] hover:shadow-gray-500"
            />
            <p className="bg-background-black w-3/4 text-text-white p-2 my-4 flex gap-2">
                <span className="flex gap-2">
                    <MapPinIcon className="h-6 w-6" />
                    {city}
                </span>
                <span className="font-light">{address}</span>
            </p>
        </div>
    );
};

export default CarStore;
