import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
function Header({theme, setTheme}) {
    return (
        <header className='shadow-lg shadow-slate-100 h-16 w-full mx-auto flex justify-around items-center pt-0 dark:bg-dark-mode dark:shadow-md dark:shadow-black bg-white md:fixed md:top-0 md:w-full z-10'>            
            <nav className='hidden ml-80 text-center md:flex ' >
                <ul className='text-neutral-900 text-lg font-medium flex w-full space-x-6 lg:flex-1 dark:text-light-heading'>
                    <li><a className='hover:text-cyan-800' href="#inicio">Inicio</a></li>
                    <li><a className='hover:text-cyan-800' href='#proyectos'>Proyectos</a></li>
                    <li><a className='hover:text-cyan-800' href="#habilidades">Habilidades</a></li>
                    <li><a className='hover:text-cyan-800' href="#contacto">Contacto</a></li>
                </ul>
            </nav>
            <div className='mx-12 dark:bg-light-heading dark:px-2 py-1 dark:rounded-full'>
                <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <FontAwesomeIcon icon={faMoon} size='xl'/>
                </button>
            </div>
        </header>
)
}

export default Header;