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
import Header from "./header"
function  Success(props) {
    const [value, setValue] = React.useState('1');
    let navigate = useNavigate();

    function estimate() {
      navigate('/getstarted')
    }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <div >
          <Header />
            <Box sx={{ flexGrow: 1 }}>
      <Grid className='nav-grid-track' justifyContent="center" container spacing={2}>
        <Grid  item xs={6} md={3} >
        <h4>Money Transfer At Your Finger Tips</h4>
        <h4>Send Money Now Starting At $0 Fee*</h4>
        <a className="send-link">Send Now</a>
        </Grid>
        <Grid textAlign="center" item xs={12} md={7}>
        <Container className='white-container-track' >
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box  >
          <TabList onChange={handleChange}  >
            <Tab  label="Rates & Fees" value="1" />
            <Tab label="Track & recieve" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" className="tabs-each">
        <input className="input-field-1" placeholder='Send Amount' /><span className='usd-name'>USD <img width="40px" src={USFlag} /></span>
        <input className="input-field" placeholder='Receiver Country' />
        <Button className='estimete-btn' onClick={()=>estimate()} variant="contained">
  Estimate Fees
</Button>
        </TabPanel>
        <TabPanel value="2" className="tabs-each">
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