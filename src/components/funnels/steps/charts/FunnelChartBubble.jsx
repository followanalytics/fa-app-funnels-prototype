import React, { Component } from 'react'
import { withFauxDOM } from 'react-faux-dom'
import * as d3 from 'd3'
import { completions } from '../../../../data/results';


let arrClasses = [];

class BubbleChart extends Component {
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

    var format = d3.format(',d');

    var color = d3.scaleOrdinal(d3.schemeCategory20c);

    var pack = d3.pack()
      .size([width, height])
      .padding(1.5);

    //Pass it to d3.select and proceed as normal
    let svg = d3.select(faux).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

    var rootData = d3.hierarchy({ children: data })
      .sum(function (d) { return d.completions })

    var node = svg.selectAll('.node')
      .data(pack(rootData).leaves())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', function (d) { return 'translate(' + d.x + ',' + d.y + ')'; });

    const circle = node.append('circle')
      .attr('completions', function (d) { return d.completions; })
      .attr('r', function (d) { return 1 })
      .style('fill', function (d) { return color(d.completions); });

    circle.transition()
      .duration(1000)
      .delay((d, i) => i * 30)
      .ease(d3.easeElastic)
      .attr('r', d => d.r)


    this.props.animateFauxDOM(800)
  }

}

BubbleChart.defaultProps = {
  chart: 'loading'
}

const FunnelBubbleChart = withFauxDOM(BubbleChart)

export default FunnelBubbleChart