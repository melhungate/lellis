import React from "react";

const Wedding = ({ weddingName, partnerFirstNameA, partnerLastNameA, partnerFirstNameB, partnerLastNameB, startDate, endDate, addressLine1, addressLine2, addressLine3 , storyPic, whenWherePic, registryPic, rsvpPic }) => (
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
    <img src={storyPic} alt="Our Story Picture"/>
    <img src={whenWherePic} alt="When & Where Picture"/>
    <img src={registryPic} alt="Registry Picture"/>
    <img src={rsvpPic} alt="RSVP Picture"/>
  </div>
);

export default Wedding;