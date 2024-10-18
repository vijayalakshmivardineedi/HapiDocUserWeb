import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

import consultation from "../assets/images/login-1.png";

const countries = [
  { code: "+91", name: "IND" },
  { code: "+65", name: "SGP" },
  { code: "+63", name: "PHL" },
  { code: "+60", name: "MYS" },
  { code: "+62", name: "IDN" },
  { code: "+55", name: "BRA" },
  { code: "+52", name: "MEX" },
  { code: "+54", name: "CHL" },
  { code: "+56", name: "KW" },
  { code: "+84", name: "VNM" },
  { code: "+971", name: "UAE" },
  { code: "+965", name: "KW" },
  { code: "+255", name: "TZA" },
  { code: "+973", name: "SA" },
  { code: "+1", name: "USA" },
];

const SignUp = () => {
  const [clicked, setClicked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPasswordFields(true);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleClick = () => {
    if (name.trim() !== "" && phoneNumber.trim() !== "") {
      setClicked(true);
    } else {
      alert("Please fill in your name and phone number.");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleVerify = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      console.log("Navigating to Tabs page...");
      navigate("/tabs");
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <Container component="main">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Slider {...settings}>
            <Grid>
              <img
                src={consultation}
                alt="Slide 2"
                style={{
                  display: "block",
                  margin: "auto",
                  width: "45%",
                  height: "auto",
                }}
              />
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Make Healthcare Simpler
              </Typography>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  color: "#05445E",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                Get medicine information, order medicines, book lab tests, and
                consult online from the comfort of your home.
              </Typography>
            </Grid>
            <Grid>
              <img
                src={consultation}
                alt="Slide 1"
                style={{
                  display: "block",
                  margin: "auto",
                  width: "45%",
                  height: "auto",
                }}
              />
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Discover Your Clinic
              </Typography>

              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  color: "#05445E",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                Clinics provide medical care and treatments, focusing on areas
                like primary care, dental services, dermatology, and cardiology
                for communities.
              </Typography>
            </Grid>
            <Grid>
              <img
                src={consultation}
                alt="Slide 3"
                style={{
                  display: "block",
                  margin: "auto",
                  width: "45%",
                  height: "auto",
                }}
              />
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Know Your Medicines
              </Typography>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  color: "#05445E",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                Usage, side effects, affordable alternatives before using
                medication for informed decisions.
              </Typography>
            </Grid>
            <Grid>
              <img
                src={consultation}
                alt="Slide 4"
                style={{
                  display: "block",
                  margin: "auto",
                  width: "45%",
                  height: "auto",
                }}
              />
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Lab Test at home
              </Typography>
              <Typography
                variant="body2"
                style={{
                  textAlign: "center",
                  color: "#05445E",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                Conveniently schedule any test from our range of labs. We'll
                handle sample collection and report delivery for you.
              </Typography>
            </Grid>
          </Slider>
        </Grid>
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Grid elevation={3} sx={{ padding: 4, border: "1px solid #e0e0e0" }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Select
                    variant="outlined"
                    required
                    fullWidth
                    id="countryCode"
                    name="countryCode"
                    defaultValue="+91"
                  >
                    {countries.map((country) => (
                      <MenuItem key={country.code} value={country.code}>
                        {country.code} ({country.name})
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile Number"
                    name="mobile"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Grid>
                {clicked && (
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="otp"
                      label="OTP"
                      name="otp"
                      value={otp}
                      onChange={handleOtpChange}
                    />
                  </Grid>
                )}
                {showPasswordFields && (
                  <>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="confirmPassword"
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        error={passwordError !== ""}
                        helperText={passwordError}
                      />
                    </Grid>
                  </>
                )}
              </Grid>
              {showPasswordFields ? (
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ marginTop: 2, backgroundColor: "#189AB4" }}
                  onClick={handleVerify}
                >
                  Submit
                </Button>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ marginTop: 2, backgroundColor: "#189AB4" }}
                  onClick={handleClick}
                >
                  {clicked ? "Verify OTP" : "Send OTP"}
                </Button>
              )}
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;