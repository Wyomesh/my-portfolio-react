import "../componentStyles/Navbar.css";
function Navbar() {
    return (<div className="navbarContainer">
        <div className="navbarItemsContainer">
            <ul className="navbarItems">
                <li className="homePage navbarItem">
                    <a className="navItems" href="#">Home</a>
                </li>
                <li className="aboutPage navbarItem">
                    <a className="navItems" href="#">About</a>
                </li>
                <li className="servicesPage navbarItem">
                    <a className="navItems" href="#">Services</a>
                </li>
                <li className="experiencesPage navbarItem">
                    <a className="navItems" href="#">Experiences</a>
                </li>
                <li className="worksPage navbarItem">
                    <a className="navItems" href="#">Works</a>
                </li>
                <li className="blogPage navbarItem">
                    <a className="navItems" href="#">Blog</a>
                </li>
                <li className="contactPage navbarItem">
                    <a className="navItems" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </div>);
}
export default Navbar;