import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Footer = ({ weddingName }) => (
  	<div className="footer-wrapper">
      <Link className="footer-item" to="/">Home</Link>
      <Link className="footer-item" to={`/${weddingName}/admin`}>Admin</Link>
    </div>
);

export default Footer;
