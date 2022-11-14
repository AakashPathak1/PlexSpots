import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Chip} from '@mui/material';
import Modal from './Modal';

export default function MultiActionAreaCard(props) {
  //const [open, setOpen] = useState(false);

  // image="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg"
  // <Typography gutterBottom variant="h5" component="div" classname="study_title">
  //           The Dungeon
  //         </Typography>
  //         <Typography variant="body2" color="text.secondary" classname="study_hours">
  //           Hours: 8am - 6am
  //         </Typography>


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
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
      <CardActions>
        <Modal>Modal</Modal>
      </CardActions>
    </Card>
  );
}