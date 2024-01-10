const CardArticule = ({ img, alt, title, link }) => {
    return (
        <div className="w-70 py-4 px-2 gap-4 flex flex-col bg-white items-center">
            <picture className="w-full flex items-center justify-center">
                <img src={img} alt={alt} className="w-52" />
            </picture>

            <h5 className="flex gap-2">{title}</h5>
            <a
                to={link}
                className="font-light bg-background-black text-text-white p-1 cursor-pointer"
            >
                ver mas
            </a>
        </div>
    );
};

export default CardArticule;
