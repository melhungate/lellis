import React, { Component } from "react";
import axios from "axios";
import Wedding from './Wedding';
import CreateWedding from './CreateWedding';
import ReactFilestack from 'filestack-react';

class Admin extends React.Component {
  state = {
    weddings: []
  }

refresh = () => {
  // get all block weddings from the backend 
  axios.get("/weddings").then(res => {
    const data = res.data;
    // if blog weddings come back
    if (data.payload) {
      //debugger;
      // store them in state
      this.setState({ weddings: data.payload });
    }
  });
};

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
          <CreateWedding refresh={this.refresh} />
        <table className="weddings">
          <tbody>
            <tr>
                <th>weddingName</th>
                <th>partnerFirstNameA</th>
                <th>partnerLastNameA</th>
                <th>partnerFirstNameB</th>
                <th>partnerLastNameB</th>
                <th>startDate</th>
                <th>endDate</th>
                <th>addressLine1</th>
                <th>addressLine2</th>
                <th>addressLine3</th>
                <th>storyPic</th> 
                <th>whenWherePic</th>
                <th>registryPic</th>
                <th>rsvpPic</th>
            </tr>
            {this.state.weddings.map( wedding => <Wedding key={wedding._id}{...wedding} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Admin;