import { FC } from "react";
import "./Header.css";
import message from "../../assets/message.jpg";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <nav className="navbar">
    <img alt="logo" src={logo} className="logo"></img>
    <div className="desktopMenu">
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="desktopMenuListItem"
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="About"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="desktopMenuListItem"
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="Projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="desktopMenuListItem"
      >
        Projects
      </Link>
      <Link
        activeClass="active"
        to="CV"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="desktopMenuListItem"
      >
        Resume
      </Link>
    </div>
    <button
      className="desktopMenuBtn"
      onClick={() => {
        document
          .getElementById("Contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <img src={message} alt="" className="desktopMenuImg" />
      Contact Me
    </button>
  </nav>
);

export default Header;
