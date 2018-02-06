import React, {Component} from 'react';
import FunnelChart from './FunnelChart';
import FunnelEventsList from './FunnelEventsList';

class FunnelExploreView extends Component {

  render() {

    return (
      <div className='explore-container'>
        <FunnelChart />
        <FunnelEventsList />
      </div>
    )
  }
}


export default FunnelExploreView;