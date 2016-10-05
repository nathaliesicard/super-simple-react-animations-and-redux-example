import React, { Component } from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      class: 'positive'
    };
  }


  handleIncrement(by) {
    this.setState({
      counter: this.state.counter + by,
      class: 'positive'
    });
  };

  handleDecrement(by) {
    this.setState({
      counter: this.state.counter + by,
      class: 'negative'
    });
  };

  render() {


    return (
      <div>
        <button onClick={() => this.handleIncrement(1)}>Increment</button>
        <button onClick={() => this.handleDecrement(-1)}>Decrement</button>
        <div style={{marginBottom: '20px'}}/>
        <ReactCSSTransitionGroup
          transitionName={this.state.class}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <span className="container" key={ this.state.counter }>{ this.state.counter }</span>
        </ReactCSSTransitionGroup>

      </div>
    );
  }
}


export default App;
/**
 * Created by nathaliesicard on 10/5/16.
 */
