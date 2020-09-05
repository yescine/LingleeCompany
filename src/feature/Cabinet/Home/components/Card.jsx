import React from 'react'
import {Grid,Typography,Paper} from '@material-ui/core'

function Card(props) {
   return (
      <Paper style={{height:'9rem'}} elevation={4}>
         <Grid style={{padding:'0.75rem'}} container direction="row" justify="flex-start" alignItems="flex-start">
            <Grid item xs={12} sm={8} md={9}>
               <Typography variant="h6" color="primary" >{props.title}</Typography>
               <Typography variant="caption" >{props.children}</Typography>
            </Grid>
            <Grid style={{position:'relative',bottom:'3rem'}} item xs={12} sm={3} md={3}>
               {props.icon}
            </Grid>
            
          </Grid>
      </Paper>
   )
}

export default Card
