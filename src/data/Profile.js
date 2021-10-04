import React from 'react';

import axios from 'axios';

export default class Profile extends React.Component {
  state = {
    person: {}
  }

  componentDidMount() {
    let backendUrl = "https://jsonplaceholder.typicode.com/users/1";
    if(process.env.BACKEND_URL){
      backendUrl = process.env.BACKEND_URL+"/profile";
    }
    axios.get(backendUrl)
      .then(res => {
        const person = res.data;
        this.setState({ person });
      })
  }

  render() {
    return (      
      <div className="col-left">
      <form id="contact" action="">  
          <fieldset>
              <img src="https://randomuser.me/api/portraits/thumb/men/40.jpg"></img>
          </fieldset>              
          <fieldset>
              <input placeholder="Your Name" type="text" tabIndex="1" disabled value={ this.state.person.doctor_name?this.state.person.doctor_name : this.state.person.name } />
          </fieldset>
          <fieldset>
              <input placeholder="Phone" type="text" tabIndex="2" disabled value={ this.state.phone  } />
          </fieldset>
          <fieldset>
              <input placeholder="Your Email Address" type="email" tabIndex="3" disabled />
          </fieldset>
          <fieldset>
              <input placeholder="Member Since" type="tel" tabIndex="4" disabled />
          </fieldset>                                
          <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" disabled>Submit</button>
          </fieldset>
      </form>
  </div>
    )
  }
}