import "../componentStyles/About.css";
import NavbarHorizontal from "./NavbarHorizontal";
function About() {
    return (<div className="aboutUsContainer">
        <section className="aboutUsLinkWith">
            <div className="homeLink">
                <NavbarHorizontal />
            </div>
            <div className="linkTracker">
                <li>Home <i class="fa-solid fa-greater-than"></i></li>
                <li>About Us<i class="fa-solid fa-greater-than"></i></li>
            </div>
        </section>
        <section className="skillSection">
            
        </section>
        <section className="footerSection">

        </section>
    </div>)
}
export default About;