

const CardInstruction = ({etape, title, intitule}) => {


    return(
        <div className="instruction-card d-flex flex-column text-center">
            <div className="card-title">
                <span className="rounded-circle p-3" aria-hidden="true" >{etape}</span>
                <h5>{title}</h5>
            </div>
            <div className="card-body">
                <p>{intitule}</p>
            </div>
        </div>
    )
};

export default CardInstruction;
