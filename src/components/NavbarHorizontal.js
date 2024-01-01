import "../componentStyles/NavbarHorizontal.css";
import { useState } from "react";
function NavbarHorizontal() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown((isShown) => !isShown);
  };
  return (
    <div className="navbarHorizontalContainer">
      {!isShown && (
        <div className="bars" onClick={handleClick}>
          <i class="fa-solid fa-bars"></i>
        </div>
      )}
      {isShown && (
        <div className="closeBars" onClick={handleClick}>
          <i class="fa-solid fa-xmark"></i>
          <ul>
            <li>
              <a>
                Home<i class="fa-solid fa-greater-than"></i>
              </a>
            </li>
            <li>
              <a>
                About<i class="fa-solid fa-greater-than"></i>
              </a>
            </li>
            <li>
              <a>
                Services<i class="fa-solid fa-greater-than"></i>
              </a>
            </li>
            <li>
              <a>
                Experiences<i class="fa-solid fa-greater-than"></i>
              </a>
            </li>
            <li>
              <a>
                Works<i class="fa-solid fa-greater-than"></i>
              </a>
            </li>
            <li>
              <a>
                Blog<i class="fa-solid fa-greater-than"></i>
              </a>
            </li>
            <li>
              <a>
                Contact<i class="fa-solid fa-greater-than"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarHorizontal;
function closeBar() {
  return (
    <div className="closeBars">
      <i class="fa-solid fa-xmark"></i>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Experiences</a>
        </li>
        <li>
          <a>Works</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
}
