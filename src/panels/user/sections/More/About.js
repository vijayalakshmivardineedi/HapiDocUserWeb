import React from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Add this line

import LocationOnIcon from "@mui/icons-material/LocationOn";
import { CardContent, CardMedia, Rating, Card } from "@mui/material";

function About() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BoOQ9cgXJeMNIIVjeSuJe4s0WSHX_U6JYg&usqp=CAU')",
          backgroundSize: "cover",
          padding: "30px",
        }}
      >
        <Typography
          variant="h4"
          color="text.primary"
          align="center"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold" }}
        >
          About Us
        </Typography>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            underline="hover"
            color="inherit"
            component={RouterLink}
            to="/material-ui/getting-started/installation/"
          >
            <Typography
              align="center"
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold" }}
            >
              Home
            </Typography>
          </Link>
          <Link
            underline="hover"
            color="inherit"
            component={RouterLink}
            to="/about"
          >
            <Typography
              align="center"
              sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold" }}
            >
              About Us
            </Typography>
          </Link>
        </Breadcrumbs>
      </Box>

      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <Grid container spacing={1}>
            <Grid
              container
              direction="column"
              style={{ marginLeft: "20%", marginTop: "15%" }}
            >
              <Grid item>
                <Typography
                  className="peddana-regular"
                  variant="h10"
                  style={{
                    color: "#189AB4",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  ABOUT DOCPRO
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    fontWeight: "600",
                    marginTop: "15px",
                    fontFamily: "Poppins, sans-serif",
                    color: "#05445e",
                  }}
                >
                  Bring care to your <br />
                  home with one click
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  className="peddana-regular"
                  variant="body1"
                  style={{
                    fontSize: "13px",
                    marginTop: "10px",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed
                  eiusmod <br />
                  ex tempor incididunt labore dolore magna aliquaenim <br />
                  ad minim veniam quis nostrud exercitation ullamco laboris.
                </Typography>
              </Grid>
              <Typography
                variant="h9"
                style={{
                  color: "#05445e",
                  fontWeight: "bold",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                <ul className="list-style-one clearfix">
                  <li>Associates Insurance</li>
                  <li>Pina & Insurance</li>
                </ul>
              </Typography>

              <Grid item className="btn-box">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#189AB4",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  About Us
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/013/087/969/original/online-doctor-consultation-flat-design-logo-aplication-doctor-cartoon-for-mobile-app-free-vector.jpg"
            alt="Home Care"
            style={{ width: "70%" }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          backgroundImage: `url('https://image.slidesdocs.com/responsive-images/background/gradient-business-hospital-technology-medical-blue-powerpoint-background_719ad7feae__960_540.jpg')`,
          backgroundSize: "cover",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          marginTop: "8%",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#05445E",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          PROCESS
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#189ab4",
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
            marginBottom: 4,
          }}
        >
          Appointment Process
        </Typography>
        <Grid
          container
          spacing={15}
          justifyContent="center"
          alignItems="center"
          sx={{ fontFamily: "Poppins, sans-serif" }}
        >
          <Grid item md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                borderRadius: "10px",
                width: "70px",
                backgroundColor: "#fff",
                marginLeft: "20px",
              }}
            >
              <img
                src="https://azim.commonsupport.com/Docpro/assets/images/icons/icon-9.png"
                alt=""
                style={{ maxWidth: "70px", maxHeight: "70px" }}
              />
            </Box>
            <span
              style={{ color: "#05445E", fontWeight: "bold", fontSize: 12 }}
            >
              Search Best Online Professional
            </span>
          </Grid>

          <Grid item md={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderRadius: "10px",
                width: "70px",
                backgroundColor: "#fff",
                marginLeft: "20px",
              }}
            >
              <img
                src="https://azim.commonsupport.com/Docpro/assets/images/icons/icon-10.png"
                alt=""
                style={{ maxWidth: "70px", maxHeight: "70px" }}
              />
            </Box>
            <span
              style={{
                color: "#05445E",
                fontWeight: "bold",
                fontSize: 12,
                marginLeft: "3%",
              }}
            >
              View Professional Profile
            </span>
          </Grid>
          <Grid item md={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderRadius: "10px",
                width: "70px",
                backgroundColor: "#fff",
                marginLeft: "20px",
              }}
            >
              <img
                src="https://azim.commonsupport.com/Docpro/assets/images/icons/icon-11.png"
                alt=""
                style={{ maxWidth: "70px", maxHeight: "70px" }}
              />
            </Box>
            <span
              style={{ color: "#05445E", fontWeight: "bold", fontSize: 12 }}
            >
              Get Instant Doctor Appointment
            </span>
          </Grid>
        </Grid>
      </Box>

      <Grid
        container
        spacing={2}
        alignItems="center"
        style={{ marginTop: "8%" }}
      >
        <Grid item xs={12} align="center">
          <Typography
            variant="h4"
            align="center"
            style={{
              color: "#05445E",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "700",
              fontSize: "30px",
            }}
          >
            Having World Class Delivery Capabilities & Trusted by
          </Typography>
        </Grid>
        <Grid container style={{ marginTop: "5%" }}>
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            style={{ borderRight: "2px solid #a3ebe9" }}
          >
            <Typography
              variant="h6"
              align="center"
              style={{ fontWeight: "bold", fontSize: 50, color: "#189AB4" }}
            >
              100+
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ fontFamily: "Poppins, sans-serif" }}
            >
              Doctor
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            style={{ borderRight: "2px solid #a3ebe9" }}
          >
            <Typography
              variant="h6"
              align="center"
              style={{ fontWeight: "bold", fontSize: 50, color: "#189AB4" }}
            >
              1500+
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ fontFamily: "Poppins, sans-serif" }}
            >
              Patients
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
            lg={3}
            xl={3}
            style={{ borderRight: "2px solid #a3ebe9" }}
          >
            <Typography
              variant="h6"
              align="center"
              style={{ fontWeight: "bold", fontSize: 50, color: "#189AB4" }}
            >
              1000+
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ fontFamily: "Poppins, sans-serif" }}
            >
              Labs
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
            <Typography
              variant="h6"
              align="center"
              style={{ fontWeight: "bold", fontSize: 50, color: "#189AB4" }}
            >
              5000+
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ fontFamily: "Poppins, sans-serif" }}
            >
              Hospitals
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ marginBottom: "10px" }}>
        <Grid style={{ textAlign: "center", marginTop: "8%" }}>
          <Typography
            variant="h8"
            sx={{
              color: "#189AB4",
              fontWeight: "700",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            MEET OUR PROFESSIONALS
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#05445E",
              fontWeight: "700",
              fontFamily: "Poppins, sans-serif",
              marginTop: "1%",
            }}
          >
            Top Rated Specialists
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ paddingRight: "10%", paddingLeft: "10%", marginTop: "3%" }}
        >
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                marginTop="5px"
                image="https://media.gettyimages.com/id/92347235/photo/portrait-of-a-doctor.jpg?s=612x612&w=0&k=20&c=HR7ogadGt-UfCg6yn-4mdl5hm9w872RGrbS0s6Yfcpk="
                alt="Card 1 Image"
                sx={{
                  height: 150,
                  transition: "transform 0.9s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
              <CardContent>
                <Typography
                  variant="h7"
                  component="div"
                  style={{
                    color: "#05445E",
                    display: "inline-block",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Dr. Mary Astor
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontFamily: "Poppins, sans-serif", fontSize: 13 }}
                >
                  Ph.D, DPT, MS OMPT
                </Typography>

                <Grid style={{ display: "flex", alignItems: "center" }}>
                  <Rating
                    name="rating"
                    value={5}
                    readOnly
                    sx={{
                      fontSize: 13,
                      marginRight: "8px",
                    }}
                  />
                  <span
                    style={{ fontSize: 13, fontFamily: "Poppins, sans-serif" }}
                  >
                    2 reviews
                  </span>
                </Grid>

                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "2%",
                  }}
                >
                  <LocationOnIcon
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Apollo Care,VudaColony, Vizag:530041.
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image="https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.jpg?s=612x612&w=0&k=20&c=nr4XaWnRPQnWqwhzahajZhskIDG1yK9DmIteV5gpUOI="
                alt="Card 1 Image"
                sx={{
                  height: 150,
                  transition: "transform 0.9s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
              <CardContent>
                <Typography
                  variant="h7"
                  component="div"
                  style={{
                    color: "#05445E",
                    fontWeight: "bold",
                    display: "inline-block",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Dr. Anitha
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontSize: 13, fontFamily: "Poppins, sans-serif" }}
                >
                  Ph.D, DPT, MS OMPT
                </Typography>

                <Grid style={{ display: "flex", alignItems: "center" }}>
                  <Rating
                    name="rating"
                    value={5}
                    readOnly
                    sx={{
                      fontSize: 13,
                      marginRight: "8px",
                    }}
                  />
                  <span
                    style={{ fontSize: 13, fontFamily: "Poppins, sans-serif" }}
                  >
                    4 reviews
                  </span>
                </Grid>

                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "2%",
                  }}
                >
                  <LocationOnIcon
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Medicover Hospital in Venkojipalem.
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Card 1 Image"
                sx={{
                  height: 150,
                  transition: "transform 0.9s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
              <CardContent>
                <Typography
                  variant="h7"
                  component="div"
                  style={{
                    color: "#05445E",
                    fontWeight: "bold",
                    display: "inline-block",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Dr. Abdul D Khan
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontSize: 13, fontFamily: "Poppins, sans-serif" }}
                >
                  Ph.D, DPT, MS OMPT
                </Typography>

                <Grid style={{ display: "flex", alignItems: "center" }}>
                  <Rating
                    name="rating"
                    value={5}
                    readOnly
                    sx={{
                      fontSize: 13,
                      marginRight: "8px",
                    }}
                  />
                  <span
                    style={{ fontSize: 13, fontFamily: "Poppins, sans-serif" }}
                  >
                    2 reviews
                  </span>
                </Grid>

                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "2%",
                  }}
                >
                  <LocationOnIcon
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    SevenHills Hospital Vizag.{" "}
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image="https://plus.unsplash.com/premium_photo-1661270443521-390dd7111b8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"
                alt="Card 1 Image"
                sx={{
                  height: 150,
                  transition: "transform 0.9s",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              />
              <CardContent>
                <Typography
                  variant="h7"
                  component="div"
                  style={{
                    color: "#05445E",
                    fontWeight: "bold",
                    display: "inline-block",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Dr. Sandhya
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{ fontSize: 13, fontFamily: "Poppins, sans-serif" }}
                >
                  Ph.D, DPT, MS OMPT
                </Typography>
                <Grid style={{ display: "flex", alignItems: "center" }}>
                  <Rating
                    name="rating"
                    value={5}
                    readOnly
                    sx={{
                      fontSize: 13,
                      marginRight: "8px",
                    }}
                  />
                  <span
                    style={{ fontSize: 13, fontFamily: "Poppins, sans-serif" }}
                  >
                    2 reviews
                  </span>
                </Grid>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "2%",
                  }}
                >
                  <LocationOnIcon
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Q1 Hospitals Vizag.
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* <Grid item xs={12}>
                        <Button
                            variant="contained"
                            sx={{ marginTop: '10px' }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#05445e'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#189ab4'} not hovered
                        >
                            More
                        </Button>
                    </Grid> */}
        </Grid>
      </Box>
    </>
  );
}

export default About;
