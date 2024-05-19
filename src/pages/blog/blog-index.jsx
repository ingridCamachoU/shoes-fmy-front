import Poster from '../../components/poster/poster';
import CardArticule from '../../components/card/card-articule';
import CardUser from '../../components/card/card-user';

import fashion1 from '../../assets/blog/poster-fashion-1.svg';
import fashion2 from '../../assets/blog/poster-fashion-2.svg';
import poster from '../../assets/blog/poster-blog.svg';
import photography from '../../assets/blog/photography.svg';
import shoesGreen from '../../assets/blog/shoes-green.svg';
import shoesWhite from '../../assets/blog/shoes-white.svg';
import shoesYellow from '../../assets/blog/shoes-yellow.svg';
import shoeslight from '../../assets/blog/shoes-light.svg';
import skateboard from '../../assets/blog/skateboard.svg';
import socks from '../../assets/blog/socks.svg';
import socksShoes from '../../assets/blog/socks-shoes.svg';
import userMan from '../../assets/blog/user-man.svg';
import userWoman from '../../assets/blog/user-woman.svg';
import userYoung from '../../assets/blog/user-young.svg';

const BlogIndex = () => {
    return (
        <div>
            <picture>
                <img src={poster} alt="poster blog" />
            </picture>

            <section className="flex max-w-screen-2xl md:px-16 px-2 md:my-10 my-2 md:flex-row flex-col justify-center items-center">
                <img
                    src={photography}
                    alt="hombre fotografiando"
                    className=" md:w-2/5 w-1/2 mt-6 md:mt-2"
                />
                <div className="mx-8">
                    <p>
                        ¿Qué es Lorem Ipsum? Lorem Ipsum es simplemente el texto
                        de relleno de las imprentas y archivos de texto. Lorem
                        Ipsum ha sido el texto de relleno estándar de las
                        industrias desde el año 1500, cuando un impresor (N. del
                        T. persona que se dedica a la imprenta) desconocido usó
                        una galería de textos y los mezcló de tal manera que
                        logró hacer un libro de textos especimen. No sólo
                        sobrevivió 500 años, sino que tambien ingresó como texto
                        de relleno en documentos electrónicos, quedando
                        esencialmente igual al original. Fue popularizado en los
                        60s con la creación de las hojas "Letraset", las cuales
                        contenian pasajes de Lorem Ipsum, y más recientemente
                        con software de autoedición, como por ejemplo Aldus
                        PageMaker, el cual incluye versiones de Lorem Ipsum.
                    </p>
                    <div className="flex items-center justify-end">
                        <button className="bg-background-yellow font-bold p-2 mt-4">
                            <a href="">LEER MAS...</a>
                        </button>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-screen-2xl">
                <section className="grid md:grid-cols-4 lg:gap-8 gap-6 my-6 sm:grid-cols-3 grid-cols-2">
                    <CardArticule
                        img={shoesGreen}
                        alt="Zapatos verdes"
                        title="Lorem Ipsum"
                        link=""
                    />
                    <CardArticule
                        img={shoesWhite}
                        alt="Zapatos blancos"
                        title="Lorem Ipsum"
                        link=""
                    />
                    <CardArticule
                        img={shoesYellow}
                        alt="Zapatos naranjas"
                        title="Lorem Ipsum"
                        link=""
                    />
                    <CardArticule
                        img={shoeslight}
                        alt="Zapatos negros"
                        title="Lorem Ips"
                        link=""
                    />
                </section>
            </div>

            <Poster
                img1={fashion1}
                alt1="poster fashion"
                link1=""
                img2={fashion2}
                alt2="poster fashion"
                link2=""
            />

            <section className="flex max-w-screen-2xl px-8 p-6 md:flex-row flex-col bg-gray-300 items-center md:justify-between justify-center mt-8 mx-4 gap-4 ml-2">
                <div className="bg-background-white md:w-1/4 w-11/12 flex justify-center">
                    <img src={skateboard} alt="" />
                </div>

                <p className="md:w-1/4 w-11/12 flex justify-center flex-col gap-2">
                    <span className="font-bold">¿Qué es Lorem Ipsum?</span>
                    Lorem Ipsum es simplemente el texto de relleno de las
                    imprentas y archivos de texto. Lorem Ipsum ha sido el texto
                    de relleno estándar de las industrias desde el año 1500,
                    cuando un impresor (N. del T. persona que se dedica a la
                    imprenta) desconocido usó una galería de textos y los mezcló
                    de tal manera que logró hacer un libro de textos especimen.
                    No sólo sobrevivió 500 años, sino que tambien.
                </p>

                <div className="flex md:flex-col flex-row justify-between items-center md:w-1/4 w-11/12 gap-8">
                    <img src={socks} alt="" />
                    <img src={socksShoes} alt="" />
                </div>
            </section>

            <section className="md:flex-row flex-col flex justify-between pt-4 gap-8  max-w-screen-2xl m-2">
                <CardUser
                    img={userMan}
                    title="¿Qué es Lorem Ipsum?"
                    text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500."
                />

                <CardUser
                    img={userWoman}
                    title="¿Qué es Lorem Ipsum?"
                    text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500."
                />

                <CardUser
                    img={userYoung}
                    title="¿Qué es Lorem Ipsum?"
                    text="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500."
                />
            </section>
        </div>
    );
};

export default BlogIndex;
