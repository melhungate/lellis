import React from "react";
import { Link } from 'react-router-dom';

const Wedding = ({ weddingName, partnerFirstNameA, partnerLastNameA, partnerFirstNameB, partnerLastNameB, startDate, endDate, addressLine1, addressLine2, addressLine3 , storyPic, whenWherePic, registryPic, rsvpPic }) => (
  <tr className="wedding">
    <td className="table-element">{partnerFirstNameA} {partnerLastNameA} & {partnerFirstNameB} {partnerLastNameB}</td>
    <td className="table-link"><Link to={`/${weddingName}`}>/{weddingName}</Link></td>
  </tr>
);

export default Wedding;