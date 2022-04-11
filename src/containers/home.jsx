import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'


const buttonStyle = {
  marginRight: '60px',
  marginLeft: '60px',
  borderRadius: 12,
  backgroundColor: "#75AB2F",
  padding: "5px 10px",
  fontSize: "24px",

}


const home = () => {
  return (

    <Container style={{ backgroundColor: '#cfe8fc' }} maxWidth="lrg">

      <div style={{ marginTop: "15px", marginBottom: '10px', padding: "5px 10px", }} id='navbar'>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}   style={{ alignItems: 'center'}} >
          River Crossing Game:
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

        {/* <Button style={buttonStyle} variant='outlined' color='primary'>
          <Link to='/'>Home</Link>
        </Button> */}
        

      </div>
    </Container>
  )
}

export default home