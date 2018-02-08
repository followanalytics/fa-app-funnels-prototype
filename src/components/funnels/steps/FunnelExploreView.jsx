import React, {Component} from 'react';
// import FunnelChart from './FunnelChart';
import FunnelEventsList from './FunnelEventsList';
import FunnelChart from './FunnelChartScatterplot';
import { eventsData } from '../../../data/suggestedEvents';

class FunnelExploreView extends Component {

  render() {

    return (
      <div className='explore-container'>
        <FunnelChart
          width={360}
          height={320}
          data={eventsData}
        />
        <FunnelEventsList/>
      </div>
    )
  }
}


export default FunnelExploreView;