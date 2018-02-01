import React, { Component } from 'react';
import './styles.css';

export default class FunnelStep extends Component {

  render() {
    return (
      <div className='funnel-step step'>
        <div className='funnel-step-definition'>
          <div className='dragzone'/>
          <div className='content'>
            {`step--${this.props.id}`}
          </div>
        </div>
      </div>
    )
  }
}