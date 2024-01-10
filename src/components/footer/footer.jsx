import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logoFooter from '../../assets/logo-footer.svg';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <footer>
            <div className="flex bg-gray-200 p-10 justify-between">
                <div>
                    <h4 className="font-bold">SUSCRÍBETE</h4>
                    <p>
                        Ingresa tu correo electrónico para recibir{' '}
                        <strong>NUESTRAS OFERTAS!</strong>
                    </p>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Dirección correo electrónico"
                        className="py-2 px-4 w-80"
                    />
                    <button className="bg-background-black p-2 text-text-white font-bold">
                        SUSCRIBIR
                    </button>
                </div>
            </div>
            <div className="flex bg-background-black text-text-white md:flex-row flex-col py-10 w-full gap-4 items-center mt-auto">
                <div className="flex flex-col items-center gap-4 w-full">
                    <picture
                        className="flex justify-center items-center cursor-pointer"
                        onClick={toggleHome}
                    >
                        <img
                            className="w-40 h-12"
                            src={logoFooter}
                            alt="logo Footer"
                        />
                    </picture>
                    <div className="flex flex-col items-center gap-2">
                        <p>Síguenos en:</p>
                        <p className="gap-4 flex items-center">
                            <a
                                href="https://www.facebook.com/profile.php?id=100063876372180"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className="h-6 w-6 hover:text-text-yellow cursor-pointer"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/radcarscucuta/"
                                target="_blank"
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="h-7 w-7 hover:text-text-yellow cursor-pointer"
                                />
                            </a>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full items-center pr-8 md:pr-0">
                    <div>
                        <h5 className="font-bold pb-4 cursor-pointer">AYUDA</h5>
                        <h5 className="font-light cursor-pointer hover:text-text-yellow">
                            Preguntas Frecuentes
                        </h5>
                        <h5 className="font-light cursor-pointer hover:text-text-yellow">
                            Información de Envios
                        </h5>
                        <h5 className="font-light cursor-pointer hover:text-text-yellow">
                            Términos y condiciones
                        </h5>
                        <h5 className="font-light cursor-pointer hover:text-text-yellow">
                            Cambios y Garantias
                        </h5>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full items-center">
                    <div>
                        <p className="font-bold pb-4">CONTÁCTANOS</p>
                        <h5 className="font-light cursor-pointer hover:text-text-yellow">
                            Whatsapp: (+57) 304-234 982
                        </h5>
                        <h5 className="font-light cursor-pointer hover:text-text-yellow">
                            Email: contacto@fmy.com.co
                        </h5>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
