import React from 'react'
import { withTheme } from '../../context/AppContext'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default withTheme(props => {
    const { context } = props;
    const router = useRouter()
    return (
        <nav className={context.showNav ? "vertical_nav" : "vertical_nav vertical_nav__minify vertical_nav vertical_nav__opened"}>
            <div className="" id="">
                <div className="left_section">
                    <ul>
                        <li className="menu--item">
                            <a href="#" onClick={() => router.push('/')}  className="menu--link active" title="Home">
                                <i className="uil uil-home-alt menu--icon"></i>
                                <span className="menu--label">Home</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="live_streams.html" className="menu--link" title="Live Streams">
                                <i className="uil uil-user menu--icon"></i>
                                <span className="menu--label">Login</span>
                            </a>
                        </li>
                    </ul>
                </div>



                {/*                 
                <div className="left_section pt-2">
                    <ul>
                        <li className="menu--item">
                            <a href="setting.html" className="menu--link" title="Setting">
                                <i className="uil uil-cog menu--icon"></i>
                                <span className="menu--label">Setting</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="help.html" className="menu--link" title="Help">
                                <i className="uil uil-question-circle menu--icon"></i>
                                <span className="menu--label">Help</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="report_history.html" className="menu--link" title="Report History">
                                <i className="uil uil-windsock menu--icon"></i>
                                <span className="menu--label">Report History</span>
                            </a>
                        </li>
                        <li className="menu--item">
                            <a href="feedback.html" className="menu--link" title="Send Feedback">
                                <i className="uil uil-comment-alt-exclamation menu--icon"></i>
                                <span className="menu--label">Send Feedback</span>
                            </a>
                        </li>
                    </ul>
                </div> */}


                {/* <div className="left_footer">
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
                    <div className="left_footer_content">
                        <p>© 2020 <strong>Cursus</strong>. All Rights Reserved.</p>
                    </div>
                </div> */}
            </div>
        </nav>
    )
});
