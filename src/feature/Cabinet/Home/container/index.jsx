import React from "react";
import {Grid} from '@material-ui/core'
import Card from '../components/Card'
import {ReactComponent as SmileyFaceSvg} from '../../../../assets/img/smileyFace.svg';

export const HomeContainer = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
      <Grid item xs={12}>
        <div></div>
      </Grid>
      <Grid item xs={12}>
        <Card title={'welcome Back!'} icon={<SmileyFaceSvg />}>
          {"Lest get started with what you are looking for..."}
        </Card>
      </Grid>
    </Grid>
  );
};
