import React from 'react';
import './success.css'
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