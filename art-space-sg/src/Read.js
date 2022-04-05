import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

const theme = {
    spacing: 8,
}

export default class Read extends React.Component {

    state={

    }

    

    render() {
        return (
            <React.Fragment>
                {this.props.data.art_space ?
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        {this.props.data.art_space.map(data => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={data._id}>
                                    {/* <div><CardView sx={{m: 2}} data={e}/></div> */}
                                    <Card sx={{ minWidth: 225, m: 2 }} >
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={data.image_link}
                                            alt="green iguana"
                                        />
                                        <CardContent sx={{ height: 100 }}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {data.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {data.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })} </Grid> : <h1>Loading...</h1>
                }
            </React.Fragment>
        )
    }


}
