import React from "react";
import { Divider, Grid, Typography, Box, IconButton } from "@mui/material"
import logo from "../../../assets/sample-logo (1).png"
import android from "../../../assets/google-play-badge.png"
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ backgroundColor: "#d1f1f4", }}>
            <Grid container sx={{ paddingTop: 8, paddingLeft: 8, paddingRight: 5, paddingBottom: 3 }}>
                <Grid item md={3} sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontFamily: "poppins, sans-serif", fontWeight: "600", color: "#05445e" }}>Know Us</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" ,cursor:"pointer"}} onClick={() => navigate('/about')}>About Us</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif",cursor:"pointer" }} onClick={() => navigate('/contact')}>Contact Us</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif",cursor:"pointer" }} onClick={() => navigate('/about')}>Careers</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" ,cursor:"pointer"}} onClick={() => navigate('/blog')}>Blog</Typography>
                </Grid>
                <Grid item md={3} sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontFamily: "poppins, sans-serif", fontWeight: "600", color: "#05445e" }}>Our Policies</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif",cursor:"pointer" }} onClick={() => navigate('/privacyPolicy')}>Privacy Policy</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" ,cursor:"pointer"}} onClick={() => navigate('/termsandcondition')}>Terms and Conditions</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif",cursor:"pointer" }} onClick={() => navigate('/return')}>Return Policy </Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" ,cursor:"pointer"}} onClick={() => navigate('/refund')}>Refund Policy</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" ,cursor:"pointer"}} onClick={() => navigate('/medicinedelivery')}>Medicine Delivery Policy</Typography>
                </Grid>
                <Grid item md={3} sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontFamily: "poppins, sans-serif", fontWeight: "600", color: "#05445e" }}>Services</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" }}>Order Medicines</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" }}>Book Lab Tests</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" }}>Consult a Doctor </Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" }}>Disease Identification by AI</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" }}>Diet and Nutrition</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" }}>Membership</Typography>
                </Grid>
                <Grid item md={3} sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontFamily: "poppins, sans-serif", fontWeight: "600", color: "#05445e" }}>Partners</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" }}>Doctors</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" }}>Medical Stores</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" }}>Labs</Typography>
                    <Typography variant="body2" sx={{ fontFamily: "poppins, sans-serif" }}>Clinics</Typography>
                </Grid>
            </Grid>
            <Divider sx={{ backgroundColor: "#189ab4" }} />
            <Grid container spacing={3}>
                <Grid item md={4} style={{ paddingLeft: 70, }}>
                    <Grid container justifyContent="center" alignItems="center" style={{ paddingTop: 20 }}>
                        <img src={logo} alt="logo" style={{ width: "220px", height: "auto" }} />
                    </Grid>
                </Grid>
                <Grid item md={4}  >
                    <Grid container justifyContent="center" alignItems="center" style={{ paddingTop: 20 }}>
                        <Grid item>
                            <Typography sx={{ fontSize: "18px", fontWeight: "600", fontFamily: "poppins,sans-serif", color: "#05445e", textAlign: "center" }}>Download App on</Typography>
                            <img src={android} alt="logo" style={{ width: "180px", height: "80px", display: "block", margin: "0 auto" }} />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item md={4} >
                    <Grid container justifyContent="center" spacing={1} style={{ paddingTop: 20 }}>
                        <Grid item>
                            <Typography sx={{ textAlign: "center", fontSize: "18px", fontWeight: "600", fontFamily: "poppins,sans-serif", color: "#05445e" }}>Follow us on</Typography>
                        </Grid>
                        <Grid item container justifyContent="center" spacing={1}>
                            <Grid item>
                                <IconButton sx={{ backgroundColor: "#05445e", color: "#fff" }}> <FaFacebookF /></IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ backgroundColor: "#05445e", color: "#fff" }}> <AiFillInstagram /></IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ backgroundColor: "#05445e", color: "#fff" }}>  <FaTwitter /></IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton sx={{ backgroundColor: "#05445e", color: "#fff" }}> <FaYoutube /></IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ backgroundColor: "#189ab4" }} />
            <Typography sx={{ fontSize: "14px", fontFamily: "poppins,sans-serif", color: "#05445e", textAlign: "center", padding: 2 }}>Copyright © 2024, HapiDoc. All rights reserved.</Typography>
        </Box>

    )
}
export default Footer;