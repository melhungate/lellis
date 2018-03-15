import React from "react";

const Guest = ({ firstName, lastName, email, rsvp, plusOne, message }) => (
  <div className="guest">
    <h2>{firstName}</h2>
    <h2>{lastName}</h2>
    <p>{email}</p>
    <p>{rsvp}</p>
    <p>{plusOne}</p>
    <p>{message}</p>
  </div>
);

export default Guest;
