import React, { Component } from "react";
import { connect } from 'react-redux';
import './App.css';


function mapStateToProps(state) {
  return{
    value: state
  }
}

function dispatchToProps(dispatch) {
  return{
    plusCounter: () => {
        dispatch({ type: 'PLUSCOUNT' })
    },
    minusCounter: () => {
        dispatch({type: 'MINUSCOUNT'})
    }
  }
}

class App extends Component{



  render() {
    return (
        <div className="content">
          <label>Counter value is: <span>{this.props.value}</span></label>
          <span className="d-none">Note: Counter value can't be less than 0</span>
          <br/>
          <div>
            <button className="btn-count" onClick={() => this.props.plusCounter()}>+</button>
            <button className="btn-count" onClick={() => this.props.minusCounter()}>-</button>
          </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, dispatchToProps)(App);


