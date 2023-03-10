import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar,Typography,InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style';

const Header = () => {
    const classes = useStyles();
  return (
    <AppBar position='static'> 
        <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className='{classes.title}'>
                Travel Advisory
            </Typography>
            <Box>
            <Typography variant='h6' className='{classes.title}'>
                Exolore New Places
            </Typography>
            </Box>
            {/* <Autocomplete> */}
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                      placeholder='Search places....'
                      classes={{root:classes.inputRoot,input:classes.inputInput}}
                    />

                </div>
            {/* </Autocomplete> */}
        </Toolbar>
    </AppBar>
  )
}

export default Header;
