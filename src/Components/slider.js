    import Carousel from 'react-bootstrap/Carousel';
    import React from 'react';
    import banner1 from '../images/banner1.avif';
    import banner2 from '../images/banner2.gif';
    import banner3 from '../images/banner3.avif';
    import banner4 from '../images/banner4.avif';
    import banner5 from '../images/banner5.avif';
    import banner6 from '../images/banner6.avif';
    import banner7 from '../images/banner7.avif';
    import banners from '../images/banners.png';
    import banners2 from '../images/banners2.png';

    function Slider() {
    return (
        <div className='fluid-container'>
            <div className='row'>
                <div className='col-md-9 p-0 m-0'>
                    <Carousel variant="dark">

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={banner1}
                        width="100%"
                        alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={banner2}
                        width="100%"
                        alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={banner3}
                        width="100%"
                        alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={banner4}
                        width="100%"
                        alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={banner5}
                        width="100%"
                        alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={banner6}
                        width="100%"
                        alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={banner7}
                        width="100%"
                        alt="Third slide"
                        />
                    </Carousel.Item>

                    </Carousel>
                </div>

                <div className='col-md-3 d-flex p-0 m-0'>
                    <img src={banners} width="167.5px" />
                    <img src={banners2} width="167.5px" />
                </div>
            </div>
        </div>
    );
    }

    export default Slider;