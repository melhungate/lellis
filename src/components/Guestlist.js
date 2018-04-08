import React, { Component } from "react";
import axios from "axios";
import Guest from './Guest';
import CreateGuest from './CreateGuest';
import EditWedding from './EditWedding';

class Guestlist extends React.Component {
  state = {
    guests: []
  }

  refresh = () => {
    // get all weddings from the backend 
    axios.get(`/guests/${this.props.weddingInfo._id}`).then(res => {
      const data = res.data;
      // if blog guests come back
      if (data.payload) {
        //debugger;
        // store them in state
        console.log(data.payload);
        this.setState({ guests: data.payload });
      }
    });
  };


  componentWillReceiveProps(nextProps) {
     if (nextProps.weddingInfo._id) {
         axios.get(`/guests/${nextProps.weddingInfo._id}`)
           .then(res => {
              const data = res.data;
              // if blog guests come back
              if (data.payload) {
                // store them in state
                this.setState({ guests: data.payload });
              }
            });
     }
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    return (
      <div>
        <h1>Guest List</h1>
        <table className="guests">
          <tbody>
            <tr>
                <th>First Name</th>
                <th>Last Name</th> 
                <th>Email</th>
                <th>RSVP</th>
                <th>Date</th>
                <th>Message</th>
            </tr>
            {this.state.guests.map( guest => <Guest key={guest._id}{...guest} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Guestlist;