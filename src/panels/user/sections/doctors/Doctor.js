import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  Paper,
  Box,
  CardContent,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Doctor = () => {
  const cardData = [
    {
      name: "Gynaecology",
      imageUrl:
        "https://www.practo.com/consult/static/images/top-speciality-gynaecologist.svg",
      price: "₹499",
    },
    {
      name: "Sexology",
      imageUrl:
        "https://www.practo.com/consult/static/images/top-speciality-sexology.svg",
      price: "₹399",
    },
    {
      name: "Dermatology",
      imageUrl:
        "https://www.practo.com/consult/static/images/top-speciality-dermatologist.svg",
      price: "₹599",
    },
    {
      name: "Psychiatry",
      imageUrl:
        "https://www.practo.com/consult/static/images/top-speciality-psychiatric.svg",
      price: "₹499",
    },
    {
      name: "Pediatrics",
      imageUrl:
        "https://www.practo.com/consult/static/images/top-speciality-pediatric.svg",
      price: "₹599",
    },
    {
      name: "Urology",
      imageUrl:
        "https://www.practo.com/consult/static/images/top-speciality-kidney.svg",
      price: "₹450",
    },
    {
      name: "General physician",
      imageUrl:
        "https://www.practo.com/consult/static/images/top-speciality-gp.svg",
      price: "₹499",
    },
    {
      name: "Gastrointestinal ",
      imageUrl:
        "https://www.practo.com/consult/static/images/top-speciality-stomach.svg",
      price: "₹499",
    },
  ];
  const cardData1 = [
    {
      name: "Skin Problems?",
      imageUrl:
        "https://www.practostatic.com/fit/44b36c2e3b819e4aa3aafd7a1979ce0bd7bf7a64",
      price: "₹499",
      padding: "10px", // Adjust the padding value as needed
    },
    {
      name: "Want to lose Weight?",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqM3ceJi9olsMGqb6eP2ZPOcr4wtC-uIdNsZ9P65M7wH7k1BJoPxf_vF2vIXUfR0XXOcg&usqp=CAU",
      price: "₹350",
    },
    {
      name: "Stomach issuse?",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdnitQYPKxnQLhCqIjkDWopAU1uysseHee0d9mU41ouEjJxOX0ATrff9cZ9OGhFO2gYCQ&usqp=CAU",
      price: "₹599",
    },
    {
      name: "Sick Kid?",
      imageUrl: "https://afyabora.co.ke/images/cd8.jpg",
      price: "₹499",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  const toggleView = () => {
    setExpanded(!expanded);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const doctors = [
    {
      name: "Dr. Hitesh",
      specialization: "Cosmetologist",
      experience: 8,
      consults: 36849,
      avatarSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlS1PUCGsg5oaj74FtqkE94-nGhrGaTjd5NQ&usqp=CAU",
    },
    {
      name: "Dr. Arisetty ",
      specialization: "Obstetrician",
      experience: "16",
      consults: "28563",
      avatarSrc:
        "https://lh3.googleusercontent.com/p/AF1QipMO3m3GL7Itv22k4c9oxi5kGeV2lxlWJCL5qe-G=s1360-w1360-h1020",
    },
    {
      name: "Dr. Murali Reddy",
      specialization: "Dermatologist",
      experience: "7",
      consults: "34685",
      avatarSrc:
        "https://assets.lybrate.com/f_auto,c_limit,w_1920,q_auto/img/documents/doctor/dp/3b0e46c5cdb6a222670acbb793b12b95/General-Physician-KnssvChalapathiRao-Visakhapatnam-04477e.jpg",
    },
    {
      name: "Dr. Sridevi Gutta",
      specialization: "Gynecologist",
      experience: "3",
      consults: "2714",
      avatarSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2Ym28ReXSUqYNFUfLBrS2qkesDoyQS4eIw&s",
    },
  ];

  return (
    <>
      <header
        style={{
          marginTop: "20px",
          textAlign: "center",
          height: "300px",
          display: window.innerWidth >= 600 ? "block" : "none", // Show the header if window width is at least 600px
        }}
      >
        <img
          src="https://t4.ftcdn.net/jpg/07/30/12/01/240_F_730120181_uc1FmeDqwbZ9gNjXYC9pp6n1yFyOYggY.jpg"
          alt="Doctors wearing face masks"
          style={{ width: "100%", height: "100%", borderRadius: "8px" }}
        />
      </header>
      <Container>
        <Grid>
          <Typography
            variant="h4"
            style={{
              marginTop: "50px",
              fontFamily: "poppins, sans-serif",
              fontSize: "28px",
              fontWeight: "600",
            }}
          >
            10+ Specialities
          </Typography>
          <Typography
            sx={{ fontFamily: "poppins, sans-serif", fontSize: "16px" }}
          >
            Consult with top doctors across specialties
          </Typography>
        </Grid>
        <Grid sx={{ marginTop: "20px" }}>
          <Slider {...settings}>
            {cardData.map((item, index) => (
              <div key={index}>
                <Card
                  style={{
                    padding: "5px",
                    marginRight: "20px",
                    height: "100%",
                    width: "90%",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.imageUrl}
                    alt={item.name}
                    style={{
                      height: "110px",
                      width: "110px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="body1"
                      style={{
                        fontFamily: "poppins, sans-serif",
                        fontWeight: "400",
                        fontSize: "15px",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        fontFamily: "poppins, sans-serif",
                        padding: 1,
                        display: "inline-block",
                      }}
                    >
                      {item.price}
                      <Button
                        sx={{
                          backgroundColor: "#fff",
                          color: "#189ab4",
                          boxShadow: "none",
                          border: "none",
                          fontFamily: "poppins, sans-serif",
                          fontWeight: "500",
                          display: "inline-block",
                          marginLeft: "8px",
                        }}
                      >
                        <Link to="/doctorsList">Consult now</Link>
                      </Button>
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </Grid>
        <Typography
          variant="h4"
          style={{
            marginTop: "60px",
            fontFamily: "poppins, sans-sarif",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          Common Health Concerns
        </Typography>
        <Typography
          variant="h4"
          style={{
            marginTop: "10px",
            fontFamily: "poppins, sans-sarif",
            fontSize: "16px",
          }}
        >
          Consult a doctor online for any health issue
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          spacing={0}
        >
          {cardData1.map((item1, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <div style={{ marginTop: "30px", cursor: "pointer", padding: 5 }}>
                <Card sx={{ width: 230 }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={item1.imageUrl}
                    alt={item1.name}
                    style={{ transition: "transform 0.5s" }}
                    sx={{
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      marginTop: 1,
                      textAlign: "left",
                      fontFamily: "poppins, sans-serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      padding: 1,
                    }}
                  >
                    {item1.name}
                  </Typography>
                  <Grid container sx={{ alignItems: "center" }}>
                    <Grid item xs={3}>
                      {" "}
                      {/* Typography */}
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        sx={{
                          fontFamily: "poppins, sans-serif",
                          fontSize: "15px",
                          padding: 1,
                        }}
                      >
                        {item1.price}
                      </Typography>
                    </Grid>
                    <Grid item xs={9} sx={{ textAlign: "right" }}>
                      {" "}
                      {/* Button */}
                      <Button
                        sx={{
                          backgroundColor: "#fff",
                          color: "#189ab4",
                          boxShadow: "none",
                          border: "none",
                          fontFamily: "poppins, sans-serif",
                          fontWeight: "500",
                        }}
                      >
                        Consult now
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "poppins, sans-serif",
            marginTop: "10%",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          Our Doctors
        </Typography>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
          }}
        >
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              sx={{
                marginRight: "10px",
                flexShrink: 10,
                width: "calc(50% - 10px)",
              }}
            >
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Doctor Avatar"
                  src={doctor.avatarSrc}
                  sx={{ height: 54, width: 54 }}
                />
                <Grid style={{ marginLeft: "15px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    {doctor.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
                  >
                    {doctor.specialization}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
                  >
                    Experience: {doctor.experience} years
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
                  >
                    Consults done: {doctor.consults}
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </div>
        <Typography
          variant="h2"
          align="left"
          gutterBottom
          style={{
            fontFamily: "poppins, sans-serif",
            fontSize: "28px",
            fontWeight: "600",
            marginTop: "60px",
          }}
        >
          How it works
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: "40px" }}>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ textAlign: "center" }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                alt="Doctor Avatar"
                src="https://img.freepik.com/free-photo/portrait-3d-female-doctor_23-2151107240.jpg?size=626&ext=jpg&ga=GA1.1.1803986231.1710758444&semt=ais"
                sx={{ width: "15%", height: "15%" }}
              />
            </div>
            <Typography
              variant="body1"
              style={{
                fontFamily: "poppins, sans-serif",
                fontSize: "13px",
                fontWeight: "600",
                marginTop: "20px",
              }}
            >
              Select a speciality or symptom
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ textAlign: "center" }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                alt="Doctor Avatar"
                src="https://img.freepik.com/premium-photo/3d-render-human-doctor-cartoon-character-with-stethoscope-looking-camera_947206-1566.jpg?size=626&ext=jpg&ga=GA1.1.1803986231.1710758444&semt=ais"
                sx={{ width: "15%", height: "15%" }}
              />
            </div>
            <Typography
              variant="body1"
              style={{
                fontFamily: "poppins, sans-serif",
                fontSize: "13px",
                fontWeight: "600",
                marginTop: "20px",
              }}
            >
              Audio/ video call with a verified doctor
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ textAlign: "center" }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                alt="Doctor Avatar"
                src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-doctor-white-coat-cap_1142-42988.jpg?size=626&ext=jpg&ga=GA1.1.1803986231.1710758444&semt=ais"
                sx={{ width: "15%", height: "15%" }}
              />
            </div>
            <Typography
              variant="body1"
              style={{
                fontFamily: "poppins, sans-serif",
                fontSize: "13px",
                fontWeight: "600",
                marginTop: "20px",
              }}
            >
              Get a digital prescription & a free follow-up
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          style={{
            marginTop: "10%",
            fontFamily: "poppins, sans-serif",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          Benefits of Online Consultation
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{ marginTop: "30px", border: "1px solid lightgrey" }}
        >
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Typography
              variant="h3"
              style={{
                fontFamily: "poppins, sans-serif",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Consult Top Doctors 24x7
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                fontFamily: "poppins, sans-serif",
                fontSize: "15px",
                marginTop: "20px",
              }}
            >
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Typography
              variant="h3"
              style={{
                fontFamily: "poppins, sans-serif",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Convenient and Easy
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                fontFamily: "poppins, sans-serif",
                fontSize: "15px",
                marginTop: "20px",
              }}
            >
              Start an instant consultation within 2 minutes or do video
              consultation at the scheduled time.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Typography
              variant="h3"
              style={{
                fontFamily: "poppins, sans-serif",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              100% Safe Consultations
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                fontFamily: "poppins, sans-serif",
                fontSize: "15px",
                marginTop: "20px",
              }}
            >
              Be assured that your online consultation will be fully private and
              secured.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} sx={{ padding: 2 }}>
            <Typography
              variant="h3"
              style={{
                marginTop: "30px",
                fontFamily: "poppins, sans-serif",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Similar Clinic Experience
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                fontFamily: "poppins, sans-serif",
                fontSize: "15px",
                marginTop: "20px",
              }}
            >
              Experience clinic-like consultation through a video call with the
              doctor. Video consultation is available only on the HapiDoc app.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Typography
              variant="h3"
              style={{
                marginTop: "30px",
                fontFamily: "poppins, sans-serif",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Free Follow-up
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{
                fontFamily: "poppins, sans-serif",
                fontSize: "15px",
                marginTop: "20px",
              }}
            >
              Get a valid digital prescription and a 7-day, free follow-up for
              further clarifications.
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          style={{
            fontFamily: "poppins, sans-serif",
            fontSize: "28px",
            fontWeight: "600",
            marginTop: "8%",
          }}
        >
          What our users say about their online consultation experience
        </Typography>
        <Grid container spacing={2} style={{ marginTop: "50px" }}>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    src="/consult/static/images/testimonial-abhy-v1.png"
                    alt="Preeti"
                    sx={{
                      width: 50,
                      height: 50,
                      bgcolor: "#05445e",
                      fontFamily: "poppins, sans-serif",
                      fontWeight: "600",
                    }}
                  />
                  <Box sx={{ ml: 2 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#05445e",
                        fontFamily: "poppins, sans-serif",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Preeti
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        fontFamily: "poppins, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      27 yr old IT Professional
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  style={{
                    fontFamily: "poppins, sans-serif",
                    fontSize: "14px",
                  }}
                >
                  I was really sick and couldn't get out of bed. I talked to the
                  doctor through HapiDoc and he shared a prescription in 10
                  minutes. I even got the medicines delivered on the same day
                  through HapiDoc, just a WOW experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    src="/consult/static/images/testimonial-abhy-v1.png"
                    alt="Deepak"
                    sx={{
                      width: 50,
                      height: 50,
                      bgcolor: "#05445e",
                      fontFamily: "poppins, sans-serif",
                      fontWeight: "600",
                    }}
                  />
                  <Box sx={{ ml: 2 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#05445e",
                        fontFamily: "poppins, sans-serif",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Deepak
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        fontFamily: "poppins, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      33 yr old IT Professional
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  style={{
                    fontFamily: "poppins, sans-serif",
                    fontSize: "14px",
                  }}
                >
                  I was travelling to a remote place for scuba diving and
                  injured myself. Tough to find doctors around, so did an online
                  consultation on HapiDoc and hey presto, I have my medicines.
                  Disruptive. Convenient.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <Card>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Avatar
                    src="/consult/static/images/testimonial-abhy-v1.png"
                    alt="Abhy"
                    sx={{
                      width: 50,
                      height: 50,
                      bgcolor: "#05445e",
                      fontFamily: "poppins, sans-serif",
                      fontWeight: "600",
                    }}
                  />
                  <Box sx={{ ml: 2 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#05445e",
                        fontFamily: "poppins, sans-serif",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Abhy
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        fontFamily: "poppins, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      22 yr old IT Professional
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body1"
                  style={{
                    fontFamily: "poppins, sans-serif",
                    fontSize: "14px",
                  }}
                >
                  I was travelling to a remote place for scuba diving and
                  injured myself. Tough to find doctors around, so did an online
                  consultation on HapiDoc and hey presto, I have my medicines.
                  Disruptive. Convenient.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          style={{
            fontFamily: "poppins, sans-serif",
            fontSize: "28px",
            fontWeight: "600",
            marginTop: "8%",
          }}
        >
          FAQ
        </Typography>
        <Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            sx={{ marginTop: "10px" }}
          >
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "poppins, sans-serif",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  How does online doctor consultation work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "15px" }}
                >
                  Online doctor consultation works by connecting patients with
                  doctors virtually through telecommunication technologies such
                  as video calls, phone calls, or messaging. Patients can seek
                  medical advice, get prescriptions, and even receive diagnoses
                  remotely.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  How do I start online consultation with doctors on HapiDoc?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "15px" }}
                >
                  Starting an online doctor consultation is very simple on
                  HapiDoc. Follow these 4 simple steps:
                  <ul>
                    <li>Choose your health concern.</li>
                    <li>Connect with a doctor within 2 minutes.</li>
                    <li>
                      Ask your queries to the doctor via audio or video call.
                    </li>
                    <li>
                      Get a valid online doctor prescription and a 3-day free
                      online doctor consultation.
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  Are your online doctors qualified?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "15px" }}
                >
                  We follow a strict verification process for every doctor
                  providing online medical services on HapiDoc. Our team
                  manually verifies necessary documents, registrations, and
                  certifications for every doctor.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  Is online doctor consultation safe and secured on HapiDoc?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "15px" }}
                >
                  The privacy of our patients is critical to us, and thus, we
                  are compliant with industry standards like ISO 27001. Rest
                  assured that your online consultation with a doctor is
                  completely safe and secured with 256-bit encryption.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  What happens if I don’t get a response from a doctor?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "15px" }}
                >
                  In the unlikely event that an online doctor does not respond,
                  you will be entitled to a 100% refund.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "18px",
                  }}
                >
                  Can I do a free online doctor consultation on HapiDoc?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "15px" }}
                >
                  Avail a free online consultation with top doctors in India
                  during the India Health Hour.
                </Typography>
                <Typography
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "15px" }}
                >
                  Click here for more details. We have the free questions
                  service available on our health app only. Ask a question and
                  get free online medical advice within 24 to 48 hours.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
        {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            marginTop: "8%",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "poppins, sans-serif",
              fontSize: "28px",
              fontWeight: "600",
            }}
          >
            {" "}
            Health Queries
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ marginTop: "5px" }}
          >
            <Grid item xs={12} sm={6} md={12} lg={4} xl={2}>
              <Paper sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#05445e",
                    fontFamily: "poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  What to do?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "15px" }}
                >
                  Actually I am committed with a girl since last 1 year. It's a
                  long story...we were good since the first...
                  <Link to="/your-page" style={{ color: "black" }}>
                    Read more
                  </Link>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={4} xl={2}>
              <Paper sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#05445e",
                    fontFamily: "poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {" "}
                  5 months completed still not pregnant
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "15px" }}
                >
                  We have completed five months of marriage life, but the last
                  two months we have ...
                  <Link to="/your-page" style={{ color: "black" }}>
                    Read more
                  </Link>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={4} xl={2}>
              <Paper sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#05445e",
                    fontFamily: "poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Smile lines nasolabial folds treatment
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "15px" }}
                >
                  How to treat permanently my smile lines nasolabial folds..
                  including loose skin ...
                  <Link to="/your-page" style={{ color: "black" }}>
                    Read more
                  </Link>
                </Typography>
              </Paper>
            </Grid>
            {expanded && (
              <>
                <Grid item xs={12} sm={6} md={12} lg={4} xl={2}>
                  <Paper sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#05445e",
                        fontFamily: "poppins, sans-serif",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                    >
                      Nightfall problem
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "poppins, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      Sir I have problem of nightfall please suggest some
                      medicines which reduces the ...
                      <Link to="/your-page" style={{ color: "black" }}>
                        Read more
                      </Link>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={4} xl={2}>
                  <Paper sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#05445e",
                        fontFamily: "poppins, sans-serif",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      For Weight loss
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "poppins, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      My sister's age is 34 years, her weight has increased to
                      90 kg after pregnancy, ...
                      <Link to="/your-page" style={{ color: "black" }}>
                        Read more
                      </Link>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={4} xl={2}>
                  <Paper sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#05445e",
                        fontFamily: "poppins, sans-serif",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                    >
                      Black Gums
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "poppins, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      Gums of my daughter are getting black. They are little
                      bluish in tone. What can ...
                      <Link to="/your-page" style={{ color: "black" }}>
                        Read more
                      </Link>
                    </Typography>
                  </Paper>
                </Grid>
              </>
            )}
          </Grid>
          <Box sx={{ alignSelf: "flex-end", mt: 2 }}>
            <Button
              variant="text"
              onClick={toggleView}
              style={{
                color: "#05445e",
                fontFamily: "poppins, sans-serif",
                fontWeight: "600",
              }}
            >
              {expanded ? "View less" : "View more"}
            </Button>
          </Box>
        </Box> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            marginTop: "8%",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "poppins, sans-serif",
              fontSize: "28px",
              fontWeight: "600",
            }}
          >
            Health Queries
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ marginTop: "5px" }}
          >
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <Paper sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#05445e",
                    fontFamily: "poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  What to do?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "15px" }}
                >
                  Actually I am committed with a girl since last 1 year. It's a
                  long story...we were good since the first...
                  <Link href="/your-page" style={{ color: "black" }}>
                    Read more
                  </Link>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <Paper sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#05445e",
                    fontFamily: "poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  5 months completed still not pregnant
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "15px" }}
                >
                  We have completed five months of marriage life, but the last
                  two months we have...
                  <Link href="/your-page" style={{ color: "black" }}>
                    Read more
                  </Link>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
              <Paper sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#05445e",
                    fontFamily: "poppins, sans-serif",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  Smile lines nasolabial folds treatment
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "15px" }}
                >
                  How to treat permanently my smile lines nasolabial folds..
                  including loose skin...
                  <Link href="/your-page" style={{ color: "black" }}>
                    Read more
                  </Link>
                </Typography>
              </Paper>
            </Grid>
            {expanded && (
              <>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                  <Paper sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#05445E",
                        fontFamily: "poppins, sans-serif",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                    >
                      Nightfall problem
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "poppins, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      Sir I have problem of nightfall please suggest some
                      medicines which reduces the ...
                      <Link to="/your-page" style={{ color: "black" }}>
                        Read more
                      </Link>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                  <Paper sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#05445E",
                        fontFamily: "poppins, sans-serif",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      For Weight loss
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "poppins, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      My sister's age is 34 years, her weight has increased to
                      90 kg after pregnancy, ...
                      <Link to="/your-page" style={{ color: "black" }}>
                        Read more
                      </Link>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                  <Paper sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#05445E",
                        fontFamily: "poppins, sans-serif",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                    >
                      Black Gums
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "poppins, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      Gums of my daughter are getting black. They are little
                      bluish in tone. What can ...
                      <Link to="/your-page" style={{ color: "black" }}>
                        Read more
                      </Link>
                    </Typography>
                  </Paper>
                </Grid>
              </>
            )}
          </Grid>
          <Box sx={{ alignSelf: "flex-end", mt: 2 }}>
            <Button
              variant="text"
              onClick={toggleView}
              style={{
                color: "#05445e",
                fontFamily: "poppins, sans-serif",
                fontWeight: "600",
              }}
            >
              {expanded ? "View less" : "View more"}
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default Doctor;