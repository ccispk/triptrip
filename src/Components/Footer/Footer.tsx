import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaX } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear:number = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="media-box">
                <Link to="#" className="media-link"><FaFacebookF className="icon"/></Link>
                <Link to="#" className="media-link"><FaInstagram className="icon"/></Link>
                <Link to="#" className="media-link"><FaYoutube className="icon"/></Link>
                <Link to="#" className="media-link"><FaX className="icon"/></Link>
            </div>
            <div className="footer-box"><span>Wo Che Fundation</span> &copy; {currentYear}</div>
        </footer>
    );
}

export default Footer;