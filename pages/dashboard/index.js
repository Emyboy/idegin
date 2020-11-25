import React from 'react'
import { withTheme } from '../../context/AppContext'

export default withTheme(props => {
    const { context } = props;
    React.useEffect(() => {
        context.setContextState({
            activePage: 'dashboard'
        })
    }, [context.activePage])
    return (
        <div className="row">
            <div className="col-lg-12">
                <h2 className="st_title"><i className="uil uil-apps"></i> Instructor Dashboard</h2>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card_dash">
                    <div className="card_dash_left">
                        <h5>Total Sales</h5>
                        <h2>$350</h2>
                        <span className="crdbg_1">New $50</span>
                    </div>
                    <div className="card_dash_right">
                        <img src="images/dashboard/achievement.svg" alt="" />
							</div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6">
                    <div className="card_dash">
                        <div className="card_dash_left">
                            <h5>Total Enroll</h5>
                            <h2>1500</h2>
                            <span className="crdbg_2">New 125</span>
                        </div>
                        <div className="card_dash_right">
                            <img src="images/dashboard/graduation-cap.svg" alt="" />
							</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="card_dash">
                            <div className="card_dash_left">
                                <h5>Total Courses</h5>
                                <h2>130</h2>
                                <span className="crdbg_3">New 5</span>
                            </div>
                            <div className="card_dash_right">
                                <img src="images/dashboard/online-course.svg" alt="" />
							</div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="card_dash">
                                <div className="card_dash_left">
                                    <h5>Total Students</h5>
                                    <h2>2650</h2>
                                    <span className="crdbg_4">New 245</span>
                                </div>
                                <div className="card_dash_right">
                                    <img src="images/dashboard/knowledge.svg" alt="" />
							</div>
                                </div>
                            </div>
                            {/* <div className="col-md-12">
                                <div className="card_dash1">
                                    <div className="card_dash_left1">
                                        <i className="uil uil-book-alt"></i>
                                        <h1>Jump Into Course Creation</h1>
                                    </div>
                                    <div className="card_dash_right1">
                                        <button className="create_btn_dash" onclick="window.location.href = 'create_new_course.html';">Create Your Course</button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
    )
});
