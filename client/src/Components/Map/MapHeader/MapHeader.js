import React, { Component } from "react";
import { ButtonToolbar, ButtonGroup, Button, Tooltip } from "reactstrap";
import { FaGlassCheers } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";

class MapHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div className='d-inline-flex p-2 justify-content-center map-header'>
        <div className='col hood-header-box'>
          <h5 className='selected-hood'>placeholder-text</h5>
        </div>
        <div className='col hood-header-box'>
          <h4 className='selected-hood'>Mt. Pleasant</h4>
        </div>
        <div className='col d-flex align-items-center filter-toolbar-div'>
          <ButtonToolbar aria-label='Toolbar with button groups'>
            <ButtonGroup
              className='mr-2 filter-toolbar'
              aria-label='First group'>
              <span
                style={{ textDecoration: "underline", color: "blue" }}
                href='#'
                id='Restaurants'>
                <Button className='filter-buttons restaurant-filter-button'>
                  <FaPizzaSlice />
                </Button>
              </span>

              <Tooltip
                placement='top'
                isOpen={this.state.tooltipOpen}
                target='Restaurants'
                toggle={this.toggle}>
                Restaurants
              </Tooltip>

              <Button className='filter-buttons bar-filter-button'>
                <FaMusic />
              </Button>
              <Button className='filter-buttons club-filter-button'>
                <FaGlassCheers />
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default MapHeader;