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
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';



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

    state = {
        activeArtwork: "ShowAll",
        show: "flex",
        cardData: []
    }
    renderArtWorkReadPage() {
        if (this.state.activeArtwork === 'ShowOne') {

            return (
                <React.Fragment>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 5,
                                width: '100%',
                                minWidth: 'xs',
                                minHeight: 400
                            },
                        }}>

                        <Paper elevation={3} sx={{}}>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', m: 1}}>
                                <Button size="small"
                                    onClick={() => this.setInactive('block')}
                                >Close</Button>
                                <Button 
                                    // onClick={() => this.deleteBtn(this.state.cardData)}
                                    >delete</Button>
                            </Box>


                            <Typography gutterBottom
                                variant="h5"
                                component="div"
                                sx={{ m: 2 }}>
                                {this.state.cardData.name}
                            </Typography>
                            <CardMedia
                                xs={12} sm={6} md={4}
                                component="img"
                                width="100%"
                                height="200"
                                image={this.state.cardData.image_link}
                                alt="green iguana"
                            />
                            <Typography variant="body2" color="text.secondary" sx={{ m: 2 }}>
                                <label>Description :</label>
                                {this.state.cardData.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ m: 2 }}>
                                <label>Category :</label>
                                {this.state.cardData.category}
                            </Typography>
                            <div sx={{ m: 2 }}>
                                <Stack direction="row" spacing={1} sx={{ m: 2 }}>
                                    <Typography variant="body2" color="text.secondary">
                                        <label>Medium :</label>
                                    </Typography>
                                    {this.state.cardData.medium.map(mediumName => {
                                        return (
                                            <Chip label={mediumName} />
                                        )
                                    })}
                                </Stack>
                            </div>
                            <Typography variant="h6" color="text.secondary" sx={{ m: 2 }}>
                                <label>Price : </label>
                                {this.state.cardData.price}
                            </Typography>
                        </Paper>
                    </Box>
                </React.Fragment>
            )
        }
    }

    setInactive = (e) => {
        this.setState({
            activeArtwork: "ShowAll",
            show: 'flex'
        })
        this.props.showCreateButton("block");
    }
    
    //need to pass over the password and objectId
    // deleteBtn = (e) => {
    //     this.props.deleteArtWork(e);
    // }

    setActive = async (data) => {
        await this.setState({
            activeArtwork: "ShowOne",
            show: "none",
            cardData: data
        })
        this.props.hideCreateButton("none");
        console.log(this.state.cardData);
    }

    render() {
        return (
            <React.Fragment>
                {this.props.data.art_space ?
                    <div>
                        {this.renderArtWorkReadPage()}
                        <Grid container sx={{ display: this.state.show, justifyContent: 'space-around' }}>
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
                                                <Button size="small"
                                                    onClick={() => this.setActive(data)}
                                                >Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })} </Grid> </div> : <h1>Loading...</h1>
                }
            </React.Fragment>
        )
    }


}
