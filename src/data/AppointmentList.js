import React from 'react';

import axios from 'axios';

export default class AppointmentList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    let backendUrl = "https://jsonplaceholder.typicode.com/users";
    if(process.env.BACKEND_URL){
      backendUrl = process.env.BACKEND_URL;
    }
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}