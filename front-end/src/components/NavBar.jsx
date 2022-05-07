import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';



const buttonStyle = {
  marginRight: '60px',
  marginLeft: '60px',
  borderRadius: 12,
  backgroundColor: "#75AB2F",
  padding: "5px 10px",
  fontSize: "24px",

}

class NavBar extends React.Component {
  render() {
    return (
      <AppBar style={{ backgroundColor: "#808080", alignItems: 'center'}} position="static">
        <div style={{ marginTop: "15px", marginBottom: '10px', padding: "5px 10px",justifyContent: 'center' }} id='navbar'>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            River Crossing Game!
          </Typography>

          <Button style={buttonStyle} variant='outlined' color='primary'>
            <Link to='/help'>Help Page</Link>
          </Button>

          <Button style={buttonStyle} variant='outlined' color='primary'>
            <Link to='/gamePage'>Play Game</Link>
          </Button>

          <Button style={buttonStyle} variant='outlined' color='primary'>
            <Link to='/leaderBoard'>Leader Boards</Link>
          </Button>

          <Button style={buttonStyle} variant='outlined' color='primary'>
            <Link to='/'>Home</Link>
          </Button>

        </div>
      </AppBar>
    )
  }
}

export default NavBar