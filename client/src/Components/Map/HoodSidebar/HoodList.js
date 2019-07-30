import React, { Component } from "react";
// import axios from "axios";
import HotSpotIcon from "../../../global-assets/hotspot-score-icon-small.png";
import HoodPlaceList from "./HoodPlaceList";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

class HoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardView: false,
      message: "Click the button to load data!",
      showListPlaces: this.props.showOneHoodSide
    };
    this.handleClick = this.handleClick.bind(this);
    this.clickTogglePlaces = this.clickTogglePlaces.bind(this);
  }

  makeScore(places) {
    let thesePlaces = places.filter(place => place.neighbourhood_id === this.props.neighbourhood.id)
    console.log(typeof thesePlaces[0].current_hot_score)
    return Math.ceil(thesePlaces.reduce((acc,cur)=>acc+cur.current_hot_score,0)/thesePlaces.length);
  }

  componentDidUpdate(oldProps) {
    if (oldProps.showOneHoodSide != this.props.showOneHoodSide) {
      this.setState({showListPlaces: this.props.showOneHoodSide})
    }
  }

  componentDidMount() {}

  handleClick(id) {
    this.props.updateSelection(id);
  }

  clickTogglePlaces() {
    this.setState({
      showListPlaces: !this.state.showListPlaces
    });
  }

  render() {
    return (
      <div>
        <li className='list-group-item hood-name-li'>
          <div
            className='col hood-col'
            onClick={() => {
              this.clickTogglePlaces();
              this.props.clickNeighbourhood(this.props.neighbourhood.id)
            }}>
            <h4 className='hood-title-text'>{this.props.neighbourhood.name}</h4>

            <a
              onClick={() =>
                this.setState({ isCardView: !this.state.isCardView })
              }>
              {this.state.isCardView ? (
                <FiChevronUp className='arrow-icon' />
              ) : (
                <FiChevronDown className='arrow-icon' />
              )}
            </a>
          </div>

          <div className='col hotspot-score float-right'>
            <img className='hotspot-score-icon' src={HotSpotIcon} alt={""} />
            <p className='hotspot-score-number'>
              {
                this.props.places &&
                this.makeScore(this.props.places)
              }
            </p>
          </div>
        </li>
        {this.state.showListPlaces &&
          this.props.places
            .filter(
              place => place.neighbourhood_id === this.props.neighbourhood.id
            )
            .map((place, index) => {
              return (
                <HoodPlaceList
                  place={place}
                  index={index + 1}
                  key={place.id}
                  onClick={this.handleClick}
                />
              );
            })}
      </div>
    );
  }
}

export default HoodList;
