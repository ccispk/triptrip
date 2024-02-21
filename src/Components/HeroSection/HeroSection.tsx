import videourl from "../../assets/videos/video.mp4";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <video controls={false} autoPlay muted loop playsInline>
                <source src={videourl} type="video/mp4" />
            </video>
            <div className="hero-box">
                <h1>探索東京之旅</h1>
                <p>禾輋基金會 3月5日 - 3月10日</p>
            </div>
        </div>
    );
}

export default HeroSection;