import React from 'react';
import {SvgIcon} from '@material-ui/core';

function SvgIconStyled (props) {
  return (
    <SvgIcon 
      style={{fontSize:props.size?props.size:'40rem'}} 
      component={props.svg} 
      shapeRendering="geometricPrecision" 
      viewBox={props.viewBox?props.viewBox:'0 0 600 600'} />
  );
}

export default SvgIconStyled;