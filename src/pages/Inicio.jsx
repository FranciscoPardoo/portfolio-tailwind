import avatar from "../assets/avatar.png";
import Button from "../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cv from "/cv-franciscopardo.pdf";
import {motion} from "framer-motion"


function Inicio(){
    return(
<section className="container md:mt-44 mx-auto h-auto max-w-screen-xl section flex flex-col md:flex-row justify-center items-center mb-8 md:mb-32" id="inicio">
    <motion.div initial={{x:-40}}animate={{x:0}} transition={{ duration: 2 }}>
        <h1 className="text-xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold text-center md:text-left md:mr-8">
            Hola, 👋 <br></br> Me llamo Francisco.
        </h1>
        <h2 className="text-xl mb-4 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold text-center md:text-left md:mr-8">
            Soy desarrollador <br></br> Front-End.
        </h2>
        <Button
            icon={<FontAwesomeIcon icon={faDownload} />}
            link={cv}
            descarga={"cv-franciscopardo.pdf"}
            text={"Descargar cv"}/>
    </motion.div>
    <div className="mt-5 md:mt-0 ">
        <motion.img drag dragConstraints={{top: -50, left: -50, right: 50, bottom: 50,}} className="w-full xs:w-2/4 sm:w-2/4 md:w-2/3 lg:w-3/4 xl:w-3/4 mx-auto md:ml-auto md:mr-0 rounded-full shadow-lg shadow-slate-400 dark:shadow-black" src={avatar} alt="avatar de inicio" />
    </div>
</section>
    )
}

export default Inicio;