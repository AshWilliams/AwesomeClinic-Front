import React from 'react';

import axios from 'axios';

export default class Profile extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    let backendUrl = process.env.BACKEND_URL;
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
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
              <input placeholder="Your Name" type="text" tabIndex="1" required autoFocus />
          </fieldset>
          <fieldset>
              <input placeholder="Phone" type="text" tabIndex="2" required autoFocus />
          </fieldset>
          <fieldset>
              <input placeholder="Your Email Address" type="email" tabIndex="3" required />
          </fieldset>
          <fieldset>
              <input placeholder="Member Since" type="tel" tabIndex="4" required />
          </fieldset>                                
          <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
      </form>
  </div>
    )
  }
}