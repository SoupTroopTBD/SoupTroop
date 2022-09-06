import React from 'react';

class FullSoup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { screenWidth } = this.props;
    return (
      <div style={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img className={'fadeIn'} src={require('../../img/fullSoup.png')} alt='Full Soup' />
        <h2 style={{ fontSize: screenWidth < 1023 ? '25pt' : '32pt', textAlign: 'center', padding: '10px' }}>Thank you for participating!</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '10px' }}>I hope you enjoyed this short cipher / internet riddle game :)</p>
      </div>
    )
  }
}

export default FullSoup;
