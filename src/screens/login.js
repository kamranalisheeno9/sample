import React from 'react';
import './login.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
import USFlag from "../assets/images/flag.png"
import Header from "./header"

function Login(props) {
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
            <Container className='white-container-login' maxWidth="xl">
                <h1 className='complete-login'>Log into Your <br /> GlobalTranfer Profile </h1>
                <input className="input-field-login" placeholder='EMAIL ADDRESS' type="email" />
                <input className="input-field-login" placeholder='PASSWORD' type="password" />
                <div className='forget-container'>

                    <a href="" className="forget-link">
                        Forgot Password?
                    </a>
                    <p className="forget-link-text">Don't have an account?

                        <a href="" className="forget-link-text">
                            Sign Up
                        </a>
                    </p>
                </div>
                <Button className='log-btn'  variant="contained">
                Log In
                </Button>

            </Container>
        </div>
    );
}

export default Login;