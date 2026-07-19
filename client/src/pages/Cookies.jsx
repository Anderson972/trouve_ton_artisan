import { Helmet } from "react-helmet-async";
import BackHome from "../components/BackHome";
import PageConstruction from "../components/PageConstruction";


const Cookies = () => {

    return(
        <div className="min-vh-100">
            <Helmet>
                <title>Trouve ton artisan - Cookies</title>
                <meta name="description" content="Cookies du site." />
            </Helmet>
            <PageConstruction />
            <BackHome />
        </div>
        
    )
}

export default Cookies;