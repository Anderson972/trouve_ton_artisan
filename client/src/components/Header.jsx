import { useEffect, useState } from 'react';
import {NavLink, Link, useNavigate} from 'react-router-dom';
import { getCategories } from '../services/api';




const Header = () => {

    
    const [categories,setCategories] = useState([])
    const [recherche, setRecherche] = useState('')
    

    useEffect(() => {
        const charger = async () => {
            const datas = await getCategories()
            setCategories(datas)
        };
        charger();
    },[]);


    const navigate = useNavigate()


    const submit = (e) => { 
        e.preventDefault(); 
        navigate(`/artisans?nom=${encodeURIComponent(recherche)}`);
    };


    return (
        <nav className="navbar bg-body-tertiary navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/img/Logo.png" alt="Logo trouve ton artisan" height="125"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="ouvre le menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between " id='menu'>
                    <ul className="navbar-nav">
                        {categories.map((cat) => (
                            <li key={cat.id_categories} className="nav-item"><NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={`/artisans?id_categories=${cat.id_categories}`}>{cat.nom_categories}</NavLink></li>
                        ))}
                    </ul>               
                    <form onSubmit={submit} className="d-flex" role="search">
                        <label htmlFor="recherche" className='visually-hidden'>recherche</label>
                        <input value={recherche} onChange={(e) => setRecherche(e.target.value)} id='recherche' className="form-control me-2" type="search" placeholder="Recherche" />
                        <button className="btn btn-outline-primary" type="submit" aria-label='Recherche'><i className="bi bi-search"></i></button>
                    </form>
                </div>
            </div>
        </nav>
    )
};

export default Header;