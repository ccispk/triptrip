import HeroSection from "../Components/HeroSection/HeroSection";
import "./Home.css";
import imgurl from "../assets/images/fujimountain.jpg"

const Home = () => {
    return (
        <div className="hero-contanier">
            <HeroSection />
            <section className="intro-section">
                <img src={imgurl} alt="fuji-mountain" className="intro-img"/>
                <h2>東京行</h2>
                <p>乘著三月思念的風，佇立在東京。發掘美食，探索日本歷史，瞭解最新電子設備，體驗當地文化</p>
            </section>
        </div>
    );
}

export default Home;