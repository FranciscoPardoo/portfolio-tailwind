// eslint-disable-next-line react/prop-types
function Button({icon, text, link, descarga}) {
    return (
            <a href={link} target="_blank" download={descarga} rel="noopener noreferrer" className="gap-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded inline-flex items-center dark:bg-dark-content dark:text-light-heading dark:hover:bg-stone-700">{icon}{text}</a>
)
}

export default Button;