import React from 'react'
import { CommentsData } from '../../utils/data'

const Comments = () => {

    const AllComments = CommentsData.map((data, index) => {
        const { img, comments, writer, date } = data
        return (
            <>
                <div class="comment-list">
                    <div class="single-comment justify-content-between d-flex">
                        <div class="user justify-content-between d-flex">
                            <div class="thumb">
                                <img src={img} alt="" />
                            </div>
                            <div class="desc">
                                <p class="comment">
                                    {comments}
                                </p>
                                <div class="d-flex justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <h5>
                                            <a href="#">{writer}</a>
                                        </h5>
                                        <p class="date">{date}</p>
                                    </div>
                                    <div class="reply-btn">
                                        <a href="#" class="btn-reply text-uppercase">reply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })

    return (

        <>
            <div class="comments-area">
                <h4>{AllComments.length} Comments</h4>
                {
                    AllComments
                }
            </div>
        </>
    )
}

export default Comments