import React, { Component } from "react";
import { connect } from 'react-redux';
import selectDevs from '../selectors/devs';
import DevCar from "./DevCard";
import '../App.css';

class Devs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devs: []
    };
  }
  render() {
    return (
      <div className="devs-wrapper">
        <Col md={12} sm={12} xs={12}>
        {
          this.props.devs.length === 0 ? (
            <p className="logo">No devs with those skills <span role="img">😔</span></p>
          ) : (
              this.props.devs.map((dev) => {
                return <DevCar key={dev.id} {...dev} />
              })
            )
        }
      </Col> 
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    devs: selectDevs(state.devs, state.filters)
  };
};

export default connect(mapStateToProps)(Devs);



