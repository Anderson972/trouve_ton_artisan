import { Link } from "react-router-dom";
import Star from "./StarRate";


const CardArtisan = ({artisan}) => {

    return (
        <Link className="text-decoration-none" to={`/artisans/${artisan.id_artisans}`}>
            <div className="card text-center">
                <img src="/img/Logo.png" className="card-img-top" alt={`Logo de ${artisan.nom}`}/>
                <div className="card-body">
                    <h5 className="card-title">{artisan.nom}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><Star rate={artisan.note} /></li>
                        <li className="list-group-item">Spécialité : {artisan.Specialite.nom_specialite}</li>
                        <li className="list-group-item">Localisation : {artisan.ville}</li>
                    </ul>
                </div>
            </div>
        </Link>
    )
    
};

export default CardArtisan;