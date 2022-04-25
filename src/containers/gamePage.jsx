import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

//import * as React from 'react';
import React, { useEffect, useState } from "react";

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';



// function not(a, b) {
//   return a.filter((value) => b.indexOf(value) === -1);
// }

// function intersection(a, b) {
//   return a.filter((value) => b.indexOf(value) !== -1);
// }

// function TransferList() {
//   const [checked, setChecked] = React.useState([]);
//   const [left, setLeft] = React.useState([0, 1, 2, 3]);
//   const [right, setRight] = React.useState([4, 5, 6, 7]);

//   const leftChecked = intersection(checked, left);
//   const rightChecked = intersection(checked, right);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   const handleAllRight = () => {
//     setRight(right.concat(left));
//     setLeft([]);
//   };

//   const handleCheckedRight = () => {
//     setRight(right.concat(leftChecked));
//     setLeft(not(left, leftChecked));
//     setChecked(not(checked, leftChecked));
//   };

//   const handleCheckedLeft = () => {
//     setLeft(left.concat(rightChecked));
//     setRight(not(right, rightChecked));
//     setChecked(not(checked, rightChecked));
//   };

//   const handleAllLeft = () => {
//     setLeft(left.concat(right));
//     setRight([]);
//   };

//   const customList = (items) => (

//     <Paper sx={{ width: 400, height: 430, overflow: 'auto' }}>

//       <List dense component="div" role="list">
//         {items.map((value) => {
//           const labelId = `transfer-list-item-${value}-label`;

//           return (
//             <ListItem
//               key={value}
//               role="listitem"
//               button
//               onClick={handleToggle(value)}
//             >
//               <ListItemIcon>
//                 <Checkbox
//                   checked={checked.indexOf(value) !== -1}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{
//                     'aria-labelledby': labelId,
//                   }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`List item ${value + 1}`} />
//             </ListItem>
//           );
//         })}
//         <ListItem />

//       </List>

//     </Paper>
//   );

//   return (
//     <Grid container spacing={2} justifyContent="center" alignItems="center">
//       <Grid item>  {customList(left)}</Grid>
//       <Grid item>
//         <Grid container direction="column" alignItems="center">
//           <Button
//             sx={{ my: 0.5 }}
//             variant="outlined"
//             size="small"
//             onClick={handleAllRight}
//             disabled={left.length === 0}
//             aria-label="move all right"
//           >
//             ≫
//           </Button>
//           <Button
//             sx={{ my: 0.5 }}
//             variant="outlined"
//             size="small"
//             onClick={handleCheckedRight}
//             disabled={leftChecked.length === 0}
//             aria-label="move selected right"
//           >
//             &gt;
//           </Button>
//           <Button
//             sx={{ my: 0.5 }}
//             variant="outlined"
//             size="small"
//             onClick={handleCheckedLeft}
//             disabled={rightChecked.length === 0}
//             aria-label="move selected left"
//           >
//             &lt;
//           </Button>
//           <Button
//             sx={{ my: 0.5 }}
//             variant="outlined"
//             size="small"
//             onClick={handleAllLeft}
//             disabled={right.length === 0}
//             aria-label="move all left"
//           >
//             ≪
//           </Button>
//         </Grid>
//       </Grid>
//       <Grid item>{customList(right)}</Grid>
//     </Grid>
//   );
// }


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

var emptyList = [];
var emptyMoves = 0

const ListWithRemoveItem = () => {
  const [list, setList] = React.useState(initialList);
  const [list2, setlist2] = React.useState(emptyList);


  const [state, setState] = useState({
    count: 0,
    bool: false,
    incValue: 1
  });

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


  //list = initialList
  var varMovesHolder = 0
  //&& (checkFarmer(list))
  const handleClick = type => {
    if (!checkConflict(list.filter(item => item.type !== type)) && !checkConflict(list2.filter(item => item.type !== type)) && (checkFarmer(list))) {

      var newList = []

      if (type === 3) {
        newList = newList.concat(list.filter(item => item.type !== 3))
      } else {
        newList = newList.concat(list.filter(item => item.type !== type && item.type !== 3))
      }

      setList(newList)


      // newList = newList.concat(list.filter(item => item.type === type))
      // newList = newList.concat(list.filter(item => item.type === 3))
      // newList.concat(list2)

      // setlist2(newList);

      //newList = list2copy
      //newList = newList.concat(list1.filter(item => item.type !== 3 && item.type !== type))

      newList = []
      if (type === 3) {
        newList = newList.concat(list2)
        newList = newList.concat(list.filter(item => item.type === 3))
      } else {
        newList = newList.concat(list2)
        newList = newList.concat(list.filter(item => item.type === 3))
        newList = newList.concat(list.filter(item => item.type === type))
        //newList = newList.concat(list2.filter(item => item.type === type && item.type === 3))
      }

      setlist2(newList)

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


      //newList = newList.concat(list2.filter(item => item.type === 3))

      setlist2(newList)
      // list = list.filter(item => item.type !== type);
      // list2 = list.filter(el => el.type === type);

      newList = list1copy
      //newList = newList.concat(list1.filter(item => item.type !== 3 && item.type !== type))

      if (type === 3) {
        newList = newList.concat(list2.filter(item => item.type === 3))
      } else {
        newList = newList.concat(list2.filter(item => item.type === 3))
        newList = newList.concat(list2.filter(item => item.type === type))
        //newList = newList.concat(list2.filter(item => item.type === type && item.type === 3))
      }

      setList(newList)

      //setList(list.concat(list2.filter(item => item.type === type)));

      setState((prevState) => {
        return {
          ...state,
          count: prevState.count + state.incValue
        };
      });
    }

  };


  return (
    <div>


      <ul>
        <p>moves: {state.count}</p>
        <p>list 1</p>
        {list.map(item => (

          <li key={item.type}>
            <label>{item.name}</label>
            <button type="button" onClick={() => handleClick(item.type)}>
              Move Item
            </button>
          </li>
        ))}

        <p>list 2</p>
        {list2.map(item => (
          <li key={item.type}>
            <label>{item.name}</label>
            <button type="button" onClick={() => handleClickList2(item.type)}>
              Move Item
            </button>
          </li>
        ))}
      </ul>


    </div>
  );
};


const gamePage = () => {
  return (
    <div style={{ backgroundColor: "#0099ff", justifyContent: 'center', width: 'max', height: '900px' }}>
      <Container style={{ backgroundColor: '#cfe8fc' }} maxWidth="lrg">

        <Typography gutterBottom style={{ fontSize: "24px" }} component="div">
          River Crossing Game:
        </Typography>

        <Typography color="text.secondary">
          Click check boxes to move across the river!
        </Typography>

        <ListWithRemoveItem />

      </Container>
    </div>
  )
}

export default gamePage
