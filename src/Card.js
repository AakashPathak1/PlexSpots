import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Box, Modal, Grid } from '@mui/material';
import Carousel, {CarouselItem} from './carousel.js'
import { useState } from 'react';
import Data from './data.json';
import Test from './Modal.js';

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
          <Chip label={props.tag1} sx={{ mx: 0 }} color="primary" variant="outlined"/>
          <Chip label={props.tag2} sx={{ mx: 1 }} color="secondary" variant="outlined"/>
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
                                <img
                                    src="https://s.hdnux.com/photos/01/24/21/64/22093098/4/1200x0.jpg"
                                    alt="inside doe"/>                                    
                            </Carousel>
                            </Grid>
                            <Grid item xs={6}>
                            <Box> There is a cup of tea out there for everyone, whether it's a simple glass of straight tea, or a crafted cup of flavored tea. At Asha, we strive to feed your love for tea by serving high-quality whole leaf tea and hand-crafted specialty tea beverages made with fresh, pure and real ingredients. Our tea selection is carefully curated as a result of extensive traveling and tasting. We make almost everything from scratch so that we know exactly what we're serving, we purposely limit our drink and tea selections to showcase a small but comprehensive representation of what the tea world has to offer, and we make a big effort to share everything we're learning as we help build America's tea culture. <p></p>
                              But we also know that drinking tea isn't just about the drink. It's also about where you drink it and who you drink it with--which is why we designed every element of our tea house to maximize your tea-drinking enjoyment. 

"Asha", after all, is Taiwanese for "someone that enjoys life", and our hope is that drinking Asha tea will remind you of the things you enjoy about life.

<p></p>Asha Tea House is a venture started by David and Diana Lau, engineers by training but tea enthusiasts at heart. They were inspired by how Starbucks revolutionized the coffee industry by creating a "third home" for coffee lovers, and are huge fans of third-wave coffee companies like Blue Bottle and Intelligentsia Coffee that are devoted to further enhancing the coffee-drinking experience.

Asha's team members are fiercely dedicated to quality and honesty, and we hope that our passion for tea and what we offer shines through with every sip.</Box>
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
                                     Close
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