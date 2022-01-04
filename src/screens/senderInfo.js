import React from 'react';
import './senderInfo.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
import USFlag from "../assets/images/flag.png"
import Header from "./header"

function  SenderInfo(props) {
    let navigate = useNavigate();
    function handleClick() {
      navigate('/login')
    }
    function cardInfo() {
      navigate('/card-information')
    }
    function handleSend() {
      navigate('/sender-information')
    }
    function handleTrack() {
      navigate('/')
    }
    return (
        <div >
             <Header />
    <Container className='white-container-sender' maxWidth="xl">
        <p className='sender-info-text'>Sender Information</p>
        <Grid className='grid-sender' container spacing={2}>
          <Grid  item xs={12} md={6} >
          <input className='sender-input-info'  placeholder='Legal First Name' type="text" />
          </Grid>
          <Grid item xs={12} md={6}>
          <input className='sender-input-info'  placeholder='Legal Middle Name' type="text" />
          </Grid>
     
        </Grid>
        <Grid className='grid-sender' container spacing={2}>
          <Grid  item xs={12} md={6} >
          <input className='sender-input-info'  placeholder='Legal Last Name' type="text" />
          </Grid>
          <Grid item xs={12} md={6}>
          <input className='sender-input-info'  placeholder='Second Last Name' type="text" />
          </Grid>
     
        </Grid>
        <div className='center-text'>Additional Sender Information</div>
        <Grid className='grid-sender' container spacing={2}>
          <Grid  item xs={12} md={6} >
          <input className='sender-input-info'  placeholder='Address' type="text" />
          </Grid>
          <Grid item xs={12} md={6}>
          <input className='sender-input-info'  placeholder='Address' type="text" />
          </Grid>
     
        </Grid>
        <Grid className='grid-sender' container spacing={2}>
          <Grid  item xs={12} md={6} >
          <input className='sender-input-info'  placeholder='Phone Number' type="text" />
          </Grid>
          <Grid item xs={12} md={6}>
              <div className='sender-btn-container'>

          <Button className='sender-info-btn' onClick={()=>cardInfo()} variant="contained">
Next
</Button>
              </div>
          </Grid>
     
        </Grid>

    </Container>
        </div>
    );
}

export default SenderInfo;