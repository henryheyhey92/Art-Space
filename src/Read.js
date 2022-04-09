import * as React from 'react';
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
        currentArtworkId: "",

        // for edit
        openEdit: false,
        currentArtWorkData: {},
        correctPassword: true
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
                                error={!this.state.correctPassword}
                                helperText={!this.state.correctPassword ? "wrong password" : ""}
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
                                component="span"
                                sx={{ m: 2 }}
                            >
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
                            <Typography variant="body2" color="text.secondary" sx={{ m: 2 }} component="div">
                                <label>Artist Name :</label>
                                {this.state.cardData.artist.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ m: 2 }} component="div">
                                <label>Contact Number :</label>
                                {this.state.cardData.artist.contact_no}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ m: 2 }} component="div">
                                <label>Email :</label>
                                {this.state.cardData.artist.email}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ m: 2 }} component="div">
                                <label>Description :</label>
                                {this.state.cardData.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ m: 2 }} component="div">
                                <label>Category :</label>
                                <Chip label={this.state.cardData.category} />
                            </Typography>

                            <Stack direction="row" spacing={1} sx={{ m: 2 }}>
                                <Typography variant="body2" color="text.secondary" component="div">
                                    <label>Medium :</label>
                                </Typography>
                                {this.state.cardData.medium.map(mediumName => {
                                    return (
                                        <Chip label={mediumName} key={mediumName} />
                                    )
                                })}
                            </Stack>

                            <Typography variant="h6" color="text.secondary" sx={{ m: 2 }} component="div">
                                <label>Price : </label>
                                {this.state.cardData.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ m: 2 }} component="div">
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
        
        await axios.post(BASE_URL + 'create/comment', reqBody);

        let params = {
            "id": this.state.currentArtworkId
        }
        //retrieve comment code
        let commentResponse = await axios.get(BASE_URL + "retrieve/comment", { params });

        this.setState({
            commentData: commentResponse.data.art_space,
            commentBy: "",
            commentNote: ""
        })

    }

    checkPasswordForEdit = async (password) => {
        this.setState({
            correctPassword: true
        })
    
        let response = await axios.get(BASE_URL + 'retrieve/password/' + this.state.currentArtWorkData._id + '/' + password);
        if (response.data.result) {
            this.props.triggerEdit(this.state.currentArtWorkData);

        } else {
            this.setState({
                correctPassword: false
            })
        }

    }


    checkPassword = async (password) => {
        this.setState({
            correctPassword: true
        })
        let response = await axios.get(BASE_URL + 'retrieve/password/' + this.state.cardData._id + '/' + password)
        if (response.data.result) {
            let deleteResponse = await axios.delete(BASE_URL + 'delete/artwork/' + this.state.cardData._id + '/' + password)
            if (deleteResponse.status === 200) {
                this.closeDialog();
                this.setInactive('block')
                this.setState({
                    open: false,
                    currentArtworkId: "",
                    comfirmPassword: ""
                })
                let myBoolean = true;
                this.props.refreshData(myBoolean);
            }
        } else {
            this.setState({
                correctPassword: false
            })
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
            open: false,
            openEdit: false,
            currentArtWorkData: {}
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
        commentResponse = commentResponse || []
        console.log(data)
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
        console.log(data)
        this.setState({
            openEdit: true,
            currentArtWorkData: data
        })
        // this.props.triggerEdit(data);

    }

    renderDialogBox() {
        return (
            <React.Fragment>
                <DialogTitle>Edit Confirmation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please input password to Edit your artwork
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
                        error={!this.state.correctPassword}
                        helperText={!this.state.correctPassword ? "wrong password" : ""}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.closeDialog()}>Cancel</Button>
                    <Button onClick={() => this.checkPasswordForEdit(this.state.comfirmPassword)}>Sumbit</Button>
                </DialogActions>
            </React.Fragment>
        )
    }


    render() {
        return (
            <React.Fragment>
                {this.props.data.art_space ?
                    <Box>
                        {this.renderArtWorkReadPage()}
                        <Dialog open={this.state.openEdit} onClose={() => this.closeDialog()} >
                            {this.renderDialogBox()}
                        </Dialog>
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
                                            <CardContent sx={{ height: 50 }} key={data.name}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {data.name}
                                                </Typography>
                                                {/* <Typography variant="body2" color="text.secondary" component="div">
                                                    <Box sx={{textOverflow: 'clip',overflow: 'hidden'}}>
                                                    {data.description}
                                                    </Box>
                                                </Typography> */}
                                            </CardContent>
                                            <CardActions sx={{mt: 1}} key={data.price}>
                                                <Button size="small"
                                                    onClick={() => this.setEdit(data)}>Edit</Button>
                                                <Button size="small"
                                                    onClick={() => this.setActive(data)}>Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })} </Grid> </Box> :
                    <Box sx={{ display: 'flex', size: "100", justifyContent: "center", mt: 30, thickness: 10 }}>
                        <CircularProgress />
                    </Box>
                }
            </React.Fragment>
        )
    }


}
