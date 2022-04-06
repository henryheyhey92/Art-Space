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

    // need to find out how to maintain checkbox to be remain checked when edit
    function renderMediumOption() {
        return props.mediumOptions.medium.map(e => {
            return <React.Fragment key={e.value}>
                <Checkbox
                    name="medium"
                    value={e.value}
                    onChange={props.updateMediumCheckBox}
                    checked={props.medium.includes(e.value)}
                /> {e.name}
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
                    style={{ minWidth: 125 }} />
            )
        }
        return options;
    }

    return (
        <Box sx={{ m: 5 }}>
            <Paper elevation={3}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <label>
                        Image link:
                        <input className="textfieldbox"
                            type='text'
                            name='imageLinkName'
                            value={props.imageLink}
                            onChange={props.updateFormField} />
                    </label>
                    <label>
                        Artwork name:
                        <input className="textfieldbox"
                            type='text'
                            name='artWorkName'
                            value={props.artWorkName}
                            onChange={props.updateFormField} />
                    </label>
                    <label>
                        Description:
                        <textarea className='textDescriptionBox'
                            type='text'
                            name='description'
                            value={props.description}
                            onChange={props.updateFormField} />
                    </label>
                </Box>


                <FormControl style={{ width: "100%", display: 'flex' , justifyContent: 'space-evenly'}}>
                    <Box >
                        <Paper elevation={3}>
                            <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                sx={{ display: 'flex', flexDirection: 'row' }}
                            >
                                {renderCatergoryOption()}
                            </RadioGroup>
                        </Paper>
                    </Box>
                </FormControl>


                <FormControl sx={{ display: 'flex' }}>
                    <Box>
                        <Paper elevation={3}>
                            <FormLabel id="checkbox-group-label">Medium</FormLabel>
                            {renderMediumOption()}
                        </Paper>
                    </Box>
                </FormControl>

                {/* Artist particulars  */}
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Paper elevation={3}>
                        <label>
                            Artist name:
                            <input className="textfieldbox"
                                type='text'
                                name="artistName"
                                value={props.artistName}
                                onChange={props.updateFormField} />
                        </label>
                        {/* need the select dropdown */}
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

                        <label>
                            contact number:
                            <input className="textfieldbox"
                                type='text'
                                name="contact"
                                value={props.contactNum}
                                onChange={props.updateFormField} />
                        </label>
                        <label>
                            Password:
                            <input className="textfieldbox"
                                type='text'
                                name="password"
                                value={props.password}
                                onChange={props.updateFormField} />
                        </label>
                        <label>
                            Email:
                            <input className="textfieldbox"
                                type='text'
                                name="email"
                                value={props.email}
                                onChange={props.updateFormField} />
                        </label>
                        <label>
                            Price:
                            <input className="textfieldbox"
                                type='text'
                                name="price"
                                value={props.price}
                                onChange={props.updateFormField} />
                        </label>
                    </Paper>
                </Box>

                <Stack spacing={2} direction="row">
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