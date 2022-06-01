import React from 'react'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './_CarouselComponent.scss';
import image2 from '../Assets/Images/CuratingHomePageSlide.png';
import image3 from '../Assets/Images/ManyFaces.png';
import image1 from '../Assets/Images/SofiaHomePageSlider.jpg';

const CarouselComponent = () => {
  return (
    <div className='CarouselComponent'>
        <AliceCarousel autoPlay="true" disableButtonsControls infinite autoPlayInterval="30000000">
            <div className='slider-pair'>
                <img src={image1} alt="" className="sliderimg"/>
                <div className='sliderimg bg-faded-tan'>
                    <h5>Välkommen till S.Mak Curating</h5>
                    <p><Link className='' to="/about-us">Här</Link> kan du läsa mer om mig</p>
                </div>
            </div>
            <img src={image2} alt="" className="sliderimg2"/>
            <div className='slider-pair'>
                <div className='sliderimg bg-faded-tan my-art-link'>
                <h5><Link className='' to="/my-art">Min Konst</Link></h5>
                </div>
                <img src={image3} alt="" className="sliderimg sliderimg3"/>
            </div>
        </AliceCarousel>
    </div>
  )
}

export default CarouselComponent