import React, { Component } from 'react';
import FunnelTimeline from './FunnelTimeline';
import FunnelStep from './steps/FunnelStep';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './styles.css';
import './animations.css';
import { addStep, setExploreMode } from '../../reducers/funnels';
import Switch from 'react-toggle-switch'

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
      chartSwitched: false,
      exploreSwitched: false,
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
    else 
      return false
  }

  hasViewMode(id) {
    if (id === this.state.activeItem) {
      return true
    }
    else if (id < this.props.stepsLength - 1) {
      return true;
    }
  }

  getFunnelSteps() {
    const stepsLength = this.props.steps.length;
    return (
      <TransitionGroup className='funnels-steps'>
        {this.props.steps.map((step, id) => {
          const exploreMode = this.hasExploreMode(id);
          const viewMode = this.hasViewMode(id);
          return (
            <StepAnim key={step}>
              <FunnelStep
                key={`step-${id}`}
                id={id}
                stepName={step}
                mouseUp={this.setActive}
                exploreMode={exploreMode}
                viewMode={viewMode}
                chart={this.state.chartSwitched}
                dumbRendering={this.dumbRendering}
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

  _toggleExploreSwitch = () => {
    this.setState({
      exploreSwitched: !this.state.exploreSwitched,
    })

    this.props.setExploreMode({
      exploreMode: this.state.exploreSwitched
    })
  }

  _toggleChartSwitch = () => {
    this.setState({
      chartSwitched: !this.state.chartSwitched,
    })
  }

  render() {
    return (
      <div>
        <span style={{fontWeight: 600}}>Funnels Definition</span>
        <span
          style={{
            position: 'absolute',
            right: '15px',
          }}>
          <span style={{ margin: '0 10px' }}>Chart mode</span><Switch onClick={this._toggleChartSwitch} on={this.state.chartSwitched} />
        </span>
        <div className='funnel'>
          <FunnelTimeline steps={this.props.steps} exploreMode={this.props.exploreMode} />
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
  exploreMode: state.funnels.exploreMode,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addStep,
  setExploreMode,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Funnel)