import React, {Component} from 'react';
// import FunnelChart from './FunnelChart';
import FunnelEventsList from './events/FunnelEventsList';
import FunnelScatterplotChart from './charts/FunnelChartScatterplot';
import FunnelBubbleChart from './charts/FunnelChartBubble';
import { eventsData } from '../../../data/suggestedEvents';

class FunnelExploreView extends Component {

  getBubbleChart() {
    return (
      <FunnelBubbleChart
        width={360}
        height={320}
        data={eventsData}
      />
    )
  }

  getScatterPlotChart() {
    return (
      <FunnelScatterplotChart
        width={360}
        height={300}
        data={eventsData}
      />
    )
  }


  render() {
    return (
      <div className='explore-container'>
        {this.props.chart === 'bubble' ? this.getBubbleChart() : this.getScatterPlotChart()}
        <FunnelEventsList/>
      </div>
    )
  }
}


export default FunnelExploreView;