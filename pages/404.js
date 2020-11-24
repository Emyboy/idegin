import React from 'react'
import { useRouter } from 'next/router'

const date = new Date();

export default function notfound() {
    const router = useRouter()
    return (
        <div className="col-md-12">
            <div className="cmtk_group">
                <div className="ct-logo">
                    <a href="#" onClick={() => router.push('/')} ><img src="images/ct_logo.svg" alt=""/></a>
						</div>
                    <div className="cmtk_dt">
                        <h1 className="title_404">404</h1>
                        <h4 className="thnk_title1">The page you were looking for could not be found.</h4>
                        <a href="#" onClick={() => router.push('/')}  className="bk_btn">Go To Homepage</a>
                    </div>
                    <div className="tc_footer_main">
                        {/* <div className="tc_footer_left">
                            <ul>
                                <li><a href="about_us.html">About</a></li>
                                <li><a href="press.html">Press</a></li>
                                <li><a href="contact_us.html">Contact Us</a></li>
                                <li><a href="coming_soon.html">Advertise</a></li>
                                <li><a href="coming_soon.html">Developers</a></li>
                                <li><a href="terms_of_use.html">Copyright</a></li>
                                <li><a href="terms_of_use.html">Privacy Policy</a></li>
                                <li><a href="terms_of_use.html">Terms</a></li>
                            </ul>
                        </div> */}
                        <div className="tc_footer_right">
                        <p>© {date.getFullYear()} <strong>Cursus</strong>. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
