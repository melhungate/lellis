import React, { Component } from "react";
import axios from "axios";
import Guest from './Guest';
import CreateGuest from './CreateGuest';
import EditWedding from './EditWedding';
import { getToken } from '../services/tokenService.js';

class Guestlist extends React.Component {
  state = {
    guests: []
  }

  refresh = () => {
    const token = getToken(); 
    axios
    .get(`/guests/${this.props.weddingInfo._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then(res => {
      const data = res.data;
      if (data.payload) {
        console.log(data.payload);
        this.setState({ guests: data.payload });
      }
    });
  };


  componentWillReceiveProps(nextProps) {
     if (nextProps.weddingInfo._id) {
      const token = getToken(); 
       axios
       .get(`/guests/${nextProps.weddingInfo._id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
       .then(res => {
          const data = res.data;
          if (data.payload) {
            this.setState({ guests: data.payload });
          }
        });
     }
  }

  componentDidMount() {
    this.refresh(); //@mel do i still need this when im using componentWillReceiveProps?
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