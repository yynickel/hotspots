import React, { Component } from "react";
import axios from "axios";
import Intro from "../Components/Intro/Intro";
import NightOutBuilder from "../Components/NightOutBuilder/NightOutBuilder";
import Map from "../Components/Map/Map";
import AreaSelector from "../Components/AreaSelector/AreaSelector";
import HotListCards from "../Components/HotListCards/HotListCards";
import AreaCards from "../Components/AreaCards/AreaCards";
import Background from "../global-assets/vancouver-main-background.png";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`,
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "ConvolverNode"
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!"
    };
  }

  componentDidMount() {
    axios
      .get("/places") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.places); // Just the message
        this.setState({
          places: response.data.places
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <Intro />
        <NightOutBuilder />
        <Map />
        <section style={sectionStyle}>
          <AreaSelector />

          <section className=''>
            {this.state.places &&
              this.state.places.map(place => {
                return <HotListCards place={place} />;
              })}
          </section>

          <section className='row area-section d-flex justify-content-between'>
            <AreaCards />
          </section>

          <h1>This is the Main</h1>
          <h2>{this.state.message}</h2>
          <button onClick={this.fetchData}>Fetch Data</button>
        </section>
      </div>
    );
  }
}

export default Main;
