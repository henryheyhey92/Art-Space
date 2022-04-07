import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';

const Input = styled('input')({
    display: 'none',
});

export default class Comments extends React.Component {
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
                    variant="outlined" />
                <TextField
                    sx={{ m: 2 }}
                    id="outlined-multiline-static"
                    label="Comment"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                />
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="contained" component="span" sx={{ m: 2 }}>
                        Upload
                    </Button>
                </label>
        </React.Fragment>)
    }
}