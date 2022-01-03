import React from 'react';
import './started.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TextField from '@mui/material/TextField';
import TabPanel from '@mui/lab/TabPanel';
import { useNavigate } from 'react-router';
import USFlag from "../assets/images/flag.png"
import LBDFlag from "../assets/images/lbdflag.png"

function Started(props) {
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
  const [value, setValue] = React.useState('1');

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
          <Grid item xs={3} md={3} >
            <h4>Money Transfer At Your Finger Tips</h4>
            <h4>Send Money Now Starting At $0 Fee*</h4>
            <Link className="send-link">Send Now</Link>
          </Grid>
          <Grid textAlign="center" item xs={3} md={7}>
            <Container className='white-container-track' >
              <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                  <Box  >
                    <TabList onChange={handleChange}  >
                      <Tab label="Rates & Fees" value="1" />
                      <Tab label="Track & recieve" value="2" />
                    </TabList>
                  </Box>
                  <TabPanel value="1" style={{ color: "black" }}>
                    
      <Box sx={{ flexGrow: 1 }}>
        <Grid className='nav-grid' container spacing={2}>
          <Grid  item xs={12} md={6} >
           
                  <input className='two-inputs' placeholder='200.00' /><span className='usd-name-exchange'>USD <img width="30px" src={USFlag} /></span>
                  <div className='radio-payment'>
        Payment Option
      </div>
    <RadioGroup
        aria-label="sending"
        defaultValue="debit"
        name="radio-buttons-group"
        
        >
        <FormControlLabel style={{color:"black"}}  value="credit" control={<Radio />} label="Credit Card " />
        <FormControlLabel style={{color:"black"}} value="debit" control={<Radio />} label="Debit Card" />
        <FormControlLabel style={{color:"black"}} value="bank" control={<Radio />} label=" Bank Account " />
      </RadioGroup>
    
  
          </Grid>
          <Grid item xs={12} md={6}>
          
                  <input className='two-inputs' placeholder='200.00' /><span className='usd-name-exchange'>LBD <img width="30px" src={LBDFlag} /></span>
      <div className='radio-payment'>
        Select Recieving Method 

      </div>
    <RadioGroup
        aria-label="receiving"
        defaultValue="wallet"
        name="radio-buttons-group"
      >
        <FormControlLabel style={{color:"black"}}  value="pickup" control={<Radio />} label="Cash Pickup" />
        <FormControlLabel style={{color:"black"}} value="wallet" control={<Radio />} label="Mobile Wallet" />
        <p className='fee'>Tranfer Fee: <span><input className='fee-input'  placeholder='$0.00' type="text" /></span> </p>
      </RadioGroup>
          </Grid>
     
        </Grid>
        <p className='money-note'>Money Available by: Tuesday, December 14, 2021</p>
        <Button className='get-started-btn' onClick={()=>handleSend()} variant="contained">
Get Started
</Button>

      </Box>
      
                  </TabPanel>
                  <TabPanel value="2">
                    <TextField id="standard-basic" className="input-fields" label="Reference Number" variant="standard" />
                    <TextField id="standard-basic" className="input-fields" label="Full Name" variant="standard" />
                    <Button className='track-btn' variant="contained">
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

export default Started;