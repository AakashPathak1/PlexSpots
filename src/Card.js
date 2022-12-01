import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Box, Modal, Stack, Grid} from '@mui/material';
import { useState } from 'react';
import Data from './data.json';
import Carousel, {CarouselItem} from './carousel.js';
import './carousel.css';

export default function StudyCard(props) {
  //const [open, setOpen] = useState(false);

  // image="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg"
  // <Typography gutterBottom variant="h5" component="div" classname="study_title">
  //           The Dungeon
  //         </Typography>
  //         <Typography variant="body2" color="text.secondary" classname="study_hours">
  //           Hours: 8am - 6am
  //         </Typography>
  const [open, setOpen] = useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => setOpen(true)}>
        <CardMedia
          component="img"
          classname="study_img"
          height="140"
          image={props.img}
          alt="dungeon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" classname="study_title">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" classname="study_hours" mb={1.5}>
            Hours: 8am - 6am
          </Typography>
          <Chip label={props.tag1} color="primary"/>
          <Chip label={props.tag2} color="primary"/>
        </CardContent>
      </CardActionArea>
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
                        textAlign: "justified",
                }}>
                    <image src="/Doe_Library,_main_facade,_July_2018.jpeg/" alt="Moffit pic" />
                    <h2 id="modal-title">
                        {props.title}</h2>
                    <h3>{props.hours}</h3> 
                        <div className="App">
                        <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Carousel>
                                <img
                                    src="https://onthegrid.city/imager/s3_amazonaws_com/onthegrid.city/assets/grid/san-francisco/fidi/asha-tea-house/IMG_2173_299006722e285f47655d17d1c9136337.jpg"
                                    alt="doe"/>
                                <img
                                    src="https://www.7x7.com/media-library/asha-tea-house-s-san-francisco-location-remains-closed-due-to-covid-19-but-its-east-bay-locations-are-open-for-takeout.jpg?id=28849600&width=1200&height=600"
                                    alt="outside of doe"/>
                                <img className="hardCode"
                                    src="https://d22ko7latny6xj.cloudfront.net/uploads/image/image/104517/large_o__33_.jpg"
                                    alt="inside doe"/>                                    
                            </Carousel>
                            </Grid>
                            <Grid item xs={6}>
                            <Box>halskdfjow8yefshdij</Box>
                            </Grid>
                            </Grid>
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
    </Card>
  );
}

// function SpotModal() {
//   return (
//     <div>
//   <Modal open={open} onClose={() => setOpen(false)} 
//                 sx={{display: "flex",
//                 justifyContent: 'center',
//                 padding: "40px",
//             }}>
//                 <Box 
//                     sx={{
//                         backgroundColor: 'white',
//                         color: 'black',
//                         height: '800px',
//                         width: '1000px',
//                         padding: '16px',
//                         justifyContent: 'center',
//                         textAlign: "center",
//                 }}>
//                     {/* <SwipeableTextMobileStepper></SwipeableTextMobileStepper> */}
//                     <h2 id="modal-title">{props.name}</h2>
//                     <h3>{props.hours}</h3> 
//                     <p id="modal-description">
//                         {props.description}</p>
//                         <Box textAlign='center'>
//                             <Button 
//                                 size= "large"
//                                 variant="contained" 
//                                 onClick={() => setOpen(false)}>
//                                      Click Me
//                                      </Button>
//                         </Box>

//                 </Box>
//             </Modal>
//              </div>
//   );
// }