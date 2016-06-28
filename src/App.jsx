import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {};
  static defaultProps = {};
  state = {};
  render() {
    return (
      <div>
        <h3>
          List of Things
          <button onClick={() => {}}>
            Refresh
          </button>
        </h3>
      </div>
    );
  }
};
