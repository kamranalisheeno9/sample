import React from 'react';
import './track.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TextField from '@mui/material/TextField';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from 'react-router';
import USFlag from "../assets/images/flag.png"
function  Success(props) {
    const [value, setValue] = React.useState('1');
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
    function estimate() {
      navigate('/getstarted')
    }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            <Box sx={{ flexGrow: 1 }}>
      <Grid className='nav-grid-track' container spacing={2}>
        <Grid  item xs={3} md={3} >
        <h4>Money Transfer At Your Finger Tips</h4>
        <h4>Send Money Now Starting At $0 Fee*</h4>
        <a className="send-link">Send Now</a>
        </Grid>
        <Grid textAlign="center" item xs={3} md={7}>
        <Container className='white-container-track' >
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box  >
          <TabList onChange={handleChange}  >
            <Tab  label="Rates & Fees" value="1" />
            <Tab label="Track & recieve" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" style={{color:"black"}}>
        <input className="input-field-1" placeholder='Send Amount' /><span className='usd-name'>USD <img width="40px" src={USFlag} /></span>
        <input className="input-field" placeholder='Receiver Country' />
        <Button className='estimete-btn' onClick={()=>estimate()} variant="contained">
  Estimate Fees
</Button>
        </TabPanel>
        <TabPanel value="2">
        <TextField id="standard-basic" className="input-fields" label="Reference Number" variant="standard" />
        <TextField id="standard-basic" className="input-fields" label="Full Name" variant="standard" />
        <Button className='track-btn'  variant="contained">
  Track Your Money
</Button>
        </TabPanel>
      </TabContext>
    </Box>
    </Container>
        </Grid>
       
      </Grid>
    </Box>
    
        </div>
    );
}

export default Success;