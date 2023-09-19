import Button from "./Button";

// eslint-disable-next-line react/prop-types
function Cards( { imagen, titulo, descripcion, tecnologias, previewLink, githubLink } ){

    return(
        <div className="h-full w-80 max-h-96 rounded-xl mt-10 overflow-hidden shadow-lg shadow-slate-400 dark:shadow-black dark:text-light-heading dark:bg-dark-card transform hover:scale-105 transition-all duration-300">
            <img  className="h-ful w-full md:ml-auto" src={imagen} alt="screen de proyectos" />
            <h3 className="text-xl text-center my-2">{titulo}</h3>
            <p className="text-lg text-center">{descripcion}</p>
            <p className="text-lg text-center">{tecnologias}</p>
            <div className="my-4 space-x-4 flex justify-center items-center">
                <Button link={previewLink} text="Vista previa" className="mx-2"/>
                <Button link={githubLink} text="Codigo" className="mx-2" />
            </div>
        </div>
    )
}

export default Cards;