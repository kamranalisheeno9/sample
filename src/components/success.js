import React from 'react';
import './success.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function  Success(props) {
    return (
        <div >
            <h1 className='title-text'>Global Transfer</h1>
            <Box sx={{ flexGrow: 1 }}>
      <Grid className='nav-grid' container spacing={2}>
        <Grid textAlign="center" item xs={3} md={2} >
            Send Money
        </Grid>
        <Grid textAlign="center" item xs={3} md={2}>
            Tract+Recieve
        </Grid>
        <Grid textAlign="center" item xs={3} md={2}>
            Log In
        </Grid>
        <Grid textAlign="center" item xs={3} md={2}>
            Sign Up
        </Grid>
      </Grid>
    </Box>
    <Container className='white-container' maxWidth="xl">
        <h1 className='success'>Success!</h1>
        <h1 className='complete'>Your Money Tranfer Is <br /> Complete </h1>
        <h1 className='reference'>Reference Number: 3570941192 </h1>
        <Button className='return-btn' variant="contained">
  Return Home
</Button>

    </Container>
        </div>
    );
}

export default Success;