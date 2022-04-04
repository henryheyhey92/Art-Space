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



export default function Form(props) {

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
                        <input className="texfieldbox" 
                                type='text' 
                                name='imageLinkName' 
                                value={props.imageLink}
                                onChange={props.updateFormField}/>
                    </label>
                    <label>
                        Artwork name:
                        <input className="texfieldbox" type='text' name='name'/>
                    </label>
                    <label>
                        Description:
                        <textarea />
                    </label>
                </Box>


                <FormControl style={{ width: "100%", display: 'flex' }}>
                    <Box >
                        <Paper elevation={3}>
                            <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                sx={{ display: 'flex', flexDirection: 'row' }}
                            >
                                <FormControlLabel value="Illustration" control={<Radio />} label="Illustration" style={{ minWidth: 125 }} />
                                <FormControlLabel value="Painting" control={<Radio />} label="Painting" style={{ minWidth: 125 }} />
                                <FormControlLabel value="Manga" control={<Radio />} label="Manga" style={{ minWidth: 125 }} />
                            </RadioGroup>
                        </Paper>
                    </Box>
                </FormControl>


                <FormControl sx={{ display: 'flex' }}>
                    <Box>
                        <Paper elevation={3}>
                            <FormLabel id="checkbox-group-label">Medium</FormLabel>
                            <div>
                                <Checkbox defaultChecked /> Oil
                                <Checkbox defaultChecked /> Pencil
                                <Checkbox defaultChecked /> Water Colour
                            </div>
                        </Paper>
                    </Box>
                </FormControl>

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
                            <input className="texfieldbox" type='text' name="artist-name" />
                        </label>
                        {/* need the select dropdown */}
                        <label> 
                            sex:
                            <input className="texfieldbox" type='text' name="Sex"/>
                        </label>
                        <label>
                            contact number:
                            <input className="texfieldbox" type='text' name="Contact"/>
                        </label>
                        <label>
                            Password:
                            <input className="texfieldbox" type='text' name="Password"/>
                        </label>
                        <label>
                            Email:
                            <input className="texfieldbox" type='text' name="Email"/>
                        </label>
                        <label>
                            Price:
                            <input className="texfieldbox" type='text' name="Price"/>
                        </label>
                    </Paper>
                </Box>

                <Stack spacing={2} direction="row">
                    <Button variant="contained"
                            onClick={() => props.addForm()}>
                        Add
                    </Button>
                    <Button variant="contained"
                        onClick={() => props.closeForm()}
                    >Close</Button>
                </Stack>

            </Paper>

        </Box>


    )
} 