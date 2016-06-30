import React from 'react';
import { render } from 'react-dom';
import './main.scss'

import Dropdown from './components/Dropdown'
import Graphic from './components/Graphic'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        data : [['',0]]
    }
  }
  fetchRSSFeed(url) {
    var body = {'url':url}
    fetch('https://gmr99cgdc5.execute-api.us-east-1.amazonaws.com/v1/rss', {
        method: 'POST',
        mode: 'cors',
        headers: {  
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      }).then(r => r.json())
  .then(data => {
    this.setState({data:JSON.parse(data)})
    })
  }
  componentDidMount() {
    this.fetchRSSFeed('http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml');
  }
  handleDropdownChange(e) {
    this.fetchRSSFeed(e.target.value);
  }
  render () {
    return (<div className='appContainer'>
    <h1>Frequency of Words in the News</h1>
    <p>Word count of headlines and article descriptions from RSS feeds of popular publications</p>
    <Dropdown handleDropdownChange={this.handleDropdownChange.bind(this)}/>
    <Graphic data={this.state.data}/>
    </div>);
  }
}

render(<App/>, document.getElementById('app'));

export default App;