import React from 'react'

const Projects = () => {
  return (
    <>
    {/* <!-- Portfolio Section Begin --> */}
    <section class="portfolio-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Our latest works</h2>
                    </div>
                    <div class="filter-controls">
                        <ul>
                            <li class="active" data-filter="*">All</li>
                            <li data-filter=".fashion">Fashion</li>
                            <li data-filter=".lifestyle">Lifestyle</li>
                            <li data-filter=".natural">Natural</li>
                            <li data-filter=".wedding">Wedding</li>
                            <li data-filter=".videos">Birth</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 p-0">
                    <div class="portfolio-filter">
                        <div class="pf-item set-bg fashion" style={{backgroundImage:'url(https://images.unsplash.com/photo-1527679403912-e259675e1464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaG9pbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)'}} >
                            <a href="img/portfolio/pf-1.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>COLORS SPEAK</h4>
                                <span>Fashion</span>
                            </div>
                        </div>
                        <div class="pf-item large-width large-height set-bg lifestyle"
                           style={{backgroundImage:'url(https://images.unsplash.com/photo-1619627826693-8b40c611ca59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaG9pbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)'}}>
                            <a href="img/portfolio/pf-2.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>COLORS SPEAK</h4>
                                <span>Fashion</span>
                            </div>
                        </div>
                        <div class="pf-item large-width set-bg natural" style={{backgroundImage:'url(https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)'}}  >
                            <a href="img/portfolio/pf-3.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>COLORS SPEAK</h4>
                                <span>Fashion</span>
                            </div>
                        </div>
                        <div class="pf-item large-height set-bg wedding" style={{backgroundImage:'url(https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)'}} >
                            <a href="img/portfolio/pf-4.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>COLORS SPEAK</h4>
                                <span>Fashion</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg lifestyle" style={{backgroundImage:'url(https://images.unsplash.com/photo-1508930883516-7f594c5b68b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhhcHBheSUyMGJpcnRoZGF5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)'}} >
                            <a href="img/portfolio/pf-7.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>COLORS SPEAK</h4>
                                <span>Fashion</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg natural" style={{backgroundImage:'url(https://images.unsplash.com/flagged/photo-1553056011-7811272649cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcHBheSUyMGJpcnRoZGF5JTIwYm95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)'}} >
                            <a href="img/portfolio/pf-8.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>COLORS SPEAK</h4>
                                <span>Fashion</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg videos" style={{backgroundImage:'url(https://images.unsplash.com/photo-1531141445733-14c2eb7d4c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpZmVzdHlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)'}} >
                            <a href="img/portfolio/pf-5.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>COLORS SPEAK</h4>
                                <span>Fashion</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg fashion" style={{backgroundImage:'url(https://images.unsplash.com/photo-1613339027986-b94d85708995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)'}} >
                            <a href="img/portfolio/pf-6.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>COLORS SPEAK</h4>
                                <span>Fashion</span>
                            </div>
                        </div>
                        <div class="pf-item large-width set-bg videos" style={{backgroundImage:'url(https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF0dGl0dWRlJTIwYm95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)'}} >
                            <a href="img/portfolio/pf-10.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>COLORS SPEAK</h4>
                                <span>Fashion</span>
                            </div>
                        </div>
                        <div class="pf-item set-bg fashion" style={{backgroundImage:'url(https://images.unsplash.com/photo-1531141445733-14c2eb7d4c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpZmVzdHlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)'}} >
                            <a href="img/portfolio/pf-11.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>COLORS SPEAK</h4>
                                <span>Fashion</span>
                            </div>
                        </div>
                        <div class="pf-item large-width large-height set-bg wedding"
                            style={{backgroundImage:'url(https://images.unsplash.com/photo-1613339027986-b94d85708995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)'}} >
                            <a href="img/portfolio/pf-9.jpg" class="pf-icon image-popup"><span class="icon_plus"></span></a>
                            <div class="pf-text">
                                <h4>COLORS SPEAK</h4>
                                <span>Fashion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="load-more-btn">
            <a href="#">Load More</a>
        </div>
    </section>
    {/* <!-- Portfolio Section End --> */}
    </>
  )
}

export default Projects