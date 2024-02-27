import "./ImageCarousel.css";
import { carouselItems } from "./CarouselItems";

const ImageCarousel = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-track">
                {carouselItems.map((item) => {
                    return (
                        <div className="carousel-card">
                            <img key={item.id} src={item.path} alt={item.title} />
                        </div>
                    );
                })}
                {carouselItems.map((item) => {
                    return (
                        <div className="carousel-card">
                            <img key={item.id} src={item.path} alt={item.title} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ImageCarousel;