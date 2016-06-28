import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes    = {};
  static defaultProps = {};

  state = {
    things: [],
  };

  _pushNewThing = () => {
    // TODO: Actually go fetch a thing
    this.setState({
      things: this.state.things.concat(1),
    });
 };

 render() {
    return (
      <div>
        <h3>
          List of Things
          <button onClick={this._pushNewThing}>
            Push
          </button>
        </h3>
        <ul>
          {
            this.state.things.map((thing, index) =>
              <li key={index}>TODO: thing</li>
            )
          }
        </ul>
      </div>
    );
  }
};
