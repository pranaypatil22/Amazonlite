import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shirts",
    decription:
      "Sanskar Fashion Mens' Shirts, Bsnded Collar Half Sleeves Shirts for Men, Rayon Cotton Multicolour",
    price: "₹1500",
    image:
      "https://www.dhresource.com/f2/albu/g10/M01/80/A4/rBVaWV6O0huAAQapAAQstoPfc0A197.jpg",
    pageing: "../pages/page.js"
  },
  {
    id: 2,
    name: "Mackbook Pro",
    decription:
      "New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Space Grey (Latest Model)",
    price: "₹65000",
    image:
      "https://cdn.vox-cdn.com/thumbor/vGTTyiMMUHIHLs0FjoF0z99m6_E=/0x0:2040x1360/1200x800/filters:focal(895x304:1221x630)/cdn.vox-cdn.com/uploads/chorus_image/image/68592461/vpavic_4291_20201113_0366.0.0.jpg",
    pageing: "../pages/page2.html"
  },
  {
    id: 3,
    name: "Google pixel 5",
    decription: "Google Pixel 5 5G Sorta Sage, 8GB RAM, 128GB Storage",
    price: "₹45000",
    image:
      "https://images.hindustantimes.com/tech/img/2021/01/06/960x540/Google-Pixel-5-Review-Brilliant-but-outshined_1609928793012_1609928803190.jpg"
  },
  {
    id: 4,
    name: "harry potter and the goblet of fire Movie",
    decription:
      "When Harry is chosen as a fourth participant of the inter-school Triwizard Tournament, he is unwittingly pulled into a dark conspiracy that endangers his life",
    price: "₹600",
    image: "https://images.hungama.com/c/1/f65/c96/2019258/2019258_1280x800.jpg"
  },
  {
    id: 5,
    name: "water bottel",
    decription: "Stainless steal water bottel",
    price: "₹400",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/water-bottles-1613062033.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
  },
  {
    id: 6,
    name: "shoes",
    decription: "mens shoes",
    price: "₹1150",
    image:
      "https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOOFANTUM-SPORTFANT11631486BB9270B/1594127408424_0..jpg?imwidth=282&impolicy=hq"
  },
  {
    id: 7,
    name: "jacket for men",
    decription:
      "Black solid jacket, has a mock collar, 2 pockets, zip closure, long sleeves, straight hem, and polyester lining",
    price: "₹5000",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cool-jackets-1601401814.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
  }
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;
