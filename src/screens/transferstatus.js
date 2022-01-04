import React from 'react';
import './transferstatus.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
import USFlag from "../assets/images/flag.png"
import Header from "./header"

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
            <Header />
    <Container className='white-container-transfer' maxWidth="xl">
        <p className='transfer-status'>Transfer Status</p>
        <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>
        <Grid  item xs={12} sm={6} >
            <h4 className='transfer-header'>Reciever Country:</h4>
            <p className='transfer-text'>Liberia</p>
        </Grid>
       
        <Grid  item xs={12} sm={6} >
        <h4 className='transfer-header'>Amount:</h4>
            <p className='transfer-text'>200.00 USD</p>
        </Grid>
       
      </Grid>
        <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>
        <Grid  item xs={12} sm={6} >
            <h4 className='transfer-header'>Reciever:</h4>
            <p className='transfer-text'>Jerome Horton</p>
        </Grid>
       
        <Grid  item xs={12} sm={6} >
        <h4 className='transfer-header'>Recieve Method:</h4>
            <p className='transfer-text'>Cash Pickup</p>
        </Grid>
       
      </Grid>
        <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>
        <Grid  item xs={12} sm={6} >
            <h4 className='transfer-header'>Reference Number:</h4>
            <p className='transfer-text'>3570941192</p>
        </Grid>
       
        <Grid  item xs={12} sm={6} >

        <Button className='home-btn' onClick={()=>handleTrack()} variant="contained">
  Home
</Button>
   
        </Grid>
       
      </Grid>

    </Container>
        </div>
    );
}

export default Success;