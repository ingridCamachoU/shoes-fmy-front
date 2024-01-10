import shoes from '../../assets/shoes.png';

const Card = () => {
    return (
        <div className="w-70 py-4 px-2 gap-4 flex flex-col shadow-sm hover:shadow-md border border-gray-100 bg-white items-center">
            <picture className="w-full flex items-center justify-center">
                <img src={shoes} alt="product" className="h-32 w-40" />
            </picture>
            <h3 className="font-bold">Tenis AdiFOM SST Bota</h3>
            <p className="flex justify-between">
                <span className="text-lg">$ 90.000</span>
            </p>
        </div>
    );
};

export default Card;
