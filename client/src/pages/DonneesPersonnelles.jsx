import { Helmet } from "react-helmet-async";
import BackHome from "../components/BackHome";
import PageConstruction from "../components/PageConstruction";


const DonnesPersonnelles = () => {

    return(
        <div className="min-vh-100">
            <Helmet>
                <title>Trouve ton artisan - Données personnelles</title>
                <meta name="description" content="Données personnelles du site." />
            </Helmet>
            <PageConstruction />
            <BackHome />
        </div>
        
    )
}

export default DonnesPersonnelles;