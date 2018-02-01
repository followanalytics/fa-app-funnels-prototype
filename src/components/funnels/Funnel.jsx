import React, { Component } from 'react';
import FunnelTimeline from './FunnelTimeline';
import FunnelStep from './FunnelStep';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './styles.css';
import { addStep } from '../../reducers/funnels';

class Funnel extends Component {

  getFunnelSteps() {
    console.log('steps :: ', this.props.steps)

    return (
      this.props.steps.map((step, id) => {
        return (
            <FunnelStep key={`step-${id}`} id={id}/>
        )
      })
    )
  }

  addStep = () => {
    const step = `step--${Math.random()}`;
    this.props.addStep(step)
  }

  render() {

    return (
      <div>
        Funnels explore mode
        <div className='funnel'>
          <FunnelTimeline steps={this.props.steps}/>
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

const mapStateToProps = state => ({
  steps: state.funnels.steps,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addStep,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Funnel)