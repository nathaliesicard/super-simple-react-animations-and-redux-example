import React, { PropTypes, Component } from 'react'
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux'
import { addNumber, subtractNumber } from './actions/index'

class App extends Component {


  handleIncrement() {
    const { dispatch } = this.props;
    dispatch(addNumber())
  };

  handleDecrement() {
    const { dispatch } = this.props;
    dispatch(subtractNumber())
  };

  render() {

    const { count, clase } = this.props;

// if transition key is 'clase' it will only show the animation when clase changes
    return (
      <div style={{margin: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <h1>Super Simple React Example of Animations</h1>
        <h2>Using ReactCSSTransitionGroup and Redux</h2>
        <div>
        <div style={{margin: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <button onClick={() => this.handleIncrement()}>Increment</button>
          <button onClick={() => this.handleDecrement()}>Decrement</button>
        </div>
          <ReactCSSTransitionGroup
            transitionName={clase}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={200}>
              <span className="container" key={clase}>{count}</span>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}
App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(store => {
  return {
    count: store.counter.count,
    clase: store.counter.clase,
  }

})(App)
