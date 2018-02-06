import React, {Component} from 'react';

const data = [
  {
    name: 'event_1',
    completions: 12304,
    averageDuration: 12000
  },
  {
    name: 'event_2',
    completions: 10000,
    averageDuration: 6000
  },
  {
    name: 'event_3',
    completions: 9000,
    averageDuration: 234
  },
  {
    name: 'event_4',
    completions: 8534,
    averageDuration: 908
  },
  {
    name: 'event_5',
    completions: 6345,
    averageDuration: 1234
  },
  {
    name: 'event_6',
    completions: 3459,
    averageDuration: 5467
  },
];

class FunnelEventsList extends Component {

  getPercents() {
    return 
  }

  getList() {
    const maxVal = data[0].completions;
    return (
      data.map((el, id) => {
        const percent = Math.round(el.completions / maxVal * 100);
        console.log('percent :: ', percent)
        return (
          <div className='funnel-event-list-item'>
            <div className='funnel-event-list-item-content'>
              <div style={{
                flex: 1,
                flexDirection: 'row',
                display: 'flex'
              }}>
                <div style={{flex:1}}>
                  {id+1}
                </div>
                <div style={{ flex: 4 }}>
                  {el.name}
                </div>
                <div style={{ flex: 6, display: 'flex', flexDirection: 'row' }}>
                  <div style={{ flex:1}}>{el.completions}</div>
                  <div style={{ flex: 4, flexAlign: 'right', maxWidth: '130px', backgroundColor: '#EEE',}}>
                    <div
                      style={{
                        backgroundColor: '#666',
                        flex: 1,
                        backgroundRepeat: 'no-repeat',
                        width: `${percent}%`,
                        height: '100%'
                      }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className='funnel-event-list-container'>
        <div>Events</div>
        {this.getList()}
      </div>
    )
  }
}

export default FunnelEventsList;