import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteStep } from '../../../reducers/funnels';
import './styles.css';
import FunnelExploreView from './FunnelExploreView';

class FunnelStep extends Component {

  deleteStep = () => {
    this.props.deleteStep(this.props.id);
  }

  _mouseUp = () => {
    this.props.mouseUp(this.props.id)
  }

  getClassicMode() {
    return (
      <div 
        key={`step-default-${this.props.id}`}
        className='content'>
        {`step--${this.props.id} || `}
        {`Name :: ${this.props.stepName}`}
      </div>
    )
  }

  getExploreMode() {
    return (
      <div
        key={`step-explore-${this.props.id}`}
        className='content'>
        <FunnelExploreView />
      </div>
    )
  }
  
  render() {
    return (
      <div
        key={`funnel-step-container-${this.props.id}`}
        className={`funnel-step step ${this.props.exploreMode ? 'explore-mode' : ''}`}>
          <div
            className='funnel-step-definition'
            onMouseUp={this._mouseUp}
          >
            <div className='dragzone'/>
            {this.props.exploreMode ? this.getExploreMode() : this.getClassicMode()}
            <div className='step-actions-container' onClick={this.deleteStep}>DELETE STEP</div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteStep
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FunnelStep)