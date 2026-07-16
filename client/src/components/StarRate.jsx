const Star = ({rate}) => {

    const note = parseFloat(rate)
    const stars = [1, 2, 3, 4, 5]

    return (
        <span aria-label={`Note: ${note} sur 5`}>
            {stars.map((position) => (
                <i key={position} className={position <= note ? 'bi bi-star-fill' : (position - note < 1 ? 'bi bi-star-half' : 'bi bi-star')} aria-hidden="true"></i>
            ))}
        </span>
    )
};

export default Star;