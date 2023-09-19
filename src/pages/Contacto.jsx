import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareBehance, faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contacto(){
    return(
        <section className="container flex flex-col items-center mx-auto max-width section md:mb-40 mb-14" id="contacto">
            <h2 className="text-neutral-900 text-center text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">Contacto</h2>
            <div className="text-center flex flex-col mt-8 space-y-4 w-40">
                <Button link="https://www.linkedin.com/in/francisco-santiago-pardo/" text="Linkedin" icon={<FontAwesomeIcon icon={faLinkedin} size="2x" style={{color: "#005eff", }} />}/>
                <Button link="https://github.com/FranciscoPardoo" text="Github" icon={<FontAwesomeIcon icon={faGithub} size="2x" style={{color: "#000000", }} />}/>
                <Button link="https://www.behance.net/franciscopardo4" text="Behance" icon={<FontAwesomeIcon icon={faSquareBehance} size="2x" style={{color: "#003eff", }} />}/>
                <Button link="https://outlook.live.com/mail/0/" text="Mail" icon={<FontAwesomeIcon icon={faEnvelope} size="2x" style={{color: "#25B0FF", }} />}/>
            </div>
        </section>
    )
}

export default Contacto;