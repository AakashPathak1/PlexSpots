import React, {useState, useEffect} from 'react';
import './index.css';
import { Box } from '@mui/material';
import {Modal, Typography} from '@mui/material';
import { Fab } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';import { green } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import { PhotoCamera } from '@mui/icons-material';
import Button from '@mui/material/Button';
import TextRating from './Rating'
import ResponsiveTimePickers from './time';
import { Add } from '@mui/icons-material';
// import dayjs, { Dayjs } from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';


import { height } from '@mui/system';

const SpotButton = (props) => {
  const [value, setValue] = React.useState('Controlled');

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  return (
    <div> 
        <IconButton type="button" variant="extended" onClick={()=> setOpen(true)}>
          <Add />
        </IconButton>
        <Modal open={open} onClose={() => setOpen(false)} 
            sx={{display: "flex",
            justifyContent: 'center',
            padding: "40px",
        }}>
          <Box 
            component="form"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              height: '550px',
              width: '500px',
              padding: '16px',
              // justifyContent: 'center',
              // textAlign: "center",
              '& .MuiTextField-root': { m: 1 }, 
            }}
            noValidate
            autoComplete="off">
          <Typography variant="h5" margin={1}>Add a Spot</Typography>     
          <FormControl fullWidth>
            <TextField
              required
              id="outlined-required"
              label="Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Address"
              multiline
            />
            <ResponsiveTimePickers name="Opens at"/>
            <ResponsiveTimePickers name="Closes at"/>
            <TextField
              required
              id="outlined-required"
              label="Description"
              multiline
            />
            <TextField
              required
              id="outlined-required"
              label="Image URL"
            />
          <Box sx={{padding:"16px", justifyContent: 'center',
               textAlign: "center" }}>
            <Fab variant="extended" color="success" 
              onClick={()=> 
                setOpen(false)
              }>
            Submit
            </Fab>
          </Box>
          
          
          </FormControl>
        </Box>
        </Modal>
    </div>
   );
};

export default SpotButton;
