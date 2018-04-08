import React from "react";

const Guest = ({ firstName, lastName, email, rsvp, plusOne, message }) => (
  <tr className="guest">
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{email}</td>
    <td>{rsvp}</td>
    <td>{plusOne}</td>
    <td>{message}</td>
  </tr>
);

export default Guest;
