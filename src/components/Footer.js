import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Footer = ({ weddingName }) => (
  	<div className="Header-inner Header-inner--top">
      <Link className="Header-nav-item" to={`/${weddingName}/admin`}>Admin</Link>
    </div>
);

export default Footer;
