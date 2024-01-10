const cardIcon = ({ img, alt, title }) => {
    return (
        <div className="md:w-40 w-20 flex flex-col items-center mx-8">
            <picture className="w-full flex items-center justify-center">
                <img
                    src={img}
                    alt={alt}
                    className="md:h-32 md:w-24 h-20 w-16"
                />
            </picture>
            <h3 className="font-bold">{title}</h3>
        </div>
    );
};

export default cardIcon;
