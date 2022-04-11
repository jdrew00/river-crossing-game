import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import chicken from '../img/chicken.PNG';
import wolf from '../img/wolf.PNG'
import wheat from '../img/Wheat_JE2_BE2.png'

const styles = {
  images: {
    
    height: 'auto',
    width: 'auto'
  }
}

const help = () => {
  return (


    <Container style={{ backgroundColor: '#cfe8fc' }} maxWidth="lrg">

      <Typography gutterBottom style={{ fontSize: "24px" }} component="div">
        Help Page:
      </Typography>
      <Typography style={{ fontSize: "18px" }} color="text.secondary">
        THE RIVER CROSSING GAME

        The River Crossing Game is a game where students get an opportunity to enhance
        mathematical and logical skills. It introduces them to the idea of graphs and vertex covers by
        using Alcuin's River Crossing Puzzle and turning it into a game where the students have to solve
        the puzzle by figuring out minimum vertex covers in order to help a farmer get his animals and
        goods across the river with minimum effort and without losing any of them.
      </Typography>

      <div style={styles.images}> <img src={chicken} alt="Logo" /> <img src={wolf} alt="Logo" /> <img src={wheat} alt="Logo" />  </div>
      <div style={styles.images}>  </div>
      <div style={styles.images}> </div>

    </Container>


  )
}

export default help