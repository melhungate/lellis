import React from "react";

const Wedding = ({ weddingName, partnerFirstNameA, partnerLastNameA, partnerFirstNameB, partnerLastNameB, startDate, endDate, addressLine1, addressLine2, addressLine3 }) => (
  <div className="wedding">
    <h2>{weddingName}</h2>
    <p>{partnerFirstNameA}</p>
    <p>{partnerLastNameA}</p>
    <p>{partnerFirstNameB}</p>
    <p>{partnerLastNameB}</p>
    <p>{startDate}</p>
    <p>{endDate}</p>
    <p>{addressLine1}</p>
    <p>{addressLine2}</p>
    <p>{addressLine3}</p>
  </div>
);

export default Wedding;