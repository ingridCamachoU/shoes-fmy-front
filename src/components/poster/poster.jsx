import { Link } from 'react-router-dom';

const Poster = ({ img1, alt1, link1, img2, alt2, link2 }) => {
    return (
        <section className="md:flex-row flex-col flex justify-between md:gap-4 gap-8 p-8 md:p-2 mx-4">
            <Link to={link1}>
                <picture className="flex md:justify-start justify-center">
                    <img src={img1} alt={alt1} className="md:w-4/5 w-3/4" />
                </picture>
            </Link>

            <Link to={link2}>
                <picture className="flex md:justify-end justify-center">
                    <img src={img2} alt={alt2} className="md:w-4/5 w-3/4" />
                </picture>
            </Link>
        </section>
    );
};

export default Poster;
