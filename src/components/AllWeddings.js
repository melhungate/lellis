import React, { Component } from "react";
import axios from "axios";
import Wedding from './Wedding';
import CreateWedding from './CreateWedding';
import NavigationHome from './NavigationHome';
import ReactFilestack from 'filestack-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AllWeddings extends React.Component {
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
      <NavigationHome />
        <div className="table-container">
          <table className="table">
              <thead className="table">
              <tr>
                  <th className="table-element">Wedding</th>
                  <th>Link</th>
              </tr>
              </thead>
              <tbody>
              {this.state.weddings.map( wedding => <Wedding key={wedding._id}{...wedding} />)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AllWeddings;