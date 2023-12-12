import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import ammoData from "../utils/ammunition.json"
 
const bullet = (b) => {
    return (
        <Paper elevation={0} className='skill'>
            <Typography variant='h6' className='skill_title'></Typography>
            <Typography variant='body2' className='skill_desc'></Typography>
        </Paper>
    )
}

const Ammo = () => {
    return (
        <Grid container className='ammo_container'>
        </Grid>
    )
}

export default Ammo