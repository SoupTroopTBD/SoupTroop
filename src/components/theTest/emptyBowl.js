import React from 'react';
import { IconButton, Menu, MenuItem, ListItemIcon, Divider, TextField } from '@mui/material';
import { Search, Code, Image, Help } from '@mui/icons-material';

class EmptyBowl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        help: false,
        helpAnchor: null
    };
  }
  render() {
    const { saveProgress, screenWidth } = this.props;
    const nextStage = () => saveProgress('Lil Soup');
    const openResourcesDialog = (event) => {
        this.setState({ help: true, helpAnchor: event.currentTarget });
    }
    const closeResourcesDialog = () => {
        this.setState({ help: false, helpAnchor: null });
    }
    const openResource = (URL) => {
        window.open(URL, '_blank');
        this.setState({ help: false, helpAnchor: null });
    }
    const checkVal = (e) => {
        const { value } = e.target;
        if (value === 'THEJUNGLE') nextStage();
    }
    return (
      <div style={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: screenWidth < 1023 ? '25pt' : '32pt', padding: '10px' }}>Welcome to my test</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '10px' }}>If you aren't very confident in cipher and riddle solving, feel free to use the resources in the top right...</p>
        <p style={{ color: '#323232', textAlign: 'center', padding: 0 }}>- .... . .--- ..- -. --. .-.. .</p>
        <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '10px' }}>If you are confident in you skills however, go on and get started, for the test has already begun</p>
        <img className={'fadeIn'} src={require('../../img/emptyBowl.png')} alt='Empty Bowl' />
        <TextField onInput={checkVal} error style={{ marginTop: '50px' }} id='outlined-basic' label='Password' variant='outlined' />
        <IconButton onClick={openResourcesDialog} style={{ position: 'absolute', top: '10vh', right: 0 }} color='primary' component='label'>
          <Help />
        </IconButton>
        <Menu
          anchorEl={this.state.helpAnchor}
          id='help-menu'
          open={this.state.help}
          onClose={closeResourcesDialog}
          onClick={closeResourcesDialog}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={() => {openResource('https://www.dcode.fr/cipher-identifier')}}>
            <ListItemIcon>
              <Code fontSize='small' />
            </ListItemIcon>
            DCODE.fr
          </MenuItem>
          <MenuItem onClick={() => {openResource('https://www.boxentriq.com/code-breaking/cipher-identifier')}}>
            <ListItemIcon>
              <Search fontSize='small' />
            </ListItemIcon>
            BOXENTRIQ.com
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => {openResource('https://www.aperisolve.com/')}}>
            <ListItemIcon>
              <Image fontSize='small' />
            </ListItemIcon>
            Aperi'Solve
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default EmptyBowl;
