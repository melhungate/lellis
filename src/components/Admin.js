import React, { Component } from "react";
import axios from "axios";
import Wedding from './Wedding';
import CreateWedding from './CreateWedding';
import ReactFilestack from 'filestack-react';

class Admin extends React.Component {
  state = {
    weddings: [],
    posterUrl: ""
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
    onUploadSuccess = (success) => {
        const url = success.filesUploaded[0].url;
        console.log(url);
        this.setState({
            posterUrl: url,
        });
      
    }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
          <ReactFilestack
              apikey={"AiNtWufS6LieOXs3fP2QTz"}
              buttonText="Upload Photo"
              buttonClass="classname"
              onSuccess={this.onUploadSuccess}
          />
          <CreateWedding refresh={this.refresh} />
        <div className="weddings">
          {this.state.weddings.map( wedding => <Wedding key={wedding._id}{...wedding} />)}
          </div>
      </div>
    );
  }
}

export default Admin;