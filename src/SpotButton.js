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
import { height } from '@mui/system';

const SpotButton = (props) => {
    const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
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
                      {/* <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                      /> */}
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
                       <TextField
                        id="outlined-textarea"
                        label="Hours"
                        placeholder="Placeholder"
                        multiline
                      />
                    <FormControl fullWidth height >
                            
                            <InputLabel>Description</InputLabel>
                            <OutlinedInput sx={{
                            '& .MuiTextField-root': { m: 1, n: 10}}}></OutlinedInput>
                      
                    </FormControl>
                    <Box sx={{padding:"16px",}}>
                        <Fab variant="extended" color="success" onClick={()=> setOpen(false)}>
                        Submit
                    </Fab>

                    </Box>
                    
                    
                    </div>
                </Box>
            </Modal>
        </div>
   );
};

export default SpotButton;