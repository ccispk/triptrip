import "./Header.css"
import Navbar from "../Navbar/Navbar";

export default function Header() {
    return (
        <header>
            <div className="top-nav">
                <a href="/" id='logo'>WCF</a>
                <Navbar />
            </div>
        </header>
    );
}