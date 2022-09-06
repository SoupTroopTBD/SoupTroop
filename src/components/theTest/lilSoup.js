import React from 'react';

class EmptyBowl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { saveProgress } = this.props;
    const nextStage = () => saveProgress('Some Soup');
    return (
      <div>
        <img className={'fadeIn'} src={require('../../img/lilSoup.png')} alt='Lil Soup' />
      </div>
    )
  }
}

export default EmptyBowl;
