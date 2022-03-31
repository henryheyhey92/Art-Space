import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

export default class SearchBar extends React.Component {

    state = {
        searchInput: '',
        data: []
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // async function Testing(value){
    //     let response = await axios.get(BASE_URL + "retrieve/artwork");
    //     console.log(response.data);
    //     this.setState({
    //         data: response.data
    //     })
    // }

    render(){
        return (
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%'}}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search "
                inputProps={{ 'aria-label': 'search google maps' }}
                name="searchInput"
                value={this.state.searchInput}
                onChange={this.updateFormField}
              />
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          );
    }
  
}
