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
      <form className="form-block" onSubmit={this.handleSubmit}>
        <div className="form-div">
          <div className="field">
            <label className="form-label">First Name</label>
            <input
              className="small"
              onChange={this.handleChange}
              value={this.state.firstName}
              name="firstName"
              type="text"
            />
          </div>
          <div className="field">
            <label className="form-label">Last Name</label>
            <input
              className="small"
              onChange={this.handleChange}
              value={this.state.lastName}
              name="lastName"
              type="text"
            />
          </div>
        </div>
        <div className="form-div">
          <label className="form-label">Email Address</label>
          <input
            className="large"
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            type="text"
          />
        </div>
        <div className="form-div">
          <label className="form-label">Are you attending?</label>
          <input
            className="box"
            onChange={this.handleChange}
            value={this.state.rsvp}
            name="rsvp"
            type="text"
          />
        </div>
        <div className="form-div">
          <label className="form-label">Who else is coming with you?</label>
          <input
            className="box"
            onChange={this.handleChange}
            value={this.state.plusOne}
            name="plusOne"
            type="text"
          />
        </div>
        <div className="form-div">
          <label className="form-label">Message</label>
          <input
            className="box"
            onChange={this.handleChange}
            value={this.state.message}
            name="message"
            type="text"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateGuest;