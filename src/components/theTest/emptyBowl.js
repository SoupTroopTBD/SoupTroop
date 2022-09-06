import React from 'react';

class EmptyBowl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img className={'fadeIn'} src={require('../../img/emptyBowl.png')} alt='Empty Bowl' />
      </div>
    )
  }
}

export default EmptyBowl;
