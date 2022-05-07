const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const leaderBoard = require("./leaderboard.json");
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs')

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {

  const newPlayer = {
    
    name: req.body.name,
    score: req.body.moves
  }

  console.log("newPlayer");
  console.log(newPlayer);

  leaderBoard.push(newPlayer);
  
  fs.writeFile("leaderboard.json", JSON.stringify(leaderBoard), err => {
     
    // Checking for errors
    if (err) throw err; 
   
    console.log("Done writing"); // Success
});

  // res.send(
  //   `I received your POST request. This is what you sent me: ${req.body.post}`,
  // );
});

app.get("/", function(req, res, next) {

  res.json(leaderBoard);
});



app.listen(port, () => console.log(`Listening on port ${port}`));