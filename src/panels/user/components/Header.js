import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Grid,
  Typography,
  InputBase,
  Box,
  TextField,
  IconButton,
  MenuItem,
  Menu,
  Avatar,
  Dialog,
  InputLabel,
  Radio,
  FormControlLabel,
  DialogTitle,
  DialogContent,
  Divider,
  DialogActions,
} from "@mui/material";
import { ImOffice } from "react-icons/im";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaCircleUser } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import SearchIcon from "@mui/icons-material/Search";
import { HiShoppingCart } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../../assets/sample-logo (1).png";
import { FaHome } from "react-icons/fa";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IoMdNotifications } from "react-icons/io";
import Button from "@mui/material/Button";
import location from "../../../assets/stickers/location.png";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import Map from "./Map";
import Login from "../../../authentication/Login";
import { useNavigate } from "react-router-dom";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "50px",
  backgroundColor: "#fff",
  border: "3px solid #189ab4",
  "&:hover": {
    backgroundColor: alpha("#fff", 0.8),
  },
  marginLeft: 0,
  width: "60%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#05445e",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#05445e", // Set the icon color to #05445e
}));

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog1, setOpenDialog1] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);
  const [openDialog3, setOpenDialog3] = useState(false);
  const [openDialog4, setOpenDialog4] = useState(false);
  const [pincode, setPincode] = useState("");
  const [showLocation, setShowLocation] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  const handleMenuClick = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleMenuClose1 = () => {
    setAnchorElMenu(null);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
    handleMenuClose1();
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog1 = () => {
    setOpenDialog1(true);
    handleMenuClose1();
  };
  const handleCloseDialog1 = () => {
    setOpenDialog1(false);
  };
  const handleOpenDialog2 = () => {
    setOpenDialog2(true);
    handleCloseDialog1();
  };
  const handleback = () => {
    setOpenDialog2(true);
    handleCloseDialog3();
  };
  const handleCloseDialog2 = () => {
    setOpenDialog2(false);
  };
  const handleedit = () => {
    setOpenDialog3(true);
    handleCloseDialog1();
  };
  const handleOpenDialog3 = () => {
    setOpenDialog3(true);
    handleCloseDialog2();
  };

  const handleCloseDialog3 = () => {
    setOpenDialog3(false);
  };
  const handleOpenDialog4 = () => {
    setOpenDialog4(true);
  };

  const handleCloseDialog4 = () => {
    setOpenDialog4(false);
  };
  const handleAvatarMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = () => {
    setShowLocation(false);
    handleCloseDialog();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const [selectedAddress, setSelectedAddress] = React.useState("");

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#F5F5F5", color: "white" }}
      >
        <Toolbar sx={{ position: "sticky", top: 0 }}>
          <img
            src={logo}
            alt="logo"
            style={{
              height: 55,
              paddingTop: 10,
              paddingBottom: 10,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              cursor: "pointer",
              padding: 1,
              marginLeft: "10px",
              fontFamily: "poppins, sans-serif",
              color: "#189ab4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
            onClick={handleMenuClick} // Add onClick to trigger the menu
          >
            <ImLocation
              style={{ fontWeight: "bold", color: "#05445e", fontSize: "22px" }}
            />
            <div>
              <Typography
                variant="body2"
                sx={{
                  marginLeft: 1,
                  fontFamily: "poppins, sans-serif",
                  color: "#1f1f29",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Deliver to USER NAME
              </Typography>
              {showLocation ? (
                <Typography
                  variant="h6"
                  sx={{
                    marginLeft: 1,
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "poppins, sans-serif",
                    fontWeight: "500",
                    color: "#05445e",
                    fontSize: "16px",
                  }}
                  onClick={handleMenuClick}
                >
                  Select Address{" "}
                  <ArrowDropDownIcon
                    sx={{
                      display: { xs: "none", sm: "block" },
                      cursor: "pointer",
                    }}
                  />
                </Typography>
              ) : (
                <Typography
                  variant="h6"
                  sx={{
                    marginLeft: 1,
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "poppins, sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#05445e",
                  }}
                >
                  Pincode: {pincode}
                </Typography>
              )}
            </div>
          </Box>
          <Menu
            anchorEl={anchorElMenu}
            open={Boolean(anchorElMenu)}
            onClose={handleMenuClose1}
            sx={{ borderRadius: 80 }}
          >
            <Box sx={{ padding: 2 }}>
              <Button
                sx={{
                  backgroundColor: "#189ab4",
                  borderRadius: 8,
                  color: "#fff",
                  fontFamily: "poppins, sans-serif",
                  fontWeight: "600",
                  paddingLeft: 2,
                  paddingRight: 2,
                  paddingTop: 1,
                  paddingBottom: 1,
                  "&:hover": {
                    backgroundColor: "#189ab4", // Set hover color to #189ab4
                  },
                  "&:active": {
                    backgroundColor: "#189ab4", // Set active color to #189ab4
                  },
                }}
                onClick={handleMenuClose1}
              >
                <MdMyLocation
                  style={{ marginRight: "8px", fontSize: "16px" }}
                />{" "}
                Use current Location
              </Button>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Divider sx={{ border: "1px thin black", width: "40%" }} />
                <Typography
                  sx={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    fontFamily: "poppins, sans-serif",
                  }}
                >
                  or
                </Typography>
                <Divider sx={{ border: "1px thin black", width: "40%" }} />
              </div>

              <Typography
                onClick={handleOpenDialog}
                sx={{
                  fontFamily: "poppins, sans-serif",
                  cursor: "pointer",
                  color: "#189ab4",
                  fontWeight: "500",
                  fontSize: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HiOutlineLocationMarker /> Enter Delivery Pincode{" "}
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Divider sx={{ border: "1px thin black", width: "40%" }} />
                <Typography
                  sx={{
                    marginLeft: "10px",
                    fontFamily: "poppins, sans-serif",
                    marginRight: "10px",
                  }}
                >
                  or
                </Typography>
                <Divider sx={{ border: "1px thin black", width: "40%" }} />
              </div>

              <Typography
                onClick={handleOpenDialog1}
                sx={{
                  fontFamily: "poppins, sans-serif",
                  cursor: "pointer",
                  color: "#189ab4",
                  fontWeight: "500",
                  fontSize: "16px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <HiOutlineLocationMarker /> Use Saved Address
              </Typography>
            </Box>
          </Menu>
          <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            sx={{ maxWidth: "400px", margin: "auto" }}
          >
            <DialogTitle sx={{ fontFamily: "poppins, sans-serif" }}>
              Help us serve you better!
            </DialogTitle>
            <Divider />
            <DialogContent>
              <img src={location} alt="location" style={{ height: 80 }} />
              <Typography
                sx={{
                  fontFamily: "poppins, sans-serif",
                  fontSize: "14px",
                  color: "#777",
                }}
              >
                Please provide us your delivery location pincode for faster and
                seamless deliveries.
              </Typography>
              <InputLabel
                htmlFor="pincode"
                sx={{
                  fontFamily: "poppins, sans-serif",
                  color: "black",
                  fontSize: "14px",
                  marginTop: "10px",
                }}
              >
                Delivery Location
              </InputLabel>
              <TextField
                autoFocus
                margin="dense"
                id="pincode"
                type="text"
                fullWidth
                inputProps={{ maxLength: 6, pattern: "\\d{6}" }}
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
              <Typography
                sx={{
                  fontFamily: "poppins, sans-serif",
                  fontSize: "12px",
                  color: "#777",
                }}
              >
                *Enter your 6 digit pincode to proceed
              </Typography>
            </DialogContent>
            <Divider />
            <DialogActions>
              <Button
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  color: "#189ab4",
                  fontFamily: "poppins, sans-serif",
                  fontWeight: "600",
                  paddingLeft: 2,
                  paddingRight: 2,
                  paddingTop: 1,
                  paddingBottom: 1,
                  "&:hover": {
                    backgroundColor: "#fff", // Set hover color to #189ab4
                  },
                  "&:active": {
                    backgroundColor: "#fff", // Set active color to #189ab4
                  },
                }}
                onClick={handleCloseDialog}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  backgroundColor: "#189ab4",
                  borderRadius: 8,
                  color: "#fff",
                  fontFamily: "poppins, sans-serif",
                  fontWeight: "600",
                  paddingLeft: 2,
                  paddingRight: 2,
                  paddingTop: 1,
                  paddingBottom: 1,
                  "&:hover": {
                    backgroundColor: "#189ab4", // Set hover color to #189ab4
                  },
                  "&:active": {
                    backgroundColor: "#189ab4", // Set active color to #189ab4
                  },
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={openDialog1}
            onClose={handleCloseDialog1}
            sx={{ maxWidth: "400px", margin: "auto" }}
          >
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "poppins, sans-serif",
                fontWeight: "600",
              }}
            >
              SAVED ADDRESS
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleCloseDialog1}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <Typography
                  sx={{ fontFamily: "poppins, sans-serif", fontWeight: "600" }}
                >
                  Choose Address
                </Typography>
                <Typography
                  sx={{
                    color: "#189ab4",
                    fontFamily: "poppins, sans-serif",
                    cursor: "pointer",
                  }}
                  onClick={handleOpenDialog2}
                >
                  +Add Address
                </Typography>
              </div>
              <Divider />
              {/* Address 1 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  fontFamily: "poppins, sans-serif",
                }}
              >
                <FaHome
                  style={{
                    fontSize: "50px",
                    marginLeft: "10px",
                    marginRight: "15px",
                    color: "#05445e",
                  }}
                />
                <div>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#05445e",
                      fontFamily: "poppins, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    T.JHANSI DEVI (HOME)
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "poppins, sans-serif",
                      color: "#888",
                    }}
                  >
                    Gsuhsgs, Connaught Place, Central Delhi, DELHI 110001
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "poppins, sans-serif",
                      color: "#888",
                      display: "flex",
                    }}
                  >
                    Mobile:
                    <Typography sx={{ color: "#189ab4", marginLeft: 1 }}>
                      {" "}
                      7997148737
                    </Typography>
                  </Typography>
                </div>
                <FormControlLabel
                  value="T.JHANSI DEVI (HOME)"
                  control={<Radio color="default" />}
                  label=""
                  onChange={handleAddressChange}
                  checked={selectedAddress === "T.JHANSI DEVI (HOME)"}
                  sx={{ margin: "5px" }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <Typography
                  onClick={handleedit}
                  sx={{
                    margin: 1,
                    fontFamily: "poppins, sans-serif",
                    cursor: "pointer",
                    color: "#189ab4",
                    fontWeight: "600",
                  }}
                >
                  Edit
                </Typography>
                <Divider
                  sx={{
                    borderLeft: "3px solid #888",
                    height: "20px",
                    margin: 1,
                  }}
                />
                <Typography
                  sx={{
                    margin: 1,
                    fontFamily: "poppins, sans-serif",
                    fontWeight: "600",
                    color: "#777",
                  }}
                >
                  Delete
                </Typography>
              </div>
              <Divider />
              {/* Address 2 */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  fontFamily: "poppins, sans-serif",
                }}
              >
                <ImOffice
                  style={{
                    fontSize: "50px",
                    marginLeft: "10px",
                    marginRight: "15px",
                    color: "#05445e",
                  }}
                />
                <div>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "#05445e",
                      fontFamily: "poppins, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    Another Address
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "poppins, sans-serif",
                      color: "#888",
                    }}
                  >
                    Gsuhsgs, Connaught Place, Central Delhi, DELHI 110001
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "poppins, sans-serif",
                      color: "#888",
                      display: "flex",
                    }}
                  >
                    Mobile:
                    <Typography sx={{ color: "#189ab4", marginLeft: 1 }}>
                      {" "}
                      7997148737
                    </Typography>
                  </Typography>
                </div>
                <FormControlLabel
                  value="Another Address"
                  control={<Radio color="default" />}
                  label=""
                  onChange={handleAddressChange}
                  checked={selectedAddress === "Another Address"}
                  sx={{ margin: "5px" }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <Typography
                  onClick={handleedit}
                  sx={{
                    margin: 1,
                    fontFamily: "poppins, sans-serif",
                    cursor: "pointer",
                    color: "#189ab4",
                    fontWeight: "600",
                  }}
                >
                  Edit
                </Typography>
                <Divider
                  sx={{
                    borderLeft: "3px solid #888",
                    height: "20px",
                    margin: 1,
                  }}
                />
                <Typography
                  sx={{
                    margin: 1,
                    fontFamily: "poppins, sans-serif",
                    fontWeight: "600",
                    color: "#777",
                  }}
                >
                  Delete
                </Typography>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog
            open={openDialog2}
            onClose={handleCloseDialog2}
            sx={{ maxWidth: "500px", margin: "auto" }}
          >
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "poppins, sans-serif",
                fontWeight: "600",
              }}
            >
              SET LOCATION
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleCloseDialog2}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <Divider />
            <Map />
            <DialogContent>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FaLocationDot style={{ color: "#189ab4", fontSize: "18px" }} />
                <Typography
                  sx={{
                    fontFamily: "poppins, sans-serif",
                    marginLeft: "10px",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  Identify your delivery location
                </Typography>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "poppins, sans-serif",
                  marginLeft: "10px",
                  fontSize: "14px",
                  textAlign: "center",
                  marginTop: 2,
                  marginBottom: 2,
                }}
              >
                2-161/8, Srinivasa Nagar, Madhurawada, Visakhapatanam,
                Visakhapatnam, Andhra Pradesh 530041, India
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#189ab4",
                  borderRadius: 8,
                  color: "#fff",
                  fontFamily: "poppins, sans-serif",
                  fontWeight: "600",
                  padding: "8px 16px", // Adjust padding for better spacing
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "#189ab4", // Set hover color to #189ab4
                  },
                  "&:active": {
                    backgroundColor: "#189ab4", // Set active color to #189ab4
                  },
                }}
                onClick={handleOpenDialog3}
              >
                Confirm Location
              </Button>
              <Typography
                sx={{
                  fontFamily: "poppins, sans-serif",
                  marginLeft: "10px",
                  fontSize: "14px",
                  textAlign: "center",
                  marginTop: 1,
                  marginBottom: 1,
                }}
              >
                Can’t find your location on the map?
              </Typography>
              <Button
                sx={{
                  border: "1px solid #189ab4",
                  borderRadius: 8,
                  width: "100%",
                  color: "#189ab4",
                  fontFamily: "poppins, sans-serif",
                  fontWeight: "600",
                  padding: "8px 16px", // Adjust padding for better spacing
                  "&:hover": {
                    border: "1px solid #189ab4", // Set hover color to #189ab4
                  },
                  "&:active": {
                    border: "1px solid #189ab4", // Set active color to #189ab4
                  },
                }}
              >
                Search Location
              </Button>
            </DialogContent>
          </Dialog>
          <Dialog
            open={openDialog3}
            onClose={handleCloseDialog3} F
            sx={{ maxWidth: "500px", margin: "auto" }}
          >
            <DialogTitle
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "poppins, sans-serif",
                fontWeight: "600",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IoMdArrowBack
                  onClick={handleback}
                  style={{ marginBottom: -2, fontWeight: "600", fontSize: 20 }}
                />
                <Typography
                  sx={{
                    fontFamily: "poppins, sans-serif",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    marginLeft: 2,
                    fontSize: 20,
                  }}
                >
                  {" "}
                  Set Delivery Location
                </Typography>
              </div>
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleCloseDialog3}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent sx={{ padding: 2 }}>
              <TextField
                sx={{ marginBottom: 1 }}
                id="standard-basic"
                label="Name"
                variant="standard"
                fullWidth
                required
                InputLabelProps={{
                  style: { fontFamily: "poppins, sans-serif" },
                }}
                InputProps={{ style: { fontFamily: "poppins, sans-serif" } }}
              />
              <TextField
                sx={{ marginBottom: 1 }}
                id="standard-basic"
                label="Mobile Number"
                variant="standard"
                fullWidth
                required
                InputLabelProps={{
                  style: { fontFamily: "poppins, sans-serif" },
                }}
                InputProps={{ style: { fontFamily: "poppins, sans-serif" } }}
              />
              <TextField
                sx={{ marginBottom: 1 }}
                id="standard-basic"
                label="House No., Apartment Name"
                variant="standard"
                fullWidth
                required
                InputLabelProps={{
                  style: { fontFamily: "poppins, sans-serif" },
                }}
                InputProps={{ style: { fontFamily: "poppins, sans-serif" } }}
              />
              <TextField
                sx={{ marginBottom: 1 }}
                id="standard-basic"
                label="Area Details"
                variant="standard"
                fullWidth
                required
                InputLabelProps={{
                  style: { fontFamily: "poppins, sans-serif" },
                }}
                InputProps={{ style: { fontFamily: "poppins, sans-serif" } }}
              />
              <TextField
                sx={{ marginBottom: 1 }}
                id="standard-basic"
                label="Landmark"
                variant="standard"
                fullWidth
                required
                InputLabelProps={{
                  style: { fontFamily: "poppins, sans-serif" },
                }}
                InputProps={{ style: { fontFamily: "poppins, sans-serif" } }}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    sx={{ marginBottom: 1 }}
                    id="standard-basic"
                    label="Pincode"
                    variant="standard"
                    fullWidth
                    required
                    InputLabelProps={{
                      style: { fontFamily: "poppins, sans-serif" },
                    }}
                    InputProps={{
                      style: { fontFamily: "poppins, sans-serif" },
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    sx={{ marginBottom: 1 }}
                    id="standard-basic"
                    label="City"
                    variant="standard"
                    fullWidth
                    required
                    InputLabelProps={{
                      style: { fontFamily: "poppins, sans-serif" },
                    }}
                    InputProps={{
                      style: { fontFamily: "poppins, sans-serif" },
                    }}
                  />
                </Grid>
              </Grid>
              <TextField
                sx={{ marginBottom: 1 }}
                id="standard-basic"
                label="State"
                variant="standard"
                fullWidth
                required
                InputLabelProps={{
                  style: { fontFamily: "poppins, sans-serif" },
                }}
                InputProps={{ style: { fontFamily: "poppins, sans-serif" } }}
              />
              <Typography sx={{ fontFamily: "poppins,sans-serif" }}>
                Choose name for the address*
              </Typography>
              <div>
                <Button
                  sx={{
                    fontFamily: "poppins,sans-serif",
                    border: "1px solid #189ab4",
                    margin: 1,
                    color: selectedOption === "HOME" ? "#ffffff" : "#189ab4",
                    backgroundColor:
                      selectedOption === "HOME" ? "#189ab4" : "transparent",
                  }}
                  onClick={() => handleSelect("HOME")}
                >
                  HOME
                </Button>
                <Button
                  sx={{
                    fontFamily: "poppins,sans-serif",
                    border: "1px solid #189ab4",
                    margin: 1,
                    color: selectedOption === "OFFICE" ? "#ffffff" : "#189ab4",
                    backgroundColor:
                      selectedOption === "OFFICE" ? "#189ab4" : "transparent",
                  }}
                  onClick={() => handleSelect("OFFICE")}
                >
                  OFFICE
                </Button>
                <Button
                  sx={{
                    fontFamily: "poppins,sans-serif",
                    border: "1px solid #189ab4",
                    margin: 1,
                    color: selectedOption === "OTHERS" ? "#ffffff" : "#189ab4",
                    backgroundColor:
                      selectedOption === "OTHERS" ? "#189ab4" : "transparent",
                  }}
                  onClick={() => handleSelect("OTHERS")}
                >
                  OTHERS
                </Button>
              </div>
            </DialogContent>
            <Divider />
            <DialogActions>
              <Button
                sx={{
                  backgroundColor: "#189ab4",
                  borderRadius: 8,
                  color: "#fff",
                  fontFamily: "poppins, sans-serif",
                  fontWeight: "600",
                  paddingLeft: 2,
                  paddingRight: 2,
                  paddingTop: 1,
                  paddingBottom: 1,
                  "&:hover": {
                    backgroundColor: "#189ab4", // Set hover color to #189ab4
                  },
                  "&:active": {
                    backgroundColor: "#189ab4", // Set active color to #189ab4
                  },
                  textTransform: "uppercase",
                }}
              >
                Save Address
              </Button>
            </DialogActions>
          </Dialog>
          <Box sx={{ flexGrow: 1, marginLeft: 15 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
          <Box sx={{ display: { md: "flex" }, marginLeft: 15 }}>
            <IconButton
              size="large"
              aria-label="show 7 new notifications"
              color="inherit"
            >
              <IoMdNotifications style={{ color: "#05445e" }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 7 new notifications"
              color="inherit"
              onClick={() => navigate("/cart")}
            >
              <HiShoppingCart style={{ color: "#05445e" }} />
            </IconButton>
          </Box>
          {loggedIn ? (
            <Typography>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleAvatarMenuClick}
              >
                <Avatar sx={{ bgcolor: "#05445e" }}>U</Avatar>
              </IconButton>
              {/* <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleAvatarMenuClose}
              >
                <MenuItem onClick={handleAvatarMenuClose} sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                  <div><FaUsers />Manage Profiles</div>
                  <RiArrowRightSLine />
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleAvatarMenuClose} sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                  <div><MdAddLocationAlt />Address Book</div>
                  <RiArrowRightSLine />
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleAvatarMenuClose} sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                  <div><FaCrown />My Membership</div>
                  <RiArrowRightSLine />
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleAvatarMenuClose} sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                  <div><HiShoppingBag /> My Orders</div>
                  <RiArrowRightSLine />
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleAvatarMenuClose} sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                  <div><FaCreditCard />Transactions & Payments</div>
                  <RiArrowRightSLine />
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleAvatarMenuClose} sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                  <div><IoWalletSharp />Health Wallet</div>
                  <RiArrowRightSLine />
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleAvatarMenuClose}><BiSolidHelpCircle />Need Help?</MenuItem>
                <Divider />
                <MenuItem onClick={handleAvatarMenuClose}><IoMdLogOut />Logout</MenuItem>
              </Menu> */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleAvatarMenuClose}
              >
                <MenuItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => navigate("/medicalrecords")}
                >
                  <div>Medical Records</div>
                  <RiArrowRightSLine />
                </MenuItem>
                <Divider />
                <MenuItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => navigate("/appointments")}
                >
                  <div>Appointments</div>
                  <RiArrowRightSLine />
                </MenuItem>
                <Divider />
                <MenuItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => navigate("/labtest")}
                >
                  <div>Lab Test</div>
                  <RiArrowRightSLine />
                </MenuItem>
                <Divider />
                <MenuItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => navigate("/orders")}
                >
                  <div>Orders</div>
                  <RiArrowRightSLine />
                </MenuItem>
                <Divider />

                <MenuItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  onClick={() => navigate("/profile")}
                >
                  <div>View /Update Profile</div>
                  <RiArrowRightSLine />
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleAvatarMenuClose}>
                  <BiSolidHelpCircle />
                  Need Help?
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleAvatarMenuClose}>
                  <IoMdLogOut />
                  Logout
                </MenuItem>
              </Menu>
            </Typography>
          ) : (
            <IconButton onClick={handleOpenDialog4}>
              <FaCircleUser style={{ color: "#05445e" }} />
            </IconButton>
          )}
          <Dialog open={openDialog4} onClose={handleCloseDialog4} maxWidth="md">
            <Login onClose={handleCloseDialog4} />
          </Dialog>
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#EAF7F9",
          height: "30px", // Adjust the height as needed
          paddingTop: 1, // Adjust the top padding as needed
          paddingBottom: 1,
          paddingRight: '180px',// Adjust the bottom padding as needed
          paddingLeft: '180px'// Adjust the bottom padding as needed
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "black",
            }}
          >
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} sx={{ marginY: 1 }}>
                <Typography
                  textAlign="center"
                  sx={{ textTransform: "capitalize" }}
                  onClick={() => navigate("/doctors")}
                >
                  Doctors
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{ marginY: 1 }}>
                <Typography
                  textAlign="center"
                  sx={{ textTransform: "capitalize" }}
                >
                  Medicines
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{ marginY: 1 }}>
                <Typography
                  textAlign="center"
                  sx={{ textTransform: "capitalize" }}
                >
                  Lab Tests
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{ marginY: 1 }}>
                <Typography
                  textAlign="center"
                  sx={{ textTransform: "capitalize" }}
                >
                  Near By Clinics
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{ marginY: 1 }}>
                <Typography
                  textAlign="center"
                  sx={{ textTransform: "capitalize" }}
                >
                  AI Assistance
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} sx={{ marginY: 1 }}>
                <Typography
                  textAlign="center"
                  sx={{ textTransform: "capitalize" }}
                >
                  Diet & Nutrition
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography

            sx={{
              my: 1,
              color: "#05445E",
              display: "block",
              fontFamily: "poppins, sans-serif",
              fontWeight: '600', cursor: "pointer",
              textTransform: "uppercase"
            }}
            onClick={() => navigate("/doctors")}
          >
            Doctors
          </Typography>
          <Typography

            sx={{
              my: 1,
              color: "#05445E",
              display: "block",
              fontFamily: "poppins, sans-serif",
              fontWeight: '600', cursor: "pointer",

              textTransform: "uppercase"
            }}
            onClick={() => navigate("/medicines")}
          >
            Medicines
          </Typography>
          <Typography
            onClick={() => navigate("/doctors")}
            sx={{
              my: 1,
              color: "#05445E",
              display: "block",
              fontFamily: "poppins, sans-serif",
              fontWeight: '600', cursor: "pointer",
              textTransform: "uppercase"
            }}
          >
            Lab Tests
          </Typography>

          <Typography
            onClick={() => navigate("/doctors")}
            sx={{
              my: 1,
              color: "#05445E",
              fontWeight: '600',
              display: "block",
              fontFamily: "Jost, sans-serif",
              textTransform: "uppercase"
            }}
          >
            AI Assistance
          </Typography>
          <Typography
            onClick={() => navigate("/doctors")}
            sx={{
              my: 1,
              color: "#05445E",
              display: "block",
              fontFamily: "poppins, sans-serif",
              fontWeight: '600',
              textTransform: "uppercase"
            }}
          >
            Diet & Nutrition
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;
