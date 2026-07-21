import { Link } from "react-router-dom";

const BackHome = () => {


    return(
        <div className="back-home p-3 mt-3" >
            <button className="rounded-pill btn btn-primary px-4"><Link className="text-white text-decoration-none" to={'/'}>Retourer à la page d'acceuil <i className="bi bi-arrow-right"></i></Link></button>
        </div>
    )
};

export default BackHome;
