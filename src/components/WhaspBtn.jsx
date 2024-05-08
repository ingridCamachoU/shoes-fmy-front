import whatsapp from '../assets/WhatsApp.svg';

const WhaspBtn = () => {
    return (
        <a
            className="w-14 h-14 fixed bottom-4 right-4 cursor-pointer"
            href="https://www.youtube.com/watch?v=R6MNlWagZhk"
            target="_blank"
        >
            <img src={whatsapp} alt="whatspap boton" />
        </a>
    );
};

export default WhaspBtn;
