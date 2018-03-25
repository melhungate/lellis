// components/CreateWedding
import React from "react";
import axios from "axios";

class CreateWedding extends React.Component {
  state = {
    weddingName: "",
    partnerFirstNameA: "",
    partnerLastNameA: "",
    partnerFirstNameB: "",
    partnerLastNameB: "",
    date: "",
    startTime: "", 
    endTime: "",
    addressLine1: "",
    addressLine2: "",
    addressLine3: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { weddingName, partnerFirstNameA, partnerLastNameA, partnerFirstNameB, partnerLastNameB, date, startTime, endTime, addressLine1, addressLine2, addressLine3 } = this.state;
    axios
      .post("/weddings", {
        weddingName,
        partnerFirstNameA,
        partnerLastNameA,
        partnerFirstNameB,
        partnerLastNameB,
        date,
        startTime, 
        endTime,
        addressLine1,
        addressLine2,
        addressLine3
      })
      .then(this.props.refresh);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create a New Wedding</h2>
        <div>
          <input
            onChange={this.handleChange}
            name="weddingName"
            type="text"
            placeholder="weddingName"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            name="partnerFirstNameA"
            type="text"
            placeholder="partnerFirstNameA"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            name="partnerLastNameA"
            type="text"
            placeholder="partnerLastNameA"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            name="partnerFirstNameB"
            type="text"
            placeholder="partnerFirstNameB"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            name="partnerLastNameB"
            type="text"
            placeholder="partnerLastNameB"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            name="date"
            type="date"
            placeholder="date"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            name="startTime"
            type="time"
            placeholder="startTime"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            name="endTime"
            type="time"
            placeholder="endTime"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            name="addressLine1"
            type="text"
            placeholder="addressLine1"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            name="addressLine2"
            type="text"
            placeholder="addressLine2"
          />
        </div>
        <div>
          <input
            onChange={this.handleChange}
            name="addressLine3"
            type="text"
            placeholder="addressLine3"
          />
        </div>
        
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CreateWedding;