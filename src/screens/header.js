import React from 'react';
import './header.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import USFlag from "../assets/images/flag.png"
import { useNavigate } from 'react-router';

function Header(props) {    
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
        <div>
                  <Box sx={{ flexGrow: 1 }}>
      <Grid className='nav-grid' container spacing={2}>
        <Grid textAlign="center" item xs={8} md={8} >
            <h1 className='title-text'>Global Transfer</h1>
        </Grid>
        <Grid textAlign="center" item xs={3} md={2}>
            <p style={{color:"white",fontSize:"16px",float:"right"}}>HELP <img width="25px" src={USFlag} /> EN</p>
        </Grid>
     
      </Grid>
    </Box>
     
            <Box sx={{ flexGrow: 1 }}>
      <Grid className='nav-grid' container spacing={2}>
        <Grid className='nav-items' style={{cursor:"pointer"}}  textAlign="center" item xs={3} md={2} >
           <li onClick={()=>handleSend()}>

            Send Money
           </li>
        </Grid>
        <Grid  className='nav-items'style={{cursor:"pointer"}}  textAlign="center" item xs={3} md={2}>
         <li onClick={()=>handleTrack()}>

            Track+Recieve
         </li>
        </Grid>
        <Grid className='nav-items' style={{cursor:"pointer"}} textAlign="center" item xs={3} md={2}>
             <li onClick={()=>handleClick()} >

              Log In
             </li>
         
        </Grid>
        <Grid className='nav-items'  style={{cursor:"pointer"}}  textAlign="center" item xs={3} md={2}>
           <li onClick={()=>handleClick()}>

            Sign Up
           </li>
        </Grid>
      </Grid>
    </Box> 
        </div>
    );
}

export default Header;