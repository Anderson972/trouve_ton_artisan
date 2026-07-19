import { Helmet } from "react-helmet-async";
import BackHome from "../components/BackHome";
import PageConstruction from "../components/PageConstruction";


const Accessibilite = () => {

    return(
    <div className="min-vh-100">
        <Helmet>
            <title>Trouve ton artisan - Accessibilités</title>
            <meta name="description" content="Accessibilités du site." />
        </Helmet>
        <PageConstruction />
        <BackHome />
    </div>
        
    )
}

export default Accessibilite;