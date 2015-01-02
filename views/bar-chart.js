/**  @jsx React.DOM */
React = require('react'),
  ChartMixin = require('./mixins/chart-mixin'),
  d3Chart = require('./bar-chart-d3');

var BarChart = React.createClass({
  mixins: [ChartMixin], // Use the mixin
  propTypes: {
    data: React.PropTypes.array,
    stuff: React.PropTypes.array,
    domain: React.PropTypes.object
  },

  render: function() {
    return (
      <div className="chart"></div>
    );
  }
});

module.exports = BarChart;
