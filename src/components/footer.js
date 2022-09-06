import { IconButton } from '@mui/material';
import { Twitter } from '@mui/icons-material';

const Footer = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p style={{ color: '#323232', fontSize: '14pt', marginRight: '15px' }}>Soup Troop 2022</p>
        <a style={{ marginTop: '10px' }} href='https://twitter.com/SoupTroopTBD'>
          <IconButton color='primary' component="label">
            <Twitter />
          </IconButton>
        </a>
      </div>
    )
}

export default Footer;
  