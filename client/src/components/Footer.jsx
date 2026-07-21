import { Link } from "react-router-dom"

const Footer = () => {


    return(
        <footer>
            <div className="footer-content container">
                <img src="/img/Logo.png" alt="Logo trouve ton artisan" height="125px"/>
                <div className="row">
                    <div className="menu col-12 col-md-6">
                        <ul className="list-unstyled">
                            <li><Link className="text-decoration-none text-white" to="/mentions_legales">Mentions légales</Link></li>
                            <li><Link className="text-decoration-none text-white" to="/donnees_personnelles">Données personnelles</Link></li>
                            <li><Link className="text-decoration-none text-white" to="/accessibilite">Accessibilité</Link></li>
                            <li><Link className="text-decoration-none text-white" to="/cookies">Cookies</Link></li>
                        </ul>
                    </div>
                    <div className="contacts col-12 col-md-6 text-white">
                        <address>
                            101 cours Charlemagne <br />
                            CS 20033 <br />
                            69269 LYON CEDEX 02 <br />
                            France <br />
                            <Link  className="text-decoration-none text-white tel" href="tel:+33426734000">+33 (0)4 26 73 40 00</Link>
                        </address>
                    </div>
                </div>
            </div>
        </footer>
    )
};
export default Footer;