import React from 'react'
import { HeroData } from '../../utils/data';
import Slider from "react-slick";

const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        lazyload: true,
        centerMode: "true",
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear",
    };

    return (
        <>
            {/* <!--? Testimonial Area Start --> */}
            <section class="testimonial-area testimonial-padding fix section-bg" style={{ backgroundImage: `url(assets/img/gallery/section_bg03.png)` }} >
                <div class="container">
                   
         

            <Slider {...settings}>
            {HeroData.map((slider, index) => {
                const {h1,h2,p,explore} = slider
            return (
              <>
             <div class="row align-items-center justify-content-center">
                        <div class=" col-lg-9">
                            <div class="about-caption">
                                {/* <!-- Testimonial Start --> */}
                                <div class="h1-testimonial-active dot-style">
                                    {/* <!-- Single Testimonial --> */}
                                    <div class="single-testimonial position-relative">
                                        <div class="testimonial-caption">
                                            <img src="assets/img/icon/quotes-sign.png" alt="" class="quotes-sign" />
                                            <p>"The automated process starts as soon as your clothe go into the machine. This site outcome is gleaming clothe. Placeholder text commonly used. In publishing and graphic.</p>
                                        </div>
                                        {/* <!-- founder --> */}
                                        <div class="testimonial-founder d-flex align-items-center">
                                            <div class="founder-img">
                                                <img src="assets/img/icon/testimonial.png" alt="" />
                                            </div>
                                            <div class="founder-text">
                                                <span>Robart Brown</span>
                                                <p>Creative designer at Colorlib</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- Testimonial End --> */}
                            </div>
                        </div>
                    </div>
              </>
            );  
          })} 
            </Slider>

            </div>
            </section>
            {/* <!--? Testimonial Area End --> */}

            {/* ///////// */}
        </>
    )
}

export default Testimonials