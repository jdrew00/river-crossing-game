import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Stack from '@mui/material/Stack';
import help from './containers/help'
import gamePage from './containers/gamePage';
import leaderBoard from './containers/leaderBoard';
import home from './containers/home';

const AppContainer = () => {
  return (
    //    <div style={{ backgroundColor: "#0099ff", display: 'flex', justifyContent: 'center', width: 'max', height: '900px' }}>
    <div style={{ backgroundColor: "#0099ff", justifyContent: 'center', width: 'max',height: '900px'}}>
      <Stack spacing={2}> 
        <BrowserRouter>
          <NavBar style={{ marginBottom: '10px', width: 'max' }} />
          <Route component={home} exact path='/' />
          <Route component={help} exact path='/help' />
          <Route component={gamePage} path='/gamePage' />
          <Route component={leaderBoard} path='/leaderBoard' />
        </BrowserRouter>
      </Stack>
    </div>
  )
}

ReactDOM.render(<AppContainer />, document.querySelector('#root'))

