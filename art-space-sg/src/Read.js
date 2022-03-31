import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import CardView from './CardView';
import { spacing } from '@mui/system';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Read(props) {
    
    const theme = {
        spacing: 5,
      }
      
    return (
        <React.Fragment>
            {props.data.art_space ? 
             <Grid container  sx={{display: 'flex', justifyContent: 'space-around'}}>
                {props.data.art_space.map(e => {
                    return (
                       <Grid item xs={12} sm={6} md={4} key={e._id}>
                       <div><CardView sx={{m: 2}} data={e}/></div>
                      </Grid>
                    )
                })} </Grid>: <h1>Loading...</h1>
            }
        </React.Fragment>


    );


}
