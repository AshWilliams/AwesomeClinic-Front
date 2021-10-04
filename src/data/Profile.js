import React from 'react';

import axios from 'axios';

export default class Profile extends React.Component {
  state = {
    person: {},
    backendUrl:""
  }
  

  componentDidMount() {
    let backendUrl = "https://jsonplaceholder.typicode.com/users/1";
     if('REACT_APP_BACKEND_URL' in process.env){
      backendUrl = "http://" + process.env.REACT_APP_BACKEND_URL + "/profile/";
    }
    axios.get(backendUrl)
      .then(res => {
        const person = res.data;
        this.setState({ person });
        this.setState({ backendUrl });
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
              <input placeholder="Address" type="email" tabIndex="3" disabled value={ this.state.person.address  } />
          </fieldset>
          <fieldset>
              <input placeholder="Phone" type="text" tabIndex="2" disabled value={ this.state.person.phone  } />
          </fieldset>
          <fieldset>
              <input placeholder="Your Email Address" type="email" tabIndex="3" disabled value={ this.state.person.email  } />
          </fieldset>
          <fieldset>
              <input placeholder="Member Since" type="tel" tabIndex="4" disabled value={ this.state.person.member_since  } />
          </fieldset>                                
          <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" disabled>Submit</button>
          </fieldset>
      </form>
  </div>
    )
  }
}