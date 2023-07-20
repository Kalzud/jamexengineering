import {useLocation} from "react-router-dom";
import {useState} from "react";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsActive(!isActive);
    }
    return {isActive, toggleMenu, location}
}

