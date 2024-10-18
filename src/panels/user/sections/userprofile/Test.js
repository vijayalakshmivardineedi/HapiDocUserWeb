import React ,{useState} from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Avatar,
  Grid,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useLocation } from "react-router-dom";
const Test = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(""); // Fix the destructuring of useState

  // Function to handle click on sidebar item
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div style={{marginTop:8}}>
      <List>
        <Grid
          container
          alignItems="center"
          spacing={2}
          style={{ backgroundColor: "#189AB4", padding: "12px" }}
        >
          <Grid>
            <Avatar
              sx={{ bgcolor: "#fff", marginLeft: "5px", marginRight: "10px" }}
            >
              <PersonIcon />
            </Avatar>
          </Grid>
          <Grid>
            <Typography
              sx={{ color: "white", marginLeft: "10px" }}
              variant="subtitle1"
              component="div"
            >
              User!1
            </Typography>
            <Typography
              sx={{ color: "white", marginTop: "2px", marginLeft: "8px" }}
              variant="body2"
              component="div"
            >
              +123456789
            </Typography>
          </Grid>
        </Grid>

        {/* Sidebar Items */}
        <Grid>
          <ListItem
            button
            component={Link}
            to="/medicalrecords"
            onClick={() => handleItemClick("medicalrecord")}
            style={{
              backgroundColor:
                location.pathname === "/MedicalRecord"
                  ? "#05445E"
                  : "transparent",
              color:
                location.pathname === "/MedicalRecord" ? "white" : "inherit",
            }}
          >
            <ListItemText primary="Medical Records" />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/appointments"
            onClick={() => handleItemClick("appointments")}
            style={{
              backgroundColor:
                location.pathname === "/appointments"
                  ? "#05445E"
                  : "transparent",
              color: location.pathname === "/appointments" ? "white" : "black",
            }}
          >
            <ListItemText primary="Appointments" />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/LabTests"
            onClick={() => handleItemClick("labtests")}
            style={{
              backgroundColor:
                location.pathname === "/LabTests" ? "#05445E" : "transparent",
              color: location.pathname === "/LabTests" ? "white" : "inherit",
            }}
          >
            <ListItemText primary="LabTests" />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/Orders"
            onClick={() => handleItemClick("orders")}
            style={{
              backgroundColor:
                location.pathname === "/Orders" ? "#05445E" : "transparent",
              color: location.pathname === "/Orders" ? "white" : "inherit",
            }}
          >
            <ListItemText primary="Orders" />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/onlineconsultations"
            onClick={() => handleItemClick("onlineconsultations")}
            style={{
              backgroundColor:
                location.pathname === "/onlineconsultations"
                  ? "#05445E"
                  : "transparent",
            }}
          >
            <ListItemText primary="Online Consultations" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/payments"
            onClick={() => handleItemClick("payments")}
            style={{
              backgroundColor:
                location.pathname === "/payments" ? "#05445E" : "transparent",
            }}
          >
            <ListItemText primary="Payments" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/feedbacks"
            onClick={() => handleItemClick("feedbacks")}
            style={{
              backgroundColor:
                location.pathname === "/feedbacks" ? "#05445E" : "transparent",
            }}
          >
            <ListItemText primary="Feedbacks" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/profile"
            onClick={() => handleItemClick("profile")}
            style={{
              backgroundColor:
                location.pathname === "/profile" ? "#05445E" : "transparent",
              color: location.pathname === "/profile" ? "white" : "inherit",
            }}
          >
            <ListItemText primary="View/Update Profile" />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/settings"
            onClick={() => handleItemClick("settings")}
            style={{
              backgroundColor:
                location.pathname === "/settings" ? "#05445E" : "transparent",
            }}
          >
            <ListItemText primary="Settings" />
          </ListItem>
        </Grid>
      </List>
    </div>
  );
};
export default Test;