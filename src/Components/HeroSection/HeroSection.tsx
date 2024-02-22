import { useState, useEffect } from "react";
import videourl from "../../assets/videos/video.mp4";
import "./HeroSection.css";

const HeroSection = () => {
    const word = ['探索東京之旅', '3月5日 - 3月10日'];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                // reset index if current index is greater than array size
                return prevIndex + 1 < word.length ? prevIndex + 1 : 0;
            });
        }, 2000);

        return () => clearInterval(interval);
    });

    return (
        <div className="hero-section">
            <video controls={false} autoPlay muted loop playsInline>
                <source src={videourl} type="video/mp4" />
            </video>
            <div className="hero-box">
                <h1>禾輋基金會</h1>
                <div className="lineUp">
                    <p>{word[index]}</p>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;