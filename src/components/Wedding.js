import React from "react";

const Wedding = ({ weddingName, partnerFirstNameA, partnerLastNameA, partnerFirstNameB, partnerLastNameB, startDate, endDate, addressLine1, addressLine2, addressLine3 , storyPic, whenWherePic, registryPic, rsvpPic }) => (
  <tr className="wedding">
    <td>{weddingName}</td>
    <td>{partnerFirstNameA}</td>
    <td>{partnerLastNameA}</td>
    <td>{partnerFirstNameB}</td>
    <td>{partnerLastNameB}</td>
    <td>{startDate}</td>
    <td>{endDate}</td>
    <td>{addressLine1}</td>
    <td>{addressLine2}</td>
    <td>{addressLine3}</td>
    <td>{storyPic}</td> 
    <td>{whenWherePic}</td>
    <td>{registryPic}</td>
    <td>{rsvpPic}</td>
  </tr>
);

export default Wedding;