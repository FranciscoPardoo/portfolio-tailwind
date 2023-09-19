function Inicio(){
    return(
        <section className="container mt-32 mx-auto h-max max-width section md:flex justify-center items-center md:mb-32 " id="inicio">
            <div className="text-neutral-900 text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
                <h1>
                    Hola, 👋 <br></br> Me llamo Francisco.
                </h1>
                <h2>
                    Soy desarrollador <br></br> Front-End.
                </h2>
            </div>
            <div className="mt-5 md:mt-0">
                <img className="w-3/4 md:ml-auto rounded-full shadow-lg shadow-slate-400 dark:shadow-black" src="src/assets/avatar.png" alt="avatar de inicio" />
            </div>
        </section>
    )
}

export default Inicio;