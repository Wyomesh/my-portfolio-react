import "../componentStyles/About.css";
import "../componentStyles/Footer.css";
import Footer from "./Footer";
import NavbarHorizontal from "./NavbarHorizontal";
import profilePhoto from "../Images/profilePhoto.png";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="aboutUsContainer">
      <div className="aboutUsItems">
        <img className="image" src={profilePhoto} alt="Profile Photo" />
        <p className="roles">
          <span className="myName">Wyomesh Chandra Diwakar - </span>Full Stack
          and Software Developer
        </p>
        <div className="summaryContainer">
          <h2 className="discription">Summary</h2>
          <p className="summary">
            Enthusiastic and detail-oriented Software Developer with a strong
            foundation in computer science and a passion for problem-solving. A
            recent graduate with hands-on experience in various programming
            languages and a commitment to staying up to date with emerging
            technologies. Eager to contribute skills in software development,
            collaborative teamwork, and a proactive approach to creating
            innovative solutions.
          </p>
        </div>
        <div className="educationContainer">
          <h2 className="discription">Education</h2>
          <p className="summary">
            Bachelors of Technology in Electronics and Communication Engineering
            <br />
            National Institute of Technology Patna-800005, Bihar, INDIA
            <br />
            Graduation date : June 2024
          </p>
        </div>
        <div className="skillsContainer">
          <h2 className="discription">Skills</h2>
          <div className="programmingLanguages">
            <h3 className="discription">Programming Languages</h3>
            <p className="summary">
              Proficient in C, C++, JAVA, JavaScript
              <br />
              Familiar with Python
            </p>
          </div>
          <div className="webDevelopement">
            <h3 className="discription">Web Developement</h3>
            <p className="summary">
              <span>Frontend :</span> HTML(Hyper Text Markup Language),
              CSS(Cascading Style Sheets), React Js
            </p>
            <p className="summary">
              <span>Backend :</span> Node Js, Express Js
            </p>
            <p className="summary">
              <span>Database :</span> MongoDB
            </p>
            <p className="summary">Version Control : Git and Github</p>
            <p className="summary">
              Tools : Visual Studio Code, CodeSandbox, IntelliJ Idea, Vercel
            </p>
          </div>
          <div className="softSkills">
            <h3 className="discription">Soft Skills</h3>
            <p className="summary">
              Time Management, Communication skill, Adaptability , Problem
              solving skill, Teamwork, Creativity, Leadership, Interpersonal
              skills, Work ethic, Attention to detail
            </p>
          </div>
        </div>
        <div className="projectsContainer">
          <h2 className="discription">Projects</h2>
          <div className="framerClone">
            <p className="summary">
              <Link
                className="projects"
                to={"https://milton-framer-template-clone-kappa.vercel.app/"}
                target="_blank"
              >
                Framer Template clone
              </Link>
              <p className="summary">
                - Clone of a milton framer template UI (front end) made during
                an internship test.
                <br />- Implemented using ReactJs.
              </p>
            </p>
          </div>
          <div className="todo">
            <p className="summary">
              <Link
                className="projects"
                to={"https://to-do-list-red-xi.vercel.app/"}
                target="_blank"
              >
                To Do List
              </Link>
              <p className="summary">
                - Deployed a fully functional to do list app using HTML, CSS,
                JavaScript and local storage of browser.
                <br />- This app provide the functionality of adding a task,
                deleting a task, mark as done a task along with checking all
                completed tasks, all remaining tasks and all tasks (completed as
                well as remaining).
              </p>
            </p>
          </div>
          <div className="myPortfolio">
            <p className="summary">
              <Link
                className="projects"
                to={"https://my-portfolio-react-drab.vercel.app/"}
                target="_blank"
              >
                My Portfolio
              </Link>
              <p className="summary">
                - Deployed this website using ReactJs.
                <br />- This website details about me, my skills and ability
                along with other functions like contacting with me using a form
                .
              </p>
            </p>
          </div>
        </div>
        {/* <div className="internshipsContainer">
          <h2 className="discription">Internship</h2>
          <p>Front end developer at East central Railway</p>
        </div> */}
        <div className="certificationsContainer">
          <h2 className="discription">Certifications</h2>
          <p className="summary">
            <Link
              className="certificates"
              to={
                "https://drive.google.com/file/d/1VjU59FQkT35RiuYb4NVQqXMxPHJjkG9s/view?usp=drive_link"
              }
              target="_blank"
            >
              Programming in Modern C++
            </Link>
            <p className="summary">
              Certified by : NPTEL Online Certification
              <br />
              Duration : Jan 2022 - April 2022
            </p>
          </p>
          <p className="summary">
            <Link
              className="certificates"
              to={
                "https://drive.google.com/file/d/1XjvtGMhIIehdjC9mHvE1YTWUqKdYQGNo/view?usp=drive_link"
              }
              target="_blank"
            >
              The Joy of Computing using Python
            </Link>
            <p className="summary">
              Certified by : NPTEL Online Certification
              <br />
              Duration : Jan 2023 - April 2023
            </p>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
