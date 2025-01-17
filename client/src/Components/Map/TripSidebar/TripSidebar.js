import React, { Component } from "react";
import { Button } from "reactstrap";
import TripList from "./TripList";
import HotSpotTripRating from "./HotSpotTripRating";

// import TripButton from "./TripButton";

class TripSidebar extends Component {
  render() {
    return (
      <div className='planner-sidebar'>
        <div className='trip-title-intro-div'>
          <h5 className='trip-title-text'>Saved List</h5>
        </div>

        <div className='trip-list-div'>
          <ul className='list-group list-group-flush trip-list'>
            {this.props.selectionList &&
              this.props.selectionList.map(place => {
                return (
                  <TripList
                    key={place.id}
                    place={place}
                    onClick={this.props.delete}
                  />
                );
              })}
          </ul>
        </div>

        <div className='bottom-div'>
          <div className='button-div'>
            <Button
              className='sidebar-button'
              outline
              color='light'
              block
              onClick={() => {
                this.props.selectionList.length &&
                  this.props.showMyNight(this.props.selectionList);
              }}>
              Generate Plan
            </Button>
          </div>

          {/* <HotSpotTripRating /> */}
        </div>
      </div>
    );
  }
}

export default TripSidebar;
