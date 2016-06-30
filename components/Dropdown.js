import React, { Component, PropTypes } from 'react'

class Dropdown extends React.Component {
  render() {
    return (<select className='dropdown' onChange={this.props.handleDropdownChange}>
        <option value="http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml">New York Times Home Page</option>
        <option value="http://www.wsj.com/xml/rss/3_7014.xml">WSJ Business News</option>
        <option value="http://feeds.bbci.co.uk/news/rss.xml">The BBC Top Stories</option>
        <option value="http://www.buzzfeed.com/index.xml">Buzz Feed Home Page</option>
        <option value="http://theskint.com/feed">The Skint (NYC Events)</option>
        <option value="http://nypost.com/feed">NY Post All Stories</option>
        <option value="http://www.newyorker.com/feed/everything">New Yorker - All Stories</option>
        <option value="http://www.theguardian.com/us/rss">The Guardian - US</option>
      </select>);
  }
}

export default Dropdown