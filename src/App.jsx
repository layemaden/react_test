import React, { Component } from 'react'
import UserInfo from './Components/UserInfo'; //import user info

//all users
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
    //renderin the details
    render() {
      return (
        <div className="App">

          <UserInfo
            fullname={this.state.person[0].fname}
            lastname={this.state.person[0].lname}
            email={this.state.person[0].email}
            phoneNumber={this.state.person[0].phoneNumber}
          />

<UserInfo
            fullname={this.state.person[1].fname}
            lastname={this.state.person[1].lname}
            email={this.state.person[1].email}
            phoneNumber={this.state.person[1].phoneNumber}
          />

<UserInfo
            fullname={this.state.person[2].fname}
            lastname={this.state.person[2].lname}
            email={this.state.person[2].email}
            phoneNumber={this.state.person[2].phoneNumber}
          />

<UserInfo
            fullname={this.state.person[3].fname}
            lastname={this.state.person[3].lname}
            email={this.state.person[3].email}
            phoneNumber={this.state.person[3].phoneNumber}
          />

<UserInfo
            fullname={this.state.person[4].fname}
            lastname={this.state.person[4].lname}
            email={this.state.person[4].email}
            phoneNumber={this.state.person[4].phoneNumber}
          />
          </div>
      );
    }
  }

export default App //export app