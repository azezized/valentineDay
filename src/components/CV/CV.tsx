import React, { FC } from "react";
import "./CV.css";

interface CvProps {}

const Cv: FC<CvProps> = () => (
  <div id="CV">
    <span className="skillTitle">To know more about me</span>
    <a
      href="https://drive.google.com/file/d/16XyfYhyhTEs6sXqNSbDgZ4R05MDuQiLO/view?usp=sharing"
      className="resume"
      target="_blank"
      rel="noopener noreferrer"
    >
      Click here for my resume
    </a>
  </div>
);

export default Cv;
