import React from 'react';
import EmptyBowl from './theTest/emptyBowl';
import LilSoup from './theTest/lilSoup';
import SomeSoup from './theTest/someSoup';
import FullSoup from './theTest/fullSoup';

class TheTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        stage: 'Empty Bowl'
    };
  }
  componentDidMount() {
    const soup = localStorage.getItem('soupLvl');
    const soupVal = JSON.parse(soup);
    if (soupVal) this.setState({ stage: soupVal });
  }
  render() {
    const { screenWidth } = this.props;
    const saveProgress = (stage) => {
        localStorage.setItem('soupLvl', JSON.stringify(stage));
        this.setState({ stage });
    }
    return (
      <div>
        {
            this.state.stage === 'Empty Bowl' ?
            <EmptyBowl saveProgress={saveProgress} screenWidth={screenWidth} />
            :
            this.state.stage === 'Lil Soup' ?
            <LilSoup saveProgress={saveProgress} screenWidth={screenWidth} />
            :
            this.state.stage === 'Some Soup' ?
            <SomeSoup saveProgress={saveProgress} screenWidth={screenWidth} />
            :
            this.state.stage === 'Full Soup' ?
            <FullSoup saveProgress={saveProgress} screenWidth={screenWidth} />
            : null
        }
      </div>
    )
  }
}

export default TheTest;
