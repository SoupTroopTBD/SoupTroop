import React from 'react';
import EmptyBowl from './theTest/emptyBowl';

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
    const saveProgress = (stage) => {
        localStorage.setItem('soupLvl', JSON.stringify(stage));
        this.setState({ stage });
    }
    return (
      <div>
        {
            this.state.stage === 'Empty Bowl' ?
            <EmptyBowl saveProgress={saveProgress} />
            : null
        }
      </div>
    )
  }
}

export default TheTest;
