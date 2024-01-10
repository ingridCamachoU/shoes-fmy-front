import whatsapp from '../assets/WhatsApp.svg';

const WhaspBtn = () => {
    return (
        <a
            className="w-14 h-14 fixed bottom-4 right-4 cursor-pointer"
            href="https://api.whatsapp.com/message/5ROO3OPKQPO5H1?autoload=1&app_absent=0"
            target="_blank"
        >
            <img src={whatsapp} alt="whatspap boton" />
        </a>
    );
};

export default WhaspBtn;
