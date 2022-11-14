import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import {Modal} from '@mui/material';
// import SwipeableTextMobileStepper from './carousel';




const Test = (props) => {
     const [open, setOpen] = useState(false);
    return (
        
        <div> 
            <Button onClick={() => setOpen(true)} > Learn More </Button> 
            <Modal open={open} onClose={() => setOpen(false)} 
                sx={{display: "flex",
                justifyContent: 'center',
                padding: "40px",
            }}>
                <Box 
                    sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        height: '800px',
                        width: '1000px',
                        padding: '16px',
                        justifyContent: 'center',
                        textAlign: "center",
                }}>
                    {/* <SwipeableTextMobileStepper></SwipeableTextMobileStepper> */}
                    <h2 id="modal-title">{props.name}</h2>
                    <h3>{props.hours}</h3> 
                    <p id="modal-description">
                        {props.description}</p>
                        <Box textAlign='center'>
                            <Button 
                                size= "large"
                                variant="contained" 
                                onClick={() => setOpen(false)}>
                                     Click Me
                                     </Button>
                        </Box>

                </Box>
            </Modal>

        </div>
        

    );

};

export default Test;