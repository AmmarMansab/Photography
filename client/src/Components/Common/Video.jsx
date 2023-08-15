import { React, useState } from 'react'
import { Button, Modal } from 'antd';
import './Common.css'

const Video = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [defimg, setDefImg] = useState();

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const showModal = (img) => {
        setIsModalOpen(true);
        setDefImg(img)
    };


    return (
        <>

            {/* //// Model //// */}

            <Modal

                visible={isModalOpen}
                onCancel={handleCancel}
                closable={false} // Hide the default close icon
                centered // Center the modal vertically in the viewport
                footer={null}
                open={isModalOpen}
                onOk={handleOk}
                header={null}
                width={1000}
                style={{ height: '80vh' }}

            >

                <div className="video-modal-main">
                    <video className='boot-video' autoPlay muted>
                        <source src='https://player.vimeo.com/external/427001133.sd.mp4?s=5974c8638a97fd91eb1015398f05e6d82cdd07f5&profile_id=164&oauth2_token_id=57447761' />
                    </video>
                </div>



            </Modal>

            {/* ////  //// */}

            {/* <!--? video_start --> */}
            <div class="video-area section-bg2 d-flex align-items-end fix conteiner "  >

                <div className="row">
                    <div className="col-12">
                        <div class="video-icon" onClick={showModal} style={{ cursor: 'pointer', zIndex: '200' }}  >
                            <a class="popup-video btn-icon" ><i class="fas fa-play"></i></a>
                        </div>

                        <video autoplay style={{ width: '100%', marginTop: '-27%', zIndex: '1000' }} >
                            <source src='https://player.vimeo.com/external/427001133.sd.mp4?s=5974c8638a97fd91eb1015398f05e6d82cdd07f5&profile_id=164&oauth2_token_id=57447761' />
                        </video>

                    </div>
                    <div className="col-12">
                        <div class="container">
                            <div class="video-contents">
                                <div class="row justify-content-between">
                                    <div class="col-xl-5 col-lg-5 col-md-10">
                                        <div class="section-tittle  mb-90">
                                            <h2>How we work?</h2>
                                            <p class="tittle-pera1">Inasfa reprehenderit in voluptate velit esse  cillum reeut cupidatatfug nulla pariatur.</p>
                                            <p>Aute irure dolor inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur. Excepteur sintxsdfas occaecat.</p>
                                            <a href="#" class="btn black-btn">Start a Project</a>
                                        </div>
                                    </div>
                                    <div class="col-xl-5 col-lg-6 col-md-8">
                                        <div class="edu-details">
                                            {/* <!-- single-item --> */}
                                            <div class="single-items mb-50">
                                                <span>Tell Us About Your Project</span>
                                                <p>Aute irure dolor inasfa prehenderit  in voluptate velit esse cillum.</p>
                                            </div>
                                            {/* <!-- single-item --> */}
                                            <div class="single-items single-items2 mb-50">
                                                <span>We'll Schedule a Flight</span>
                                                <p>Aute irure dolor inasfa prehenderit in voluptate velit esse cillum.</p>
                                            </div>
                                            {/* <!-- single-item --> */}
                                            <div class="single-items single-items3 mb-50">
                                                <span>We'll Schedule a Flight</span>
                                                <p>Aute irure dolor inasfa prehenderit in voluptate velit esse cillum.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                {/* <!-- Video icon --> */}
                {/* <div class="video-icon" >
            <a class="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0"><i class="fas fa-play"></i></a>
        </div> */}




            </div>
            {/* <!-- video_end --> */}
        </>
    )
}

export default Video