import { Carousel } from "react-bootstrap";
import './Hero_section.css'


export function Hero_section() {
  return (
      <Carousel className="main-carousel">
        <Carousel.Item className="main-carousel__item">
          <img className="w-100 h-100" src="../../../public/images/carousel/imag.jpg" alt="" />
        </Carousel.Item>


        <Carousel.Item className="main-carousel__item">
          <img className="w-100 h-100" src="../../../public/images/carousel/3.jpg" alt="" />
        </Carousel.Item>


        <Carousel.Item className="main-carousel__item">
          <img className="w-100 h-100" src="../../../public/images/carousel/4.jpg" alt="" />
        </Carousel.Item>
      </Carousel>
  )
}
