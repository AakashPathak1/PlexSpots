
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import Carousel, {CarouselItem} from './carousel.js';
import {Modal} from '@mui/material';




const Test = (props) => {
     const [open, setOpen] = useState(false);
    return (
        
        <div> 
            <Button onClick={() => setOpen(true)} sx={{
                           backgroundColor: 'navy',
                           color: 'white',
                           height: '25px',
                           width: '100px',
                           padding: '40px',
                           justifyContent: 'center',
                           textAlign: "center",
                           '& .MuiTextField-root': { m: 1, width: '25ch' },
                   }}> Open Modal </Button> 
            <Modal open={open} onClose={() => setOpen(false)} 
                sx={{display: "flex",
                justifyContent: 'justify',
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
                    
                    <image src="/Doe_Library,_main_facade,_July_2018.jpeg/" alt="Moffit pic" />
                    <h2 id="modal-title">{props.name}</h2>

                    <h3>{props.hours}</h3> 
                    <Carousel>
                        <CarouselItem>Item 1</CarouselItem>
                        <CarouselItem>Item 2</CarouselItem>
                        <CarouselItem>Item 3</CarouselItem>
                    </Carousel>
                    <p id="modal-description">
                        {props.description}</p>
                        <Box textAlign='center'>
                            <Button 
                                size= "large"
                                variant="contained" 
                                onClick={() => setOpen(false)}>
                                     Cancel
                                     </Button>
                        </Box>

                </Box>
            </Modal>

        </div>
        

    );

};

export default Test;

