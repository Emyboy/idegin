import Head from 'next/head'
import CourseCard from '../components/CourseCard/CourseCard';
import { withTheme } from '../context/AppContext'


export default withTheme(props => {
  // console.log('home props ---', props);

  return (
    <div>
      <Head>
        {/* <title>Create Next App</title> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='row'>
        <div className='col-xl-9 col-lg-8'>

          <div className='section3125 mt-50 mt-0'>

            <h4 class="item_title">Featured Courses</h4>
            <a href="#" class="see150">See all</a>


            <div className='la5lo1'>
              <div className='owl-carousel featured_courses owl-theme owl-loaded owl-drag'>
                <div className='owl-stage-outer row' style={{ justifyContent: 'center' }}>

                  <CourseCard />
                  <CourseCard />
                  <CourseCard />
                  <CourseCard />
                  <CourseCard />

                </div>
              </div>
            </div>

          </div>

        </div>


        <div className='col-xl-3 col-lg-4'>
          <div className="right_side">


            <div class="fcrse_2 mb-30">
              <div class="tutor_img">
                <a href="my_instructor_profile_view.html"><img src="https://photos.angel.co/users/10624246-large?1581366252" alt="" /></a>												
								</div>
                <div class="tutor_content_dt">
                  <div class="tutor150">
                    <a href="my_instructor_profile_view.html" class="tutor_name">Chukwuemeka Ifeora</a>
                    <div class="mef78" title="Verify">
                      <i class="uil uil-check-circle"></i>
                    </div>
                  </div>
                  <div class="tutor_cate">Web Developer, and Teacher</div>
                  <ul class="tutor_social_links">
                    <li><a href="#" class="fb"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" class="tw"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#" class="ln"><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#" class="yu"><i class="fab fa-youtube"></i></a></li>
                  </ul>
                  {/* <div class="tut1250">
                    <span class="vdt15">615K Students</span>
                    <span class="vdt15">12 Courses</span>
                  </div> */}
                  {/* <a href="my_instructor_profile_view.html" class="prfle12link">Go To Profile</a> */}
                </div>
              </div>



            <div className="strttech120">
              <h4>Become an Instructor</h4>
              <p>Top instructors from around the world teach millions of students on Cursus. We provide the tools and skills to teach what you love.</p>
              <button className="Get_btn" onclick="window.location.href = '#';">Start Teaching</button>
            </div>



          </div>
        </div>


      </div>
    </div>
  )
});
