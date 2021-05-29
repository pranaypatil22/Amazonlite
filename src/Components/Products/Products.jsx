import React from "react";
import { Grid }  from "@material-ui/core/Grid";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  { id: 1, name: "Shirts", decription: "casual", price: "500 rs" ,image: 'shirt.jpeg'},
  {
    id: 2,
    name: "Mackbook",
    decription: "Apple M1 Mackbook",
    price: "65000 rs",
    image: 'mc.jpg'
  }
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;
