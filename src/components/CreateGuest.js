// components/CreateGuest
import React from "react";
import axios from "axios";

class CreateGuest extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    rsvp: "",
    plusOne: "",
    message: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email, rsvp, plusOne, message } = this.state;
    //const wedding = "5ab8149fb885752250cd531d";
    axios
      .post("/guests", {
        firstName,
        lastName,
        email,
        rsvp,
        plusOne,
        message,
        wedding : "5ab8149fb885752250cd531d"
      })
      .then(this.props.refresh);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create a New Guest</h2>
        <div>
          <input
            onChange={this.handleChange}
            name="firstName"
            type="text"
            placeholder="First Name*"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            name="lastName"
            type="text"
            placeholder="Last Name*"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            name="email"
            type="text"
            placeholder="Email Address*"
          />
        </div>
        <div>
          <textarea
            onChange={this.handleChange}
            name="rsvp"
            type="text"
            placeholder="Are you attending?*"
          />
        </div>
        <div>
          <textarea
            onChange={this.handleChange}
            name="plusOne"
            type="text"
            placeholder="Who else is coming with you?*"
          />
        </div>
        <div>
          <textarea
            onChange={this.handleChange}
            name="message"
            type="text"
            placeholder="Message"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateGuest;