import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Read from './Read';

export default function SearchBar({childToParent}) {

  const [textInput, setTextState] = React.useState('');

  const updateFormField = (e) => {
    setTextState(e.target.value)
  }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
        value={textInput}
        onChange={updateFormField}
        
      />
      <IconButton sx={{ p: '10px' }} 
                  aria-label="search"
                  value={textInput}
                  onClick={() => childToParent(textInput)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
