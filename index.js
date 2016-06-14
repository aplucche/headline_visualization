import React from 'react';
import { render } from 'react-dom';
import './main.scss'

class App extends React.Component {
  render () {
    return <p>Minimal Setup with Webpack and SASS</p>;
  }
}

render(<App/>, document.getElementById('app'));