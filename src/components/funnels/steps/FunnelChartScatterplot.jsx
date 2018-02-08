import React, {Component} from 'react'
import { withFauxDOM } from 'react-faux-dom'
import * as d3 from 'd3'
import { completions } from '../../../data/results';

class ScatterPlotChart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.chart}
      </div>
    )
  }

  componentDidMount() {
    // This will create a faux div and store its virtual DOM
    // in state.chart
    var faux = this.props.connectFauxDOM('div', 'chart')

    var component = this

    let data = this.props.data;

    let margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = this.props.width - margin.left - margin.right,
      height = this.props.height - margin.top - margin.bottom;

    console.log('this.props :: ', this.props)

    let x = d3.scaleBand()
      .range([0, width])

    x.domain(data.map((d) => d.completions));
    
    let y = d3.scaleLinear()
      .range([height, 0])
  
    y.domain([0, d3.max(data, (d) => d.averageDuration)]);
    
    let xAxis = d3.axisBottom()
      .scale(x)
      .ticks(4);

    let yAxis = d3.axisRight()
      .scale(y)
      .ticks(4);

    //Pass it to d3.select and proceed as normal
    let svg = d3.select(faux).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);


    x.domain(data.map(d => d.completions));
    y.domain([0, d3.max(data, (d) => d.averageDuration)]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${height})`)
      .call(xAxis);

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .style("text-anchor", "end")
      .text("Frequency");

    const circles = svg.selectAll(".circle")
      .data(data)
      .enter().append("circle")
      .attr("cx", d => x(d.completions) )
      .attr("cy", d => y(d.averageDuration))
      .attr("r", d => 0 )
      .style("fill", d => 'red');

    circles.transition()
      .duration(1000)
      .delay((d, i) => i * 30)
      .ease(d3.easeElastic)
      .attr('r', d => 5)

    this.props.animateFauxDOM(800)
  }
}

ScatterPlotChart.defaultProps = {
  chart: 'loading'
}

const FunnelChart = withFauxDOM(ScatterPlotChart)

export default FunnelChart