import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    UserIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid';
import logo from '../../assets/logo.svg';
import { useUserContext } from '../../context/user-contex';

const Header = () => {
    const { countProducts, setSearch } = useUserContext();

    const activesStyle = 'cursor-pointer underline underline-offset-8 text-lg';
    const disabledStyle = 'flex hover:underline underline-offset-8 text-lg';

    const initialSearch = {
        search: '',
    };

    const Links = [
        { name: 'INICIO', link: '/' },
        { name: 'MUJER', link: '/mujer' },
        { name: 'HOMBRE', link: '/hombre' },
        { name: 'COMPLEMENTOS', link: '/complementos' },
        { name: 'BLOG', link: '/blog' },
    ];

    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState(initialSearch);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef(null);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <header className="flex justify-between w-full bg-background-black py-4 px-8 items-center">
            <div>
                <Link to={'/'}>
                    <img src={logo} alt="Logo FMY" className="w-40 h-12" />
                </Link>
            </div>

            <nav
                ref={menuRef}
                className={`${
                    isMenuOpen
                        ? 'absolute top-16 left-0 w-full bg-background-black z-10 py-4 pl-20'
                        : 'md:block hidden'
                } md:flex`}
            >
                <ul
                    className={`flex ${
                        isMenuOpen ? 'flex-col items-start' : ''
                    } gap-4 text-text-yellow`}
                >
                    {Links.map((link) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.link}
                                onClick={closeMenu}
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
                <button className="md:hidden flex" onClick={toggleMenu}>
                    {!isMenuOpen ? (
                        <Bars3Icon className="h-6 w-6 text-text-yellow cursor-pointer hover:text-yellow-200" />
                    ) : (
                        <XMarkIcon className="h-6 w-6 text-text-yellow cursor-pointer hover:text-yellow-200" />
                    )}
                </button>
                <Link>
                    <MagnifyingGlassIcon
                        className="h-6 w-6 text-text-yellow hover:text-yellow-200"
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
                                    ? 'shadow-xl lg:p-2 rounded-lg flex absolute flex-col lg:w-[450px] flex-wrap md:w-4/6 sm:w-4/6 w-10/12 p-2 top-8 right-8 bg-yellow-500'
                                    : 'hidden'
                            }`}
                            onClick={handleModalClick}
                        >
                            <div className="flex justify-between">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    name="search"
                                    value={formData.search}
                                    className="w-full px-4 border py-1 rounded-lg h-10 flex cursor-pointer text-balck"
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
                <Link to="/login">
                    <UserIcon className="h-6 w-6 hover:text-text-blue text-text-yellow hover:text-yellow-200" />
                </Link>
                <Link to="/shopping">
                    <p className="flex justify-center">
                        <ShoppingCartIcon className="h-6 w-6 text-text-yellow hover:text-yellow-200" />
                        {countProducts !== 0 && (
                            <span className="absolute text-yellow-800 font-bold bg-white rounded-3xl h-5 w-5 text-md p-1 items-center flex justify-center mt-3 text-sm border-yellow-700 border-solid border-2 hover:shadow-yellow-200 hover:shadow-md">
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
