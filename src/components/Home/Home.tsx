import { FC } from "react";
import "./Home.css";
import graduation1 from "../../assets/graduation1.jpeg";
import { Link } from "react-scroll";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <section id="home">
    <div className="homeContent">
      <span className="introText">
        Joyeuse Saint Valentin
        <span className="homeName">Fatima</span>
      </span>
      <p className="introPara">
        Happy valentine's day to the love of my life, my Best friend !
      </p>
    </div>
    <img src={graduation1} alt="hire me" className="graduation" />
  </section>
);

export default Home;
