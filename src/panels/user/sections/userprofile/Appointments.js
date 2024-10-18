import React, { Component } from "react";
import {
  TableContainer,
  Paper,
  Grid,
  Box,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ExpandLess } from "@mui/icons-material";

class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedRows: new Set(), // Set to store expanded row indices
      expandedAppointmentIndex: -1, // Index of the expanded appointment
      expandedDateIndex: -1, // Index of the expanded follow-up date
    };
  }

  // Function to toggle row expansion
  toggleRowClose = (index) => {
    const expandedRows = new Set(this.state.expandedRows);
    if (expandedRows.has(index)) {
      expandedRows.delete(index);
    }
    this.setState({ expandedRows });
  };

  // Dummy data for appointments
  appointments = [
    {
      sNO: 1,
      department: "Cardiology",
      doctor: "Dr. John Doe",
      date: "2024-03-20",
      status: "completed",
      followUp: 3,
      followUpDates: ["2024-04-01", "2024-04-15", "2024-05-01"],
    },
    {
      sNO: 2,
      department: "Neurology",
      doctor: "Dr. Jane Smith",
      date: "2024-03-21",
      status: "pending",
      followUp: 0,
      followUpDates: [],
    },
    {
      sNO: 3,
      department: "Dermatology",
      doctor: "Dr. David Johnson",
      date: "2024-03-22",
      status: "not yet",
      followUp: 1,
      followUpDates: ["2024-04-10"],
    },
    // Add more dummy data here
  ];

  // Handler function to toggle row expansion
  toggleRowExpansion = (index) => {
    const expandedRows = new Set(this.state.expandedRows);
    if (expandedRows.has(index)) {
      expandedRows.delete(index);
    } else {
      expandedRows.add(index);
    }
    this.setState({ expandedRows });
  };

  // Handler function to toggle appointment details
  toggleAppointmentDetails = (index, dateIndex) => {
    const expandedAppointmentIndex =
      this.state.expandedAppointmentIndex === index &&
      this.state.expandedDateIndex === dateIndex
        ? -1
        : index;
    this.setState({ expandedAppointmentIndex, expandedDateIndex: dateIndex });
  };

  renderFollowUpCell = (status, followUp, index) => {
    if (status === "completed" && followUp > 0) {
      return (
        <IconButton onClick={() => this.toggleRowExpansion(index)}>
          <MoreHorizIcon />
        </IconButton>
      );
    } else {
      return "-";
    }
  };

  renderExpandedRow = (appointment, index) => {
    const { followUpDates } = appointment;
    const { expandedAppointmentIndex, expandedDateIndex } = this.state;

    return (
      <TableRow>
        <TableCell colSpan={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontWeight: "600",
                fontFamily: "poppins, sans-sarif",
                marginBottom: "20px",
              }}
            >
              Follow up's:
              <div style={{ marginLeft: "80px" }}>
                <ol style={{ padding: "0", margin: "0" }}>
                  {followUpDates.map((date, i) => (
                    <li key={i}>
                      <Box
                        sx={{
                          backgroundColor: "#189AB4  ",
                          padding: "5px",
                          borderRadius: "5px",
                          marginRight: "5px",
                          marginBottom: "5px",
                          fontFamily: "poppins, sans-sarif",
                          color: "white",
                        }}
                        onClick={() => this.toggleAppointmentDetails(index, i)}
                      >
                        {date}
                      </Box>
                      {expandedAppointmentIndex === index &&
                        expandedDateIndex === i && (
                          <div
                            style={{
                              backgroundColor: "white",
                              padding: "10px",
                              marginTop: "10px",
                              borderRadius: "5px",
                            }}
                          >
                            <Grid container spacing={1} direction="column">
                              <Grid item>
                                <strong
                                  style={{ fontFamily: "poppins, sans-sarif" }}
                                >
                                  Appointment ID:
                                </strong>{" "}
                                {appointment.sNO}
                              </Grid>
                              <Grid item>
                                <strong
                                  style={{ fontFamily: "poppins, sans-sarif" }}
                                >
                                  Doctor Name:
                                </strong>{" "}
                                {appointment.doctor}
                              </Grid>
                              <Grid item>
                                <strong
                                  style={{ fontFamily: "poppins, sans-sarif" }}
                                >
                                  Appointment Date:
                                </strong>{" "}
                                {appointment.date}
                              </Grid>
                              <Grid item>
                                <strong
                                  style={{ fontFamily: "poppins, sans-sarif" }}
                                >
                                  Status:
                                </strong>{" "}
                                {appointment.status}
                              </Grid>
                              <Grid item style={{ textAlign: "left" }}>
                                <button
                                  style={{
                                    fontFamily: "poppins, sans-sarif",
                                    height: "36px",
                                    width: "72px",
                                    backgroundColor: "#189AB4",
                                    border: "none",
                                    color: "white",
                                    fontSize: "12px",
                                    borderRadius: "18px",
                                  }}
                                >
                                  Reports
                                </button>
                              </Grid>
                            </Grid>
                          </div>
                        )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <IconButton onClick={() => this.toggleRowClose(index)}>
              <ExpandLess />
            </IconButton>
          </div>
        </TableCell>
      </TableRow>
    );
  };

  render() {
    return (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Box bgcolor="#F0FFF9"  mt={2} height={40}>
              <Typography variant="h5"
                style={{
                  marginBottom: "10rem",
                  paddingTop: "0px",
                  color: "#05445E",
                  fontFamily: "poppins, sans-sarif",
                  marginLeft: "20px",
                  position: "absolute",
                  bottom: "325px",
                }}
              >
                My Appointments
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <TableContainer component={Paper}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        fontSize: "1.2rem",
                        padding: "4.5rem",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        color: "#189AB4",
                        fontFamily: "poppins, sans-sarif",
                      }}
                    >
                      S.No
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "1.2rem",
                        padding: "4.5rem",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        fontFamily: "poppins, sans-sarif",
                        color: "#189AB4",
                      }}
                    >
                      Department
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "1.2rem",
                        padding: "4.5rem",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        fontFamily: "poppins, sans-sarif",
                        color: "#189AB4",
                      }}
                    >
                      Name of Doctor/Lab
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "1.2rem",
                        padding: "4.5rem",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        fontFamily: "poppins, sans-sarif",
                        color: "#189AB4",
                      }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "1.2rem",
                        padding: "5rem",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        fontFamily: "poppins, sans-sarif",
                        color: "#189AB4",
                      }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: "1.2rem",
                        padding: "4.5rem",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        fontFamily: "poppins, sans-sarif",
                        color: "#189AB4",
                      }}
                    >
                      Follow Up
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.appointments.map((appointment, index) => (
                    <React.Fragment key={index}>
                      <TableRow>
                        <TableCell
                          style={{
                            fontSize: "1rem",
                            padding: "5rem",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            fontFamily: "poppins, sans-sarif",
                          }}
                        >
                          {appointment.sNO}
                        </TableCell>
                        <TableCell
                          style={{
                            fontSize: "1rem",
                            padding: "5rem",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            fontFamily: "poppins, sans-sarif",
                          }}
                        >
                          {appointment.department}
                        </TableCell>
                        <TableCell
                          style={{
                            fontSize: "1rem",
                            padding: "5.5rem",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            fontFamily: "poppins, sans-sarif",
                          }}
                        >
                          {appointment.doctor}
                        </TableCell>
                        <TableCell
                          style={{
                            fontSize: "15px",
                            padding: "5rem",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            fontFamily: "poppins, sans-sarif",
                          }}
                        >
                          {appointment.date}
                        </TableCell>
                        <TableCell
                          style={{
                            fontSize: "1rem",
                            padding: "5rem",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            fontFamily: "poppins, sans-sarif",
                          }}
                        >
                          {appointment.status}
                        </TableCell>
                        <TableCell
                          style={{
                            fontSize: "1rem",
                            padding: "1.2rem",
                            verticalAlign: "middle",
                            textAlign: "center",
                          }}
                        >
                          {this.renderFollowUpCell(
                            appointment.status,
                            appointment.followUp,
                            index
                          )}
                        </TableCell>
                      </TableRow>
                      {/* Render expanded row if the current row is expanded */}
                      {this.state.expandedRows.has(index) &&
                        this.renderExpandedRow(appointment, index)}
                    </React.Fragment>
                  ))}
                </TableBody>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Appointments;
