// eslint-disable-next-line react/prop-types
function SkillsCards( { icono, habilidad } ){

    return(
        <div className="shadow-lg shadow-slate-300 rounded-xl w-40 h-40 flex items-center justify-center flex-col m-8 dark:shadow-black dark:text-light-heading dark:bg-dark-card">
            <div>{icono}</div>
            <h4>{habilidad}</h4>
        </div>
    )
}

export default SkillsCards;