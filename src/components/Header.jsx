import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faBars } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
function Header({ theme, setTheme }) {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

return (
    <header className='shadow-lg shadow-slate-100 h-16 w-full mx-auto flex justify-between items-center pt-0 dark:bg-dark-mode dark:shadow-md dark:shadow-black bg-white md:fixed md:top-0 md:w-full z-10'>
    <div className='mx-4 md:hidden'>
        <button onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size='lg' />
        </button>
    </div>
    <nav className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:mx-auto xl:mx-auto text-center`}>
        <ul className='text-neutral-900 text-lg font-medium flex w-full space-x-6 lg:flex-1 dark:text-light-heading'>
        <li><a className='hover:text-cyan-800' href="#inicio" onClick={toggleMenu}>Inicio</a></li>
        <li><a className='hover:text-cyan-800' href='#proyectos' onClick={toggleMenu}>Proyectos</a></li>
        <li><a className='hover:text-cyan-800' href="#habilidades" onClick={toggleMenu}>Habilidades</a></li>
        <li><a className='hover:text-cyan-800' href="#contacto" onClick={toggleMenu}>Contacto</a></li>
        </ul>
    </nav>
    <div className='mx-12 dark:bg-light-heading dark:px-2 py-1 dark:rounded-full'>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        <FontAwesomeIcon icon={faMoon} size='xl' />
        </button>
    </div>
    </header>
);
}

export default Header;
