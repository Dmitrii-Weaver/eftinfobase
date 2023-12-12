import React from 'react';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

import Ammo from './pages/ammo'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';

function App() {
  return (
    <Container className='top_60'>
      <Grid container spacing={7}>
        <Grid item xs>
          <Router>
            <div className='main_conent container_shadow'>
              <Routes>
                <Route path='/' element={<Ammo />} />
              </Routes>
            </div>
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
