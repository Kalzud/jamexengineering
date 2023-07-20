import React from "react";
import {Typography} from "@mui/material";
import safety from "../img/safety.jpg";
import creative from "../img/creative.jpg";
import sustain from "../img/sustainable.jpg";
import collab from "../img/collaborate.jpg";


const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
};


const Contact = () => {
    return(
        <>
            {/*contact first part ================================================================================================*/}
                <div className='row contactTop'>
                    <div className='col-sm-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <h2>
                                    Starting a new project or wanting to collaborate with us on exsiting projects?
                                </h2>
                                <h2 className='blue'>Let us Talk!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            {/*contact second part=============================================================================*/}
                <div className='row contactMid'>
                    <div className='row contactOptions'>
                        <div className='col-sm-12 col-md-4 col-lg-4 px-1'>
                            <div className='card contactOptionsList'>
                                <div className='card-body'>
                                    <div className='card-img-top contactIcon'>
                                        <i className="fa fa-map-marker" aria-hidden="true"> </i>
                                    </div>
                                    <div className='card-title'>
                                        <h2>Location</h2>
                                    </div>
                                    <div className='card-text'>
                                        {/* link to search the address on Google Maps */}
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=BLOCK3,FLAT18,AMANSAROAD,CALABAR,CROSSRIVER"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            BLOCK3, FLAT18, AMANSAROAD, CALABAR, CROSSRIVER
                                        </a>
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4 col-lg-4 px-1'>
                            <div className='card contactOptionsList'>
                                <div className='card-body'>
                                    <div className='card-img-top contactIcon'>
                                        <i className="fa fa-phone" aria-hidden="true"> </i>
                                    </div>
                                    <div className='card-title'>
                                        <h2>Phone-Number</h2>
                                    </div>
                                    <div className='card-text'>
                                        +44 (0)7310 881537<br/>
                                        +234 (0)9153 376 188<br/>
                                        +234 (0)8063 922 777
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-4 col-lg-4 px-1'>
                            <div className='card contactOptionsList'>
                                <div className='card-body'>
                                    <div className='card-img-top contactIcon'>
                                        <i className="fa fa-envelope" aria-hidden="true"> </i>
                                    </div>
                                    <div className='card-title'>
                                        <h2>Email</h2>
                                    </div>
                                    <div className='card-text'>
                                        {/* Mailto component to create clickable email links */}
                                        <Mailto email="udumakalz@gmail.com" subject=" " body=" ">
                                            udumakalz@gmail.com
                                        </Mailto>
                                        <br />
                                        <Mailto email="jamesouduma@yahoo.com" subject=" " body=" ">
                                            jamesouduma@yahoo.com
                                        </Mailto>
                                        .
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/*last part=======================================================================================*/}
            <div className='row contactBottom'>
                <div className='col-sm-12 col-md-6'>
                    <div className='card colCard' style={{border:"none"}}>
                        <div className='card-body'>
                            <div className='card-text'>
                                Here at Jamex Engineering and construction we strive to
                                make ourselves easily accessible so you could contact us
                                on any of the above mediums or follow any of our social
                                media pages and give us a message there. Likewise you
                                could simply write a message detailing the area you need help
                                with right in the message box beside or below. Remember to
                                put in the correct Email, Number and Name.
                                Thank you very much.
                                {/*<ul>*/}
                                {/*    <li><i className="fa fa-youtube"></i>Youtube</li>*/}
                                {/*    <li><i className="fa fa-instagram"></i>Instagram</li>*/}
                                {/*    <li><i className="fa fa-facebook"></i>Facebook</li>*/}
                                {/*    <li><i className="fa fa-linkedin"></i>Linkedin</li>*/}
                                {/*    <li><i className="fa fa-whatsapp" aria-hidden="true"></i>Whatsapp</li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <div className='card colCard' style={{border:"none"}}>
                        <div className='card-body'>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Name</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Email Address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Phone Number</label>
                                    <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="+234 (0)706699401"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"> </textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;






// <div className='col-sm-12 col-md-6 g'>
//     <div className='row'>
//         <p>
//             It is a long established fact that a reader will be distracted by the
//             readable content of a page when looking at its layout.
//             It is a long established fact that a reader will be distracted by the
//             readable content of a page when looking at its layout.
//         </p>
//     </div>
//     <div className='row'>
//         <ul>
//             <li>Youtube</li>
//             <li>Instagram</li>
//             <li>Facebook</li>
//             <li>Linkedin</li>
//             <li>Whatsapp</li>
//         </ul>
//     </div>
// </div>
// <div className='col-sm-12 col-md-6'>
//     <div className='row'>
//         <div className='card r'>
//             <div className='card-body'>
//                 <div className='row'><i className="fa fa-map-marker" aria-hidden="true"> </i></div>
//                 <div className='row d-flex justify-content-center align-items-center'><h2>Location</h2></div>
//                 <div className='row'>
//                     <p>
//                         It is a long established fact that a reader will be distracted by the
//                         readable content of a page when looking at its layout.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className='row'>
//         <div className='card r'>
//             <div className='card-body'>
//                 <div className='row'><i className="fa fa-phone" aria-hidden="true"> </i></div>
//                 <div className='row d-flex justify-content-center align-items-center'><h2>Phone-Number</h2></div>
//                 <div className='row d-flex justify-content-center align-items-center'>
//                     <p>
//                         +234 (0) 80 639 22 777<br/>
//                         +234 (0) 80 639 22 777<br/>
//                         +234 (0) 80 639 22 777
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className='row'>
//         <div className='card r'>
//             <div className='card-body'>
//                 <div className='row'><i className="fa fa-envelope" aria-hidden="true"> </i></div>
//                 <div className='row d-flex justify-content-center align-items-center'><h2>Email</h2></div>
//                 <div className='row'>
//                     <p>
//                         udumakalz@gmail.com
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
