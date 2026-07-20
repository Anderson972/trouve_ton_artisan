const TextHolders = ({index}) => {

    return(
        <>
            {Array.from({ length: index }, (_, i) => (
                <li key={i} className="placeholder-glow nav-item w-75">
                    <span className="placeholder nav-link w-75"></span>
                </li>
            ))}
        </>
    )
}

export default TextHolders;