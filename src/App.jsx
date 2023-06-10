import React, { Component } from 'react'
import UserInfo from './Components/UserInfo';


class App extends Component {
    state = {
      person: [
        { fname: "Taye", lname: "wale", email: "hwsj@gmail", phoneNumber: "07037817028"},
        { fname: "Taye", lname: "wale", email: "hwsj@gmail", phoneNumber: "07037817028"},
        { fname: "Taye", lname: "wale", email: "hwsj@gmail", phoneNumber: "07037817028"},
        { fname: "Taye", lname: "wale", email: "hwsj@gmail", phoneNumber: "07037817028"},
        { fname: "Taye", lname: "wale", email: "hwsj@gmail", phoneNumber: "07037817028"},
       
      ],
    };
    render() {
      return (
        <div className="App">

          <UserInfo
            fullname={this.state.person[0].fname}
            lastname={this.state.person[0].lname}
            email={this.state.person[0].email}
            phoneNumber={this.state.person[0].phoneNumber}
          />
          </div>
      );
    }
  }

export default App