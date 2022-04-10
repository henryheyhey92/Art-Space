import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  // const [messages, setMessages] = React.useState(() => refreshMessages());

  // React.useEffect(() => {
  //   ref.current.ownerDocument.body.scrollTop = 0;
  //   setMessages(refreshMessages());
  // }, [value, setMessages]);
  // renderView = () => {

  // }
  function triggerSearchUI() {

  }

  return (
    <Box ref={ref}>
      <CssBaseline />
      <List>
        {value ? console.log(value) : console.log(value)}
      </List>
      <Paper sx={{ position: 'static', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center', width: '100%', }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Github"
            icon={<GitHubIcon />}
            onClick={triggerSearchUI()} />
          <BottomNavigationAction label="LinkedIn"
            icon={<LinkedInIcon />}
            onClick={triggerSearchUI()} />
          <BottomNavigationAction label="Facebook"
            icon={<FacebookIcon />}
            onClick={triggerSearchUI()} />
          <BottomNavigationAction label="Search"
            icon={<SearchSharpIcon />}
            onClick={triggerSearchUI()} />

        </BottomNavigation>
      </Paper>
    </Box>
  );
}

