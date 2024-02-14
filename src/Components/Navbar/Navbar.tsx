import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/">Prepare</a>
            <div className="dropdown-box">
                <button className="dropdown-btn">Schedule</button>
                <div className="dropdown-menu">
                    <a href="#1">Day 1</a>
                    <a href="#2">Day 2</a>
                    <a href="#3">Day 3</a>
                </div>
            </div>
            <a href="/">Information</a>
        </nav>
    );
}