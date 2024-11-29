import React from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography } from '@mui/material'
import {Favorite, Share} from '@mui/icons-material';

export default function TourCard({image,content}) {
  return (
    <Card sx={{ maxWidth: 600 }}>
    <CardHeader
      title="A Perfect Holiday Trip"
    />
    <CardMedia
      component="img"
      height="194"
      image={image}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {content}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Favorite />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
      <Rating
        name="simple-controlled"
        value={4}
      />
      </CardActions>
  </Card>
  )
}
