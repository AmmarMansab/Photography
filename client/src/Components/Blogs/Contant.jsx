import React from 'react'
import { BlogsData, Category, InstaData, RecentData, TagsData } from '../../utils/data'
import Blogsrightbar from '../BlogsRightbar/BlogsRightbar'
import { useNavigate } from 'react-router-dom'

const Contant = () => {


    const Navigate = useNavigate()

    const GoBlogsDetails=(data)=>{
        Navigate('/blogdetils',data)
    }

    // Blog Content

    const AllBlogs = BlogsData.map((data, index) => {
        const { img, heading, para, category, day, month, comments } = data
        return (
            <>
                <article class="blog_item">
                    <div class="blog_item_img" onClick={()=>GoBlogsDetails(data)} >
                        <img class="card-img rounded-0" src={img} alt="" />
                        <a href="#" class="blog_item_date">
                            <h3>{day}</h3>
                            <p>{month}</p>
                        </a>
                    </div>
                    <div class="blog_details">
                        <a class="d-inline-block" onClick={()=>GoBlogsDetails(data)} >
                            <h2 class="blog-head" style={{ color: '#2d2d2d' }}>{heading}</h2>
                        </a>
                        <p  onClick={()=>GoBlogsDetails(data)}  >{para}</p>
                        <ul class="blog-info-link">
                            <li><a href="#"><i class="fa fa-user"></i>{category}</a></li>
                            <li><a href="#"><i class="fa fa-comments"></i>{comments}</a></li>
                        </ul>
                    </div>
                </article>
            </>
        )
    })

  

    return (
        <>
            <section class="blog_area section-padding">
                <div class="container">
                    <div class="row">
                        {/* <!-- ////// Start Blog Contant ////// --> */}
                        <div class="col-lg-8 mb-5 mb-lg-0">
                            <div class="blog_left_sidebar">
                                {
                                    AllBlogs
                                }
                            </div>
                        </div>
                        {/* <!-- ////// Eng Blog Contant ////// --> */}
                        <Blogsrightbar />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contant