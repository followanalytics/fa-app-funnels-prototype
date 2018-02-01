import React, { Component } from 'react';
import FunnelTimeline from './FunnelTimeline';
import FunnelStep from './FunnelStep';
import './styles.css';

export default class Funnel extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      steps: ['step_1', 'step_2', 'step_3'],
    }
  }

  getFunnelSteps() {
    return (
      this.state.steps.map((step, id) => {
        return (
            <FunnelStep key={`step-${id}`} id={id} />
        )
      })
    )
  }

  addStep = () => {
    const step = `step--${this.state.steps.length}`;
    const steps = this.state.steps;
    steps.push(step);


    this.setState({
      steps: steps
    })
  }

  render() {

    return (
      <div>
        Funnels explore mode
        <div className='funnel'>
          <FunnelTimeline steps={this.state.steps}/>
          <div className='steps'>
            {this.getFunnelSteps()}
          </div>
        </div>
        <div className='timeline-step' onClick={this.addStep}>
          <div className='timeline-point'>+</div>
          <div className='timeline-add-copy'>Add Step</div>
        </div>
      </div>
    )
  }
}