import React from 'react';

class EmptyBowl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { saveProgress } = this.props;
    return (
      <div>
        <img className={'fadeIn'} src={require('../../img/fullSoup.png')} alt='Full Soup' />
      </div>
    )
  }
}

export default EmptyBowl;
