import { useSearchParams } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { getArtisans } from "../services/api";
import CardArtisan from "../components/cardArtisan";
import BackHome from "../components/BackHome";
import { Helmet } from "react-helmet-async";

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

        <div className="min-vh-100 liste_artisans p-4">
            <Helmet>
                <title>Trouve ton artisan - Liste d'artisans</title>
                <meta name="description" content="Liste de tous nos artisans." />
            </Helmet>
            <div className="row">
                {artisans.map((artisan) => (
                    <div key={artisan.id_artisans} className="pb-3 col-12 col-md-6 col-lg-4">
                        <CardArtisan artisan={artisan} />
                    </div>
                ))}
            </div>
            <BackHome />
        </div>
    )
};

export default PageListe;