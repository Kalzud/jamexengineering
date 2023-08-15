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
                <div className='row homePage'>
                    {/*=================================================================================First section===============================================================*/}
                    <div className='col-sm-12'>
                        <div className='row firstDivBackground'>
                            <div className='card top'>
                                <div className='card sloganContainer'>
                                    <img className='blueDot' src={blue_dot} alt='blue_dot'/>
                                    <div className='row slogan'><h1>Build it like you imagine</h1></div>
                                    <div className='row intro'>
                                        <p>
                                            Jamex Engineering and Construction is a pioneering firm that envisions a transformative future for infrastructure especially in Nigeria's landscape. Established in 2008, Jamex embarked on a journey of engineering excellence, contributing to significant projects such as the electrification of the renowned Ibom Airport terminal and implementing transformative transformer installations for schools, companies, and estates. The company's rich history showcases its expertise and dedication to empowering communities through construction and electrification solutions.
                                        </p>
                                    </div>
                                    <div className='row sloganButton'>
                                        <button className="btn">Find out more <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*=================================================================================Second section===============================================================*/}
                    <div className='col-sm-12'>
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
                    </div>

                    {/*=================================================================================Third section===============================================================*/}
                    <div className='col-sm-12'>
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
                    </div>

                    {/*=================================================================================Fourth section===============================================================*/}
                    <div className='col-sm-12'>
                        <div className='row project'>
                            {/*=================================Heading Section ===========================*/}
                            <div className='card project-title' style={{border:'none', backgroundColor:'transparent'}}>
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h1>Projects completed</h1>
                                    </div>
                                </div>
                            </div>
                            {/*=================================Preamble Section ===========================*/}
                            <div className='card project-preambleHome' style={{borderLeft:'3px solid black',borderRight:'3px solid black', borderBottom:'none', borderTop:'none', backgroundColor:'transparent'}}>
                                <div className='card-body'>
                                    <div className='card-text'>
                                        Here are some of our projects but not all
                                        We invite you to explore our range of services that redefine possibilities.
                                        Each service is more than a solution; it is a gateway to progress, sustainability,
                                    </div>
                                </div>
                            </div>
                            {/*========================================================================================*/}
                            <div className='row projectListHome'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-text'>
                                            Rural Electrification of Uzii town in Ideato Local Government Area, Imo State.
                                        </div>
                                        {/*========*/}
                                        <div className='row pBtn' onClick={scrollToTop}>
                                            <Link  to="/project">
                                                <button className="btn">Find out more <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                            </Link>
                                        </div>
                                        {/*===========*/}
                                    </div>
                                </div>
                                {/*===================================================================================*/}

                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-text'>
                                            Rural Electrification of Mkpanak Community, Ibeno Local Government Area, Akwa Ibom State
                                        </div>
                                        {/*========*/}
                                        <div className='row pBtn' onClick={scrollToTop}>
                                            <Link  to="/project">
                                                <button className="btn">Find out more <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                            </Link>
                                        </div>
                                        {/*===========*/}
                                    </div>
                                </div>
                                {/*===================================================================================*/}

                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='card-text'>
                                            Rural electrification of Essit Udua in Ibeno Local Government Area of Akwa Ibom State
                                        </div>
                                        {/*========*/}
                                        <div className='row pBtn' onClick={scrollToTop}>
                                            <Link  to="/project">
                                                <button className="btn">Find out more <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                            </Link>
                                        </div>
                                        {/*===========*/}
                                    </div>
                                </div>
                                {/*===================================================================================*/}
                            </div>
                            <div className='row projectLinkBtn2' onClick={scrollToTop}>
                                <Link  to="/project">
                                    <button className="btn">Explore more of our projects <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*=================================================================================Fifth section===============================================================*/}
                    <div className='col-sm-12'>
                        <div className='row choose'>
                            {/*=================================Heading Section ===========================*/}
                            <div className='card choose-title' style={{border:'none', backgroundColor:'transparent'}}>
                                <div className='card-body'>
                                    <div className='card-title'>
                                        <h1>Why Choose Us?</h1>
                                    </div>
                                </div>
                            </div>
                            {/*=================================Preamble Section ===========================*/}
                            <div className='card choose-text' style={{borderBottom:'none',  backgroundColor:'transparent'}}>
                                <div className='card-body'>
                                    <div className='card-text'>
                                        Established in 2008, Jamex Engineering and Construction
                                        is making a triumphant return to the industry,
                                        armed with cutting-edge technology and innovative solutions that set us
                                        apart from the competition. As a company with a rich history of successfully
                                        executed projects for communities and major oil companies in the Nigeria oil
                                        sector, we have played a significant role in bolstering the country's economy.
                                        With a renewed commitment to experimentation, adaptation, integrity, transparency,
                                        and sustainability, we firmly believe that choosing Jamex Engineering and Construction
                                        for your projects will unlock unparalleled benefits for your ventures.
                                    </div>

                                    {/*=========================================================*/}
                                    <div className='row reasons'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <div className='card-title'>Pioneers of Innovation</div>
                                                <div className='card-text'>
                                                    [Your Engineering and Construction Company] is not just another player in the market; we are trendsetters and pioneers of innovation. Our years of experience, coupled with the latest advancements in technology, enable us to bring fresh perspectives and out-of-the-box solutions to every project we undertake. From smart construction techniques to utilizing AI and machine learning, we consistently push the boundaries of what is possible to deliver superior outcomes.
                                                </div>
                                            </div>
                                        </div>
                                        {/*=======================================================*/}

                                        <div className='card'>
                                            <div className='card-body'>
                                                <div className='card-title'>Proven Track Record</div>
                                                <div className='card-text'>
                                                    Our legacy speaks for itself. During our active years, we successfully completed numerous projects for communities and oil companies in the Nigeria oil sector. Our contributions have played a vital role in driving economic growth and development. We take pride in our ability to deliver on time and within budget, ensuring that our clients' objectives are met with exceptional quality.
                                                </div>
                                            </div>
                                        </div>
                                        {/*=======================================================*/}

                                        <div className='card'>
                                            <div className='card-body'>
                                                <div className='card-title'>Community-Centric Approach</div>
                                                <div className='card-text'>
                                                    At [Your Engineering and Construction Company], we believe that the key to sustainable growth lies in empowering local communities. Our company philosophy revolves around engaging with communities to understand their unique needs and challenges. By involving them in the decision-making process, we build trust and foster long-lasting relationships, leading to more successful and socially responsible projects.
                                                </div>
                                            </div>
                                        </div>
                                        {/*=======================================================*/}

                                        <div className='card'>
                                            <div className='card-body'>
                                                <div className='card-title'>Strategic Partnerships</div>
                                                <div className='card-text'>
                                                    We have cultivated strong partnerships with various stakeholders, including government bodies, international organizations, and industry experts. Our alliances ensure access to valuable resources, expert knowledge, and a broader support network, which ultimately benefits our clients and enhances project outcomes.
                                                </div>
                                            </div>
                                        </div>
                                        {/*=======================================================*/}

                                        <div className='card'>
                                            <div className='card-body'>
                                                <div className='card-title'>Adapting to Change</div>
                                                <div className='card-text'>
                                                    Change is the only constant, and [Your Engineering and Construction Company] embraces it wholeheartedly. We understand that each project is unique, and circumstances evolve over time. Our adaptability enables us to navigate challenges effectively and capitalize on emerging opportunities. This flexibility ensures that our clients receive dynamic and future-proof solutions that cater to their evolving needs.
                                                </div>
                                            </div>
                                        </div>
                                        {/*=======================================================*/}

                                        <div className='card'>
                                            <div className='card-body'>
                                                <div className='card-title'>Commitment to Sustainability</div>
                                                <div className='card-text'>
                                                    Sustainability is not just a buzzword for us; it is a fundamental principle that underpins every aspect of our operations. From employing environmentally friendly construction practices to implementing energy-efficient solutions, [Your Engineering and Construction Company] takes a proactive approach to reduce our carbon footprint and contribute positively to the environment.
                                                </div>
                                            </div>
                                        </div>
                                        {/*=======================================================*/}

                                        <div className='card'>
                                            <div className='card-body'>
                                                <div className='card-title'>Safety and Compliance</div>
                                                <div className='card-text'>
                                                    The safety of our workforce and clients is paramount to us. We adhere to strict safety protocols and comply with all industry regulations and standards. Our commitment to safety ensures that projects progress smoothly without compromising on the well-being of any stakeholder.
                                                </div>
                                            </div>
                                        </div>
                                        {/*=======================================================*/}
                                    </div>

                                    <div className='card-text'>
                                        Conclusion: Choosing Jamex Engineering and Construction over others means opting
                                        for a partner with a proven track record, forward-thinking mindset, and a passion
                                        for sustainable development. We are more than just a construction company; we are pioneers,
                                        collaborators, and agents of change. Entrust your projects to us, and together,
                                        we will shape a brighter future for communities, industries, and the environment.
                                    </div>
                                </div>
                            </div>
                            {/*========================================================================================*/}
                        </div>
                    </div>

                </div>
            </>
        )
}
export default Home;


