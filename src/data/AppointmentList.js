import React from 'react';

import axios from 'axios';

export default class AppointmentList extends React.Component {  
  constructor(props) {
    super(props);
  
    this.addActiveClass= this.addActiveClass.bind(this);
    this.state = {
      persons: [],
      activeId: null
    }
  }
  
  addActiveClass(id) {    
    this.setState({
      activeId: id
    });
  };

  deleteRow = (id) => {  
    var array = [...this.state.persons]; // make a separate copy of the array
    if (id !== -1) {
      array.splice(id, 1);
      this.setState({persons: array});
    }
  };

  componentDidMount() {
    let backendUrl = "https://jsonplaceholder.typicode.com/users";
    if('REACT_APP_BACKEND_URL' in process.env){
      backendUrl = "http://" + process.env.REACT_APP_BACKEND_URL + "/appointments/";
    }
    axios.get(backendUrl)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      this.state.persons.map((person,index) => (
        <tr className = {index === this.state.activeId? "active-row" : ""} onClick={() => this.addActiveClass(index)}>
            <td>{ person.date }</td>
            <td>{ person.doctor }</td>
            <td>{ person.specialty }</td>
            <td>{ person.branch_address }</td>
            <td><button onClick={(e) => this.deleteRow(index)}>Delete</button></td>
        </tr>
     ))
    )
  }
}