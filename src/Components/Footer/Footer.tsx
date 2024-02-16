import "./Footer.css";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube  } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear:number = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="media-box"> 
                <Link to="google.com" className="media-link"><IoLogoFacebook/></Link>
                <span>|</span>
                <Link to="google.com" className="media-link"><IoLogoInstagram/></Link>
                <span>|</span>
                <Link to="google.com" className="media-link"><IoLogoYoutube/></Link>
            </div>
            <div className="footer-box"><span>Wo Che Fundation</span> &copy; {currentYear}</div>
        </footer>
    );
}

export default Footer;