import BackHome from "../components/BackHome";


const NotFound = () => {
    return (
        <div className="container not-found min-vh-100 p-3">
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