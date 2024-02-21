import videourl from "../../assets/videos/video.mp4";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <video src={videourl} controls={false} autoPlay muted loop></video>
        </div>
    );
}

export default HeroSection;