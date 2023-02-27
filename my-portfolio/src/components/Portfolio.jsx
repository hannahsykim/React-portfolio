import Carousel, { CarouselItem} from "./Carousel";
import '../styles/Portfolio.css';

export default function App() {
    return (

        <div className="carousel">
            <h1 className="portfolio"> Portfolio</h1>
            <Carousel>
                <CarouselItem><img src="https://www.w3schools.com/tags/img_girl.jpg" class="img-fluid" alt="tech blog"></img></CarouselItem>
                <CarouselItem><img src="https://www.w3schools.com/tags/img_girl.jpg" class="img-fluid" alt="tech blog"></img></CarouselItem>
                <CarouselItem><img src="https://www.w3schools.com/tags/img_girl.jpg" class="img-fluid" alt="tech blog"></img></CarouselItem>
                <CarouselItem><img src="https://www.w3schools.com/tags/img_girl.jpg" class="img-fluid" alt="tech blog"></img></CarouselItem>
            </Carousel>
        </div>
    );
}