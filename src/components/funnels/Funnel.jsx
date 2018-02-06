import React, { Component } from 'react';
import FunnelTimeline from './FunnelTimeline';
import FunnelStep from './steps/FunnelStep';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './styles.css';
import './animations.css';
import { addStep } from '../../reducers/funnels';

const StepAnim = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={300}
    classNames="stepanim"
  >
    {children}
  </CSSTransition>
);

class Funnel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      overed: -1,
      activeItem: -1,
    }
  }

  setActive = (id) => {

    this.setState({
      activeItem: id !== this.state.activeItem ? id : -1,
    })
  }

  hasExploreMode(id) {
    if(id === this.state.activeItem)
    {
      return true
    }
    else if(id === this.props.stepsLength - 1 && id > 0) {
      return true;
    }
  }

  getFunnelSteps() {
    const stepsLength = this.props.steps.length;
    return (
      <TransitionGroup className='funnels-steps'>
        {this.props.steps.map((step, id) => {
          const exploreMode = this.hasExploreMode(id);
          return (
            <StepAnim key={step}>
              <FunnelStep
                key={`step-${id}`}
                id={id}
                stepName={step}
                mouseUp={this.setActive}
                exploreMode={exploreMode}
              />
            </StepAnim>
          )
        })}
      </TransitionGroup>
    )
  }

  _addStep = () => {
    const step = `step--${Math.random()}`;
    this.props.addStep(step);
    this.setState({
      activeItem: this.props.steps.length,
      overed: this.props.steps.length,
    });
  }

  render() {
    return (
      <div>
        Funnels explore mode
        <div className='funnel'>
          <FunnelTimeline steps={this.props.steps} exploreMode={this.state.activeItem}/>
          <div className='steps'>
            {this.getFunnelSteps()}
          </div>
        </div>
        <div className='timeline-step' onClick={this._addStep}>
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