import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function CourseCard() {
    const router = useRouter()
    return (
        <div className="owl-item active col-md-5 col-sm-6" style={{ width: "323.75px", marginRight: "20px" }}><div className="item">
            <div className="fcrse_1 mb-20">
                <a href="#" onClick={() => router.push('/courses/emy')} className="fcrse_img">
                    {/* <> */}
                        <img src="https://stackify.com/wp-content/uploads/2018/09/Learn-Node-881x441.jpg" alt="" />
                        <div className="course-overlay">
                            <div className="badge_seller">Bestseller</div>
                            <div className="crse_reviews">
                                <i className="uil uil-star"></i>4.5
													</div>
                            <span className="play_btn1"><i className="uil uil-play"></i></span>
                            <div className="crse_timer">
                                25 hours
													</div>
                        </div>
                    {/* </> */}
                </a>
                <div className="fcrse_content">
                    <div className="eps_dots more_dropdown">
                        <a href="/courses/emy"><i className="uil uil-ellipsis-v"></i></a>
                        <div className="dropdown-content">
                            <span><i className="uil uil-share-alt"></i>Share</span>
                            <span><i className="uil uil-heart"></i>Save</span>
                            <span><i className="uil uil-ban"></i>Not Interested</span>
                            <span><i className="uil uil-windsock"></i>Report</span>
                        </div>
                    </div>
                    <div className="vdtodt">
                        <span className="vdt14">109k views</span>
                        <span className="vdt14">15 days ago</span>
                    </div>
                    <a href="#" onClick={() => router.push('/courses/emy')} className="crse14s">Complete Python Bootcamp: Go from zero to hero in Python 3</a>
                    <a href="#" className="crse-cate">Web Development | Python</a>
                    <div className="auth1lnkprce">
                        <p className="cr1fot">By <a href="#">John Doe</a></p>
                        <div className="prce142">$10</div>
                        <button className="shrt-cart-btn" title="cart"><i className="uil uil-shopping-cart-alt"></i></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
