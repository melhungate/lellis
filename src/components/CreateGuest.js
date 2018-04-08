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

  clearInput = () => {
    this.setState({ 
      firstName: "",
      lastName: "",
      email: "",
      rsvp: "",
      plusOne: "",
      message: "" 
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email, rsvp, plusOne, message } = this.state;
    debugger
    //const wedding = "5ab8149fb885752250cd531d";
    axios
      .post("/guests", {
        firstName,
        lastName,
        email,
        rsvp,
        plusOne,
        message,
        wedding : this.props.weddingId
      })
      .then(alert('guest created')); //need to do something on submit, but not sure what yet! 
    this.clearInput();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            onChange={this.handleChange}
            value={this.state.firstName}
            name="firstName"
            type="text"
            placeholder="First Name*"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            value={this.state.lastName}
            name="lastName"
            type="text"
            placeholder="Last Name*"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            type="text"
            placeholder="Email Address*"
          />
        </div>
        <div>
          <textarea
            onChange={this.handleChange}
            value={this.state.rsvp}
            name="rsvp"
            type="text"
            placeholder="Are you attending?*"
          />
        </div>
        <div>
          <textarea
            onChange={this.handleChange}
            value={this.state.plusOne}
            name="plusOne"
            type="text"
            placeholder="Who else is coming with you?*"
          />
        </div>
        <div>
          <textarea
            onChange={this.handleChange}
            value={this.state.message}
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