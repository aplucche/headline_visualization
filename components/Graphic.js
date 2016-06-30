import React, { Component, PropTypes } from 'react'

import d3 from 'd3'
import ReactFauxDOM from 'react-faux-dom'

class Graphic extends React.Component {
  constructor(props) {
      super(props);
      this.state = { maxWidth: 960, width: 960, height: 500 };
  }
  handleResize() {
    let window_width = Math.min(this.state.maxWidth, this.refs.graphicContainer.offsetWidth)
      this.setState({ width : window_width });
  }
  componentDidMount() {
      this.handleResize(this);
      window.addEventListener('resize', this.handleResize.bind(this));
  }
  componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize.bind(this));
  }
  render() {
    var el = ReactFauxDOM.createElement('div')
    
    var margin = { top: 20, right: 20, bottom: 30, left: 80 },
      width = this.state.width - margin.left - margin.right,
      height = this.state.height - margin.top - margin.bottom;

    var x = d3.scale.linear().range([0,width]);
    var y = d3.scale.ordinal().rangeRoundBands([0,height], .1);

    var xAxis = d3.svg.axis().scale(x).orient('bottom').ticks(10);
    var yAxis = d3.svg.axis().scale(y).orient('left');

    var svg = d3.select(el).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var data = this.props.data

    y.domain(data.map(function(d) { return d[0]; }));
    x.domain([0, d3.max(data, function(d) { return d[1]; })]);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
      .append("text")
        .attr("x", this.state.width/2)
        .attr("y", 21)
        .attr("dy", ".71em")
        .style("text-anchor", "middle")
        .text("Word Count");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("y", function(d) { return y(d[0]); })
        .attr("height", y.rangeBand())
        .attr("x", function(d) { return 0; })
        .attr("width", function(d) { return x(d[1]); });

    return (<div className= 'graphicContainer' ref='graphicContainer'>{el.toReact()}</div>)
  }
};

export default Graphic