import React, { Component } from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onSkillChange = (e) => {
      this.props.dispatch(setTextFilter(e.target.value));
  }

  onBtnClicked = () => {
    console.log("BTN CLICKED");
    this.props.dispatch(setTextFilter("CSS"));
  };

  render() {
    return (
      <div>

        <input className="searchField" type="text" value={this.props.filters.text} placeholder=" 🔍 Find skill"
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <div className="tag-links">

          <p onClick={() => {
            this.props.dispatch(setTextFilter(''));
          }}>All</p>

          <p className="javascript" onClick={() => {
            this.props.dispatch(setTextFilter('javascript'));
          }}>JavaScript</p>

          <p className="ruby" onClick={() => {
            this.props.dispatch(setTextFilter('ruby'));
          }}>Ruby</p>

          <p className="react" onClick={() => {
            this.props.dispatch(setTextFilter('react'));
          }}>React</p>

          <p onClick={() => {
            this.props.dispatch(setTextFilter('html'));
          }}>HTML</p>

          <p onClick={() => {
            this.props.dispatch(setTextFilter('css'));
          }}>CSS</p>

          <p onClick={() => {
            this.props.dispatch(setTextFilter('sql'));
          }}>SQL</p>

          <p onClick={() => {
            this.props.dispatch(setTextFilter('java'));
          }}>JAVA</p>

          <p onClick={() => {
            this.props.dispatch(setTextFilter('bash shell'));
          }}>Bash/Shell</p>

          <p onClick={() => {
            this.props.dispatch(setTextFilter('python'));
          }}>Python</p>

          <p  onClick={() => {
            this.props.dispatch(setTextFilter('php'));
          }}>PHP</p>

          <p onClick={() => {
            this.props.dispatch(setTextFilter('TypeScript'));
          }}>TypeScript</p>

          <p onClick={() => {
            this.props.dispatch(setTextFilter('swift'));
          }}>Swift</p>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
