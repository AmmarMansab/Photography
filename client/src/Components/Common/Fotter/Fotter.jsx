import React from 'react'
import { InstaData } from '../../../utils/data'
import './Fotter.css'

const Fotter = () => {

     ////// InstaFeed //////

     const instafeed = InstaData.map((data, index) => {
        const { img } = data
        return (
            <>
                <li>
                    <a href="#">
                        <img class="img-fluid-fotter" src={img} alt="" />
                    </a>
                </li>
            </>
        )
    })

  return (
    <>
    <footer>
    <div class="footer-wrapper section-bg2" style={{ backgroundImage: 'url("assets/img/gallery/footer-bg.png")' }}>
        {/* <!-- Footer Start--> */}
        <div class="footer-area footer-padding">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-xl-4 col-lg-4 col-md-5 col-sm-7">
                        <div class="single-footer-caption mb-50">
                            <div class="single-footer-caption mb-30">
                                {/* <!-- logo --> */}
                                <div class="footer-logo mb-35">
                                    <a href="index.html">
                                        {/* <!-- <img src="assets/img/logo/logo2_footer.png" alt=""> --> */}
                                        Digiunciton
                                    </a>
                                </div>
                                <div class="footer-tittle">
                                    <div class="footer-pera">
                                        <p>Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug.</p>
                                    </div>
                                    <ul class="mb-40">
                                        <li class="number"><a href="#">(00) 000 000-000</a></li>
                                         <li class="number2"><a href="#">Digiunciton.com</a></li> 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="offset-xl-1 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Navigation</h4>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            <div class="footer-tittle">
                                <h4>Services</h4>
                                <ul>
                                    <li><a href="#">Drone Mapping</a></li>
                                    <li><a href="#"> Real State</a></li>
                                    <li><a href="#">Commercial</a></li>
                                    <li><a href="#">Construction</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                        <div class="single-footer-caption mb-50">
                            {/* <!-- social --> */}
                            <div class="footer-social">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="https://bit.ly/sai4ull"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-pinterest-p"></i></a>
                            </div>
                        </div>
                        {/* // */}
                        
                    {/*///// insta feed start /////*/}

                    <aside class="insta-in-footer-main ">
                        {/* <h4 class="widget_title" style={{ color: '#2d2d2d' }}>Instagram Feeds</h4> */}

                        <ul class="insta-in-footer">

                            {
                                instafeed
                            }
                        </ul>
                    </aside>

                    {/*///// insta feed end /////*/}
                        {/* // */}
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer-bottom area --> */}
        <div class="footer-bottom-area">
            <div class="container">
                <div class="footer-border">
                    <div class="row">
                        <div class="col-xl-12 ">
                            <div class="footer-copy-right text-center">
                                <p>
                                 Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://digiunction.com/" target="_blank">Digiunction</a> 
                                 </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- Footer End--> */}
      </div>
  </footer>
    </>
  )
}

export default Fotter