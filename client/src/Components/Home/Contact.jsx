import React from 'react'

const Contact = () => {
  return (
    <>
    <div class="contact-form">
    <div class="container">
        <div class="row">
            <div class="col-lg-5">
                <div class="form-wrapper">
                    <div class="row ">
                        <div class="col-xl-12 col-lg-11 col-md-8 col-lg-7 col-sm-9">
                            <div class="section-tittle mb-30">
                                <h2>Get a Quote</h2>
                                <p>Inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                    <form id="contact-form" action="#" method="POST">
                        <div class="row">
                            <div class="col-lg-12 col-md-6">
                                <div class="form-box user-icon mb-15">
                                    <input type="text" name="name" placeholder="Your Name"/>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-6">
                                <div class="form-box email-icon mb-15">
                                    <input type="text" name="email" placeholder="Email"/>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-6">
                                <div class="form-box email-icon mb-15">
                                    <input type="text" name="email" placeholder="Phone no."/>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-6 mb-15">
                                <div class="select-itms">
                                    <select name="select" id="select2">
                                        <option value="">Topic</option>
                                        <option value="">Topic one</option>
                                        <option value="">Topic Two</option>
                                        <option value="">Topic Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-box message-icon mb-15">
                                    <textarea name="message" id="message" placeholder="Message"></textarea>
                                </div>
                                <div class="submit-info">
                                    <button class="submit-btn2" type="submit">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    </div>
    <div class="contact-img">
        <img src="assets/img/gallery/contact-img.png" alt=""/>
    </div>
</div>
    </>
  )
}

export default Contact