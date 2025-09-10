import avatar from "../assets/avatar1.png";
import Button from "../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cv from "/cv-franciscopardo.pdf";
import {motion} from "framer-motion"

function Inicio(){
    return(
<section className="container md:mt-44 mx-auto h-auto max-w-screen-xl section flex flex-col md:flex-row justify-center items-center mb-8 md:mb-32 px-4" id="inicio">
    <motion.div 
        initial={{x:-40}}
        animate={{x:0}} 
        transition={{ duration: 2 }}
        className="text-center md:text-center flex flex-col items-center md:items-center"
    >
        <h1 className="text-xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-2">
            Hola, 👋 <br></br> Me llamo Francisco.
        </h1>
        <h2 className="text-xl mb-6 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            Soy desarrollador <br></br> Full Stack.
        </h2>
        <Button
            icon={<FontAwesomeIcon icon={faDownload} />}
            link={cv}
            descarga={"cv-franciscopardo.pdf"}
            text={"Descargar cv"}/>
    </motion.div>
    <div className="mt-8 md:mt-0 md:ml-8 flex justify-center">
        <motion.img 
            drag 
            dragConstraints={{top: -50, left: -50, right: 50, bottom: 50,}} 
            className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-full shadow-lg shadow-slate-400 dark:shadow-black" 
            src={avatar} 
            alt="avatar de inicio" 
        />
    </div>
</section>
    )
}

export default Inicio;