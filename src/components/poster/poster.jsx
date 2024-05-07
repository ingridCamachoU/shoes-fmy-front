import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Poster = ({ img1, alt1, link1, img2, alt2, link2 }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <section
            className="md:flex-row flex-col flex md:justify-between md:gap-4 gap-8 p-8 md:p-2 mx-4 justify-center items-center my-6"
            onClick={toggleHome}
        >
            <Link to={link1} className="md:w-2/5 w-4/5">
                <img
                    src={img1}
                    alt={alt1}
                    className="hover:shadow-[0_02px_40px_-02px_] hover:shadow-yellow-400"
                />
            </Link>

            <Link
                to={link2}
                className="md:w-2/5 w-4/5 hover:shadow-[0_02px_40px_-02px_] hover:shadow-blue-400"
            >
                <img src={img2} alt={alt2} />
            </Link>
        </section>
    );
};

export default Poster;
