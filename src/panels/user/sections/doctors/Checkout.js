import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Paper,
  Divider,
  Card,
  Button,
  DialogActions,
  TextField, Select, FormControl, InputLabel,
  DialogContent,
  DialogTitle,
  Dialog,
  IconButton,
  MenuItem,
  CardMedia,
  CardContent,
} from "@mui/material";
import { FaClinicMedical } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { MdModeEdit } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
const Checkout = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [clinicName, setClinicName] = useState("");

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleClick1 = (button) => {
    if (selectedButton === button) {
      setSelectedButton(null);
    } else {
      setSelectedButton(button);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
    setEmail("");
    setEmailError("");
  };
  const handleSave = () => {
    console.log("saved");

    setOpen1(false);
  };

  return (
    <Container>
      <Grid container spacing={2} sx={{ marginTop: "10px", marginBottom: "20px" }}>
        <Grid item xs={4}>
          <Card sx={{ display: "flex", maxWidth: 400, paddingLeft: 2, paddingTop: 2, paddingBottom: 2, }}>
            <CardMedia
              component="img"
              height="140"
              image="https://skedoccoresa.blob.core.windows.net/skedoc-images/doctorimages/Hyderabad_e1a9d720-e246-47b0-817b-f3eb8cae6758.jpeg"
              alt="Health Care"
              sx={{
                borderRadius: "50%",
                width: "140px",
                height: "140px",
                objectFit: "cover",

              }}
            />
            <CardContent sx={{ padding: 1 }}>
              <Typography
                gutterBottom
                variant="h5"
                sx={{
                  fontFamily: "poppins, sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: '#05445e'
                }}
              >
                Dr. Athaluri Mounika
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px", marginTop: -1, color: "#777" }}
              >
                BDS, MDS Endodontist, Dentist.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "poppins, sans-serif", fontSize: "14px",
                  color: '#189ab4'
                }}
              >
                General Physician / Internal Medicines
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "poppins, sans-serif", fontSize: "14px", color: '#189ab4' }}
              >
                12 Years Experiance
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              marginTop: "10px",
              backgroundColor: "#eaf7f8",
              color: "#05445E",
              padding: 1,
              marginBottom: 3,
            }}
          >
            <Box
              sx={{
                padding: "8px",
                borderBottom: "1px solid #ccc",
                display: "flex",
                justifyContent: "space-between",
                alginItem: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Appointment Details
              </Typography>
              <IconButton>
                <MdModeEdit style={{ fontSize: "18px", color: "#05445e" }} />
              </IconButton>
            </Box>
            <Divider sx={{ border: "1px solid light Grey" }} />
            <Box
              sx={{
                padding: "8px",
                borderBottom: "1px solid #ccc",
                display: "flex",
                justifyContent: "flex-start",
                alginItem: "center",
              }}
            >
              <FaClinicMedical />

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  marginLeft: "7px",
                }}
              >
                Clinic Visit
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "8px",
                borderBottom: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <FaCalendarAlt />
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  marginLeft: "7px",
                }}
              >
                Today, 12:20 PM
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoLocationSharp style={{ fontSize: "43px", marginLeft: "7px", marginright: "7px" }} />
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  marginLeft: "5px",
                }}
              >
                Hyderabad Apollo Hospitals Hyderguda Near, Hyderguda-Basheerbagh
                Road, King Koti, Hyderabad Hyderguda, Telangana
              </Typography>
              {/* </Grid> */}
            </Box>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Paper sx={{ padding: 2, margin: 1 }}>
            <Typography
              style={{
                marginBottom: "5px",
                color: "#05445E",
                fontFamily: "Poppins, sans-serif",
                fontSize: "17px",
                fontWeight: 600,
              }}
            >
              SELECT MEMBER
            </Typography>
            <Divider sx={{ border: "1px solid light Grey" }} />
            <Typography
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                marginTop: "7px",
                color: "#777",
              }}
            >
              Who is the patient?
            </Typography>
            <Typography
              style={{
                marginBottom: "16px",
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
                color: "#777",
                fontWeight: 400,
              }}
            >
              Make sure to add valid patient details, it will be reflected on
              Prescription and Invoice
            </Typography>
            <div style={{ display: "flex" }}>
              <Box
                style={{
                  marginBottom: "8px",
                  padding: 10,
                  fontFamily: "Poppins, sans-serif",
                  borderRadius: 8,
                  fontSize: "14px", marginRight: 15,
                  fontWeight: 500, border: selectedButton === "button1" ? "1px solid #fff" : "1px solid #ccc",
                  backgroundColor:
                    selectedButton === "button1" ? "#189ab4" : "",
                  color: selectedButton === "button1" ? "white" : "black",
                  cursor: "pointer"
                }}
                onClick={() => handleClick("button1")}
              >
                <Typography variant="body1" sx={{
                  fontFamily: "poppins, sans-serif",
                }}>
                  Prasanthi
                </Typography>
                <Typography variant="body2" sx={{ fontSize: "11px", fontFamily: "poppins, sans-serif", }}>
                  Female 22
                </Typography>
              </Box>
              <Box
                style={{
                  marginBottom: "8px",
                  fontFamily: "poppins, sans-serif",
                  fontSize: "14px", borderRadius: 8,
                  fontWeight: 500, padding: 10, marginRight: 15,
                  border: selectedButton === "button2" ? "1px solid #fff" : "1px solid #ccc",
                  backgroundColor:
                    selectedButton === "button2" ? "#189ab4" : "",
                  color: selectedButton === "button2" ? "white" : "black",
                  cursor: "pointer"
                }}
                onClick={() => handleClick("button2")}
              >
                <Typography variant="body1" sx={{
                  fontFamily: "poppins, sans-serif",
                }} > Aishwarya </Typography>
                <Typography variant="body2" sx={{
                  fontSize: "11px",
                  fontFamily: "poppins, sans-serif",
                }}
                >
                  40 Female
                </Typography>
              </Box>
              <Button
                style={{
                  marginBottom: "8px",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#05445E",
                }}
                onClick={handleClickOpen1}
              >
                + Add members
              </Button>
                <Dialog open={open1} onClose={handleClose1} sx={{ maxWidth: "430px", margin: "auto" }}>
                  <DialogTitle
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "18px",
                      display: "flex",
                      color: "#05445e",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      borderBottom: "1px solid #ccc"
                    }}
                  >
                    Edit Appointment
                    <RxCross2
                      onClick={handleClose1}
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "#777",
                        cursor: "pointer",
                      }}
                    />
                  </DialogTitle>
                  <DialogContent>
                    <TextField
                      label="First Name"
                      variant="standard"
                      fullWidth

                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(""); // Clear error message when user starts typing
                      }}
                      error={!!emailError} // Show error style when there's an error message
                      helperText={emailError} // Display error message
                      sx={{
                        marginTop: 1,
                        marginBottom: 1,
                        color: 'blue' // Change the color to blue, you can use any valid CSS color value
                      }}
                    />
                    <TextField
                      label="Last Name"
                      variant="standard"
                      fullWidth

                      sx={{ marginTop: 1, marginBottom: 1 }}

                    />
                    <TextField
                      label="Date of Birth"
                      placeholder="dd/mm/yyyy"
                      variant="standard"
                      fullWidth

                      sx={{ marginTop: 1, marginBottom: 1 }}
                    />
                    <Typography
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        padding: 1,
                        color: "#05445e"
                      }}
                    >
                      Gender
                    </Typography>
                    <Button
                      variant="filled"
                      style={{
                        marginBottom: "5px",
                        marginLeft: 8,
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        borderRadius: 8,
                        backgroundColor:
                          selectedButton === "button3" ? "#189ab4" : "",
                        color:
                          selectedButton === "button3" ? "white" : "black",
                        border: selectedButton === 'button3F' ? "1px solid #FFF" : "1px solid #189ab4"
                      }}
                      onClick={() => handleClick1("button3")}
                    >
                      Male{" "}
                    </Button>
                    <Button
                      variant="filled"
                      style={{
                        marginBottom: "5px",
                        marginLeft: 8,
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        borderRadius: 8,
                        backgroundColor:
                          selectedButton === "button4" ? "#189ab4" : "",
                        color:
                          selectedButton === "button4" ? "white" : "black",
                        border: selectedButton === 'button4' ? "1px solid #FFF" : "1px solid #189ab4"
                      }}
                      onClick={() => handleClick("button4")}
                    >
                      Female
                    </Button>
                    <Button
                      variant="filled"
                      style={{
                        marginBottom: "5px",
                        marginLeft: 5,
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        borderRadius: 8,
                        backgroundColor:
                          selectedButton === "button5" ? "#189ab4" : "",
                        color:
                          selectedButton === "button5" ? "white" : "black",
                        border: selectedButton === 'button5' ? "1px solid #FFF" : "1px solid #189ab4"
                      }}
                      onClick={() => handleClick("button5")}
                    >
                      Other
                    </Button>
                    <TextField
                      select

                      label="Relation"
                      variant="standard"
                      value={gender}
                      onChange={handleGenderChange}
                      fullWidth
                      sx={{
                        fontFamily: "Poppins, sans-serif",
                        marginBottom: "16px", marginTop: 1, marginBottom: 1
                      }}

                    >
                      <MenuItem value="Brother">Brother</MenuItem>
                      <MenuItem value="Cousin">Cousin</MenuItem>
                      <MenuItem value="Father">Father</MenuItem>
                      <MenuItem value="Mother">Mother</MenuItem>
                      <MenuItem value="Husband">Husband</MenuItem>
                      <MenuItem value="Me">Me</MenuItem>
                    </TextField>
                    <TextField
                      label="Email Address"
                      placeholder="name@gmail.com"
                      variant="standard"
                      fullWidth

                      sx={{ marginTop: 1, marginBottom: 1 }}
                    />
                  </DialogContent>
                  <DialogActions sx={{ borderTop: "1px solid #ccc" }}>
                    <Button
                      onClick={handleClose2}
                      style={{
                        backgroundColor: "#189ab4",
                        fontFamily: "poppins,sans-serif",
                        color: "white",
                        fontSize: "15px",
                        borderRadius: 20,
                        fontWeight: 600,
                      }}
                    >
                      Save
                    </Button>
                  </DialogActions>
                </Dialog>
            </div>
          </Paper>
          <Paper sx={{ padding: 2, margin: 1 }}>
            <Typography
              sx={{
                padding: "8px",
                color: "#05445E",
                fontFamily: "Poppins, sans-serif",
                fontSize: "17px",
                fontWeight: 600,
              }}
            >
              TOTAL CHARGES
            </Typography>
            <Divider
              sx={{
                border: "1px solid light Grey",
                fontFamily: "Poppins, sans-serif",
                fontSize: "13px",
                fontWeight: 400,
              }}
            />
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "8px",
                padding: 1,
              }}
            >

              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Consult Fee
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Rs. 600.00
              </Typography>
            </Grid>
            <Divider
              sx={{
                border: "1px solid light Grey",
                fontFamily: "Poppins, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
              }}
            />
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                To Pay
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Rs. 600.00
              </Typography>
            </Grid>
            <Divider sx={{ border: "1px solid light Grey" }} />
            <Typography
              style={{
                padding: 3,
                fontFamily: "Poppins, sans-serif",
                fontSize: "12px",
                fontWeight: 400,
                color: "#777",
                marginTop: 3
              }}
            >
              One-time Hospital Registration Charges might be applicable for new
              users.
            </Typography>
          </Paper>
          <div style={{ textAlign: 'center' }}>
            <Button
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "15px",
                backgroundColor: "#189ab4",
                fontWeight: 600, // Changed from 400 to 600
                color: "white",
                borderRadius: "20px",
                padding: 10
              }}
            >
              Book Appointments
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Checkout;
