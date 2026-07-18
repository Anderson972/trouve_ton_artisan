import { useSearchParams, Link } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { getArtisans } from "../services/api";
import Star from "../components/StarRate";

const PageListe = () => {

    const [artisans, setArtisans] = useState([])
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const charger = async () => {
            const query = searchParams.toString()
            const datas = await getArtisans(query)
            setArtisans(datas)
        };
        charger()
    },[searchParams]);

    return(

        <div className="liste_artisans p-4">
            <ul className="list-unstyled row">
                {artisans.map((artisan) => (
                    <li key={artisan.id_artisans} className="pb-3 col-12 col-md-6 col-lg-4">
                        <Link className="text-decoration-none hover" to={`/artisans/${artisan.id_artisans}`}>
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
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default PageListe;