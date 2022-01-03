import React from 'react';
import './cardInfo.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
import USFlag from "../assets/images/flag.png"

function CardInfo(props) {
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
    function summary() {
      navigate('/summary')
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
      <Container className='white-container-card' maxWidth="xl">
        <p className='sender-info-text'>Payment Information</p>
        <div className='center-text-card'>Add Your Card Information</div>

        <Grid className='grid-card' container spacing={2}>
          <Grid item xs={12} md={6} >
            <input className='card-input-info' placeholder='Card Number' type="text" />
          </Grid>
          <Grid item xs={12} md={6}>
            <input className='card-input-info' placeholder='EXPIRATION MM/YY' type="text" />
          </Grid>

        </Grid>
        <Grid className='grid-card' container spacing={2}>
          <Grid item xs={12} md={6} >
            <input className='card-input-info' placeholder='Billing Address' type="text" />
          </Grid>
          <Grid item xs={12} md={6}>
            <input className='card-input-info' placeholder='CVV' type="text" />
          </Grid>

        </Grid>
        <Grid className='grid-card' container spacing={2}>
          <Grid item xs={12} md={6} >
            <input className='card-input-info' placeholder='Billing Address' type="text" />
          </Grid>
          <Grid item xs={12} md={6}>
            <input className='card-input-info' placeholder='Phone Number' type="text" />
          </Grid>

        </Grid>
        <Grid className='grid-card' container spacing={2}>
          <Grid item xs={12} md={12}>
            <div className='sender-btn-container'>

              <Button className='card-info-btn' onClick={()=>summary()} variant="contained">
                Save Card
              </Button>
            </div>
          </Grid>

        </Grid>

      </Container>
    </div>
  );
}

export default CardInfo;