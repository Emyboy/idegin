import React, { useEffect, useState } from 'react'
import { withTheme } from '../../context/AppContext';
import firebase from '../../FirebaseApp'
import { useRouter } from 'next/router'

export default withTheme(props => {
    const { context } = props;
    const router = useRouter()
    const { username } = router.query;
    const [auth, setAuth] = useState(false);
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        const user = firebase.auth().currentUser
        console.log('current user --', user,);
        if (context.user) {
            if (username === context.user.displayName) {
                setAuth(true)
            }
        }
    }, [context.user])

    return (
        <div className="_216b01">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="section3125 rpt145">
                            <div className="row">
                                <div className="col-lg-7">
                                    <a href="#" className="_216b22">
                                        <span><i className="uil uil-windsock"></i></span>Report Profile
									</a>
                                    <div className="dp_dt150">
                                        <div className="img148">
                                            <img src="https://photos.angel.co/users/10624246-large?1581366252" alt="" />
                                        </div>
                                        <div className="prfledt1">
                                            <h2>{username}</h2>
                                            <span>Web Developer</span>
                                        </div>
                                    </div>
                                    <ul className="_ttl120">
                                        <li>
                                            <div className="_ttl121">
                                                <div className="_ttl122">Enroll Students</div>
                                                <div className="_ttl123">612K</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="_ttl121">
                                                <div className="_ttl122">Courses</div>
                                                <div className="_ttl123">8</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="_ttl121">
                                                <div className="_ttl122">Reviews</div>
                                                <div className="_ttl123">115K</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="_ttl121">
                                                <div className="_ttl122">Subscribers</div>
                                                <div className="_ttl123">452K</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-5">
                                    <a href="#" className="_216b12">
                                        <span><i className="uil uil-windsock"></i></span>Report Profile
									</a>
                                    <div className="rgt-145">
                                        {/* <ul className="tutor_social_links">
                                                <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#" className="ln"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#" className="yu"><i className="fab fa-youtube"></i></a></li>
                                            </ul> */}
                                        {
                                            auth ?
                                                <>
                                                    {/* <button className={`btn ${edit ? "btn-success" : "btn-info"} btn500`} onClick={() => setEdit(!edit)}>
                                                        <i className="uil uil-edit">{edit ? "Save" : "Edit Profile"}</i>
                                                    </button> */}
                                                </>
                                                : null
                                        }
                                    </div>
                                    <ul className="_bty149">
                                        <li><button className="subscribe-btn btn500">Subscribe</button></li>
                                        {auth && context.user ? <li><button onClick={context.logout} className="msg125 btn500">Logout</button></li> : null}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});
