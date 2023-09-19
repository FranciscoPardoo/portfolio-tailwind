import React from "react";
import Cards from "../components/Cards";
import { projectDetails } from "../dataProjects";


function Proyectos(){
    return(
        <section className="container mx-auto max-width md:pt-20 md:mb-20 mb-14" id="proyectos">
            <h2 className=" text-center text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-5">Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 ml-12">
                {
                    React.Children.toArray(
                        projectDetails.map( 
                            ({imagen, titulo, descripcion, tecnologias, previewLink, githubLink}) => (
                            <Cards
                            titulo={titulo}
                            imagen={imagen}
                            descripcion={descripcion}
                            tecnologias={tecnologias}
                            previewLink={previewLink}
                            githubLink={githubLink}
                            />
                            )
                        )
                    )
                }
            </div>
        </section>
    )
}

export default Proyectos;