import React from "react";

const Registry = ({weddingInfo}) => {
    return (
        <div>
            <h1>Registry</h1>
    		<img src={weddingInfo.registryPic} alt="Registry Picture"/>
        </div>
    )
}

export default Registry;
