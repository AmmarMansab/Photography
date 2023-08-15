import React from 'react'
import Slider from "react-slick";
import { HeroData } from '../../utils/data';
import { Carousel } from 'antd';
import 'animate.css';
import './Home.css'
import sky from '../../Images/sky.jpg'
import p1 from '../../Images/pic2.jpg'
import p2 from '../../Images/pic3.jpg'

const Hero = () => {

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

    // const contentStyle = {
    //     height: '100vh',
    //     color: '#fff',
    //     lineHeight: '160px',
    //     textAlign: 'center',
    //     background: '#364d79',
    //     width: '100%'
    // };

    return (

        <>
            <Slider {...settings}>
            {HeroData.map((slider, index) => {
                const {h1,h2,p,explore} = slider
            return (
              <>
              <section class="slider-area " style={{overflow:'hidden'}} >
                <div class="slider-active">
                    <div class="single-slider slider-bg1 hero-overly slider-height d-flex align-items-center">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-xl-8 col-lg-9 col-md-12">
                                    <div class="hero__caption text-center">
                                        <h1 data-animation="bounceIn" data-delay="0.2s">{h1}<br />{h2}</h1>
                                        <p data-animation="fadeInUp" data-delay="0.4s">{p}</p>
                                        <a href="#" class="hero-btn" data-animation="fadeInUp" data-delay="0.7s">{explore}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
              </>
            );  
          })} 
            </Slider>

            {/* <Carousel effect="fade">
                <div>
                    <div>
                        <img style={contentStyle} src="https://images.pexels.com/photos/17719873/pexels-photo-17719873/free-photo-of-woman-with-baby-on-beach-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                        <h1 className='animate__animated animate__bounce  delay '  >Lorem ipsum dolor sit amet consectetur adipisicing elit 1.</h1>
                    </div>

                </div>
                <div >

                    <img style={contentStyle} src="https://images.pexels.com/photos/14426574/pexels-photo-14426574.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    <h1 className='animate__animated animate__bounce  delay '  >Lorem ipsum dolor sit amet consectetur adipisicing elit 2.</h1>
                </div>
                <div>

                    <img style={contentStyle} src="https://images.pexels.com/photos/17823399/pexels-photo-17823399/free-photo-of-birds-circling-around-the-moon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    <h1 className='animate__animated animate__bounce  delay '  >Lorem ipsum dolor sit amet consectetur adipisicing elit 3.</h1>
                </div>
                <div>

                    <img style={contentStyle} src="https://images.pexels.com/photos/17419894/pexels-photo-17419894/free-photo-of-light-over-face-of-man-in-black-clothes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    <h1 className='animate__animated animate__bounce  delay '  >Lorem ipsum dolor sit amet consectetur adipisicing elit 4.</h1>
                </div>
            </Carousel> */}

            {/* //////////////////////// */}
            {/* <div id="carouselExampleControls" class="carousel slide fixed-carousel  " data-ride="carousel" data-interval="3000">
                <div class="carousel-fade">
                    <div class="carousel-item active">
                        <div style={{ backgroundImage: `url(${sky})` }} className='boot-cont'>
                            <div className="boot-overlay"></div>
                            <div className="boot-heading">
                                <h1 className='animate__animated animate__zoomIn delay '>heading number One</h1>
                                <p className='animate__animated animate__zoomIn delay2 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat ut a hic quo ex mollitia veniam rem accusantium quia eum sequi assumenda labore voluptas explicabo accusamus, est commodi harum?</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div style={{ backgroundImage: `url(${p1})` }} className='boot-cont'>
                            <div className="boot-overlay"></div>
                            <div className="boot-heading">
                                <h1 className='animate__animated animate__zoomIn delay '>heading hush Two</h1>
                                <p className='animate__animated animate__zoomIn delay2 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat ut a hic quo ex mollitia veniam rem accusantium quia eum sequi assumenda labore voluptas explicabo accusamus, est commodi harum?</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div style={{ backgroundImage: `url(${p2})` }} className='boot-cont'>
                            <div className="boot-overlay"></div>
                            <div className="boot-heading">
                                <h1 className='animate__animated animate__zoomIn delay '>heading Three</h1>
                                <p className='animate__animated animate__zoomIn delay2 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat ut a hic quo ex mollitia veniam rem accusantium quia eum sequi assumenda labore voluptas explicabo accusamus, est commodi harum?</p>
                            </div>
                        </div>
                    </div>
                </div>

                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div> */}

            {/* //// */}


            {/* <!-- Hero Section Begin --> */}
    {/* <section class="hero-section">
        <div class="hs-slider owl-carousel">
            <div class="hs-item set-bg" data-setbg="img/hero/hero-1.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="hs-text">
                                <h2>Digiunciton Studio</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et<br /> dolore magna aliqua. Quis ipsum suspendisse ultrices
                                    gravida accumsan lacus vel facilisis.</p>
                                <a href="#" class="primary-btn">Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hs-item set-bg" data-setbg="img/hero/hero-2.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="hs-text">
                                <h2>Digiunciton Studio</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et<br /> dolore magna aliqua. Quis ipsum suspendisse ultrices
                                    gravida accumsan lacus vel facilisis.</p>
                                <a href="#" class="primary-btn">Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    {/* <!-- Hero Section End --> */}

            
      

        </>

    )
}

export default Hero