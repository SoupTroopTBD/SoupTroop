import React from 'react';
import './landingPage.css';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ marginTop: '15vh' }}>
        <div class='centerBox'>
          <div class='categoryWrapper'>
            <h1>SOUP TROOP</h1>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/intent/tweet?hashtags=SoupTroop&original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Emention%7Ctwgr%5ESoupTroopTBD&screen_name=SoupTroopTBD&text=Expect%20Us'
            >
              <button>
                <span>
                  <span>
                    <span data-attr-span='click'>
                      Click?
                    </span>
                  </span>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
