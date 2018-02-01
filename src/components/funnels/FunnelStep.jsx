import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteStep } from '../../reducers/funnels';
import './styles.css';

class FunnelStep extends Component {

  deleteStep = () => {
    this.props.deleteStep(this.props.id);
  }

  render() {
    return (
      <div className='funnel-step step'>
        <div className='funnel-step-definition'>
          <div className='dragzone'/>
          <div className='content'>
            {`step--${this.props.id}`}
            <div className='deleteStepAction' onClick={this.deleteStep}>DELETE STEP</div>
          </div>
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