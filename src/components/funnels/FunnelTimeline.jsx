import React, { Component } from 'react';
import './styles.css';

export default class FunnelTimeline extends Component {

  getSteps() {
    return(
      this.props.steps.map((step, id) => {
        const label = id+1;
        return (
          <div className='timeline-step step'>
            <div className='timeline-point'>
              {label}
            </div>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className='timeline-container'>
        {this.getSteps()}
      </div>
    )
  }
}