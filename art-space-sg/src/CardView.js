import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardView(props) {
  const theme = {
    spacing: 8,
  }
  return (
    <Card sx={{ minWidth: 225, m: 2 }} key={props.data._id}>
      <CardMedia
        component="img"
        height="180"
        image={props.data.image_link}
        alt="green iguana"
      />
      <CardContent sx={{height: 100}}>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}