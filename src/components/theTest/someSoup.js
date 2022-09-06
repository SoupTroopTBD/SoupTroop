import React from 'react';

class EmptyBowl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { saveProgress } = this.props;
    const nextStage = () => saveProgress('Full Soup');
    return (
      <div>
        <img className={'fadeIn'} src={require('../../img/someSoup.png')} alt='Some Soup' />
      </div>
    )
  }
}

export default EmptyBowl;
