import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Modal from './Modal';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.constructionspecifier.com/wp-content/uploads/2018/11/Opener-7.jpg"
          alt="dungeon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Dungeon
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hours: 8am - 6am
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Modal>Modal</Modal>
      </CardActions>
    </Card>
  );
}
