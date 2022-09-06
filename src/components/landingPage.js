import React from "react";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonHover: false
    };
  }
  render() {
    const toggleButtonHover = () => this.setState({ buttonHover: !this.state.buttonHover });
    return (
      <div style={{ marginTop: '15vh' }}>
        <div className='overlay'>
          <div className='container'>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <h1 style={{ fontFamily: 'Raleway, sans-serif', color: 'white', fontSize: '82px', fontWeight: '700', marginBottom: '10px' }}>SOUP TROOP</h1>
              <p style={{ color: 'white', fontSize: '22px', fontWeight: '300', marginBottom: '60px' }}>#soup</p>
              <a
                href="https://twitter.com/intent/tweet?hashtags=SoupTroop&original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Emention%7Ctwgr%5ESoupTroopTBD&screen_name=SoupTroopTBD&text=Expect%20Us"
                onMouseEnter={toggleButtonHover}
                onMouseLeave={toggleButtonHover}
                style={{
                  textDecoration: 'none',
                  marginBottom: '50px',
	                fontFamily: 'Raleway, sans-serif',
	                color: 'white',
	                background: this.state.buttonHover ? '#323232' : 'rgba(255,255,255,0.7)',
	                backgroundImage: this.state.buttonHover ? 'none' : 'linear-gradient(to right, rgba(255,255,255,0.7) 0%, #323232 100%)',
	                padding: '14px 34px',
	                letterSpacing: '1px',
	                fontSize: '15px',
	                fontWeight: '500',
	                borderRadius: '25px',
	                transition: 'all 0.5s linear',
	                border: '0'
                }}
              >CLICK?</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
