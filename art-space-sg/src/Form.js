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
            <Paper elevation={3}>
                <Box
                    sx={{
                        m: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        minWdith: "sx"
                    }}
                >
                    <TextField id="name"
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
                    />
                </Box>
                <Box sx={{m:2}}>
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