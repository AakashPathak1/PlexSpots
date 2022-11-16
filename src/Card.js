import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip, Box, Modal} from '@mui/material';
import { useState } from 'react';
import Data from './data.json';

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