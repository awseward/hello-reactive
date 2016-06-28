import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes    = {};
  static defaultProps = {};

  state = {
    things: [],
  };

  render() {
    return (
      <div>
        <h3>
          List of Things
          <button onClick={() => {}}>
            Refresh
          </button>
        </h3>
        <ul>
          {state.things.map(thing => <li>TODO: thing</li>)}
        </ul>
      </div>
    );
  }
};
