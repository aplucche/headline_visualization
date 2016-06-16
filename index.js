import React from 'react';
import { render } from 'react-dom';
import './main.scss'

import d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        data : [
          ['a',12.5],
          ['b',10.7],
          ['c',9.7],
          ['d',8.5],
          ['e',7.7],
          ['f',7.6],
          ['g',7.5],
          ['h',7.4],
          ['i',7.3],
          ['j',7.2],
          ['k',7.1],
          ['l',1.5]
        ]
      };
  }
  render () {
    return (<div class='appContainer'>
    <h1>Minimal Setup with Webpack and SASS</h1>
    <Dropdown/>
    <Graphic data={this.state.data}/>
    </div>);
  }
}

class Graphic extends React.Component {
  render() {
    var el = ReactFauxDOM.createElement('div')
    //el.setAttribute('class', 'graphicContainer') 
    
    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangeRoundBands([0,width], .1);
    var y = d3.scale.linear().range([height,0]);
    var xAxis = d3.svg.axis().scale(x).orient('bottom')
    var yAxis = d3.svg.axis().scale(y).orient('left').ticks(10,'%');

    var svg = d3.select(el).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var data = this.props.data

    x.domain(data.map(function(d) { return d[0]; }));
    y.domain([0, d3.max(data, function(d) { return d[1]; })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");

    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d[0]); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return height - y(d[1]); });

    function type(d) {
      d.frequency = +d.frequency;
      return d;
    }

    return el.toReact()
  }
};

class Graphic2 extends React.Component {
  render() {
    console.log(this.props.data)
    return (<div className='graphicContainer'>
      This is the container
      {this.props.data.map(item=><div>
        <div>{item[0]}</div>
        <div>{item[1]}</div>
        </div>)}
      </div>);
  }
};

class Dropdown extends React.Component {
  render() {
    return (<select className='dropdown'>
        <option value="nytimes.com">New York Times</option>
        <option value="theskint.com">The Skint</option>
        <option value="garysguide.com">Gary's Guide</option>
      </select>);
  }
}

render(<App/>, document.getElementById('app'));


