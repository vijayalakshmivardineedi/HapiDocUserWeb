import React, { useState } from "react";
import {
  Grid,
  Card,
  Typography,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  DialogActions,
  Button,
  Box,
  Avatar,
  CardContent,
  IconButton,
} from "@mui/material";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DoneIcon from "@mui/icons-material/Done";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import BungalowIcon from "@mui/icons-material/Bungalow";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Rating from "@mui/material/Rating";
import CloseIcon from "@mui/icons-material/Close";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Navigate, useNavigate } from "react-router-dom";

function DoctorProfile() {
  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const reviewerInitial = name => {
    return name.charAt(0).toUpperCase();
  }

  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const value = 5;

  const today = new Date();
  const days = [];


  for (let i = 0; i < 14; i++) {
    const tempDate = new Date();
    tempDate.setDate(today.getDate() + i);
    days.push(tempDate);
  }

  const getFormattedDate = (day, index) => {
    if (index === 0) {
      return 'Today';
    } else if (index === 1) {
      return 'Tomorrow';
    } else {
      const options = { weekday: 'short', month: 'short', day: '2-digit' };
      return day.toLocaleDateString('en-US', options);
    }
  };

  const handleClickDay = (day) => {
    setSelectedDay(day);
    setSelectedSlot(null);
  };

  const handleClickSlot = (slot) => {
    setSelectedSlot(slot);
  };


  const areDatesEqual = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };


  const slots = [];
  if (selectedDay) {
    const currentTime = new Date();
    for (let i = 12; i <= 19; i++) {
      for (let j = 0; j < 2; j++) {

        const slotTime = new Date(selectedDay);
        slotTime.setHours(i, j * 30, 0, 0);
        if (selectedDay > today || (selectedDay.getDate() === today.getDate() && slotTime > currentTime)) {
          slots.push(slotTime);
        }
      }
    }
  }
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Checkout")
  };
  return (
    <Grid container spacing={2}
      sx={{ marginTop: "30px", paddingLeft: "5%", paddingRight: "5%", backgroundColor: "#f0fff9" }}
    >
      <Grid item xs={8}>
        <Grid item xs={12} sx={{ marginTop: "30px", backgroundColor: "#fff", padding: "10px", display: "flex" }}>

          <CardMedia
            component="img"
            height="140"
            image="https://skedoccoresa.blob.core.windows.net/skedoc-images/doctorimages/Hyderabad_e1a9d720-e246-47b0-817b-f3eb8cae6758.jpeg"
            sx={{
              width: 140,
              flexShrink: 0,
              objectFit: "cover",
            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, flexWrap: 'wrap', padding: '10px', marginLeft: "10px", }}>
            <Typography gutterBottom variant="h5" sx={{ fontFamily: 'poppins, sans-serif', fontSize: '20px', fontWeight: 600 }}>
              Dr. Athaluri Mounika
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'poppins, sans-serif', fontSize: '13px' }}>
              BDS, MDS Endodontist, Dentist
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'poppins, sans-serif', fontSize: '13px' }}>
              Dentist, Prosthodontist, Implantologist, Dental Surgeon
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'poppins, sans-serif', fontSize: '13px' }}>
              20 Years Experience Overall (15 years as specialist)
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'poppins, sans-serif', fontSize: '13px' }}>
              <DoneIcon sx={{ marginRight: '4px', fontSize: 'small', backgroundColor: 'green', borderRadius: '5px' }} /> Medical Registration Verified
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'poppins, sans-serif', fontSize: '13px' }}>
              <span><ThumbUpAltIcon sx={{ backgroundColor: 'green', marginRight: '4px', fontSize: 'small', borderRadius: '5px' }} />
                100%
              </span>
              <span>
                (29 patients)
              </span>
            </Typography>
            <Box sx={{ fontFamily: 'poppins, sans-serif', fontSize: '13px' }}>
              <Typography variant="body1" sx={{ fontFamily: 'poppins, sans-serif', fontSize: '13px', marginTop: "5px" }}>
                Dr. Athaluri Mounika Singh with an expertise of more than 20 years in Prosthodontist and Trichology. One of the leading doctors in Hyderabad.
                {!expanded && (
                  <span style={{ cursor: 'pointer', color: "#05445e", fontFamily: 'poppins, sans-serif', fontSize: '13px', fontWeight: "600" }} onClick={toggleExpand}> Read More</span>
                )}
              </Typography>
              {expanded && (
                <React.Fragment>
                  <Typography variant="body1" sx={{ fontFamily: 'poppins, sans-serif', fontSize: '13px' }}> Dr. Athaluri Mounika Singh has completed her MBBS - Kakatiya Medical College, Warangal, in 2004 and MD - Dermatology, Venereology & Leprosy - Gandhi Medical College, Hyderabad in 2009.</Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'poppins, sans-serif', fontSize: '13px' }}> Dr. Athaluri Mounika has the continuous memberships with Indian Association of Dentist, Venereologists and Leprologists (IADVL), European Academy of Dermatology and Venereology(EADV).</Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'poppins, sans-serif', fontSize: '13px' }}> Dr. Athaluri Mounika Singh is now associated with Oliva Skin & Hair Clinics.</Typography>
                </React.Fragment>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: "30px", backgroundColor: "#fff", padding: "10px" }}>
          <CardContent>
            <Typography variant="h4" style={{ fontFamily: "poppins, sans-sarif", fontSize: "18px", fontWeight: "600" }}>
              Info
            </Typography>
            <Grid style={{ display: "flex", marginTop: "20px" }}>
              <Grid item xs={12} sm={4} sx={{ marginLeft: "30px" }}>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
                >
                  Oliva Skin & Hair Clinic
                </Typography>
                <Grid style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "poppins, sans-serif",
                      fontSize: "13px",
                      marginRight: "5px",
                    }}
                  >
                    5
                  </Typography>
                  <Rating name="read-only" value={value} readOnly size="small" />
                </Grid>
                <Typography
                  variant="subtitle1"
                  sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
                >
                  House Number 1-2-166 to 193, Lower Ground Floor, Mugdha Building,
                  Adjacent to Minerva Grand, SD Road, Landmark: Near Bhuvana Towers,
                  Hyderabad
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "poppins, sans-serif",
                    fontSize: "13px",
                    marginLeft: "40px",
                  }}
                >
                  Mon-Sun
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "poppins, sans-serif",
                    fontSize: "13px",
                    marginLeft: "40px",
                  }}
                >
                  10:00 AM - 05:00 PM
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: "poppins, sans-serif",
                    fontSize: "13px",
                    marginLeft: "40px",
                  }}
                >
                  ₹700
                </Typography>
                <Grid
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                    marginLeft: "40px",
                    cursor: "pointer",
                  }}
                  onClick={handleClickOpen}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#05445e",
                      fontFamily: "poppins, sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    Prime
                  </Typography>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3472/3472620.png"
                    alt="Prime Icon"
                    style={{ marginLeft: "10px", width: "20px", height: "20px" }}
                  />
                </Grid>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  sx={{ "& .MuiDialog-paper": { maxWidth: "400px" } }}
                >
                  <DialogTitle
                    sx={{
                      fontFamily: "poppins, sans-serif",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Prime Benefits
                    <IconButton
                      aria-label="close"
                      onClick={handleClose}
                      sx={{ position: "absolute", right: 8, top: 8 }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </DialogTitle>
                  <Divider sx={{ border: "1px solid lightgrey" }} />
                  <DialogContent>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "poppins, sans-serif",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Appointment with Dr. Athaluri Mounika Singh at Oliva Skin &
                      Hair Clinic, Secunderabad promises you:
                    </Typography>
                    <Grid
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "15px",
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3472/3472620.png"
                        alt="Prime Icon"
                        style={{
                          marginRight: "10px",
                          width: "15px",
                          height: "15px",
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "poppins, sans-serif",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Verified location
                      </Typography>
                    </Grid>
                    <Grid
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3472/3472620.png"
                        alt="Prime Icon"
                        style={{
                          marginRight: "10px",
                          width: "15px",
                          height: "15px",
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "poppins, sans-serif",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Verified consultation fee
                      </Typography>
                    </Grid>
                    <Grid
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3472/3472620.png"
                        alt="Prime Icon"
                        style={{
                          marginRight: "10px",
                          width: "15px",
                          height: "15px",
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "poppins, sans-serif",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Consultation with Dr. Athaluri Mounika Singh
                      </Typography>
                    </Grid>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="contained"
                      onClick={handleClose}
                      sx={{
                        backgroundColor: "#189ab4",
                        color: "white",
                        fontFamily: "poppins, sans-serif",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      OK, Got It
                    </Button>
                  </DialogActions>
                </Dialog>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#05445e",
                    fontFamily: "poppins, sans-serif",
                    marginLeft: "40px",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  Verified details
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#05445e",
                    marginTop: "40px",
                    marginBottom: "10px",
                    fontFamily: "poppins, sans-serif",
                    fontSize: "8px",
                    color: "white",
                    flexDirection: "column",
                    '&:hover': {
                      backgroundColor: "#05445e",
                    },
                  }}
                >
                  <span style={{ fontSize: "10px" }}>Book FREE Clinic Visit</span>
                  <span>Instant Pay Available</span>
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>



        <Grid item xs={12} sx={{ marginTop: "30px", backgroundColor: "#fff", padding: "10px" }}>
          <Typography variant="h4" style={{ marginTop: '20px', fontFamily: "poppins, sans-sarif", fontSize: "18px", fontWeight: "600" }}>
            Patient Stories for Dr. Athaluri Mounika
          </Typography>
          <Divider sx={{ border: "1px solid lightgrey" }} />
          <Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ marginTop: '30px' }}>
              <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: '#71b9c7', width: 30, height: 30, fontFamily: "poppins, sans-sarif", fontSize: "13px", fontWeight: "600" }}>{reviewerInitial("Rahul")}</Avatar>
                <Typography style={{ fontFamily: "poppins, sans-sarif", fontSize: "15px", marginLeft: "10px" }}>
                  Rahul (Verified)
                </Typography>
              </Box>
              <Typography variant="body1" style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}>
                13 days ago
              </Typography>
            </Box>

            <Box sx={{ marginTop: '10px' }}>
              <Typography variant="body1" style={{ fontFamily: "poppins, sans-sarif", fontSize: "15px", fontWeight: "600" }}>
                Visited For Discolored Tooth Restoration
              </Typography>
              <Box style={{ marginTop: '10px', display: "flex", alignItems: "center", fontFamily: "poppins, sans-sarif", fontSize: "13px" }}>
                <ThumbUpOffAltIcon sx={{ fontSize: "15px", marginRight: "5px" }} />
                I recommend the doctor
              </Box>
              <Grid container spacing={1} alignItems="center" sx={{ marginTop: "4px" }}>
                <Grid item>
                  <Typography variant="body1" style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}>Happy with:</Typography>
                </Grid>
                <Grid item>
                  <Box sx={{ bgcolor: "#d8f2fc", border: "1px solid #97E7E1" }}>
                    <Typography sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}> Doctor friendliness</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ bgcolor: "#d8f2fc", border: "1px solid #97E7E1", }}>
                    <Typography sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}>Explanation of the health issue</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ bgcolor: "#d8f2fc", border: "1px solid #97E7E1" }}>
                    <Typography sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}>Treatment satisfaction</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Typography variant="body1" sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", marginTop: "10px" }}>
                Brilliant experience. Great explanation. Really caring. Lots of clarification. Comfortable cleaning without any pain.
              </Typography>
              <Divider sx={{ border: "1px solid lightgrey", marginTop: "10px" }} />
            </Box>
          </Box>


          <Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ marginTop: '30px' }}>
              <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: '#71b9c7', width: 30, height: 30, fontFamily: "poppins, sans-sarif", fontSize: "13px", fontWeight: "600" }}>{reviewerInitial("Arpit")}</Avatar>
                <Typography style={{ fontFamily: "poppins, sans-sarif", fontSize: "15px", marginLeft: "10px" }}>
                  Arpit Jindal (Verified)
                </Typography>
              </Box>
              <Typography variant="body1" style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}>
                10 days ago
              </Typography>
            </Box>
            <Box sx={{ marginTop: '10px' }}>
              <Typography variant="body1" style={{ fontFamily: "poppins, sans-sarif", fontSize: "15px", fontWeight: "600" }}>
                Visited For RCT - Root Canal Treatment
              </Typography>
              <Box style={{ marginTop: '10px', display: "flex", alignItems: "center", fontFamily: "poppins, sans-sarif", fontSize: "13px" }}>
                <ThumbUpOffAltIcon sx={{ fontSize: "15px", marginRight: "5px" }} />
                I recommend the doctor
              </Box>
              <Grid container spacing={1} alignItems="center" sx={{ marginTop: "4px" }}>
                <Grid item>
                  <Typography variant="body1" style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}>Happy with:</Typography>
                </Grid>
                <Grid item>
                  <Box sx={{ bgcolor: "#d8f2fc", border: "1px solid #97E7E1" }}>
                    <Typography sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}> Doctor friendliness</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ bgcolor: "#d8f2fc", border: "1px solid #97E7E1", }}>
                    <Typography sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}>Explanation of the health issue</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ bgcolor: "#d8f2fc", border: "1px solid #97E7E1" }}>
                    <Typography sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}>Wait time</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Typography variant="body1" sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", marginTop: "10px" }}>
                Doctor was patient and explained anything in detail. Also helped us in understanding the procedure and how the actual RCT looks like.
              </Typography>
              <Divider sx={{ border: "1px solid lightgrey" }} />
            </Box>
          </Box>


          <Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ marginTop: '30px' }}>
              <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: '#71b9c7', width: 30, height: 30, fontFamily: "poppins, sans-sarif", fontSize: "13px", fontWeight: "600" }}>{reviewerInitial("Suganya")}</Avatar>
                <Typography style={{ fontFamily: "poppins, sans-sarif", fontSize: "15px", marginLeft: "10px" }}>
                  Suganya R (Verified)
                </Typography>
              </Box>
              <Typography variant="body1" style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}>
                3 days ago
              </Typography>
            </Box>
            <Box sx={{ marginTop: '10px' }}>
              <Typography variant="body1" style={{ fontFamily: "poppins, sans-sarif", fontSize: "15px", fontWeight: "600" }}>
                Visited For Pregnancy Check UpPre and Post Delivery Care
              </Typography>
              <Box style={{ marginTop: '10px', display: "flex", alignItems: "center", fontFamily: "poppins, sans-sarif", fontSize: "13px" }}>
                <ThumbUpOffAltIcon sx={{ fontSize: "15px", marginRight: "5px" }} />
                I recommend the doctor
              </Box>

              <Grid container spacing={1} alignItems="center" sx={{ marginTop: "4px" }}>
                <Grid item>
                  <Typography variant="body1" style={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}>Happy with:</Typography>
                </Grid>
                <Grid item>
                  <Box sx={{ bgcolor: "#d8f2fc", border: "1px solid #97E7E1" }}>
                    <Typography sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}> Doctor friendliness</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ bgcolor: "#d8f2fc", border: "1px solid #97E7E1", }}>
                    <Typography sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}>Explanation of the health issue</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ bgcolor: "#d8f2fc", border: "1px solid #97E7E1" }}>
                    <Typography sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}>Wait time</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ bgcolor: "#d8f2fc", border: "1px solid #97E7E1" }}>
                    <Typography sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}>Value for money</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ bgcolor: "#d8f2fc", border: "1px solid #97E7E1" }}>
                    <Typography sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", }}>Treatment satisfaction</Typography>
                  </Box>
                </Grid>
              </Grid>
              <Typography variant="body1" sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px", marginTop: "10px" }}>
                We got our baby delivered through normal delivery which is what we have expected and very helpful with the informations provided and the comfortable way they have explained things with care.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>


      <Grid item xs={4}>
        <Typography
          sx={{ fontFamily: "poppins, sans-serif", fontSize: "18px" }}
        >
          {" "}
          Pick a time slot
        </Typography>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#d7f5fe",
            marginTop: "10px",
            height: "40px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              sx={{ backgroundColor: "#189ab4", width: "20px", height: "20px" }}
            >
              <BungalowIcon sx={{ width: "15px", height: "20px" }} />
            </Avatar>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "700",
                ml: 1,
                fontFamily: "poppins, sans-serif",
                fontSize: "13px",
              }}
            >
              Clinic Appointment
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "700",
              fontSize: "large",
              display: "flex",
              alignItems: "center",
            }}
          >
            ₹ 700 fee
          </Typography>
        </Card>


        <Card sx={{ marginTop: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "#f5f5f5",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={toggleInfo}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: "600",
                fontSize: "13px",
                fontFamily: "poppins, sans-serif",
              }}
            >
              Oliva Skin & Hair Clinic
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "13px",
                  fontFamily: "poppins, sans-serif",
                }}
              >
                Change Clinic
              </Typography>
              <Box ml={1}>
                <ArrowDropDownIcon />
              </Box>
            </Box>
          </Box>
          <Grid sx={{ display: "flex", alignItems: "center", mt: 1, marginLeft: "13px" }}>
            <Typography variant="body2" mr={1}>
              <span
                sx={{
                  fontFamily: "poppins, sans-serif",
                  fontSize: "13px",
                  marginTop: "5px",
                }}
              >
                {" "}
                ₹700
              </span>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "poppins, sans-serif",
                fontSize: "13px",
                color: "#05445e",
                fontWeight: "600",
              }}
            >
              Verified details
            </Typography>
          </Grid>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "poppins, sans-serif",
              fontSize: "13px",
              marginTop: "5px",
              marginLeft: "13px",
              marginBottom: "10px"
            }}
          >
            Secunderabad
          </Typography>
          {isOpen && (
            <Box
              sx={{
                padding: "10px",
                backgroundColor: "#ffffff",
                borderRadius: "5px",
                marginTop: "5px",
              }}
            >

              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 1,
                  cursor: "pointer",
                  boxShadow: "none",
                }}
                onClick={toggleCard}
              >
                <Grid container direction="column">
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="subtitle1" fontWeight="600">
                      Oliva Skin & Hair Clinic
                    </Typography>
                    <Typography variant="body2">
                      <span>₹800</span>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "poppins, sans-serif",
                        fontSize: "13px",
                      }}
                    >
                      Secunderabad
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "poppins, sans-serif",
                        fontSize: "13px",
                        color: "#05445e",
                        fontWeight: "600",
                      }}
                    >
                      Verified details
                    </Typography>
                  </Grid>
                  {isOpen && (
                    <Grid
                      container
                      direction="column"
                      sx={{ marginTop: "10px" }}
                    >
                      <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography variant="subtitle1" fontWeight="600">
                          Oliva Skin and Hair Clinic
                        </Typography>
                        <Typography variant="body2">
                          <span>₹700</span>
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">Gachibowli</Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontFamily: "poppins, sans-serif",
                            fontSize: "13px",
                            color: "#05445e",
                            fontWeight: "600",

                          }}
                        >
                          Verified details
                        </Typography>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </Card>


            </Box>
          )}
          <Divider sx={{ border: "1px solid lightgrey" }} />
          <Grid >
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024
                  },
                  items: 3,
                  partialVisibilityGutter: 40
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0
                  },
                  items: 2,
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464
                  },
                  items: 5,
                  partialVisibilityGutter: 30
                }
              }}
              showDots={false}
              slidesToSlide={2}
              swipeable
            >
              {days.map((day, index) => (
                <Grid item key={index}>
                  <Card
                    style={{
                      padding: 10,
                      marginTop: "30px",
                      fontFamily: "poppins, sans-serif",
                      backgroundColor: selectedDay && areDatesEqual(selectedDay, day) ? '#189AB4' : 'inherit',
                      color: selectedDay && areDatesEqual(selectedDay, day) ? 'white' : 'black',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleClickDay(day)}
                  >
                    <Typography variant="subtitle1" style={{ fontFamily: "poppins, sans-serif", fontSize: "12px" }}>{getFormattedDate(day, index)}</Typography>
                    <Typography variant="subtitle2" style={{ color: selectedDay && areDatesEqual(selectedDay, day) ? 'white' : 'green', fontSize: "10px", fontFamily: "poppins, sans-serif" }}>Available</Typography>
                  </Card>
                </Grid>
              ))}
            </Carousel>
            {selectedDay && (
              <Grid item style={{ marginTop: 20, maxWidth: 400 }}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontSize: "18px", fontFamily: "poppins, sans-serif", display: 'inline-block' }}>
                      Available Slots
                      <Typography variant="h6" gutterBottom style={{ fontFamily: "poppins, sans-serif", fontSize: "15px", color: 'grey', fontWeight: 'bold', display: 'inline-block', marginLeft: '5px' }}>
                        ({slots.length} Slots)
                      </Typography>
                    </Typography>

                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {slots.map((slot, index) => (
                        <div
                          key={index}
                          style={{
                            backgroundColor: selectedSlot && selectedSlot.getTime() === slot.getTime() ? '#189AB4' : '#FFFFFF', // Highlight color
                            border: selectedSlot && selectedSlot.getTime() === slot.getTime() ? '1px solid #189AB4' : '1px solid #FFFFFF', // Border color
                            color: selectedSlot && selectedSlot.getTime() === slot.getTime() ? 'white' : '#189AB4', // Font color
                            padding: '5px 10px',
                            margin: '5px',
                            borderRadius: '5px',
                            fontFamily: "poppins, sans-sarif",
                            fontSize: "13px",
                            border: "1px solid lightgrey",
                            cursor: 'pointer',
                            flex: '0 0 calc(25% - 10px)',
                            maxWidth: 'calc(25% - 10px)',
                          }}
                          onClick={() => handleClickSlot(slot)}
                        >
                          {slot.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>

        </Card>
        <Button
          onClick={handleButtonClick}
          style={{
            backgroundColor: "#05445E",
            color: "white",
            fontSize: "14px",
            marginTop: "5px",
            fontFamily: "poppins, sans-serif",
            fontWeight: 600,
          }}
        >
          Proceed
        </Button>

      </Grid>
    </Grid>
  );
}

export default DoctorProfile;