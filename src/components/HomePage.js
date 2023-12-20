import "../componentStyles/HomePage.css";
import myPhoto from "../Images/myPhoto.png";
function HomePage() {
    return (<div className="mainPageContainer">
        <div className="mainPageItemsContainer">
            <div className="mainPageText">
                <p className="skills">software and full stack developer</p>
                <p className="name">I'm Wyomesh Chandra Diwakar</p>
                <div className="btnContainer">
                    <button className="btn aboutMe">more about me <i class="fa-solid fa-arrow-right-long"></i></button>
                    <button className="btn">hire me <i class="fa-solid fa-arrow-right-long"></i></button>
                </div>
                <div className="copyrightContainer">
                    <p className="copyright">
                        Copyright &copy; 2023 All rights reserved.
                    </p>
                </div>
            </div>
            <div className="mainPagePhotoContainer">
                <div className="mainPagePhoto">
                    <img src={myPhoto} alt="My Photo" />
                </div>
            </div>
        </div>
    </div>);
}
export default HomePage;