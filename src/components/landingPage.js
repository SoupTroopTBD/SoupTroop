import React from 'react';
import TheTest from './theTest';
import './landingPage.css';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testMode: false
    };
  }
  render() {
    const toggleTestMode = () => {
      this.setState({ testMode: !this.state.testMode });
    }
    return (
      <> {
        this.state.testMode ?
        <TheTest />
        :
        <div style={{ marginTop: '13vh' }}>
          <div className='centerBox'>
            <div className='categoryWrapper'>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1>SOUPTROOP</h1>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://twitter.com/intent/tweet?hashtags=SoupTroop&original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Emention%7Ctwgr%5ESoupTroopTBD&screen_name=SoupTroopTBD&text=Expect%20Us'
                  style={{ color: 'white', position: 'absolute', left: '45%', top: '20%', zIndex: '20', textDecoration: 'none' }}
                >#clickMe</a>
              </div>
              <button onClick={toggleTestMode}>
                <span>
                  <span>
                    <span data-attr-span='CAN YOU NOT READ?'>
                      DONT CLICK ME
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      } </>
    )
  }
}

export default LandingPage;
