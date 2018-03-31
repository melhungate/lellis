import React from "react";

const WhenWhere = ({weddingInfo}) => {
    return (
        <div>
            <h2>When & Where</h2>
            <p>{weddingInfo.addressLine1}</p>
            <p>{weddingInfo.addressLine2}</p>
            <p>{weddingInfo.addressLine3}</p>
        </div>
    )
}

export default WhenWhere;