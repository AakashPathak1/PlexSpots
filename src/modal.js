
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import {Modal} from '@mui/material';
import Image from "material-ui-image";




const Test = ( ) => {
     const [open, setOpen] = useState(false);
    return (
        
        <div> 
            <Button onClick={() => setOpen(true)} > Open Modal </Button> 
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
                    <Image src="/Doe_Library,_main_facade,_July_2018.jpeg/" alt="Moffit pic" />
                    <h2 id="modal-title">Place Name</h2>
                    <h3>These are the hours</h3> 
                    <p id="modal-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.</p>
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