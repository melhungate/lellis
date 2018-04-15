import React from "react";
import { removeToken } from "../services/tokenService";

const Logout = props => {
  const logout = () => {
    removeToken();
    props.setUser(null);
  };
  return(
  	<div className="main-content text-align-center">
  	<button className="button" onClick={logout}>Logout</button>
  	</div>
  	);
};

export default Logout;