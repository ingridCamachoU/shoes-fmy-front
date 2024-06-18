import notFound from '../assets/not-found.svg';

const NotFound = () => {
    return (
        <div className="max-w-screen-xl w-full flex justify-center">
            <div className="w-6/12">
                <img src={notFound} alt="Not Found" />
            </div>
        </div>
    );
};

export default NotFound;
