import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export default class Filter extends React.Component {

    state = {

    }

    renderCatergoryOption(){
        let options = [];
        console.log(this.props.categoryOptions)
        for (let o of this.props.categoryOptions.art_space) {
            options.push(
                <FormControlLabel
                    key={o.value}
                    value={o.value}
                    control={<Radio />}
                    label={o.name}
                    name='category'
                    onChange={this.props.updateFormField}
                    checked={this.props.category === o.value}
                    style={{ minWidth: 125 }} />
            )
        }
        return options;
    }


    render() {
        return (
            <FormControl style={{ width: "100%", display: 'flex' }}>
                <Box >
                    <Paper elevation={3}>
                        <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            sx={{ display: 'flex', flexDirection: 'row' }}
                        >
                            {this.renderCatergoryOption()}
                        </RadioGroup>
                    </Paper>
                </Box>
            </FormControl>
        )
    }

}