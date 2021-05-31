import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5">
            {product.price}
          </Typography>
        </div>
        <Typography varient="body2" color="textSecondary">
          {product.decription}
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
      <a href={product.pageing}><button > View </button></a>
        <IconButton aria-label="Add to cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Product;
