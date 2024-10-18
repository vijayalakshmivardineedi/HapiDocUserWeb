import React, { useState } from "react";
import {
  Card,
  CardContent,
  FormControl,
  FormLabel,
  Typography,
  RadioGroup,
  Button,
  FormControlLabel,
  InputAdornment,
  Radio,
  TextField,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  Link,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [hospital, setHospital] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (
      !fullname ||
      !email ||
      !phone ||
      !country ||
      !location ||
      !hospital ||
      !message
    ) {
      // Set error message only if it's not already set
      if (!error) setError("Please fill in all fields.");
    } else {
      // Reset all state variables to their initial values
      setFullname("");
      setEmail("");
      setPhone("");
      setCountry("");
      setLocation("");
      setHospital("");
      setMessage("");
      setError("");
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });

  return (
    <Grid>
      <Card
        sx={{
          bgcolor: "#0a718a",
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          paddingRight: "20px",
          paddingLeft: "50px",
        }}
      >
        {/* First CardContent */}
        <CardContent
          style={{ borderRight: "1px solid white", marginRight: "50px" }}
        >
          <img
            src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets/images/icons/contact-find-dr.svg"
            alt="Doctor Lifeline"
            style={{ width: "30px", display: "block", marginBottom: "10px" }}
          />
          <Typography
            variant="h5"
            style={{
              fontWeight: "600",
              fontFamily: "Jost, sans-serif",
              marginTop: "5%",
            }}
          >
            Doctor Lifeline
          </Typography>

          <Typography
            variant="body2"
            style={{
              marginTop: "3%",
              fontFamily: "Poppins, sans-serif",
              fontSize: "10px",
            }}
          >
            Can be dialed irrespective of the <br /> telecom operator and
            location in India.
          </Typography>
          <Link href="tel:1234567890" color="inherit" underline="hover">
            123-456-7890
          </Link>
        </CardContent>

        <CardContent style={{ marginRight: "50px" }}>
          <img
            src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets/images/icons/contact-career.svg"
            alt="Doctor Lifeline"
            style={{ width: "35px", display: "block", marginBottom: "10px" }}
          />
          <Typography
            variant="h5"
            style={{ fontWeight: "600", fontFamily: "Poppins, sans-serif" }}
          >
            Careers
          </Typography>
          <Typography
            variant="body2"
            style={{
              marginTop: "3%",
              fontFamily: "Poppins, sans-serif",
              fontSize: "10px",
            }}
          >
            For information on jobs and openings, <br /> visit our Careers
            section or write to us.
          </Typography>
          <Link
            href="tel:1234567890"
            color="inherit"
            underline="hover"
            sx={{ fontFamily: "Poppins, sans-serif", fontSize: "15px" }}
          >
            KNOW MORE
          </Link>
        </CardContent>

        {/* Third CardContent */}
        <CardContent
          style={{ paddingLeft: "60px", borderLeft: "1px solid white" }}
        >
          <img
            src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets/images/icons/contact-calender.svg"
            alt="Book online appointment"
            style={{ width: "30px", display: "block", marginBottom: "10px" }}
          />
          <Typography
            variant="h5"
            style={{ fontWeight: "600", fontFamily: "Poppins, sans-serif" }}
          >
            Book online appointment
          </Typography>
          <Typography
            variant="body2"
            style={{
              marginTop: "3%",
              fontFamily: "Poppins, sans-serif",
              fontSize: "10px",
            }}
          >
            Combining the best specialists and equipment
            <br /> to provide you nothing short of the best in healthcare.
          </Typography>
          <Link
            href="tel:1234567890"
            color="inherit"
            underline="hover"
            sx={{ fontFamily: "Poppins, sans-serif", fontSize: "15px" }}
          >
            BOOK NOW
          </Link>
        </CardContent>
      </Card>

      <Grid container justifyContent="center" style={{ marginTop: "30px" }}>
        <Grid item xs={12} sm={10} md={10} lg={9} xl={4}>
          <Card sx={{ boxShadow: "none" }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <img
                    src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets/images/contact-image.jpg"
                    alt="Contact"
                    style={{ width: "120%", height: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      style={{
                        color: "#189AB4  ",
                        fontFamily: "Poppins, sans-serif",
                        marginBottom: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Contact Us
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        fontSize: "15px",
                        textAlign: "justify",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      Doctor Hospitals is always looking to make things easier
                      for you. Our aim is to provide our customers with the best
                      medical facilities, constant care, and reliable support.
                      If you would like to get in touch with a doctor from a
                      specific department, would like some specific information
                      about the services we provide, or just have a question for
                      us, please fill up the Form given below and we will get
                      back to you.
                    </Typography>
                    <Grid
                      item
                      xs={12}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px",
                      }}
                    >
                      <FormControl sx={{ fontFamily: "Poppins, sans-serif" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormLabel
                            id="demo-row-radio-buttons-group-label"
                            style={{
                              marginTop: "9px",
                              marginRight: "40px",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            Type of Query:
                          </FormLabel>
                          <FormControlLabel
                            value="Enquiry"
                            control={<Radio />}
                            label={
                              <Typography
                                style={{ fontFamily: "Poppins, sans-serif" }}
                              >
                                Enquiry
                              </Typography>
                            }
                          />
                          <FormControlLabel
                            value="Complaint"
                            control={<Radio />}
                            label={
                              <Typography
                                style={{ fontFamily: "Poppins, sans-serif" }}
                              >
                                Complaint
                              </Typography>
                            }
                          />
                          <FormControlLabel
                            value="Feedback"
                            control={<Radio />}
                            label={
                              <Typography
                                style={{ fontFamily: "Poppins, sans-serif" }}
                              >
                                Feedback
                              </Typography>
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <ThemeProvider theme={theme}>
                      <Grid container spacing={2} style={{ marginTop: "20px" }}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="fullname"
                            label="Fullname*"
                            variant="outlined"
                            fullWidth
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="email"
                            label="Email ID*"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="phone"
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  +91
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <FormControl fullWidth>
                            <InputLabel id="country-label">
                              Select Country
                            </InputLabel>
                            <Select
                              labelId="country-label"
                              id="country"
                              value={country}
                              label="Select Country"
                              onChange={handleCountryChange}
                            >
                              <MenuItem value="India">India</MenuItem>
                              <MenuItem value="Australia">Australia</MenuItem>
                              <MenuItem value="France">France</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <FormControl fullWidth>
                            <InputLabel id="location-label">
                              Select Location
                            </InputLabel>
                            <Select
                              labelId="location-label"
                              id="location"
                              value={location}
                              label="Select Location"
                              onChange={handleLocationChange}
                            >
                              <MenuItem value="Vizag">Vizag</MenuItem>
                              <MenuItem value="Delhi">Delhi</MenuItem>
                              <MenuItem value="Bangalore">Bangalore</MenuItem>
                              <MenuItem value="Chennai">Chennai</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <FormControl variant="outlined" fullWidth>
                            <InputLabel id="hospital-label">
                              -Select Hospital-
                            </InputLabel>
                            <Select
                              labelId="hospital-label"
                              id="hospital"
                              label="Select Hospital"
                              value={hospital}
                              onChange={(e) => setHospital(e.target.value)}
                            >
                              <MenuItem value="Care">Care</MenuItem>
                              <MenuItem value="Madico">Medicover</MenuItem>
                              <MenuItem value="Apollo">Apollo</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Message*"
                            multiline
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            variant="outlined"
                          />
                        </Grid>
                      </Grid>
                    </ThemeProvider>
                    <Typography
                      variant="body2"
                      style={{ color: "red", marginTop: "10px" }}
                    >
                      {error}
                    </Typography>
                    <Grid
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "15px",
                        marginLeft: "auto",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#189AB4",
                          color: "#ffffff",
                          fontFamily: "poppins, sans-sarif",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
