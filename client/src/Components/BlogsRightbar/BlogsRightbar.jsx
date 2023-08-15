import React from 'react'
import { Category, InstaData, RecentData, TagsData } from '../../utils/data'

const Blogsrightbar = () => {


    ////// InstaFeed //////

    const instafeed = InstaData.map((data, index) => {
        const { img } = data
        return (
            <>
                <li>
                    <a href="#">
                        <img class="img-fluid" src={img} alt="" />
                    </a>
                </li>
            </>
        )
    })

     ////// Category //////

    const AllCategory = Category.map((data, index) => {
        const { name, number } = data
        return (
            <>
                <li>
                    <a href="#" class="d-flex">
                        <p>{name}</p>
                        <p>({number})</p>
                    </a>
                </li>
            </>
        )
    })

     ////// RecentPost //////

    const RecentPost = RecentData.map((data, index) => {
        const { img, para, date } = data
        return (
            <>
                <div class="media post_item">
                    <img src={img} alt="post" />
                    <div class="media-body">
                        <a href="blog_details.html">
                            <h3 style={{ color: '#2d2d2d' }}>{para}</h3>
                        </a>
                        <p>{date}</p>
                    </div>
                </div>
            </>
        )
    })

     ////// Tags //////

    const Tags = TagsData.map((data, index) => {
        const { name } = data
        return (
            <>
                <li>
                    <a href="#">{name}</a>
                </li>
            </>
        )
    })


    return (
        <>

            {/* <!-- ////// start side bar /////// --> */}
            <div class="col-lg-4">
                <div class="blog_right_sidebar">
                    <aside class="single_sidebar_widget search_widget">
                        <form action="#">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder='Search Keyword'
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Search Keyword'" />
                                    <div class="input-group-append">
                                        <button class="btns" type="button"><i class="ti-search"></i></button>
                                    </div>
                                </div>
                            </div>
                            <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                type="submit">Search</button>
                        </form>
                    </aside>
                    {/* //// start category //// */}
                    <aside class="single_sidebar_widget post_category_widget">
                        <h4 class="widget_title" style={{ color: '#2d2d2d' }}>Category</h4>
                        <ul class="list cat-list">
                            {
                                AllCategory
                            }
                        </ul>
                    </aside>

                    {/* //// end category //// */}

                    <aside class="single_sidebar_widget popular_post_widget">
                        <h3 class="widget_title" style={{ color: '#2d2d2d' }}>Recent Post</h3>
                        {
                            RecentPost
                        }
                    </aside>

                    <aside class="single_sidebar_widget tag_cloud_widget">
                        <h4 class="widget_title" style={{ color: '#2d2d2d' }}>Tag Clouds</h4>
                        <ul class="list">
                            {
                                Tags
                            }
                        </ul>
                    </aside>

                    {/*///// insta feed start /////*/}

                    <aside class="single_sidebar_widget instagram_feeds">
                        <h4 class="widget_title" style={{ color: '#2d2d2d' }}>Instagram Feeds</h4>

                        <ul class="instagram_row flex-wrap">

                            {
                                instafeed
                            }
                        </ul>
                    </aside>

                    {/*///// insta feed end /////*/}

                    <aside class="single_sidebar_widget newsletter_widget">
                        <h4 class="widget_title" style={{ color: '#2d2d2d' }}>Newsletter</h4>
                        <form action="#">
                            <div class="form-group">
                                <input type="email" class="form-control" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Enter email'" placeholder='Enter email' required />
                            </div>
                            <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                type="submit">Subscribe</button>
                        </form>
                    </aside>
                </div>
            </div>
            {/* <!-- //////// end side bar //////// --> */}

        </>
    )
}

export default Blogsrightbar