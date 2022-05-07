import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import graph from '../img/graph.png'

const styles = {
  images: {
    display: 'flex',
    height: '350px',
    width: '450px',
    alignitems: 'center',
    JustifyContent: 'center'
  },

  containerdiv: {
    display: 'flex',
    height: '80vh',
    width: '100vw',
    alignitems: 'center',
    JustifyContent: 'center'
  }
}


const help = () => {
  return (

    <div style={styles.containerdiv} >
      <Container style={{
        backgroundColor: '#cfe8fc', alignitems: 'center',
        JustifyContent: 'centre'
      }} maxWidth="xl">

        <Typography gutterBottom style={{ fontSize: "24px" }} component="div">
          Help Page:
        </Typography>

        <Typography style={{ fontSize: "18px" }} color="text.secondary">
          <b><p>THE RIVER CROSSING GAME</p></b>


          <p>In this game you will help a farmer bring his goods(a wolf, goat, rabbit and cabbage) across a river. The challenge is that the farmer has carnivores, herbivores as well as vegetables to bring across the river. This means that if left alone, some of them would eat the others. Your goal is to bring them all across the river safely by using a concept called the vertex cover.

            <b><p>What is a vertex cover?</p></b>

            Assume the wolf, goat, rabbit and cabbage are all vertices (see graph below). If left alone, the wolf would eat the goat or the rabbit, the goat would eat the cabbage and the rabbit would also eat the cabbage. The wolf and the cabbage are fine to be left alone and so are the rabbit and the goat. With that knowledge, help the farmer get his goods across the river with the fewest trips possible. </p>

        </Typography>
        <img style={styles.images} src={graph} alt="Logo" />


      </Container>


    </div>

  )
}

export default help