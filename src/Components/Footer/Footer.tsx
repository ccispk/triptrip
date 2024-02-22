import "./Footer.css";
import { Link } from 'react-router-dom'
import { mediaItems } from "./MediaItems"

const Footer = () => {
    const currentYear:number = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="media-box">
                {mediaItems.map((item) => {
                    return (
                        <Link key={item.id} to={item.path} className={item.className}>{item.icon}</Link>
                    );
                })}
            </div>
            <div className="footer-box"><span>Wo Che Fundation  &copy; {currentYear}</span></div>
        </footer>
    );
}

export default Footer;