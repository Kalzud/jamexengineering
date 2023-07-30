/* @Author: Emmanuel O. Uduma
* This code is for the Home page, it contains the contents and styling that would be on the page*/


// ==============imports===============
import React from "react";
import {Button, createTheme, Grid, Paper, Typography} from "@mui/material";
import {purple} from "@mui/material/colors";
import styled from "@emotion/styled";
import {ThemeProvider} from "@emotion/react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// ==================Image imports==================
import blue_dot from '../img/blue_dot.jpg';
import safety from'../img/safety.jpg';
import creative from'../img/creative.jpg';
import sustain from'../img/sustainable.jpg';
import collab from'../img/collaborate.jpg';
import spark from'../img/spark.jpg';
import {Link} from "react-router-dom";


// ==================== consts used on page ===========================================================
const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
    },
});
const ColorButton = styled(Button)(({ theme }) => ({
    border: '2px solid #000000', // Set border style
    borderColor: 'blue', // Set border color based on theme
    borderRadius: '8px', // Set border radius
    color: 'black',
    backgroundColor: 'white',
    transition: 'width 0.50s ease-in-out',
    '&:hover': {
        backgroundColor: 'royalblue',
        borderColor: 'royalblue',
        width:'200px',
    },
    marginRight:'5px',
}));
const scrollToTop = () => {
    window.scrollTo(0, 0)
}
const help =() =>{

}
// Exported section
const Home = () =>{
     return(
            <>
                <div className='home_body'>
                    {/*First section (slogan and intro to company)======================================================================================================================================*/}
                    <div className='row firstDivBackground'>
                        <div className='col-sm-12'>
                            <div className='card sloganContainer'>
                                <img className='blueDot' src={blue_dot} alt='blue_dot'/>
                                <div className='row slogan'><h1>Build it like you imagine</h1></div>
                                <div className='row intro'>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the
                                        readable content of a page when looking at its layout. The point of
                                        using Lorem Ipsum is that it has a more-or-less normal distribution of
                                        letters, as opposed to using 'Content here, content here', making it
                                        look like readable English. Many desktop publishing packages and web
                                        page editors now use Lorem Ipsum as their default model text, and a
                                        search for 'lorem ipsum' will uncover many web sites still in their
                                        infancy. Various versions have evolved over the years, sometimes by
                                        accident, sometimes on purpose (injected humour and the like).
                                    </p>
                                </div>
                                <div className='row sloganButton'>
                                    <button className="btn">Find out more <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Second section (Values of the company)============================================================================================================================================*/}
                    <div className='row value'>
                        <div className='row valueHeader'>
                            <div className='col-sm-12'>
                                <div className='card' style={{border: 'none'}}>
                                    <div className='card-body'>
                                        <h1 className=''>Explore Our Core Values</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row valuePreamble'>
                            <div className='col-sm-12'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-text d-flex justify-content-center align-items-center'>
                                            We at Jamex Engineering and Construction firmly believe in consistently
                                            upholding our ideals. These are the four key principles that govern
                                            all we do. But that's not all; our complex tapestry of other values
                                            also contributes to the definition of who we are.
                                            To learn about all of our guiding principles, click the "find out more" button.
                                        </div>
                                        <div className='row valueLinkBtn' onClick={scrollToTop}>
                                            <Link  to="/value">
                                                <button className="btn">Find out More <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row valueList'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-6 col-lg-3'>
                                    <div className='card valueListCard'>
                                        <div className='card-body'>
                                            <div className='row valueListImg'><img src={safety} alt='safety'/></div>
                                            <div className='row d-flex justify-content-center align-items-center'><h2>Safety First, Always</h2></div>
                                            <div className='row'>
                                                <p>
                                                    Safety is the cornerstone of Jamex Engineering and Construction.
                                                    We believe that every success begins with a secure foundation.
                                                    From site to completion, we prioritize the protection of our team and clients.
                                                    Journey into our world of meticulous safety measures and discover how
                                                    we build not just structures but lasting peace of mind.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-6 col-lg-3'>
                                    <div className='card valueListCard'>
                                        <div className='card-body'>
                                            <div className='row valueListImg'><img src={creative} alt='create'/></div>
                                            <div className='row d-flex justify-content-center align-items-center'><h2>Integrity in Every Brick</h2></div>
                                            <div className='row d-flex justify-content-center align-items-center'>
                                                <p>
                                                    Integrity is the bedrock of Jamex Engineering and Construction.
                                                    We are unwavering in our commitment to transparency, trust, and open
                                                    communication. Step into our world of values, where actions speak
                                                    louder than words. Experience the genuine integrity that guides
                                                    every decision and project, shaping our identity and setting
                                                    the highest standards.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-6 col-lg-3'>
                                    <div className='card valueListCard'>
                                        <div className='card-body'>
                                            <div className='row valueListImg'><img src={creative} alt='create'/></div>
                                            <div className='row d-flex justify-content-center align-items-center'><h2>Innovating Beyond Boundaries</h2></div>
                                            <div className='row'>
                                                <p>
                                                    Innovation is in our DNA at Jamex Engineering and Construction.
                                                    We push the boundaries of what's possible, forging new paths in
                                                    the world of engineering and construction. Join us on a trailblazing
                                                    adventure where creativity takes flight, and imagination becomes reality.
                                                    Experience the power of innovative thinking that propels us to new heights.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-6 col-lg-3'>
                                    <div className='card valueListCard'>
                                        <div className='card-body'>
                                            <div className='row valueListImg'><img src={sustain} alt='sustain'/></div>
                                            <div className='row d-flex justify-content-center align-items-center'><h2>Sustainability: Where Quality Meets Responsibility</h2></div>
                                            <div className='row'>
                                                <p>
                                                    Quality and sustainability intertwine at Jamex Engineering and Construction.
                                                    Our projects stand the test of time, while also treading lightly on the planet.
                                                    Explore our world of sustainable excellence, where every structure is a
                                                    testament to our dedication to the environment and uncompromising quality.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row valueLinkBtn2' onClick={scrollToTop}>
                                <Link  to="/value">
                                    <button className="btn">Find out more about our Governing principles <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*Third section=====================================================================================================*/}
                    <div className='row service'>
                            <div className='col-sm-12 pt-4'>
                                <div className='blueBox'> </div>
                                <div className='orangeBox'> </div>

                                <div className='card'>
                                    <div className='card-body'>
                                        {/*=================================Heading Section ===========================*/}
                                            <div className='card helpLink'>
                                                <div className='card-body' onClick={scrollToTop}>
                                                    <Link  to="/service">
                                                        <div className='card-title'>
                                                            How Can We Help
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        {/*========================================================================================*/}
                                        <div className='card-title'>Welcome to Jamex Engineering and Construction: Unleashing the Power of Possibilities</div>
                                        <div className='card-text'>
                                            At Jamex Engineering and Construction, we stand at the forefront of innovation,
                                            bridging the gap between imagination and reality. With each project we undertake,
                                            we weave dreams into tangible masterpieces that shape landscapes and empower communities.
                                            Our commitment to excellence, sustainability, and customer-centricity defines every brick we lay,
                                            forging a legacy that withstands the test of time.
                                        </div>
                                        <div className='card-title'>Our Diverse Range of Services</div>
                                        <div className='card-text'>
                                            At Jamex, we believe that every challenge is an opportunity to engineer brilliance.
                                            Our portfolio of services spans a wide spectrum, catering to diverse needs across various sectors.
                                            Explore the boundless possibilities of our expertise, where every service is a testament to our
                                            relentless pursuit of excellence:
                                        </div>
                                        <div className='card-title'>Empowering Progress: From Illumination to Innovation</div>
                                        <div className='card-text'>
                                            At Jamex Engineering and Construction, we're on a transformative journey from
                                            illuminating the farthest corners of rural communities to engineering marvels
                                            that redefine architecture. Our commitment begins with rural electrification,
                                            bringing the life-changing power of electricity to every doorstep, and extends
                                            to constructing robust powerlines that connect hearts and ambitions, empowering
                                            progress to soar beyond limits.
                                            <br/>
                                            In the heart of our craft lies a symphony of safety, comfort, and ingenuity,
                                            where our housing electrical designs become spaces where families thrive and
                                            aspirations take flight. We engineer seamless power distribution, ensuring
                                            industries thrive, and communities flourish with energy that pulses with life.
                                            <br/>
                                            We embrace sustainability through solar panel installations, fueling a greener
                                            tomorrow where ecological harmony meets human advancement. Our services span
                                            beyond horizons, encompassing petroleum solutions, driving seamless energy
                                            flow for industries and growth.
                                            <br/>
                                            But it's not just what we build that defines us; it's the transformative power
                                            of collaboration and unwavering dedication. At Jamex Engineering and Construction,
                                            we stand united with our clients and partners, driven by shared values of integrity,
                                            sustainability, and customer focus.
                                            <br/>
                                            Join us on a journey of empowerment, where innovation meets illumination, and together,
                                            we shape a brighter future.
                                        </div>
                                        <div className='card-title'>Discover the Power Within</div>
                                        <div className='card-text'>
                                            We invite you to explore our range of services that redefine possibilities.
                                            Each service is more than a solution; it is a gateway to progress, sustainability,
                                            and a brighter future. To embark on this transformative journey and learn more
                                            about our services, click the link below. The power to build your dreams awaits.
                                        </div>
                                        <div className='row' onClick={scrollToTop}>
                                            <Link  to="/service">
                                                <button className="btn">Explore our Services <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>


                    {/*fourth section =================================================================================================================*/}
                    <div className='row project'>
                        {/*=================================Heading SEction ===========================*/}
                        <div className='card project-title' style={{border:'none'}}>
                            <div className='card-body' onClick={scrollToTop}>
                                <Link  to="/project">
                                    <div className='card-title'>
                                        Projects completed
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/*========================================================================================*/}
                        {/*<div className='row valueHeader d-flex justify-content-center align-items-center'><h1 className=''>Projects completed</h1></div>*/}
                        <div className='card l'>
                            <div className='card-body'>
                                <div className='row pImg'>
                                    <div className='col-sm-3'>
                                        <img src={creative} alt='create'/>
                                    </div>
                                    <div className='col-sm-9'>
                                        <div className='row valueHeader '><h1 className=''>How can we Help</h1></div>
                                        <div className='row'>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row sloganButton'>
                                    <button className="btn">Find out more <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                </div>
                            </div>
                        </div>

                        <div className='card l'>
                            <div className='card-body'>
                                <div className='row pImg'>
                                    <div className='col-sm-3'>
                                        <img src={creative} alt='create'/>
                                    </div>
                                    <div className='col-sm-9'>
                                        <div className='row valueHeader '><h1 className=''>How can we Help</h1></div>
                                        <div className='row'>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row sloganButton'>
                                    <button className="btn">Find out more <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                </div>
                            </div>
                        </div>

                        <div className='card l'>
                            <div className='card-body'>
                                <div className='row pImg'>
                                    <div className='col-sm-3'>
                                        <img src={creative} alt='create'/>
                                    </div>
                                    <div className='col-sm-9'>
                                        <div className='row valueHeader '><h1 className=''>How can we Help</h1></div>
                                        <div className='row'>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row sloganButton'>
                                    <button className="btn">Find out more <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='row'>

                    </div>
                </div>
            </>
        )
}
export default Home;









// "react-headroom": "^3.2.1",










































