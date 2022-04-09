import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default class CommentsInput extends React.Component {
    
    state = {

    }

    render() {
        return (<React.Fragment>
                <TextField
                    sx={{ m: 2 }}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="commentBy"
                    value={this.props.commentBy}
                    onChange={this.props.updateReadFormField} />
                <TextField
                    sx={{ m: 2 }}
                    id="outlined-multiline-static"
                    label="Comment"
                    multiline
                    rows={4}
                    name="commentNote"
                    value={this.props.commentNote}
                    onChange={this.props.updateReadFormField}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" 
                            component="span" 
                            sx={{ m: 2 }}
                            onClick={this.props.addComment}>
                        Add
                    </Button>
                </label>
        </React.Fragment>)
    }
}