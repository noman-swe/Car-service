import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import expertImg1 from '../../../images/Banner/banner-2.png';
import expertImg2 from '../../../images/Banner/banner-3.png';
import expertImg3 from '../../../images/Banner/banner-4.png';
import './Banner.css';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
                {/* <ExampleCarouselImage text="First slide" /> */}
                <div className="banner-img ">
                    <img src={expertImg1} className='img-fluid d-block w-100' alt="" />
                </div>
                <Carousel.Caption>
                    <h3>Our service center</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <ExampleCarouselImage text="Second slide" /> */}
                <div className="banner-img">
                    <img src={expertImg2} className='img-fluid d-block w-100' alt="" />
                </div>

                <Carousel.Caption>
                    <h3>Tire Alignment</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <div className="banner-img">
                    <img src={expertImg3} className='img-fluid d-block w-100' alt="" />
                </div>

                <Carousel.Caption>
                    <h3>Main Service Center</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;