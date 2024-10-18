import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

const SubCategories = () => {
  const navigate = useNavigate();
  const products = [
    {
      name: "Vicks BabyRub Balm For 3 Months & Above",
      image:
        "https://ik.imagekit.io/wlfr/wellness/images/products/341515-1.jpg/tr:w-3840,dpr-1,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-webp,q-80,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end",
      description: "Bottle of 50 ml",
      rating: 4.5,
      numRatings: 91,
      price: 213,
      discount: "1% off",
    },
    {
      name: "Mamaearth Natural Repellent Patch",
      image:
        "https://www.netmeds.com/images/product-v1/600x600/825566/mamaearth_natural_repellent_mosquito_patches_for_babies_24_s_0.jpg",
      description: "Box of 24 Patches",
      rating: 4.7,
      numRatings: 98,
      price: 156,
      discount: "22% off",
    },
    {
      name: "Cetaphil Baby Gentle Wash & Shampoo",
      image:
        "https://www.aushealthwarehouse.com/cdn/shop/products/234aaf753c6a4e118afaeb231b6b6429_800x.jpg?v=1674721283",
      description: "Bottle of 230 ml ",
      rating: 4.7,
      numRatings: 91,
      price: 658,
      discount: "13% off",
    },
    {
      name: "Baby Organo Herbal Kids Toothpaste",
      image: "https://m.media-amazon.com/images/I/619C87HPQvL._SX679_.jpg",
      description: "Tube of 50 gm",
      rating: 4.4,
      numRatings: 30,
      price: 127,
      discount: "36% off",
    },
    {
      name: "Cetaphil Baby Daily Lotion",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkK9v5ABCSWyrwgv5E0dCAgni_KkdU_69xdgoTv826deZtMOPSWcKvrIhH-2wcX49GwE&usqp=CAU",
      description: "Bottle of 400 ml",
      rating: 4.9,
      numRatings: 50,
      price: 1342,
      discount: "10% off",
    },
  ];
  return (
    <Container maxWidth="lg" style={{ padding: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              component="img"
              image="https://www.pigeon-in.com/wp-content/uploads/2015/07/Pigeon-Group-banner1.jpg"
              style={{ width: 1200, height: 250 }} // Adjust width and height as needed
            />
          </Card>
        </Grid>
      </Grid>
      <Typography
        sx={{
          marginTop: "20px",
          marginLeft: "30px",
          fontFamily: "poppins, sans-sarif",
          fontSize: "20px",
          fontWeight: "600",
          color: "#05445E;",
        }}
      >
        Shop by category
      </Typography>
      <Card
        style={{ marginTop: "20px", boxShadow: "none" }}
        onClick={() => navigate("/products")}
      >
        <Grid
          container
          spacing={3}
          sx={{ marginTop: "20px" }}
          justifyContent="center"
          alignItems="center"
        >
          {/* Replace the following Card components with your actual data */}
          <Grid item style={{ cursor: "pointer" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                alt="Baby & Infant Food"
                image="https://media.istockphoto.com/id/186560911/photo/feeding-excited-baby.jpg?s=612x612&w=0&k=20&c=462zFsJ_tQaRx5zGl8_GWPJRo8FKU5-CizCueFi8op8="
                title="Baby & Infant Food"
                style={{ width: 150, height: 130, borderRadius: "10px" }}
              />
              <CardContent
                sx={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "14px",
                  color: "#05445E;",
                }}
              >
                Baby & Infant Food
              </CardContent>
            </Grid>
          </Grid>
          <Grid item style={{ cursor: "pointer" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                alt="Bath Essentials"
                image="https://media.istockphoto.com/id/540117814/photo/happy-baby-girl-is-having-a-bath.jpg?s=612x612&w=0&k=20&c=cl1OMRZWTh4_4qcexJsrArU3LuLFDMA_514swVCqqSg="
                title="Bath Essentials"
                style={{ width: 150, height: 130, borderRadius: "10px" }}
              />
              <CardContent
                sx={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "14px",
                  color: "#05445E;",
                }}
              >
                Bath Essentials
              </CardContent>
            </Grid>
          </Grid>
          <Grid item style={{ cursor: "pointer" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                alt="Diapers & wipes"
                image="https://media.istockphoto.com/id/1047019844/photo/baby-is-playing-on-diapers.jpg?s=612x612&w=0&k=20&c=ysO1ASiXvrsQQA76nIE4LscA1jRvG-79De7z4L-uIlU="
                title="Diapers & wipes"
                style={{ width: 150, height: 130, borderRadius: "10px" }}
              />
              <CardContent
                sx={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "14px",
                  color: "#05445E;",
                }}
              >
                Diapers & wipes
              </CardContent>
            </Grid>
          </Grid>
          <Grid item style={{ cursor: "pointer" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                alt="Baby Skin Care"
                image="https://media.istockphoto.com/id/1455240474/photo/cute-little-baby-with-cream-on-face-top-view.jpg?s=612x612&w=0&k=20&c=-EC0X8NbOwdUmJ-U2fnVF56JtwO2_cIxwCRUomuD3gE="
                title="Baby Skin Care"
                style={{ width: 150, height: 130, borderRadius: "10px" }}
              />
              <CardContent
                sx={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "14px",
                  color: "#05445E;",
                }}
              >
                Baby Skin Care
              </CardContent>
            </Grid>
          </Grid>
          <Grid item style={{ cursor: "pointer", transition: "cursor 1.3s" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                alt="Baby Health Care"
                image="https://media.istockphoto.com/id/508509000/photo/professional-pediatrician-examining-infant.jpg?s=612x612&w=0&k=20&c=gp0CvpwTWX1rs19ZP8nLiAweUEgIij2tWXB56wVTOeE="
                title="Baby Health Care"
                style={{ width: 150, height: 130, borderRadius: "10px" }}
              />
              <CardContent
                sx={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "14px",
                  color: "#05445E;",
                }}
              >
                Baby Health Care
              </CardContent>
            </Grid>
          </Grid>
        </Grid>
      </Card>

      <Typography
        sx={{
          marginTop: "20px",
          marginLeft: "30px",
          fontFamily: "poppins, sans-sarif",
          fontSize: "20px",
          fontWeight: "600",
          color: "#05445E;",
        }}
      >
        In the Spotlight
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        {products.map((product, index) => (
          <Card
            key={index}
            style={{
              width: "200px",
              margin: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardMedia
              component="img"
              image={product.image}
              style={{ width: "100%", height: "180px", borderRadius: "10px" }}
            />
            <CardContent>
              <Typography
                variant="body2"
                style={{
                  fontWeight: "600",
                  fontFamily: "poppins, sans-serif",
                  fontSize: "13px",
                }}
              >
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontSize: "13px",
                  fontFamily: "poppins, sans-serif",
                  marginTop: "5px",
                }}
              >
                {product.description}
              </Typography>
              <Grid
                container
                spacing={1}
                alignItems="center"
                style={{ marginTop: "5px" }}
              >
                <Grid item>
                  <Typography
                    sx={{
                      backgroundColor: "green",
                      color: "white",
                      fontSize: 15,
                      fontFamily: "poppins, sans-serif",
                      padding: "3px",
                      borderRadius: "3px",
                    }}
                  >
                    {product.rating}
                    <StarIcon sx={{ fontSize: 15, marginLeft: "0.2rem" }} />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: "13px",
                      fontFamily: "poppins, sans-serif",
                    }}
                  >
                    {product.numRatings} ratings
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions
              style={{ padding: "10px", borderTop: "1px solid #ccc" }}
            >
              <Typography
                variant="body2"
                style={{ textDecoration: "line-through" }}
              >
                MRP: ₹{product.price - 50}
              </Typography>
              <Typography variant="body1" color="error">
                {product.discount}
              </Typography>
            </CardActions>
            <CardActions
              style={{
                display: "flex",
              }}
            >
              <Typography variant="body1">₹{product.price}</Typography>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#189AB4",
                  color: "white",
                  borderRadius: "100px",
                  fontFamily: "poppins, sans-serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  marginLeft: "20px",
                }}
              >
                ADD
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>

      <Typography
        sx={{
          marginTop: "20px",
          marginLeft: "30px",
          fontFamily: "poppins, sans-sarif",
          fontSize: "20px",
          fontWeight: "600",
          color: "#05445E;",
        }}
      >
        Popular Brands
      </Typography>
      <Card style={{ boxShadow: "none" }}>
        <Grid
          container
          spacing={3}
          sx={{ marginTop: "20px" }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item style={{ cursor: "pointer", transition: "cursor 1.3s" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                image="https://thulo.com/images/feature_variant/131/mamy-poko-pants.png"
                style={{ width: 170, height: 100, borderRadius: "10px" }}
              />
              <CardContent
                sx={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "14px",
                  color: "#05445E;",
                }}
              >
                MamyPoko
              </CardContent>
            </Grid>
          </Grid>
          <Grid item style={{ cursor: "pointer" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                image="https://logowik.com/content/uploads/images/739_pampers.jpg"
                style={{ width: 130, height: 100, borderRadius: "10px" }}
              />
              <CardContent
                sx={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "14px",
                  color: "#05445E;",
                }}
              >
                Pampers
              </CardContent>
            </Grid>
          </Grid>
          <Grid item style={{ cursor: "pointer" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqCLbJVAGtz0LDDxyYTKWZGVVOi4nXOnzXCAkBeAzpiyMhy88kLA0XiszDyPeDWh3_yg&usqp=CAU"
                style={{ width: 130, height: 100, borderRadius: "10px" }}
              />
              <CardContent
                sx={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "14px",
                  color: "#05445E;",
                }}
              >
                Teddyy
              </CardContent>
            </Grid>
          </Grid>
          <Grid item style={{ cursor: "pointer" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                image="https://zerocreativity0.files.wordpress.com/2017/01/himalaya-logo.jpg"
                style={{ width: 130, height: 100, borderRadius: "10px" }}
              />
              <CardContent
                sx={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "14px",
                  color: "#05445E;",
                }}
              >
                Himalaya
              </CardContent>
            </Grid>
          </Grid>
          <Grid item style={{ cursor: "pointer", transition: "cursor 1.3s" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                image="https://i.pinimg.com/originals/4b/c7/1b/4bc71be1e103635a2f5d1ca0299e42a8.png"
                style={{ width: 130, height: 100, borderRadius: "10px" }}
              />
              <CardContent
                sx={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "14px",
                  color: "#05445E;",
                }}
              >
                Cetaphil
              </CardContent>
            </Grid>
          </Grid>
          <Grid item style={{ cursor: "pointer" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSyYY_eHB0sMRG8-EGUcvzmxAl6MAZAFWGa3C5k1VIuOHZiPfETygL2NZtD76fBFS2SU&usqp=CAU"
                style={{ width: 130, height: 100, borderRadius: "10px" }}
              />
              <CardContent
                sx={{
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "14px",
                  color: "#05445E;",
                }}
              >
                Chicco
              </CardContent>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default SubCategories;
