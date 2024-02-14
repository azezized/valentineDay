import React, { FC } from "react";
import "./Footer.css";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className="Footer">
    <span className="skillTitles">© 2024 Aziz | All Rights Reserved</span>
  </div>
);

export default Footer;
