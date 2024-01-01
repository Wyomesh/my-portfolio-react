import "../componentStyles/Navbar.css";
import { NavLink, Router } from "react-router-dom";
function Navbar() {
    return (<div className="navbarContainer">
        <div className="navbarItemsContainer">
            <ul className="navbarItems">
                <li className="homePage navbarItem">
                    <NavLink className="navItems" to="/">Home</NavLink>
                </li>
                <li className="aboutPage navbarItem">
                    <NavLink className="navItems" to="/about">About</NavLink>
                </li>
                <li className="servicesPage navbarItem">
                    <NavLink className="navItems" to="/services">Services</NavLink>
                </li>
                <li className="experiencesPage navbarItem">
                    <NavLink className="navItems" to="/experiences">Experiences</NavLink>
                </li>
                <li className="worksPage navbarItem">
                    <NavLink className="navItems" to="works">Works</NavLink>
                </li>
                <li className="blogPage navbarItem">
                    <NavLink className="navItems" to="/blogs">Blog</NavLink>
                </li>
                <li className="contactPage navbarItem">
                    <NavLink className="navItems" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
    </div>);
}
export default Navbar;