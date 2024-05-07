import ItemPoster from './ItemPoster';
import carr from '../../../assets/iconPage/carr.svg';
import customerSupport from '../../../assets/iconPage/customerSupport.svg';
import security from '../../../assets/iconPage/security.svg';
import warranty from '../../../assets/iconPage/warranty.svg';

let posts = [
    { name: 'Envíos Nacionales', link: [carr] },
    { name: 'Atención al cliente', link: [customerSupport] },
    { name: 'Productos con garantía', link: [warranty] },
    { name: 'Compra segura', link: [security] },
];

const CardPoster = () => {
    return (
        <div className="flex w-full sm:flex-row flex-col">
            {posts.map((post) => (
                <div className="flex w-full" key={post.name}>
                    <ItemPoster
                        imgUrl={post.link}
                        name={post.name}
                        title={post.name}
                    />
                </div>
            ))}
        </div>
    );
};

export default CardPoster;
