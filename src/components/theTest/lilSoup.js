import React from 'react';
import { IconButton, Menu, MenuItem, ListItemIcon, Divider, TextField } from '@mui/material';
import { Search, Code, Image, Help, Twitter } from '@mui/icons-material';

class LilSoup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { saveProgress } = this.props;
    const nextStage = () => saveProgress('Some Soup');
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
        if (value === 'SOUP') nextStage();
    }
    return (
      <div style={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img onClick={() => {openResource('https://souptrooptbd.github.io/SoupTroop/whatthedogdo')}} className={'fadeIn'} src={require('../../img/lilSoup.png')} alt='Lil Soup' />
        <p style={{ color: '#323232',marginTop: '100px' }}>Click around...</p>
        <TextField onInput={checkVal} error style={{ marginTop: '150px' }} id='outlined-basic' label='Password' variant='outlined' />
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
          <Divider />
          <MenuItem onClick={() => {openResource('https://twitter.com/TBDKitchen/')}}>
            <ListItemIcon>
              <Twitter fontSize='small' />
            </ListItemIcon>
            TBDKitchen
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default LilSoup;
