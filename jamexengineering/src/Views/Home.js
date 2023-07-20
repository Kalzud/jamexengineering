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
// Exported section
const Home = () =>{
     return(
            <>
                <div className='home_body'>
                    {/*First section (slogan and intro to company)======================================================================================================================================*/}
                    <div className='row firstDivBackground'>
                        <div className='col-sm-12 hidden'>
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
                        <div className='row valueHeader d-flex justify-content-center align-items-center'><h1 className='hiddenRight'>Explore Our Core Values</h1></div>
                        <div className='row valuePreamble d-flex justify-content-center align-items-center'>
                            <p className='hiddenRight'>
                                We at Jamex Engineering and Construction firmly believe in consistently
                                upholding our ideals. These are the four key principles that govern
                                all we do. But that's not all; our complex tapestry of other values
                                also contributes to the definition of who we are.
                                To learn about all of our guiding principles, click the "find out more" button.
                            </p>
                        </div>
                        <div className='row valueList'>
                            <div className='col-sm-12 col-md-6 col-lg-3'>
                                <div className='card valueListCard'>
                                    <div className='card-body'>
                                        <div className='row d-flex justify-content-center align-items-center'><h2>Safety</h2></div>
                                        <div className='row valueListImg'><img src={safety} alt='safety'/></div>
                                        <div className='row'>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-3'>
                                <div className='card valueListCard'>
                                    <div className='card-body'>
                                        <div className='row d-flex justify-content-center align-items-center'><h2>Innovation</h2></div>
                                        <div className='row valueListImg'><img src={creative} alt='create'/></div>
                                        <div className='row d-flex justify-content-center align-items-center'>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-3'>
                                <div className='card valueListCard'>
                                    <div className='card-body'>
                                        <div className='row d-flex justify-content-center align-items-center'><h2>Sustainability</h2></div>
                                        <div className='row valueListImg'><img src={sustain} alt='sustain'/></div>
                                        <div className='row'>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-3'>
                                <div className='card valueListCard'>
                                    <div className='card-body'>
                                        <div className='row d-flex justify-content-center align-items-center'><h2>Collaboration</h2></div>
                                        <div className='row valueListImg'><img src={collab} alt='collaborate'/></div>
                                        <div className='row'>
                                            <p>
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters, as opposed to using 'Content here, content here', making it
                                                look like readable English.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Third section=====================================================================================================*/}
                    <div className='row service'>
                        <div className='row servicePreamble'>
                            <div className='col-sm-12 pt-4'>
                                <div className='serviceBox'>
                                    <div className=''>
                                        <div className='row'>
                                            <p>
                                                {/*It is a long established fact that a reader will be distracted by the*/}
                                                {/*readable content of a page when looking at its layout. The point of*/}
                                                {/*using Lorem Ipsum is that it has a more-or-less normal distribution of*/}
                                                {/*letters, as opposed to using 'Content here, content here', making it*/}
                                                {/*look like readable English.*/}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            {/*</div>*/}
                            {/*<div className='col-sm-12 pt-4'>*/}
                                <div className='card help'>
                                    <div className='card-body'>
                                        <div className='row valueHeader d-flex justify-content-center align-items-center'><h1 className=''>How can we Help</h1></div>
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
                                        <div className='row sloganButton'>
                                            <button className="btn">Find out more <i className="fa fa-arrow-right" aria-hidden="true"> </i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*fourth section =================================================================================================================*/}
                    <div className='row d'>
                        <div className='row valueHeader d-flex justify-content-center align-items-center'><h1 className=''>Projects completed</h1></div>
                        <div className='card l'>
                            <div className='card-body'>
                                <div className='row pImg'>
                                    <div className='col-sm-3'>
                                        <img src={creative} alt='create'/>
                                    </div>
                                    <div className='col-sm-9'>
                                        <div className='row valueHeader d-flex justify-content-center align-items-center'><h1 className=''>How can we Help</h1></div>
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
                                        <div className='row valueHeader d-flex justify-content-center align-items-center'><h1 className=''>How can we Help</h1></div>
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
                                        <div className='row valueHeader d-flex justify-content-center align-items-center'><h1 className=''>How can we Help</h1></div>
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










































