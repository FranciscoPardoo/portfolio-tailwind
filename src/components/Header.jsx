import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faBars, faSun } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
function Header({ theme, setTheme }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={`shadow-lg shadow-slate-100 h-auto md:h-16 w-full mx-auto flex flex-row md:flex-row justify-between items-center pt-0 dark:bg-dark-mode dark:shadow-md dark:shadow-black bg-white md:fixed md:top-0 md:w-full z-10`}>
            <div className='mx-4 md:mx-0 mb-4 md:mb-0 md:hidden'>
                <button onClick={toggleMenu} className='flex flex-col'>
                    <FontAwesomeIcon icon={faBars} size='lg' />
                </button>
            </div>
            <nav className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:mx-auto xl:mx-auto text-center md:flex-row md:w-full`}>
                <ul className='text-neutral-900 text-lg font-medium flex justify-center flex-col md:flex-row w-full lg:flex-1 xs:space-x-1 dark:text-light-heading'>
                    <li><a className='hover:text-cyan-800 my-2 md:mx-4' href="#inicio" onClick={toggleMenu}>Inicio</a></li>
                    <li><a className='hover:text-cyan-800 my-2 md:mx-4' href='#proyectos' onClick={toggleMenu}>Proyectos</a></li>
                    <li><a className='hover:text-cyan-800 my-2 md:mx-4' href="#habilidades" onClick={toggleMenu}>Habilidades</a></li>
                    <li><a className='hover:text-cyan-800 my-2 md:mx-4' href="#contacto" onClick={toggleMenu}>Contacto</a></li>
                </ul>
            </nav>
            <div className='mx-12'>
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "light"? 
                        <FontAwesomeIcon icon={faMoon} size='xl' /> :
                        <FontAwesomeIcon icon={faSun} size='xl' style={{color: "#ffffff",}} />
                    }
                </button>
            </div>
        </header>
    );
}

export default Header;
