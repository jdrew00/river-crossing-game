import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

//import * as React from 'react';
import React, { useEffect, useState } from "react";
import axios from 'axios';

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


var initialList = [
  {
    type: 0,
    name: 'Wolf',
    conflicts: [1]
  },
  {
    type: 1,
    name: 'Chicken',
    conflicts: [0]
  },
  {
    type: 2,
    name: 'Cabbage',
    conflicts: [1]
  },
  {
    type: 3,
    name: 'farmer',
    conflicts: [-1]
  }
];

const firstSetup = [
  {
    type: 0,
    name: 'Wolf',
    conflicts: [1]
  },
  {
    type: 1,
    name: 'Chicken',
    conflicts: [0]
  },
  {
    type: 2,
    name: 'Cabbage',
    conflicts: [1]
  },
  {
    type: 3,
    name: 'farmer',
    conflicts: [-1]
  }
];


var emptyList = [];
var emptyMoves = 0

const styles = {
  ul: {

    padding: '5px',
    backgroundcolor: '#eee',
    display: 'inline - block'
  }
}

const ListWithRemoveItem = () => {
  const [list, setList] = React.useState(initialList);
  const [list2, setlist2] = React.useState(emptyList);


  const [state, setState] = useState({
    count: 0,
    name: "",
    bool: false,
    incValue: 1
  });

  

  const [disabled, setDisabled] = useState(true);

  const [playername, setPlayerName] = useState("")



  const checkConflict = (transferItems) => {

    const ids = transferItems.map(x => (x.type))

    const hasConflict = transferItems.some(item => {
      return ids.some(id => item.conflicts.includes(id))
    })

    return hasConflict
  }

  const checkFarmer = (transferItems) => {

    const ids = transferItems.map(x => (x.type))

    const hasConflict = transferItems.some(item => {
      return ids.some(id => item.type === 3)
    })

    return hasConflict
  }

  const handleChange = e => {


    setState((prevState) => {
      return {
        ...state,
        name: e.target.value
      };
    });

    //setPlayerName(e.target.value);
    console.log(state.name)  
}


  const handleSubmit = e => {
    e.preventDefault();

    var moves = state.count
   
    var name = state.name

    const playerData = {
      name,
      moves
    };

 
    axios
      .post('http://localhost:5000/api/world', playerData)
      .then(() => console.log('playerData Created'))
      .catch(err => {
        console.error(err);
      });

    alert("Score submitted to leaderboard!")
  };




  var varMovesHolder = 0
  const handleClick = type => {
    if (!checkConflict(list.filter(item => item.type !== type)) && !checkConflict(list2.filter(item => item.type !== type)) && (checkFarmer(list))) {

      var newList = []

      if (type === 3) {
        newList = newList.concat(list.filter(item => item.type !== 3))
      } else {
        newList = newList.concat(list.filter(item => item.type !== type && item.type !== 3))
      }

      setList(newList)

      newList = []
      if (type === 3) {
        newList = newList.concat(list2)
        newList = newList.concat(list.filter(item => item.type === 3))
      } else {
        newList = newList.concat(list2)
        newList = newList.concat(list.filter(item => item.type === 3))
        newList = newList.concat(list.filter(item => item.type === type))
      }

      setlist2(newList)


      if (newList.some(d => d.name === 'farmer') && newList.some(d => d.name === 'Cabbage') && newList.some(d => d.name === 'Wolf') && newList.some(d => d.name === 'Chicken')) {
        var bool = false
        setDisabled(bool)
      }

      setState((prevState) => {
        return {
          ...state,
          count: prevState.count + state.incValue
        };
      });
    }

  };

  const handleClickList2 = type => {

    if (!checkConflict(list2.filter(item => item.type !== type)) && !checkConflict(list.filter(item => item.type !== type)) && checkFarmer(list2)) {

      var newList = []

      var list2copy = list2
      var list1copy = list

      if (type === 3) {
        newList = newList.concat(list2.filter(item => item.type !== 3))
      } else {
        newList = newList.concat(list2.filter(item => item.type !== type && item.type !== 3))
      }




      setlist2(newList)

      newList = list1copy

      if (type === 3) {
        newList = newList.concat(list2.filter(item => item.type === 3))
      } else {
        newList = newList.concat(list2.filter(item => item.type === 3))
        newList = newList.concat(list2.filter(item => item.type === type))
      }

      setList(newList)


      if (newList.some(d => d.name === 'farmer') && newList.some(d => d.name === 'Cabbage') && newList.some(d => d.name === 'Wolf') && newList.some(d => d.name === 'Chicken')) {
        var bool = false
        setDisabled(bool)
      }

      setState((prevState) => {
        return {
          ...state,
          count: prevState.count + state.incValue
        };
      });
    }

  };

  var nameValue
  return (
    <div style={styles.ul}>

      <table border="1">
        <tr><td>

          <ul>

            <p>Right Side</p>
            {list.map(item => (

              <li key={item.type}>
                <label>{item.name}</label>
                <button type="button" onClick={() => handleClick(item.type)}>
                  Move Item
                </button>
              </li>
            ))}
          </ul>
        </td><td>
            <ul>

              <p>Left Side</p>
              {list2.map(item => (
                <li key={item.type}>
                  <label>{item.name}</label>
                  <button type="button" onClick={() => handleClickList2(item.type)}>
                    Move Item
                  </button>
                </li>
              ))}
            </ul>
          </td></tr>
      </table>

      <p>moves: {state.count}</p>

      

      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Name: </label>
          <input
            type="text"
            name="text"
            placeholder="Enter score"
          // onChange={handleTextChange}
           value={nameValue}
           onChange={handleChange}
          />
        </div>

        <button type="submit" disabled={disabled}>
          Submit
        </button>
      </form>

    </div >
  );
};


const gamePage = () => {
  return (
    <div style={{ justifyContent: 'center', width: 'max', height: '900px' }}>
      <Container style={{ backgroundColor: '#cfe8fc' }} maxWidth="xl">

        <Typography gutterBottom style={{ fontSize: "24px" }} component="div">
          River Crossing Game:
        </Typography>

        <Typography color="text.secondary">
          Click the check boxes to move across the river:
        </Typography>

        <ListWithRemoveItem />




      </Container>
    </div>
  )
}

export default gamePage
