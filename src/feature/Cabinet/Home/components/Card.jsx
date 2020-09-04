import React from 'react'
import {Grid,Typography,Paper} from '@material-ui/core'

function Card(props) {
   return (
      <Paper  elevation={4}>
         <Grid style={{padding:'0.75rem'}} container direction="row" justify="flex-start" alignItems="center">
            <Grid item xs={12} sm={7}>
               <Typography variant="h6" color="primary" >{props.title}</Typography>
               <Typography variant="caption" >{props.children}</Typography>
            </Grid>
            <Grid style={{position:'relative',bottom:'4rem'}} item xs={12} sm={5}>
               {props.icon}
            </Grid>
            
          </Grid>
      </Paper>
   )
}

export default Card
