import React from 'react'
import styles from './Item.module.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"

export const Item = ( {element} ) => {
  return (
    <div className={styles.container}>
        <Card sx={{ maxWidth: 345, marginRight:"2rem" }}>
            <CardMedia
                sx={{ height: 140 }}
                image={element.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {element.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {element.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {element.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to= {`/itemDetail/${element.id}`} underline="none">
                    <Button size="small" variant='contained' className='btn-detalle' >Ver detalle</Button>
                </Link>
            </CardActions>
        </Card>
    </div>
  )
}
