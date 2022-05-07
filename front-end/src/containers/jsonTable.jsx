import React from 'react'
import axios from 'axios';
//import JsonData from '../leaderboard-data/leadboard.json'

var data

axios
  .get("http://localhost:5000/")
  .then(function (response) {
      data = response.data 
    //console.log(response);
  });


 function JsonDataDisplay(){

    const JsonData = data

    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    
                    <td>{info.name}</td>
                    <td>{info.score}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    
                    <th>Name</th>
                    <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default JsonDataDisplay;