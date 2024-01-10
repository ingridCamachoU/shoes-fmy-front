import { Link, NavLink } from 'react-router-dom';
import {
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    UserIcon,
} from '@heroicons/react/24/solid';
import logo from '../../assets/logo.svg';

const Header = () => {
    const activesStyle = 'cursor-pointer underline underline-offset-8 text-lg';
    const disabledStyle = 'flex hover:underline underline-offset-8 text-lg';

    const Links = [
        { name: 'INICIO', link: ' ' },
        { name: 'MUJER', link: 'mujer' },
        { name: 'HOMBRE', link: 'hombre' },
        { name: 'COMPLEMENTOS', link: 'complementos' },
        { name: 'BLOG', link: 'blog' },
    ];
    return (
        <header className="flex justify-between w-full bg-background-black text-text-yellow py-4 px-8 items-center">
            <div>
                <Link to={''}>
                    <img src={logo} alt="Logo FMY" className="w-40 h-12" />
                </Link>
            </div>
            <nav>
                <ul className="flex gap-4">
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
                <Link to={''}>
                    <MagnifyingGlassIcon className="h-6 w-6" />
                </Link>
                <Link to={''}>
                    <UserIcon className="h-6 w-6 hover:text-text-blue" />
                </Link>
                <Link to={''}>
                    <ShoppingCartIcon className="h-6 w-6 hover:text-text-blue" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
