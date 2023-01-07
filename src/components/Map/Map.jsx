import React from 'react';
import googleMapReact from 'google-map-react';
import {Paper , Typrgraphy,useMediaQuery} from '@material-ui/core';
import LocationOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './style';

const Maps = () => {
  const classes = useStyles();
  const ismobile = useMediaQuery('(min-width:600px)');
  return (
    <div></div>
  );
}

export default Maps;
