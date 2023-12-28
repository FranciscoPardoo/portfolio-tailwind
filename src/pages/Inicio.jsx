import avatar from "../assets/avatar.png"

function Inicio(){
    return(
<section className="container mt-8 md:mt-32 mx-auto h-auto max-w-screen-xl section flex flex-col md:flex-row justify-center items-center mb-8 md:mb-32" id="inicio">
    <div className="text-xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold text-center md:text-left md:mr-8">
        <h1>
            Hola, 👋 <br></br> Me llamo Francisco.
        </h1>
        <h2>
            Soy desarrollador <br></br> Front-End.
        </h2>
    </div>
    <div className="mt-5 md:mt-0">
    <img className="w-full xs:w-2/4 sm:w-2/4 md:w-2/3 lg:w-3/4 xl:w-3/4 mx-auto md:ml-auto md:mr-0 rounded-full shadow-lg shadow-slate-400 dark:shadow-black" src={avatar} alt="avatar de inicio" />
    </div>
</section>

    )
}

export default Inicio;