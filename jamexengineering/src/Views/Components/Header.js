/* @Author: Emmanuel O. Uduma
* This code is for the Header and it contains code for the logo navbar and routing*/


// ===========================react components and necessities import=====================
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, NavLink,useLocation} from 'react-router-dom';
import {Grid} from "@mui/material";
import {FaBars, FaTimes} from 'react-icons/fa';
// import Headroom from "react-headroom/src";
// ==================Page imports=================
import Home from '../Home'
import About from "../About";
import Services from "../Services";
import Contact from "../Contact";
import Projects from "../Projects";
import Values from "../Values";
import SendEmail from "../sendEmail.php";
// ================Image imports==============
import logo from '../../img/dummy_logo.png';


//=======================Js Functions for Header export==============================================================================================================
// Function to hide navbar on scroll down and show it on scroll up
function showNavbar() {
    // define the variables
    let theEnd =0;
    let navbar = document.getElementsByClassName('Navbar')[1];
    // add a scroll event listener to the window and a function to run when a scroll happens
    window.addEventListener('scroll', function () {
        /*accessing the scroll position and assigning that to scrollTop
        *window.pageXOffset for horizontal scroll position and document.documentElement.scrollTop
        *some old browsers use the later so we would have them both here*/
        const scrollTop = window.scrollY;
        // window.pageXOffset || document.documentElement.scrollTop;
        /* Here it checks if the scrollTop position is greater than theEnd which is 0
        and if it is it means the user has scrolled down and it would move the navBar top by -70px
        essentially hiding it. the value of that scrollTop iis not assigned to theEnd so if there is
        another scroll and it is less than that then theEnd then we know that the user has scrolled upwards
        and the navBar top is 0 again essentially showing the navBar
         */
        if(scrollTop > theEnd){
            if(navbar)
            navbar.style.top = '-90px';
        }else{
            if(navbar)
            navbar.style.top ='0';
        }
        theEnd = scrollTop;
    })
}
//runs the show scroll bar function when teh page is loaded so attributes in function can be defined
document.addEventListener('DOMContentLoaded', showNavbar);

//Function for hidden elements animations when they are visible in DOM viewport
function observeHiddenElements() {
    /*intersection observer would take a callback function as an arguments
    and would be invoked whenever an observed element enters or exists the viewport*/
    const observer = new IntersectionObserver((entries) => {
        /*entries contain objects observed and information about them like visibility etc.
        with the for each it iterates through the objects
         */
        entries.forEach((entry) => {
            // for each it checks its isIntersecting property (is it visible to the viewport)
            if (entry.isIntersecting) {
                // if it is visible it applies the show css to the element (entry.target)
                entry.target.classList.add('show');
            } else {
                //else it would remove it so the normal hidden css is applied (entry.target)
                entry.target.classList.remove('show');
            }
        });
    });
    //gets all the elements with the hidden className
    const hiddenElements = document.querySelectorAll('.hidden');
    //iterates through all this elements and observes using the intersectionObserver
    hiddenElements.forEach((el) => observer.observe(el));

    // //for animation from right side
    // const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
    // hiddenElementsRight.forEach((el) => observer.observe(el));
}
function observeHiddenElementsRight() {
    /*intersection observer would take a callback function as an arguments
    and would be invoked whenever an observed element enters or exists the viewport*/
    const observer = new IntersectionObserver((entries) => {
        /*entries contain objects observed and information about them like visibility etc.
        with the for each it iterates through the objects
         */
        entries.forEach((entry) => {
            // for each it checks its isIntersecting property (is it visible to the viewport)
            if (entry.isIntersecting) {
                // if it is visible it applies the show css to the element (entry.target)
                entry.target.classList.add('showRight');
            } else {
                //else it would remove it so the normal hidden css is applied (entry.target)
                entry.target.classList.remove('showRight');
            }
        });
    });
    // //gets all the elements with the hidden className
    // const hiddenElements = document.querySelectorAll('.hidden');
    // //iterates through all this elements and observes using the intersectionObserver
    // hiddenElements.forEach((el) => observer.observe(el));

    //for animation from right side
    const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
    hiddenElementsRight.forEach((el) => observer.observe(el));
}

//function with that applies useEffect to the observeHiddenElements function it would be called inside the browserRouter as it uses useLocation
function HeaderContent() {
    // the useLocation() would retrieve the current url or route
    const location = useLocation();
    /*the useEffect would take our observeHiddenElements function and run it based on a dependency which in this case is the location
    so each time the location changes it runs the function.*/
    useEffect(() => {
        observeHiddenElements();
        observeHiddenElementsRight();
    }, [location]);
}
//active navLink styling
const navLinkStyles = ({isActive}) => {
    return{
        // blue when active , black when not
        color: isActive ? 'darkblue' : 'black',
        // bold when active, normal when not
        fontWeight: isActive ? 'bold' : 'normal',
    }
}
//Exported section=================================================================================
const Header = () => {
    /* Here useState is used to set the side bar state (isSidebarOpen) and create a way
     to update the state (setIsSidebarOpen()) here we set the state to be false */
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    //this would be used to update the state
    const handleToggleSidebar = () => {
        //when this function is called it sets the side sidebar to the opposite of its current state
        setIsSidebarOpen(!isSidebarOpen);
    };
    //Header content =============================
    return(
        <>
            <BrowserRouter>
                {/*loading animations on hidden content*/}
                <HeaderContent />
                {/*<Headroom>*/}
                {/* Navigation bar for bigger screens============================================================================================*/}
                <div className='Navbar'>
                    <Grid container>
                        <Grid item xs={2}>
                            <img className='logo' src={logo} alt="logo" />
                        </Grid>
                        <Grid item xs={8}>
                            <div className='NavItems'>
                                <Grid container spacing={15}>
                                    <Grid item xs={3}>
                                        <NavLink className="NavItem" to="/" style={navLinkStyles}>
                                            Home
                                        </NavLink>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <NavLink className="NavItem" to="/about" style={navLinkStyles}>
                                            About
                                        </NavLink>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <NavLink className="NavItem" to="/service" style={navLinkStyles}>
                                            Services
                                        </NavLink>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <NavLink className="NavItem" to="/contact" style={navLinkStyles}>
                                            Contacts
                                        </NavLink>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div className="MenuIcon" onClick={handleToggleSidebar}>
                                {/*shows icon depending on if the side bar is open*/}
                                {isSidebarOpen ? <FaTimes style={{paddingBottom:'32px'}}/> : <FaBars style={{paddingBottom:'32px'}}/>}
                            </div>
                        </Grid>
                </Grid>
                </div>
                {/*</Headroom>*/}
                {/*Sidebar for small screens===========================================================================================================*/}
                {/*in the classname it checks to see if the side bar is open*/}
                <div className={`sidebar ${isSidebarOpen ? 'sidebarOpen' : ''}`}>
                            <NavLink className="NavItem_mini_side" to="/project" style={navLinkStyles}>
                                Our Projects
                            </NavLink>
                            <NavLink className="NavItem_mini_side" to="/value" style={navLinkStyles}>
                                Our Values
                            </NavLink>
                            <NavLink className="NavItem_mini" to="/" style={navLinkStyles}>
                                Home
                            </NavLink>
                            <NavLink className="NavItem_mini" to="/about" style={navLinkStyles}>
                                About
                            </NavLink>
                            <NavLink className="NavItem_mini" to="/service" style={navLinkStyles}>
                                Services
                            </NavLink>
                            <NavLink className="NavItem_mini" to="/contact" style={navLinkStyles}>
                                Contacts
                            </NavLink>
                            <NavLink className="NavItem_mini" to="/project" style={navLinkStyles}>
                                Our Projects
                            </NavLink>
                            <NavLink className="NavItem_mini" to="/value" style={navLinkStyles}>
                                Our Values
                            </NavLink>
                </div>
                {/* Routing to various pages =========================================================================================*/}
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/service" element={<Services />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/project" element={<Projects />} />
                    <Route exact path="/value" element={<Values />} />
                    <Route exact path="/sendEmail.php" element={<SendEmail />} />
                </Routes>
            </BrowserRouter>
        </>
        )
}
//exports the header to be used where ever it is called
export default Header;