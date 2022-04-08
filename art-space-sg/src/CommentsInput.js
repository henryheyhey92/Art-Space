import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const Input = styled('input')({
    display: 'none',
});

export default class CommentsInput extends React.Component {
    
    state = {

    }

    // '& > :not(style)': { m: 2, width: '25ch', display: 'flex', 
    //             flexDirection: 'column', justifyContent: 'center' },
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