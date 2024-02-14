import { FC } from "react";
import "./Projects.css";
import react from "../../assets/react.jpg";
import nest from "../../assets/nest.png";
import tensorflow from "../../assets/tensorflow.png";
import flask from "../../assets/flask.jpg";
import kotlin from "../../assets/kotlin.png";
import electron from "../../assets/electron.jpg";
import angular from "../../assets/angular.png";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => (
  <section id="Projects">
    <h1 className="title">
      Par contre doumalako neub gatt nga nak, mootakh soumala wakhé reste
      tranquille tu dois rester tranquille teh nga bayi thieupi thieupi bi
    </h1>
    <img src={nest} alt="nest" className="techno" />
    {/* <span className="skillTitle">Some of the projects I worked on</span>
    <div className="myProjects">
      <div className="project">
        <div className="images">
          <img src={react} alt="react" className="techno" />
        </div>
        <p className="projectDescription">
          I engineered a robust application with Key Performance Indicators
          (KPIs) for efficient gym management. This involved developing RESTful
          APIs using Nestjs in a Node environment, which allowed for seamless
          integration and optimal performance. The deployment was orchestrated
          on AWS Beanstalk, ensuring the application's scalability and
          reliability. Furthermore, I designed, trained, and integrated deep
          learning models and neural networks to optimize the KPIs. This
          demonstrated my expertise in data preprocessing, network architecture
          selection, and performance evaluation.
        </p>
      </div>
      <div className="project">
        <div className="images">
          <img src={tensorflow} alt="tensorflow" className="techno" />
          <img src={flask} alt="flask" className="techno" />
        </div>
        <p className="projectDescription">
          I led the design and development of an innovative image recognition
          application. This involved utilizing TensorFlow for deep learning
          processing and Flask to create a user-friendly interface. I also
          optimized recognition algorithms, which improved recognition accuracy
          and reduced processing time. A robust continuous integration pipeline
          was implemented using GitLab for efficient testing and deployment.
          Finally, the application was successfully deployed on AWS, ensuring
          widespread accessibility.
        </p>
      </div>
    </div>
    <div className="myProjects">
      <div className="project">
        <div className="images">
          <img src={kotlin} alt="kotlin" className="techno" />
          <img src={electron} alt="electron" className="techno" />
        </div>
        <p className="projectDescription">
          I collaborated with the client to analyze requirements, conceiving and
          designing the application architecture with a strong emphasis on
          quality assurance, as evidenced by the architecture document and
          project plan. I executed backend logic development using NestJs,
          establishing a robust foundation for software evolution. Comprehensive
          testing was conducted, including unit and integration tests, and the
          application was successfully deployed on Amazon servers.
        </p>
      </div>
      <div className="project">
        <div className="images">
          <img src={angular} alt="angular" className="techno" />
          <img src={nest} alt="nest" className="techno" />
        </div>
        <p className="projectDescription">
          I developed a web-based Scrabble game using Angular and Express in the
          Node.js environment, resulting in a polished and functional
          application. I optimized algorithms to enhance application velocity,
          measured by a reduction in time and space complexity. A GitLab
          pipeline was implemented for integrations and the game was deployed on
          Amazon servers for widespread accessibility.
        </p>
      </div>
    </div> */}
  </section>
);

export default Projects;
