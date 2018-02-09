import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteStep, setExploreMode } from '../../../reducers/funnels';
import './styles.css';
import FunnelExploreView from './FunnelExploreView';
import StepDrag from '../../ui/StepDrag';
import StepAction from '../../ui/StepActions';
import MultiSelectCustom from '../../ui/MultiSelectCustom';
import DropOut from './charts/Dropout';


const dropouts = [
  100,
  80,
  30,
  10
]

class FunnelStep extends Component {

  constructor(props) {
    super(props);

    this.state = {
      exploreMode: props.exploreMode,
      dropOut: false,
    }
  }

  componentDidMount() {
    setTimeout(
      () => this.setState({dropOut: true}),
      800
    )
  }


  deleteStep = () => {
    this.props.deleteStep(this.props.id);
  }

  _mouseUp = () => {
    this.props.mouseUp(this.props.id)
  }

  getClassicMode() {
    return (
      <span style={{
        position: 'relative',
        top: '22px'
      }}>
        <MultiSelectCustom />
      </span>
    )
  }

  getExploreMode() {
    return (
      <div
        key={`step-explore-${this.props.id}`}>
        <FunnelExploreView chart={this.props.chart ? 'bubble' : 'scatterplot'}/>
      </div>
    )
  }
  
  switchExploreMode = () => {
    this.setState({
      exploreMode: !this.state.exploreMode
    })

    this.props.setExploreMode({
      exploreMode: !this.state.exploreMode
    })
  }

  getDropOut() {
    const dropOut = this.state.dropOut;

    if(!dropOut || this.props.id === 0) return null

    const percent = this.props.id

    return (
      <div>
        <DropOut initialWidth={dropouts[this.props.id]}>
          {`${this.props.id} %`}
        </DropOut>
      </div>
    )
  }

  render() {
    return (
      <div>
        {/* {this.getDropOut()} */}
        <div
        key={`funnel-step-container-${this.props.id}`}
        className={`funnel-step step ${this.state.exploreMode ? 'explore-mode' : ''}`}>
            <div
              className='funnel-step-definition'
              >
              <div className='dragzone'>
                <StepDrag/>
              </div>
            <div
              key={`step-default-${this.props.id}`}
              className='content'>
              <span className={'step-title'}>{`Step ${this.props.id + 1}`}</span>
              {this.state.exploreMode ? this.getExploreMode() : this.getClassicMode()}
              <div className='step-actions-container'>
                <span
                className={`explore-mode-button${ this.state.active ? '-active' : ''}`}
                onClick={this.switchExploreMode}>
                  Explore Mode
                </span>
                <StepAction onClick={this.deleteStep}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteStep,
  setExploreMode
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FunnelStep)