import React from "react";
import { baseConfig } from "../../config";
import "./Footer.css";

const Footer = () => {
  return <div className="footer">{baseConfig.footerText}</div>;
};

export default Footer;
