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
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

// const BASE_URL = "https://hl-art-space.herokuapp.com/"
const BASE_URL = "https://3000-henryheyhey92-artspacedb-fcgyjiweags.ws-us38.gitpod.io/"

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
        hide: "flex",
        cardData: [],
        openDialog: "none",
        open: false,
        comfirmPassword: ""
    }
    renderArtWorkReadPage() {
        if (this.state.activeArtwork === 'ShowOne') {

            return (
                <React.Fragment>
                    <Dialog open={this.state.open} onClose={() => this.closeDialog()} >
                        <DialogTitle>Delete Confirmation</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please input password to delete your artwork
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Password"
                                type="password"
                                fullWidth
                                variant="standard"
                                onChange={this.updateReadFormField}
                                name="comfirmPassword"
                                value={this.state.comfirmPassword}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => this.closeDialog()}>Cancel</Button>
                            <Button onClick={() => this.checkPassword(this.state.comfirmPassword)}>Sumbit</Button>
                        </DialogActions>
                    </Dialog>
                    <Box
                        sx={{
                            display: this.state.hide,
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 5,
                                width: '100%',
                                minWidth: 'xs',
                                minHeight: 400
                            },
                        }}>

                        <Paper elevation={3} sx={{}} >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 1 }}>
                                <Button size="small"
                                    onClick={() => this.setInactive('block')}
                                >Close</Button>
                                <Button
                                    onClick={() => this.deleteBtn(this.state.cardData)}
                                >delete</Button>
                            </Box>


                            <Typography gutterBottom
                                variant="h5"
                                component="div"
                                sx={{ m: 2 }}>
                                {this.state.cardData.name}
                            </Typography>
                            <CardMedia
                                xs={12} sm={8} md={6}
                                component="img"
                                width="100%"
                                
                                image={this.state.cardData.image_link}
                                alt="green iguana"
                                sx={{ objectFit: "contain", height: 500 }}
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
                                            <Chip label={mediumName} key={mediumName} />
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


    checkPassword = async (password) => {
        console.log(password);
        console.log(this.state.cardData.id)
        let response = await axios.get(BASE_URL + 'retrieve/password/' + this.state.cardData._id + '/' + password)
        console.log(response.data.result);
        if (response.data.result) {
            let deleteResponse = await axios.delete(BASE_URL + 'delete/artwork/' + this.state.cardData._id + '/' + password)
            console.log(deleteResponse.status);
            if (deleteResponse.status === 200) {
                this.closeDialog();
                this.setInactive('block')
                this.setState({
                    open: false
                })
                let myBoolean = true;
                this.props.refreshData(myBoolean);
            }
        } else {
            console.log("false")
        }
    }

    updateReadFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    setInactive = (e) => {
        this.setState({
            activeArtwork: "ShowAll",
            show: 'flex'
        })
        this.props.showCreateButton("block");
    }

    //need to pass over the password and objectId
    deleteBtn = (e) => {
        this.setState({
            hide: "none",
            openDialog: "block",
            open: true
        })
        // this.props.deleteArtWork(e);

    }

    closeDialog = () => {
        this.setState({
            hide: "flex",
            open: false
        })
    }

    setActive = (data) => {
        this.setState({
            activeArtwork: "ShowOne",
            show: "none",
            cardData: data
        })
        this.props.hideCreateButton("none");
        console.log(this.state.cardData._id);
    }

    setEdit = (data) => {
        this.props.triggerEdit(data);
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
                                                
                                                image={data.image_link}
                                                alt="green iguana"
                                                
                                                // sx={{ backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
                                            />
                                            <CardContent sx={{ height: 100 }} key={data.name}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {data.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {data.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions key={data.price}>
                                                <Button size="small"
                                                    onClick={() => this.setEdit(data)}>Edit</Button>
                                                <Button size="small"
                                                    onClick={() => this.setActive(data)}>Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })} </Grid> </div> : 
                            <Box sx={{ display: 'flex' , size: "100", justifyContent: "center", mt: 30, thickness: 10}}>
                                    <CircularProgress />
                            </Box>
                }
            </React.Fragment>
        )
    }


}
