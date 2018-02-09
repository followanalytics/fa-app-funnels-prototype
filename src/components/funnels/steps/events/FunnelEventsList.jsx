import React, {Component} from 'react';
import { eventsData } from '../../../../data/suggestedEvents';
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import Motion from 'react-motion'
import styled, {keyframes} from 'styled-components';
import BarItem from './FunnelBarItem';

const duration = 300;
const delayValue = 5000;


const eventAppear = keyframes`
    from {
      opacity: 0
      transform: translateY(20px);
    }
    
    to {
      opacity: 1;
      transform: translateY(0);
    }
    `

const EventsAnimated = styled.div.attrs({
        delay: props => props.delay || 0,
      }) `
      transform: translateY(20px);
      transform-origin: top left;
      opacity: 0;
      animation-name: ${eventAppear};
      animation-duration: .3s;
      animation-timing-function: ease-out;
      animation-delay: ${props => props.delay}s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-fill-mode: forwards;
      animation-play-state: running;
    `;

class FunnelEventsList extends Component {
  constructor(props) {
    super(props);
  }

  getDelay(id) {
    return (id * 0.1) + 0.1;
  }

  getStepContent(el, id, percent) {
    return (
      <div className='funnel-event-list-item-content'>
        <div style={{
          flex: 1,
          flexDirection: 'row',
          display: 'flex'
        }}>
          <div style={{ flex: 1 }}>
            {id + 1}
          </div>
          <div style={{ flex: 4 }}>
            {el.eventName}
          </div>
          <div style={{ flex: 6, display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 1, color: '#aaa' }}>{el.completions}</div>
            <div style={{ flex: 4, flexAlign: 'right', maxWidth: '130px', backgroundColor: '#EEE' }}>
              <BarItem delay={this.getDelay(id)} fillwidth={percent}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

  getStepEvent(el, id, percent) {
    return (
      <div>
        {this.getStepContent(el, id, percent)}
      </div>
    )
  }

  getList() {
    const maxVal = eventsData[0].completions;
    return (
      eventsData.map((el, id) => {
        const percent = Math.round(el.completions / maxVal * 100);
        return (
          <EventsAnimated key={`event-animated-${id}`} delay={this.getDelay(id)}>
            <div key={`funnel-event-list-item-${id}`} className='funnel-event-list-item'>
              {this.getStepEvent(el, id, percent)}
            </div>
          </EventsAnimated>
        )
      })
    )
  }

  render() {
    return (
      <div className='funnel-event-list-container'>
        <div style={{fontWeight: 600}}>Events</div>
        {this.getList()}
      </div>
    )
  }
}

export default FunnelEventsList;