import { Helmet } from "react-helmet-async";
import BackHome from "../components/BackHome";
import PageConstruction from "../components/PageConstruction";

const MentionsLegales = () => {

    return(
        <div className="min-vh-100">
            <Helmet>
                <title>Trouve ton artisan - Mentions légales</title>
                <meta name="description" content="Mentions légales du site." />
            </Helmet>
            <PageConstruction />
            <BackHome />
        </div>
        
    )
}

export default MentionsLegales;