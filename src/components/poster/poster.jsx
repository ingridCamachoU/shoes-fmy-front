import { Link } from 'react-router-dom';

const Poster = ({ img1, alt1, link1, img2, alt2, link2 }) => {
    return (
        <section className="md:flex-row flex-col flex md:justify-between md:gap-4 gap-8 p-8 md:p-2 mx-4 justify-center items-center my-6">
            <Link to={link1} className="md:w-2/5 w-4/5">
                <img src={img1} alt={alt1} />
            </Link>

            <Link to={link2} className="md:w-2/5 w-4/5">
                <img src={img2} alt={alt2} />
            </Link>
        </section>
    );
};

export default Poster;
