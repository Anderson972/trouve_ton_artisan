import { useEffect, useState } from "react";
import { getTopArtisans } from "../services/api";
import CardArtisan from "../components/cardArtisan";
import CardInstruction from "../components/CardInstruction";
import BackHome from "../components/BackHome";


const Home = () => {

    const [artisans, setArtisans] = useState([])

    useEffect(() => {
        const charger = async () => {
            const datas = await getTopArtisans()
            setArtisans(datas)
        };
        charger()
    },[])


    return (
        <div className="home container min-vh-100 p-4">
            <div className="top p-4">
                <h2 className="text-center">Top artisans</h2>
                <div id="carouselTop" className="carousel slide carousel-dark">
                    <div className="carousel-indicators mb-0">
                        <button type="button" data-bs-target="#carouselTop" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselTop" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselTop" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {artisans.map((artisan, index) => (
                            <div key={artisan.id_artisans} className={`carousel-item ${index === 0 ? 'active' : ''} py-4`}>
                                    <CardArtisan artisan={artisan} />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselTop" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Précédent</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselTop" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Suivant</span>
                    </button>
                </div>
            </div>
            <hr />
            <div className="instruction rounded-3 p-3">
                <h2 className="instruction-title mb-3">Comment trouver mon artisan ?</h2>
                <ol className="instruction-list list-unstyled row pt-4">
                    <li className="col-12 col-lg-3 py-2"><CardInstruction etape={"1"} title={"Choix de la catégorie"} intitule={"Choisir la catégorie d’artisanat dans le menu."} /></li>
                    <li className="col-12 col-lg-3 py-2"><CardInstruction etape={"2"} title={"Choix de l'artisan"} intitule={"Choisir un artisan parmis la liste."} /></li>
                    <li className="col-12 col-lg-3 py-2"><CardInstruction etape={"3"} title={"Contact"} intitule={"Le contacter via le formulaire de contact."} /></li>
                    <li className="col-12 col-lg-3 py-2"><CardInstruction etape={"4"} title={"Réponse"} intitule={"Une réponse sera apportez sous 48h."} /></li>
                </ol>
            </div>
            <BackHome />
        </div>
    )
};

export default Home;

