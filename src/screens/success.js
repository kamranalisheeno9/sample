import React from 'react';
import './success.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
import USFlag from "../assets/images/flag.png"

function  Success(props) {
    let navigate = useNavigate();
    function handleClick() {
      navigate('/login')
    }
    function handleSend() {
      navigate('/sender-information')
    }
    function handleTrack() {
      navigate('/')
    }
    return (
        <div >
             <Box sx={{ flexGrow: 1 }}>
      <Grid className='nav-grid' container spacing={2}>
        <Grid textAlign="center" item xs={3} md={8} >
            <h1 className='title-text'>Global Transfer</h1>
        </Grid>
        <Grid textAlign="center" item xs={3} md={2}>
            <p style={{color:"white",fontSize:"16px",float:"right"}}>HELP <img width="25px" src={USFlag} /> EN</p>
        </Grid>
     
      </Grid>
    </Box>
     
            <Box sx={{ flexGrow: 1 }}>
      <Grid className='nav-grid' container spacing={2}>
        <Grid style={{cursor:"pointer"}} onClick={()=>handleSend()} textAlign="center" item xs={3} md={2} >
            Send Money
        </Grid>
        <Grid style={{cursor:"pointer"}} onClick={()=>handleTrack()} textAlign="center" item xs={3} md={2}>
            Track+Recieve
        </Grid>
        <Grid style={{cursor:"pointer"}} onClick={()=>handleClick()} textAlign="center" item xs={3} md={2}>
              Log In
         
        </Grid>
        <Grid  style={{cursor:"pointer"}} onClick={()=>handleClick()} textAlign="center" item xs={3} md={2}>
            Sign Up
        </Grid>
      </Grid>
    </Box>
    <Container className='white-container' maxWidth="xl">
        <h1 className='success'>Success!</h1>
        <h1 className='complete'>Your Money Tranfer Is <br /> Complete </h1>
        <h1 className='reference'>Reference Number: 3570941192 </h1>
        <Button className='return-btn' onClick={()=>handleTrack()} variant="contained">
  Return Home
</Button>

    </Container>
        </div>
    );
}

export default Success;