import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import { fetchSendContact, getArtisanById } from "../services/api";
import Star from "../components/StarRate";


const FicheArtisan = () => {

    const [artisan, setArtisan] = useState(null)
    const {id} = useParams()
    const [form, setForm] = useState({ nom: '', mail: '', objet: '', message: '' });
    const [response, setResponse] = useState(null)

    useEffect(() => {
        const charger = async () => {
            const datas = await getArtisanById(id)
            setArtisan(datas)
        };
        charger()
    },[id])

    const submit = async (e) => {
        e.preventDefault();
        const res = await fetchSendContact(artisan.id_artisans, form.nom, form.mail, form.objet, form.message)
        setResponse(res)
        if (res === true) {
            setForm({ nom: '', mail: '', objet: '', message: '' });
        }
    };

    const messageStatut = () => {
        if (response !== null && response === true) {
            return (
                <div className="alert alert-success" role="alert">
                    Votre message à été envoyé !
                </div>
            )
        } else if (response !== null && response === false) {
            return(
                <div className="alert alert-danger" role="alert">
                    Erreur lors de votre envoi
                </div>
            )
        };
        return ('')
    };

    if(!artisan){
        return (
            <div className="min-vh-100 d-flex justify-content-center text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Chargement</span>
                </div>
            </div>
        )
    };
    return(
        <div className="pt-4 fiche_artisan min-vh-100 d-flex justify-content-center container">
            <div className=" mx-auto container container-lg row border rounded-4 p-3">
                <h3 className="text-center">{artisan.nom}</h3>
                <div className="logo col-12 col-md-6 my-auto">
                    <img src="/img/Logo.png" className="card-img-top" alt={`Logo de ${artisan.nom}`}/>
                </div>
                <div className="info d-flex col-md-6 col-12 justify-content-center my-auto mb-3">
                    <ul className="list-group-flush list-group justify-content-center">
                        <li className="list-group-item"><span className="fw-bold">Note : </span><Star rate={artisan.note}/></li>
                        <li className="list-group-item"><span className="fw-bold">Spécialité : </span>{artisan.Specialite.nom_specialite}</li>
                        <li className="list-group-item"><span className="fw-bold">Localisation : </span>{artisan.ville}</li>
                        <li className="list-group-item"><span className="fw-bold">A propos : </span>{artisan.about}</li>
                        {artisan.site ? <li className="list-group-item"><span className="fw-bold">Site : </span><Link rel="noreferrer noopener" target="_blank">{artisan.site}</Link></li> : ''}
                    </ul>
                </div>
                <hr />
                <form  onSubmit={submit} className="border rounded-4 p-3">
                    <h4>Formulaire de contacte</h4>
                    <div className="form-floating mb-3">
                        <input value={form.nom} onChange={(e) => setForm({...form, nom: e.target.value})} type="text" className="form-control" id="name_form" placeholder="Votre nom" required/>
                        <label htmlFor="name_form">Nom</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={form.mail} onChange={(e) => setForm({...form, mail: e.target.value})} type="email" className="form-control" id="mail_form" placeholder="mail@mail.com" required/>
                        <label htmlFor="mail_form">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input value={form.objet} onChange={(e) => setForm({...form, objet: e.target.value})} type="text" className="form-control" id="object_form" placeholder="Votre objet" required/>
                        <label htmlFor="object_form">Objet</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="form-control" id="message_form" placeholder="Votre message..." style={{height: '150px'}} required/>
                        <label htmlFor="message_form">Message</label>
                    </div>
                    <button className="btn btn-primary" type="submit">Envoyer</button>
                    {messageStatut()}
                </form>
            </div>
        </div>
    )
};

export default FicheArtisan;