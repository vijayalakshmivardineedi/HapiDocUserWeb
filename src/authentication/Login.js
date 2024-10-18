import React, { useState,useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Box,
  Typography,
  Link, Select, MenuItem
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lab from "../assets/images/login-1.png"
import health from "../assets/images/login-2.png"
import clinic from "../assets/images/login-3.png"
import medicine from "../assets/images/login-4.png"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import { fetchUserLogin } from "../slice/User/LoginSlice";


const Login = ({ onClose }) => {

  const [showLoginForm, setShowLoginForm] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const [otp1, setOTP] = useState("");
  const [send, setSend] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPasswordFields(true);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleClick = () => {
    if (name.trim() !== "" && phoneNumber.trim() !== "") {
      setSend(false);
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
    }
  };
  const [showOTP1, setShowOTP1] = useState(false);
  const [showSendOTPButton, setShowSendOTPButton] = useState(true);

  const [otp2, setOtp2] = useState('');

  const handleSendOTP = () => {
    console.log("Sending OTP...");
    setShowOTP1(true);
    setShowSendOTPButton(false);
  };

  const handleOTPChange = (index, value) => {
    const newOTP = [...otp2];
    newOTP[index] = value;
    setOTP(newOTP);
  };

  const handleVerifyOTP = () => {
    setShowOTP1(false);
    setShowPasswordFields(true);
  };

  const handleVerifyOTP1 = () => {
    setClicked(false);
    setShowPasswordFields(true);
  };
  const handleSubmit1 = (e) => {
    e.preventDefault();
  };

  const handleForgotPassword = () => {
    setShowLoginForm(false);
    setForgotPassword(true);


  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };



const [signupName,setSignupName] = useState('');
const [mobileNumber,setMobileNumber] = useState('');
const [password,setPassword] = useState('');
const [signupPhoneNumber,setSignupPhoneNumber] = useState('');
  const dispatch = useDispatch();


  const handlesignUp = (event) => {
    // event.preventDefault();
    // dispatch(fetchUserSignUp({signupName,signupPhoneNumber}))
    
  }
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(fetchUserLogin({mobileNumber,password}))
    .then((action) => {
      // Check if the action has been fulfilled
      if (action.type === fetchUserLogin.fulfilled.type) {
        // Navigate to the dashboard page
        const token = action.payload
        console.log("token",token)
        setMobileNumber("")
        setPassword("")
        // localStorage.setItem("token",token)
        
      } else {
        // Handle other scenarios (e.g., display error message)
        console.log("Login failed:", action.error.message);
      }
      })
      .catch((error) => {
        console.error("Reset password error:", error);
      });
  }



  return (
    <Grid container spacing={4} sx={{ paddingTop: "30px" }}>
      <IconButton
        sx={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      <Grid item xs={12} md={6} sx={{ backgroundColor: "#d1f1f4", borderTopRightRadius: "20px", padding: '20px', borderBottomRightRadius: "20px" }}>
        <Slider {...settings}>
          <Grid>
            <img
              src={health}
              alt="Slide 2"
              style={{
                display: "block",
                margin: "auto",
                width: "100%",
                height: "auto",

              }}
            />
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                fontWeight: "700",
                fontFamily: "poppins, sans-serif",

                fontSize: "18px",
                color: "#05445E",
              }}
            >
              Make Healthcare Simpler
            </Typography>
            <Typography
              variant="body2"
              style={{
                textAlign: "center",
                paddingLeft: "60px",
                paddingRight: "60px",
                fontFamily: "poppins, sans-serif",
                fontSize: "12px"
              }}
            >
              Get medicine information, order medicines, book lab tests, and
              consult online from the comfort of your home.
            </Typography>
          </Grid>
          
          <Grid>
            <img
              src={medicine}
              alt="Slide 3"
              style={{
                display: "block",
                margin: "auto",
                width: "100%",
                height: "auto"
              }}
            />
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                fontWeight: "700",
                fontFamily: "poppins, sans-serif",
                fontSize: "18px",
                color: "#05445E",
                marginTop: 4
              }}
            >
              Know Your Medicines
            </Typography>
            <Typography
              variant="body2"
              style={{
                textAlign: "center",
                paddingLeft: "60px",
                paddingRight: "60px",
                fontFamily: "poppins, sans-serif",
                fontSize: "12px"
              }}
            >
              Usage, side effects, affordable alternatives before using
              medication for informed decisions.
            </Typography>
          </Grid>
          <Grid>
            <img
              src={lab}
              alt="Slide 4"
              style={{
                display: "block",
                margin: "auto",
                width: "100%",
                height: "auto",
                fontFamily: "poppins, sans-serif",
              }}
            />
            <Typography
              variant="h6"
              style={{

                color: "#05445E",
                textAlign: "center",
                fontWeight: "700",
                fontFamily: "poppins, sans-serif",
                fontSize: "18px"
              }}
            >
              Lab Test at home
            </Typography>
            <Typography
              variant="body2"
              style={{
                textAlign: "center",
                paddingLeft: "60px",
                paddingRight: "60px",
                fontFamily: "poppins, sans-serif",
                fontSize: "12px"
              }}
            >
              Conveniently schedule any test from our range of labs. We'll
              handle sample collection and report delivery for you.
            </Typography>
          </Grid>
        </Slider>
      </Grid>
      {forgotPassword ? (
        <Grid item xs={12} md={6}>
          <Grid sx={{ paddingRight: "30px", paddingTop: "10px", padding: 3 }}>
            <Typography variant="h6" sx={{ fontFamily: "poppins, sans-serif", fontWeight: "600", color: "#05445e", fontSize: "22px" }}>Forgot Password</Typography>
            <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif", fontWeight: "400", color: "#777", fontSize: "12px" }}>Stay secure, stay connected: Reset your password effortlessly.</Typography>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <TextField
                variant="standard"
                fullWidth
                id="model"
                label="Mobile Number"
                name="Mobile"
              />
            </Grid>
            {showSendOTPButton && (
              <Grid item xs={12} sx={{ marginTop: 2 }}>
                <Button fullWidth sx={{ color: "#fff", backgroundColor: "#189ab4", fontSize: "16px", fontWeight: "600" }} onClick={handleSendOTP}>Send OTP</Button>
              </Grid>
            )}
            {showOTP1 && (
              <Grid item xs={12} sx={{ marginTop: 2, display: 'flex', flexDirection: 'column' }}>
                <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <OtpInput
                    value={otp2}
                    onChange={setOtp2}
                    numInputs={4}
                    inputStyle={{
                      width: "2.6rem",
                      height: "2.6rem",
                      fontSize: "1.5rem",
                      textAlign: "center",
                      textAlignLast: "center",
                      marginTop: 4
                    }}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                  <Button sx={{ color: "#189ab4", backgroundColor: "#fff", boxShadow: "none", border: "none", fontWeight: "600", fontSize: "16px" }} onClick={handleVerifyOTP}>Verify OTP</Button>
                </Grid>

              </Grid>
            )}
            {showPasswordFields && (
              <>
                <Grid item xs={12} sx={{ marginTop: 2 }}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    id="password"
                    label="Enter Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Grid>
                <Grid item xs={12} sx={{ marginTop: 2 }}>
                  <TextField
                    variant="standard"
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
                <Grid item xs={12} sx={{ marginTop: 2 }}>
                  <Button fullWidth sx={{ color: "#fff", backgroundColor: "#189ab4" }} >Change Password</Button>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>

      ) : (<>
        {
          showLoginForm ? (
            <Grid item xs={12} md={6} >
              <Grid sx={{ paddingRight: "30px", paddingTop: "10px", padding: 3 }}>
                <form onSubmit={handleSubmit}>
                  <Grid container sx={{ marginTop: -2 }}>
                    <Typography sx={{ fontFamily: "poppins, sans-serif", fontWeight: "600", color: "#05445e", fontSize: "22px" }}>Login</Typography>
                    <Typography sx={{ fontFamily: "poppins, sans-serif", fontWeight: "400", color: "#777", fontSize: "12px" }}>Get access to your orders, lab tests & doctor consultations</Typography>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                      <TextField
                        variant="standard"
                        fullWidth
                        id="model"
                        label="Mobile Number "
                        name="Mobile"
                        value={mobileNumber}
                        onChange={(e)=>setMobileNumber(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                      <TextField
                        variant="standard"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      item
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "10px",
                      }}
                    >
                      <Link
                        // href="forgot"
                        onClick={handleForgotPassword}
                        variant="body2"
                        sx={{ textDecoration: "none", color: "#05445E", fontFamily: "poppins, sans-serif", }}
                      >
                        Forgot password?
                      </Link>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    onClick={handleLogin}
                    sx={{ marginTop: 2, backgroundColor: "#189AB4", color: "#fff", fontFamily: "poppins, sans-serif", fontWeight: "600", fontSize: "18px" }}
                  >
                    Login
                  </Button>
                  <Typography sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px", textAlign: "center", marginTop: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>Want to Create New Account? <Typography sx={{ color: "#05445e", fontFamily: "poppins, sans-serif", fontSize: "13px", marginLeft: 1, cursor: "pointer" }} onClick={() => setShowLoginForm(false)}>Sign Up</Typography></Typography>
                </form>
              </Grid>
            </Grid>) : (
            <Grid item xs={12} md={6}>
              <Grid sx={{ paddingRight: "30px", paddingTop: "10px", padding: 3 }}>
                <form onSubmit={handleSubmit}>
                  <Grid container sx={{ marginTop: -2 }}>
                    <Typography sx={{ fontFamily: "poppins, sans-serif", fontWeight: "600", color: "#05445e", fontSize: "22px" }}>Sign Up</Typography>
                    <Typography sx={{ fontFamily: "poppins, sans-serif", fontWeight: "400", color: "#777", fontSize: "12px" }}>Start your wellness journey now! Sign Up for exclusive health insights and offers.</Typography>

                    <Grid container spacing={2} marginTop={1}>
                      <>
                        <Grid item xs={12}>
                          <TextField
                            variant="standard"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="Name"
                            value={name}
                            onChange={(e) => setSignupName(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            variant="standard"
                            required
                            fullWidth
                            id="mobile"
                            label="Mobile Number"
                            name="mobile"
                            value={phoneNumber}
                            onChange={(e) => setSignupPhoneNumber(e.target.value)}
                          />
                        </Grid>
                        {send && (
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ marginTop: 2, backgroundColor: "#189AB4" }}
                            onClick={handlesignUp}
                          >
                            Send OTP
                          </Button>
                        )}
                      </>
                      {clicked && (
                        <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <OtpInput
                              value={otp2}
                              onChange={setOtp2}
                              numInputs={4}
                              inputStyle={{
                                width: "2.6rem",
                                height: "2.6rem",
                                fontSize: "1.5rem",
                                textAlign: "center",
                                textAlignLast: "center",
                                marginTop: 4
                              }}
                              renderSeparator={<span>-</span>}
                              renderInput={(props) => <input {...props} />}
                            />
                            <Button sx={{ color: "#189ab4", backgroundColor: "#fff", boxShadow: "none", border: "none", fontWeight: "600", fontSize: "16px" }} onClick={handleVerifyOTP1}>Verify OTP</Button>
                          </Grid>
                        </Grid>
                      )}
                      {showPasswordFields && (
                        <>
                          <Grid item xs={12}>
                            <TextField
                              variant="standard"
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
                              variant="standard"
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
                          <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{ marginTop: 2, backgroundColor: "#189AB4" }}
                           
                          >
                            Submit
                          </Button>
                        </>
                      )}
                    </Grid>

                  </Grid>
                </form>
              </Grid>
            </Grid>
          )
        }</>)}
    </Grid >
  );
};
export default Login;