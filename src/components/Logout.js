import React from "react";
import { removeToken } from "../services/tokenService";
import NavigationAdmin from './NavigationAdmin';

const Logout = props => {
  const logout = () => {
    removeToken();
    props.setUser(null);
  };
  return(
  	<div>
  		<NavigationAdmin weddingName={props.weddingInfo.weddingName} />
	  	<div className="main-content text-align-center">
	  		<button className="button" onClick={logout}>Logout</button>
	  	</div>
  	</div>
  	);
};

export default Logout;