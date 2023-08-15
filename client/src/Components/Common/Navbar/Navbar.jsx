import {React,useEffect,useState} from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

    const navigate = useNavigate()

    const nextpage = (val) => {
        navigate(val)
    }

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(false); 
        } else { // if scroll up show the navbar
          setShow(true);  
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
  
        // cleanup function
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);

    useEffect(()=>{
        document.querySelector('.navbar').style.transform = 'translateY(2%)';
        document.querySelector('.navbar').style.backgroundColor = 'transparent';
        document.querySelector('.navbar').classList.remove('nav-act');
    },[])

    let prevScrollPos = window.pageYOffset;

    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            console.log(currentScrollPos,'curr');
            // Scrolling up, show the navbar
            document.querySelector('.navbar').style.transform = 'translateY(0%)';
            document.querySelector('.navbar').style.backgroundColor = 'white';
            document.querySelector('.navbar').classList.add('nav-act');
            if(currentScrollPos === 0){
                document.querySelector('.navbar').style.transform = 'translateY(2%)';
                document.querySelector('.navbar').style.backgroundColor = 'transparent';
                document.querySelector('.navbar').classList.remove('nav-act');
            }
        } else {
            // Scrolling down, hide the navbar
           

            if(currentScrollPos === 0){
                document.querySelector('.navbar').style.transform = 'translateY(2%)';
                document.querySelector('.navbar').style.backgroundColor = 'transparent';
                document.querySelector('.navbar').classList.remove('nav-act')
            }
            else{
                document.querySelector('.navbar').style.transform = 'translateY(-200%)';
            }
        }

        prevScrollPos = currentScrollPos;
    };


    return (

        <>

            <nav style={{position:'fixed',width:'100%'}} className={`navbar navbar-expand-lg navbar-light
     
            `
        } 
             >
                <div class="container">
                    <div class="d-flex align-items-center justify-content-between w-100">
                        <h1>Digiunciton</h1>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li style={{ cursor: 'pointer' }} class="nav-item" onClick={() => nextpage('/')}>
                                <a class="nav-link">Home</a>
                            </li>
                            <li style={{ cursor: 'pointer' }} class="nav-item" onClick={() => nextpage('/about')}>
                                <a class="nav-link">About</a>
                            </li>
                            <li style={{ cursor: 'pointer' }} class="nav-item" onClick={() => nextpage('/services')}>
                                <a class="nav-link">Services</a>
                            </li>
                            <li style={{ cursor: 'pointer' }} class="nav-item" onClick={() => nextpage('/projects')}>
                                <a class="nav-link">Projects</a>
                            </li>
                            <li style={{ cursor: 'pointer' }} class="nav-item" onClick={() => nextpage('/blog')}>
                                <a class="nav-link">Blogs</a>
                            </li>
                            <li style={{ cursor: 'pointer' }} class="nav-item" onClick={() => nextpage('/contact')}>
                                <a class="nav-link">Contact</a>
                            </li>
                        </ul>
                        <div class="ml-lg-4">
                            <form class="form-inline my-2 my-lg-0">
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                                    (00) 000-000 000
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>









        </>

        //  <header>
        //      <div class="header-area header-transparent">
        //          <div class="main-header ">
        //              <div class="header-bottom  header-sticky">
        //                  <div class="container-fluid">
        //                      <div class="row align-items-center">

        //                          <div class="col-xl-2 col-lg-2">
        //                              <div class="logo">
        //                                  <a href="index.html">
        //                                      <h1>
        //                                          Digiunciton
        //                                      </h1>
        //                                  </a>
        //                              </div>
        //                          </div>
        //                          <div class="col-xl-10 col-lg-10">
        //                              <div class="menu-wrapper  d-flex align-items-center justify-content-end">

        //                                  <div class="main-menu d-none d-lg-block">
        //                                      <nav>
        //                                          <ul id="navigation">
        //                                              <li onClick={()=>nextpage('/')} >
        //                                                      <a>Home</a>  
        //                                              </li>
        //                                              <li onClick={()=>nextpage('/about')} >  
        //                                                      <a >About</a>
        //                                              </li>
        //                                              <li onClick={()=>nextpage('/services')} >
        //                                                      <a>Services</a>
        //                                              </li>
        //                                              <li onClick={()=>nextpage('/projects')} >
        //                                                      <a>Projects</a>  
        //                                              </li>

        //                                               <li onClick={()=>nextpage('/blog')} >
        //                                                      <a>Blogs</a>  
        //                                              </li>
        //                                              <li onClick={()=>nextpage('/contact')} >
        //                                                      <a>Contact</a>
        //                                              </li>

        //                                              <li onClick={()=>nextpage('home')} >
        //                                                  <div class="header-right-btn ml-40">
        //                                                      <a href="#" class="btn">
        //                                                          <img src="assets/img/icon/smartphone.svg" alt="" />(00) 000-000 000</a>
        //                                                  </div>
        //                                              </li>
        //                                          </ul>
        //                                      </nav>
        //                                  </div>
        //                              </div>
        //                          </div>

        //                          <div class="col-12">
        //                              <div class="mobile_menu d-block d-lg-none"></div>
        //                          </div>
        //                      </div>
        //                  </div>
        //              </div>
        //          </div>
        //      </div>

        //  </header>

    )
}

export default Navbar