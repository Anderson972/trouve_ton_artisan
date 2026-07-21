import { Helmet } from "react-helmet-async";
import BackHome from "../components/BackHome";


const NotFound = () => {
    return (
        <div className="container not-found min-vh-100 p-3">
            <Helmet>
                <title>Trouve ton artisan - Erreur 404</title>
                <meta name="description" content="Page introuvable." />
            </Helmet>
            <h1>Erreur 404</h1>
            <p>Cette page n'existe pas !</p>
            <div className="container-fluid illustration p-3">
                <img className="img-fluid rounded-3" src="/img/illustration 404 error.jpg" alt="illustration erreur 404 page introuvable" />
            </div>
            <BackHome />
        </div>
    )
};

export default NotFound;