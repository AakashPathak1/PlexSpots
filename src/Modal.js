import React, {useState} from 'react';
import './index.css';
import Button from '@mui/material/Button';
// import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import {Modal} from '@mui/material';
import Carousel from './carousel.js';



const Test = (props) => {
     const [open, setOpen] = useState(false);
    return (
        
        <div> 
            {/* <Button onClick={() => setOpen(true)} sx={{
                           backgroundColor: 'navy',
                           color: 'white',
                           height: '25px',
                           width: '100px',
                           padding: '50px',
                           justifyContent: 'center',
                           textAlign: "center",
                           '& .MuiTextField-root': { m: 1, width: '25ch' },
                   }}> Open Modal </Button>  */}
            <Modal open={open} onClose={() => setOpen(false)} 
                sx={{display: "flex",
                justifyContent: 'justify',
                padding: "40px",
                    }}>
                <Box 
                    sx={{
                        align: 'center',
                        backgroundColor: 'white',
                        color: 'black',
                        height: '800px',
                        width: '1500px',
                        padding: '16px',
                        justifyContent: 'center',
                        textAlign: "center",
                }}>
                    <h2 id="modal-title">
                        {props.name}</h2>
                    <h3>{props.hours}</h3> 
                        <div className="App">
                            <Carousel>
                                <img
                                    src="https://onthegrid.city/imager/s3_amazonaws_com/onthegrid.city/assets/grid/san-francisco/fidi/asha-tea-house/IMG_2173_299006722e285f47655d17d1c9136337.jpg"
                                    alt="doe"/>
                                <img
                                    src="https://cdn.shopify.com/s/files/1/0097/5092/t/61/assets/home-slider-slide-2.jpg?v=26685239918630089571645984598"
                                    alt="outside of doe"/>
                                <img
                                    src="https://d22ko7latny6xj.cloudfront.net/uploads/image/image/104517/large_o__33_.jpg"
                                    alt="inside doe"/>                                    
                            </Carousel>                            

                        </div>                
                        <h4>{props.address}</h4>
                        <p id="modal-description">
                            {props.description} </p>
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
