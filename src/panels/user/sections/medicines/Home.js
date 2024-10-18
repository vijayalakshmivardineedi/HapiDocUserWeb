import React from "react";
import { Card, CardMedia, CardContent, Grid, Typography } from "@mui/material";
import stomach from "../../../../assets/images/stomach.png";
import liver from "../../../../assets/images/liver.png";
import kidney from "../../../../assets/images/kidney.png";
import toothhygiene from "../../../../assets/images/tooth-hygiene.png";
import lungs from "../../../../assets/images/lungs.png";
import heart from "../../../../assets/images/heart.png";
import pain from "../../../../assets/images/pain.png";
import sexual from "../../../../assets/images/sexual.png";
import { Navigate, useNavigate } from "react-router-dom";

const imageDetails = [
  {
    url: "https://images.apollo247.in/pub/media/catalog/category/babycare_2.jpg?tr=w-367.5,q-80,f-webp,dpr-1,c-at_max",
    name: "Baby Care",
  },
  {
    url: "https://www.jiomart.com/images/product/original/rvybpnnswp/vetoni-women-s-care-kit-strawberry-face-wash-roll-on-neem-lime-veclean-hair-removal-cucumber-tulsi-pack-of-5-product-images-orvybpnnswp-p591685546-0-202205290042.jpg?im=Resize=(420,420)",
    name: "Womens Care",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8BdD83RLosmI9KWKZ3xlq7y7RZHOHvG1VBP5NB5RIUQ&s",
    name: "Skin Care",
  },
  {
    url: "https://images.apollo247.in/pub/media/catalog/category/personalcare_2.jpg?tr=w-367.5,q-80,f-webp,dpr-1,c-at_max",
    name: "Personal Care",
  },
  {
    url: "https://connect.farmherbs.com/Media/IngredientOriginalImage/OI20231006033158302.png",
    name: "Ayurveda",
  },
  {
    url: "https://images.apollo247.in/pub/media/catalog/category/health_and_nutrition_2.jpg?tr=w-367.5,q-80,f-webp,dpr-1,c-at_max",
    name: "Health Drinks",
  },

  {
    url: "https://images.apollo247.in/pub/media/catalog/category/protein_supplements_1.jpg?tr=w-367.5,q-100,f-webp,c-at_max",
    name: "Protein Powders & Drinks",
  },
  {
    url: "https://images.apollo247.in/pub/media/catalog/category/multi_vitamins.jpg?tr=w-367.5,q-80,f-webp,dpr-1.9999999624032228,c-at_max",
    name: "Multivitamins",
  },
  {
    url: "https://images.apollo247.in/pub/media/catalog/category/glucometer_strips_1.jpg?tr=w-367.5,q-100,f-webp,c-at_max",
    name: "Glucometers",
  },
  {
    url: "https://images.apollo247.in/pub/media/catalog/category/healthdevices_2.jpg?tr=w-367.5,q-100,f-webp,c-at_max",
    name: "Health Devices",
  },
  {
    url: "https://assets.gqindia.com/photos/5fe9b7475a0f252d355ec810/master/w_1600%2Cc_limit/Beardo-1.jpg",
    name: "Mens Care",
  },
  {
    url: "https://images.apollo247.in/pub/media/catalog/category/sexual_health_wellness_new.jpg?tr=w-367.5,q-100,f-webp,c-at_max",
    name: "Sexual Wellness",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Typography
        sx={{
          marginTop: "20px",
          marginLeft: "40px",
          fontFamily: "poppins, sans-sarif",
          fontSize: "20px",
          fontWeight: "600",
          color: "#05445E;",
        }}
      >
        Shop by Category
      </Typography>
      <Card style={{ boxShadow: "none", marginLeft: "40px" }}>
        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "20px",
            width: "100%", // Set the width of the container to 100%
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {imageDetails.map((detail, index) => (
            <Grid item key={index} xs={2} style={{ cursor: "pointer" }}>
              {" "}
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
                onClick={() => navigate("/subcategories")}
              >
                <CardMedia
                  component="img"
                  alt={detail.name}
                  image={detail.url}
                  title={detail.name}
                  style={{ width: 150, height: 130, borderRadius: "10px" }}
                />
                <CardContent
                  sx={{ fontFamily: "poppins, sans-sarif", fontSize: "14px" }}
                >
                  {detail.name}
                </CardContent>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Card>
      <Grid
        container
        style={{ marginBottom: "10px", marginLeft: "30px", color: "#05445E" }}
      >
        <Grid
          sx={{
            fontFamily: "poppins,sans-sarif",
            fontWeight: 600,
          }}
        >
          <Typography
            sx={{
              fontFamily: "poppins,sans-sarif",
              fontWeight: 600,
              fontSize: 20,
            }}
          >
            Browse by Health Conditions
          </Typography>
          <Grid
            container
            spacing={1}
            sx={{ marginTop: "20px", paddingLeft: "20px" }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Grid
                item
                xs={3}
                style={{
                  border: "1px solid lightgrey",
                  display: "flex",
                  alignItems: "center",
                  width: "350px",
                  borderRadius: 8,
                }}
              >
                <img
                  src={stomach}
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "20%",
                    height: "auto",
                  }}
                />
                <Typography
                  variant="h8"
                  sx={{ marginRight: "20px", color: "#05445E" }}
                >
                  Stomach Care
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                style={{
                  marginLeft: "10px",
                  border: "1px solid lightgrey",
                  display: "flex",
                  alignItems: "center",
                  width: "200px",
                  borderRadius: 8,
                }}
              >
                <img
                  src={liver}
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "20%",
                    height: "auto",
                  }}
                />
                <Typography
                  variant="h8"
                  sx={{ marginRight: "20px", color: "#05445E" }}
                >
                  Liver Care
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                style={{
                  marginLeft: "10px",
                  border: "1px solid lightgrey",
                  display: "flex",
                  alignItems: "center",
                  width: "200px",
                  borderRadius: 8,
                }}
              >
                <img
                  src={kidney}
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "20%",
                    height: "auto",
                  }}
                />
                <Typography
                  variant="h8"
                  sx={{ marginRight: "20px", color: "#05445E" }}
                >
                  kidney Care
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                style={{
                  marginLeft: "10px",
                  border: "1px solid lightgrey",
                  display: "flex",
                  alignItems: "center",
                  width: "200px",
                  borderRadius: 8,
                }}
              >
                <img
                  src={toothhygiene}
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "20%",
                    height: "auto",
                    marginTop: "8px",
                    marginBottom: "8px",
                  }}
                />
                <Typography
                  variant="h8"
                  sx={{ marginRight: "20px", color: "#05445E" }}
                >
                  Oral Care
                </Typography>
              </Grid>
            </div>
          </Grid>
          <Grid
            container
            spacing={1}
            sx={{ marginTop: "20px", paddingLeft: "20px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid
                item
                xs={3}
                style={{
                  border: "1px solid lightgrey",
                  display: "flex",
                  alignItems: "center",
                  width: "350px",
                  borderRadius: 8,
                }}
              >
                <img
                  src={lungs}
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "20%",
                    height: "auto",
                    marginTop: "8px",
                    marginBottom: "8px",
                  }}
                />
                <Typography
                  variant="h8"
                  sx={{ marginRight: "20px", color: "#05445E" }}
                >
                  Lungs Care
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                style={{
                  marginLeft: "10px",
                  border: "1px solid lightgrey",
                  display: "flex",
                  alignItems: "center",
                  width: "200px",
                  borderRadius: 8,
                }}
              >
                <img
                  src={heart}
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "20%",
                    height: "auto",
                  }}
                />
                <Typography
                  variant="h8"
                  sx={{ marginRight: "20px", color: "#05445E" }}
                >
                  Heart Care
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                style={{
                  marginLeft: "10px",
                  border: "1px solid lightgrey",
                  display: "flex",
                  alignItems: "center",
                  width: "200px",
                  borderRadius: 8,
                }}
              >
                <img
                  src={pain}
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "20%",
                    height: "auto",
                  }}
                />
                <Typography
                  variant="h8"
                  sx={{ marginRight: "20px", color: "#05445E" }}
                >
                  Pain Care
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                style={{
                  marginLeft: "10px",
                  border: "1px solid lightgrey",
                  display: "flex",
                  alignItems: "center",
                  width: "200px",
                  borderRadius: 8,
                }}
              >
                <img
                  src={sexual}
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "20%",
                  }}
                />
                <Typography
                  variant="h8"
                  sx={{ marginRight: "20px", color: "#05445E" }}
                >
                  Sexual Health
                </Typography>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
