import React from 'react';
import './summary.css'
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
    
    function fraudProtection() {
      navigate('/fraud-protection')
    }
    
    return (
        <div >
                    <Header />
    <Container className='white-container-summary' maxWidth="xl">
       <p className='summary-text'>Summary</p>
       <h6 className='almost-done'>Almost Done! Review the information below and complete your transfer.</h6>
    <h5 className='rates-fees'>Rate & Fees <span className='edit-btn'><button>Edit</button></span> </h5>
    <p className='conversion-rate'>1.0000 USD = 1.0000 USD 1</p>
    
    <Grid className='summary-small-boxes'  container spacing={2}>
        <Grid  item xs={3} md={3} >
            <h4 className='small-box-header'>Reciever Country</h4>
            <p className='small-box-text'>Liberia</p>
        </Grid>
        <Grid  item xs={3} md={3}>
           <h4 className='small-box-header'>Amount</h4>
           <p className='small-box-text'>200.00 USD</p>

        </Grid>
        
      </Grid>
    <Grid className='summary-small-boxes'  container spacing={2}>
        <Grid  item xs={3} md={3} >
            <h4 className='small-box-header'>Fee</h4>
            <p className='small-box-text'>$0.00</p>
        </Grid>
       
      </Grid>

    <h5 className='rates-fees'>Reciver <span className='edit-btn'><button>Edit</button></span> </h5>
    <p className='conversion-rate'>Legal Name</p>
    <p className='conversion-rate'>Jerome Horton</p>
    
    <h5 className='rates-fees'>COST SUMMARY <span className='edit-btn'><button>Edit</button></span> </h5>
    <Grid className='summary-small-boxes'  container spacing={2}>
        <Grid  item xs={6} md={3} >
            <h4 className='small-box-header'>Total Cost:</h4>
            <p className='small-box-text'>200.00 USD</p><br />
            <h4 className='small-box-header'>Total Recieve Amount:</h4>
            <p className='small-box-text'>200.00 USD</p>
        </Grid>
       
        <Grid  item xs={6} md={4} >
        <Button className='summary-btn' variant="contained">
  Delete
</Button>

        </Grid>
        <Grid  item xs={12} md={4} >
        <Button className='summary-btn' onClick={()=>fraudProtection()} variant="contained">
  Next
</Button>

        </Grid>
       
      </Grid>

    </Container>
        </div>
    );
}

export default Success;