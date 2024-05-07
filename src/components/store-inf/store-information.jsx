import CardIcon from '../card/card-icon';

import car from '../../assets/cards/car.svg';
import quality from '../../assets/cards/quality.svg';
import map from '../../assets/cards/map.svg';
import card from '../../assets/cards/card.svg';

const StoreInformation = () => {
    return (
        <section className="grid md:grid-cols-4 lg:gap-8 gap-6 sm:grid-cols-3 grid-cols-2 justify-center items-center">
            <CardIcon img={car} alt="carro" title="Envios nacionales" />
            <CardIcon
                img={card}
                alt="tarjeta"
                title="Paga fácil y seguro nacionales"
            />
            <CardIcon img={quality} alt="Calidad" title="Calidad de producto" />
            <CardIcon img={map} alt="Mapa" title="Calidad de producto" />
        </section>
    );
};

export default StoreInformation;
