import React from 'react'
import { ServicesData } from '../../../utils/data';
import Slider from "react-slick";
import './Services.css'
import { AiFillLeftCircle , AiFillRightCircle } from "react-icons/ai";


const Services = () => {

    var scroll1max = window.matchMedia("(min-width: 0px)");
    var scroll1min = window.matchMedia("(max-width: 600px)");

    // Custom previous arrow component
    const PrevArrow = ({ onClick }) => (
        <div className="custom-prev-arrow" onClick={onClick}>
            <AiFillLeftCircle/>
            {/* Your custom arrow icon */}
        </div>
    );
    
    // Custom next arrow component
    const NextArrow = ({ onClick }) => (
        <div className="custom-next-arrow" onClick={onClick}>
            <AiFillRightCircle/>
            {/* Your custom arrow icon */}
        </div>
    );

    // ...

    // console.log(scroll1max,scroll1min,'scroll 1 scroll 2');

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: scroll1min.matches && scroll1max.matches ? 1 : 3,
        lazyload: true,
        centerMode: "true",
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear",
        prevArrow: <PrevArrow />, // Use your custom previous arrow component
        nextArrow: <NextArrow />, // Use your custom next arrow component
    };

    return (
        <>

            <section class="services-section pb-padding fix">
                <div class="container">
                    <div class="custom-row ">
                        <div class="">
                            <Slider {...settings}>
                                {ServicesData.map((slider, index) => {
                                    const { h5, p, img } = slider
                                    return (
                                        <>
                                            <div class="col-lg-12 ">
                                                <div class="single-cat">
                                                    <div class="cat-icon">
                                                        <img style={{ height: '300px' }} src={img} alt="" />
                                                    </div>
                                                    <div class="cat-cap">
                                                        <h5><a href="services.html">Commercial Real Estate Photography</a></h5>
                                                        <p>Aute irure dolor inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--? services area start --> */}

            {/* <!-- Services End --> */}
        </>
    )
}

export default Services