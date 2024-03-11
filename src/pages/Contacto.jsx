import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareBehance, faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";

function Contacto(){
    return(
        <section className="container flex flex-col items-center mx-auto max-width section md:mb-40 mb-14" id="contacto">
            <h2 className="text-neutral-900 text-center text-2xl dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold ">Contacto</h2>
            <h3 className="text-xl text-dark-heading dark:text-light-heading mt-12 md:text-4xl xl:text-5xl xl:leading-tight font-bold text-center md:text-left md:mr-8">Por cualquier consulta escribime a</h3>
            <p className="text-cyan-800 dark:text-light-heading mt-8 md:text-3xl xl:text-4xl xl:leading-tight font-bold text-center md:text-left md:mr-8">franpardo30@hotmail.com</p>
            <div className="text-center flex flex-row justify-center mt-20 w-40 sm:flex-row xs:flex-col gap-2">
                <Button link="https://www.linkedin.com/in/francisco-santiago-pardo/" text="Linkedin" icon={<FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: "#005eff", }} />}/>
                <Button link="https://github.com/FranciscoPardoo" text="Github" icon={<FontAwesomeIcon icon={faGithub} size="2x" style={{color: "#000000", }} />}/>
                <Button link="https://www.behance.net/franciscopardo4" text="Behance" icon={<FontAwesomeIcon icon={faSquareBehance} size="2x" style={{color: "#003eff", }} />}/>
            </div>
        </section>
    )
}

export default Contacto;