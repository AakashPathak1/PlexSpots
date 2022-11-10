import React, {useState, useEffect} from 'react';
import './index.css';
import { Box } from '@mui/material';
import {Modal} from '@mui/material';
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
   return (
       
        <div> 
            <Fab variant="extended" onClick={()=> setOpen(true)}>
                <RoomIcon sx={{ mr: 1, color: "green"}} />
                    Add your Spot
            </Fab>
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
                           height: '500px',
                           width: '500px',
                           padding: '16px',
                           justifyContent: 'center',
                           textAlign: "center",
                           '& .MuiTextField-root': { m: 1, width: '25ch' },
                   }}
                    noValidate
                    autoComplete="off"
                   >     
                    <div>
                      <TextField
                        id="outlined-textarea"
                        label="Name"
                        placeholder="Placeholder"
                        multiline
                      />
                       <TextField
                        id="outlined-textarea"
                        label="Address"
                        placeholder="Placeholder"
                        multiline
                      />
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                          label="Basic example"
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider> */}
                    <Box sx={{
                          
                          backgroundColor: 'white',
                          color: 'black',
                          padding: '16px',
                          justifyContent: 'center',
                          textAlign: "center",
                          '& .MuiTextField-root': { m: 1, width: '25ch' },}}>
                    <ResponsiveTimePickers name="From"></ResponsiveTimePickers>
                    <ResponsiveTimePickers name="To"></ResponsiveTimePickers>
                    </Box>
                    <FormControl fullWidth>
                            
                            <InputLabel>Description</InputLabel>
                            <OutlinedInput sx={{
                            '& .MuiTextField-root': { m: 1, n: 10}}}></OutlinedInput>
                      
                    </FormControl>
                    
                    

                    <Box 
                    component="form"
                       sx={{
                           display: 'flex',
                           justifyContent: 'center',
                           textAlign: "center",
                    
                   }}>
                    <TextRating></TextRating>
                   </Box>

                    
                    <Box sx={{padding:"16px"}}>
                        <Fab variant="extended" color="success" onClick={()=> setOpen(false)}>
                        Submit
                    </Fab>
                    <Button variant="contained" component="label" color="success" sx={{margin:"16px"}}>
                            Upload
                        <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <IconButton color="success" aria-label="upload picture" component="label">
                      <input hidden accept="image/*" type="file" />
                      <PhotoCamera />
                    </IconButton>

                    </Box>
                    
                    
                    </div>
                </Box>
            </Modal>
        </div>
   );
};

export default SpotButton;