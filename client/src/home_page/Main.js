import React, { Component } from "react";
import axios from "axios";
import Nav from "./Header";
import Intro from "./Intro";
import AreaCards from "./AreaCards";
import Map from "./Map";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!"
    };
  }

  fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message
        });
      });
  };

  render() {
    return (
      <div className='App'>
        <Intro />
        <Map />
        <div className="container">
        <section className='row area-section d-flex p-2'>
          <AreaCards />
          <AreaCards />
          <AreaCards />
          <AreaCards />
          <AreaCards />
          <AreaCards />
        </section>
        </div>

        <h1>This is the Main</h1>
        <h2>{this.state.message}</h2>
        <button onClick={this.fetchData}>Fetch Data</button>
      </div>
    );
  }
}

export default Main;
