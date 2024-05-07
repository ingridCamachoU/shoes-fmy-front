import { Link, NavLink } from 'react-router-dom';
import {
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    UserIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid';
import logo from '../../assets/logo.svg';
import { useUserContext } from '../../context/user-contex';
import { endPoints } from '../../service/endPoints/endPoints';
import { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';

const Header = () => {
    const activesStyle = 'cursor-pointer underline underline-offset-8 text-lg';
    const disabledStyle = 'flex hover:underline underline-offset-8 text-lg';

    const initialSearch = {
        search: '',
    };

    const { countProducts, search, setSearch, setUrlProduct } =
        useUserContext();

    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState(initialSearch);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value === 0) {
            setSearch('');
        }
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleModalClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const open = () => {
        setOpenModal(true);
    };
    const close = () => {
        setFormData(initialSearch);
        setOpenModal(false);
    };

    const cleanSearch = () => {
        setFormData(initialSearch);
    };

    const Links = [
        { name: 'INICIO', link: '/' },
        { name: 'MUJER', link: 'mujer' },
        { name: 'HOMBRE', link: 'hombre' },
        { name: 'COMPLEMENTOS', link: 'complementos' },
        { name: 'BLOG', link: 'blog' },
    ];

    useEffect(() => {});
    return (
        <header className="flex justify-between w-full bg-background-black py-4 px-8 items-center">
            <div>
                <Link to={'/'}>
                    <img src={logo} alt="Logo FMY" className="w-40 h-12" />
                </Link>
            </div>
            <nav>
                <ul className="flex gap-4 text-text-yellow">
                    {Links.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.link}
                                className={({ isActive }) =>
                                    isActive ? activesStyle : disabledStyle
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex justify-between gap-4">
                <Link>
                    <MagnifyingGlassIcon
                        className="h-6 w-6 text-text-yellow"
                        onClick={open}
                    />
                    <div
                        onClick={close}
                        className={`${
                            openModal
                                ? 'flex flex-col top-0 left-0 items-center justify-center flex-wrap z-40 w-full min-h-screen overflow-auto fixed'
                                : 'hidden'
                        }`}
                    >
                        <form
                            className={`${
                                openModal
                                    ? 'shadow-xl lg:p-2 rounded-lg flex absolute flex-col lg:w-[450px] flex-wrap md:w-4/6 sm:w-4/6 w-10/12 p-2 top-14 right-24 bg-yellow-500'
                                    : 'hidden'
                            }`}
                            onClick={handleModalClick}
                        >
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    name="search"
                                    value={formData.search}
                                    className="lg:w-full w-8/12 px-4 border py-1 rounded-lg h-10 flex cursor-pointer text-balck "
                                    onChange={handleSearch}
                                />
                                <span
                                    className="flex items-center"
                                    onClick={cleanSearch}
                                >
                                    <XMarkIcon className="h-6 w-6 text-black font-bold hover:shadow-md" />
                                </span>
                            </div>
                        </form>
                    </div>
                </Link>
                <Link to={''}>
                    <UserIcon className="h-6 w-6 hover:text-text-blue text-text-yellow" />
                </Link>
                <Link to="shopping">
                    <p className="flex justify-center">
                        <ShoppingCartIcon className="h-6 w-6 text-text-yellow" />
                        {countProducts !== 0 && (
                            <span className="absolute text-yellow-800 font-bold bg-white rounded-3xl h-5 w-5 text-md p-1 items-center flex justify-center mt-3 text-sm border-yellow-700 border-solid border-2">
                                {countProducts}
                            </span>
                        )}
                    </p>
                </Link>
            </div>
        </header>
    );
};

export default Header;
