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
import CommentsInput from './CommentsInput';
import CommentsOutput from './CommentsOutput';


const BASE_URL = "https://hl-art-space.herokuapp.com/"
// const BASE_URL = "https://3000-henryheyhey92-artspacedb-fcgyjiweags.ws-us38.gitpod.io/"

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
        hide: "none",
        hideComment: 'none',
        cardData: [],
        openDialog: "none",
        open: false,
        comfirmPassword: "",
        //for comment use
        commentData: [],
        commentBy: "",
        commentNote: "",
        currentArtworkId: ""
    }

    retrieveDate(data) {
        let date = new Date(data)
        return date.toLocaleDateString()
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
                                sx={{ objectFit: "contain", height: 300 }}
                            />
                            <Typography variant="body2" color="text.secondary" sx={{ m: 2 }}>
                                <label>Description :</label>
                                {this.state.cardData.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ m: 2 }}>
                                <label>Category :</label>
                                <Chip label={this.state.cardData.category} />
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
                            <Typography variant="body2" color="text.secondary" sx={{ m: 2 }}>
                                <label>Last Updated Time Stamp : </label>
                                {this.retrieveDate(this.state.cardData.last_time_stamp)}
                            </Typography>
                        </Paper>
                    </Box>

                    <Box sx={{ display: this.state.hideComment }}>
                        <Paper elevation={3} sx={{ mb: 5, ml: 5, mr: 5 }}>
                            {this.state.commentData ?
                                <CommentsOutput
                                    commentData={this.state.commentData}
                                /> :
                                <h1>No comment</h1>}
                        </Paper>
                    </Box>
                    <Box>
                        <Paper elevation={3}
                            sx={{
                                display: this.state.hide,
                                minWidth: 'xs',
                                height: '300',
                                mb: 5,
                                ml: 5,
                                mr: 5,
                                flexWrap: 'nowrap',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                objectFit: 'contain'
                            }} >
                            <CommentsInput
                                commentBy={this.state.commentBy}
                                commentNote={this.state.commentNote}
                                updateReadFormField={this.updateReadFormField}
                                addComment={() => this.addComment()} />
                        </Paper>
                    </Box>
                </React.Fragment>
            )
        }
    }

    addComment = async () => {
        let reqBody = {
            "name": this.state.commentBy,
            "artwork_id": this.state.cardData._id,
            "comment": this.state.commentNote
        }
        let response = await axios.post(BASE_URL + 'create/comment', reqBody);
        console.log(response);

        let params = {
            "id": this.state.currentArtworkId
        }
        //retrieve comment code
        let commentResponse = await axios.get(BASE_URL + "retrieve/comment", { params });
        console.log(commentResponse);
        console.log(this.state.commentData);

        this.setState({
            commentData: commentResponse.data.art_space,
            commentBy: "",
            commentNote: ""
        })

    }


    checkPassword = async (password) => {
        let response = await axios.get(BASE_URL + 'retrieve/password/' + this.state.cardData._id + '/' + password)
        if (response.data.result) {
            let deleteResponse = await axios.delete(BASE_URL + 'delete/artwork/' + this.state.cardData._id + '/' + password)
            if (deleteResponse.status === 200) {
                this.closeDialog();
                this.setInactive('block')
                this.setState({
                    open: false,
                    currentArtworkId: ""
                })
                let myBoolean = true;
                this.props.refreshData(myBoolean);
            }
        } else {
            console.log("false check password")
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
            show: 'flex',
            hide: "none",
            hideComment: 'none',
            currentArtworkId: ""
        })
        this.props.showCreateButton("block");
    }

    //need to pass over the password and objectId
    deleteBtn = (e) => {
        this.setState({
            hide: "none",
            hideComment: 'none',
            openDialog: "block",
            open: true
        })
        // this.props.deleteArtWork(e);
    }

    closeDialog = () => {
        this.setState({
            hide: "flex",
            hideComment: 'block',
            open: false
        })
    }

    setActive = async (data) => {
        console.log(data._id)

        this.setState({
            currentArtworkId: data._id
        })

        let params = {
            "id": data._id
        }
        //retrieve comment code
        let commentResponse = await axios.get(BASE_URL + "retrieve/comment", { params });
        console.log(commentResponse);

        commentResponse = commentResponse || []

        this.setState({
            activeArtwork: "ShowOne",
            show: "none",
            cardData: data,
            hide: 'flex',
            hideComment: 'block',
            commentData: commentResponse.data.art_space
        })
        this.props.hideCreateButton("none");
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
                                                sx={{ objectFit: "contain", height: 400 }}
                                                image={data.image_link}
                                                alt="green iguana" />
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
                    <Box sx={{ display: 'flex', size: "100", justifyContent: "center", mt: 30, thickness: 10 }}>
                        <CircularProgress />
                    </Box>
                }
            </React.Fragment>
        )
    }


}
