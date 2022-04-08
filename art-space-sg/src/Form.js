import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { FormGroup } from 'react-bootstrap';
import { styled } from '@mui/material/styles';

const sexSelection = [
    {
        'name': "male",
        'value': "male"
    },
    {
        'name': "female",
        'value': "female"
    }
];

export default function Form(props) {

    function renderSex() {
        return sexSelection.map(o => {
            return <MenuItem key={o.value}
                value={o.value}
                name={o.name}
            >{o.name}</MenuItem>
        })
    }

    function renderMediumOption() {
        return props.mediumOptions.medium.map(e => {
            return <React.Fragment key={e.value}>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="medium"
                            value={e.value}
                            onChange={props.updateMediumCheckBox}
                            checked={props.medium.includes(e.value)}
                        />
                    } label={e.name}
                />
            </React.Fragment>
        })
    }

    function renderCatergoryOption() {
        let options = [];
        for (let o of props.categoryOptions.art_space) {
            options.push(
                <FormControlLabel
                    key={o.value}
                    value={o.value}
                    control={<Radio />}
                    label={o.name}
                    name='category'
                    onChange={props.updateFormField}
                    checked={props.category === o.value}
                    sx={{ minWidth: 125 }} />
            )
        }
        return options;
    }

    return (
        <Box sx={{ m: 5 }}>
            <Paper elevation={3} sx={{pb:1}}>
                <Box
                    sx={{
                        m: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        minWdith: "sx"
                    }}
                >
                    <TextField id="url-name"
                        label="Image Url"
                        variant="outlined"
                        name='imageLinkName'
                        value={props.imageLink}
                        onChange={props.updateFormField}
                        className="textfield-image-url"
                       
                    />

                    <TextField id="Artwork-name"
                        label="Artwork Name"
                        variant="outlined"
                        name='artWorkName'
                        value={props.artWorkName}
                        onChange={props.updateFormField}
                        className="textfield-style"
                        type="text"
                    />

                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        name='description'
                        value={props.description}
                        onChange={props.updateFormField}
                        className="textfield-style"
                        type="text"
                    />
                </Box>
                <Box sx={{ m: 2 }}>
                    <Paper elevation={3} component="form"
                        sx={{ p: '2px 4px', width: "100%" }}>
                        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">

                            <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}                            >
                                {renderCatergoryOption()}
                            </RadioGroup>

                        </FormControl>
                    </Paper>
                </Box>
                <Box sx={{ m: 2 }}>
                    <Paper elevation={3}>
                        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                            <FormLabel id="checkbox-group-label" sx={{ p: 1 }}>Medium</FormLabel>
                            <FormGroup sx={{ display: 'flex', flexDirection: "row", justifyContent: "space-evenly" }}>
                                {renderMediumOption()}
                            </FormGroup>
                        </FormControl>
                    </Paper>
                </Box>
                {/* Artist particulars  */}
                <Box
                    sx={{
                        m: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        minWdith: "sx"
                    }}
                >
                    <TextField id="artist-name"
                        label="Artist name"
                        variant="outlined"
                        name='artistName'
                        value={props.artistName}
                        onChange={props.updateFormField}
                        className="textfield-style"
                        type="text"
                    />
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                        <Select
                            value={props.sex}
                            label="sex"
                            name="sex"
                            onChange={props.updateFormField}
                        >
                            {renderSex()}
                        </Select>
                    </FormControl>

                    <TextField id="contact-number"
                        label="contact number"
                        variant="outlined"
                        name='contact'
                        value={props.contactNum}
                        onChange={props.updateFormField}
                        className="textfield-style"
                        type="number"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    />
                     <TextField id="create-edit-password"
                        label="password"
                        variant="outlined"
                        name='password'
                        value={props.password}
                        onChange={props.updateFormField}
                        className="textfield-style"
                        type="password"
                    />
                     <TextField id="create-edit-email"
                        label="email"
                        variant="outlined"
                        name='email'
                        value={props.email}
                        onChange={props.updateFormField}
                        className="textfield-style"
                        type="text"
                    />
                     <TextField id="create-price"
                        label="price"
                        variant="outlined"
                        name='price'
                        value={props.price}
                        onChange={props.updateFormField}
                        className="textfield-style"
                        type="number"
                    />
                </Box>

                <Stack  
                        direction="row" 
                        justifyContent="space-around" 
                        alignItems="center"
                        m={2}>
                    <div>
                        {
                            !props.editBtn ?
                                <Button variant="contained"
                                    onClick={props.createArtWork}>
                                    Add
                                </Button> :
                                <Button variant="contained"
                                    onClick={props.updateArtWork}>
                                    Update
                                </Button>
                        }
                    </div>

                    <Button variant="contained"
                        onClick={() => props.closeForm()}
                    >Close</Button>
                </Stack>

            </Paper>

        </Box>


    )
} 