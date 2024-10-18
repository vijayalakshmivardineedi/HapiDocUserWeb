import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useNavigate } from "react-router-dom";

const DoctorList = () => {
  const navigate =useNavigate();
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: "30px", marginBottom: "30px" }}
    >
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card sx={{ maxWidth: 300 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
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
          </div>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                fontFamily: "poppins, sans-serif",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Dr. Athaluri Mounika
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
            >
              BDS, MDS Endodontist, Dentist
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
            >
              12 Years Experience
            </Typography>

            <Typography
              variant="body2"
              sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
            >
              <span>
                <ThumbUpAltIcon
                  sx={{
                    backgroundColor: "green",
                    marginRight: "4px",
                    fontSize: "small",
                    borderRadius: "5px",
                  }}
                />
                100%
              </span>
              <span>(29 patients)</span>
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: "5px" }}>
              <Grid item xs={6} style={{ display: "flex" }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#05445E",
                    color: "#FFFFFF",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    width: "100%", // Set width to 100% to occupy full width of parent
                    height: "100%", // Set height to 100% to occupy full height of parent
                  }}
                  onClick={()=>navigate("/doctorsProfile")}
                >
                  Clinic Visit
                </Button>
              </Grid>
              <Grid item xs={6} style={{ display: "flex" }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#05445E",
                    color: "#FFFFFF",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    width: "100%", // Set width to 100% to occupy full width of parent
                    height: "100%", // Set height to 100% to occupy full height of parent
                  }}
                >
                  Online Consultation
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card sx={{ maxWidth: 300 }}>
          <div
            style={{ display: "flex", justifyContent: "center", padding: 10 }}
          >
            {" "}
            {/* Flexbox centering */}
            <CardMedia
              component="img"
              height="140"
              image="https://images.jdmagicbox.com/comp/delhi/a8/011pxx11.xx11.140915184730.u8a8/catalogue/dr-preeti-chauhan-mayur-vihar-phase-3-delhi-homeopathic-doctors-z6fnslfqb7.jpg"
              alt="Health Care"
              sx={{
                borderRadius: "50%",
                width: "140px",
                height: "140px",
                objectFit: "cover",
              }}
            />
          </div>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                fontFamily: "poppins, sans-serif",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Dr. Preeti Maurya
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
            >
              BDS Prosthodontist, Dentist
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
            >
              13 Years Experience
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
            >
              <span>
                <ThumbUpAltIcon
                  sx={{
                    backgroundColor: "green",
                    marginRight: "4px",
                    fontSize: "small",
                    borderRadius: "5px",
                  }}
                />
                <span>99%</span>
                <span>(71 patients)</span>
              </span>
            </Typography>

            <Grid container spacing={2} sx={{ marginTop: "5px" }}>
              <Grid item xs={6} style={{ display: "flex" }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#05445E",
                    color: "#FFFFFF",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    width: "100%", // Set width to 100% to occupy full width of parent
                    height: "100%", // Set height to 100% to occupy full height of parent
                  }}
                >
                  Clinic Visit
                </Button>
              </Grid>
              <Grid item xs={6} style={{ display: "flex" }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#05445E",
                    color: "#FFFFFF",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    width: "100%", // Set width to 100% to occupy full width of parent
                    height: "100%", // Set height to 100% to occupy full height of parent
                  }}
                >
                  Online Consultation
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card sx={{ maxWidth: 300 }}>
          <div
            style={{ display: "flex", justifyContent: "center", padding: 10 }}
          >
            {" "}
            <CardMedia
              component="img"
              height="140"
              image="https://citineurocentre.com/wp-content/uploads/2023/03/dr-vamshidhar-768x680.jpg"
              alt="Health Care"
              sx={{
                borderRadius: "50%",
                width: "140px", // Adjust as needed
                height: "140px", // Adjust as needed
                objectFit: "cover",
              }}
            />
          </div>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                fontFamily: "poppins, sans-serif",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Dr. Ravi Gurram
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
            >
              BDS Prosthodontist, Dentist
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
            >
              17 Years Experience
            </Typography>

            <Typography
              variant="body2"
              sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
            >
              <span>
                <ThumbUpAltIcon
                  sx={{
                    backgroundColor: "green",
                    marginRight: "4px",
                    fontSize: "small",
                    borderRadius: "5px",
                  }}
                />
                99%
              </span>
              <span>(42 patients)</span>
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: "5px" }}>
              <Grid item xs={6} style={{ display: "flex" }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#05445E",
                    color: "#FFFFFF",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  Clinic Visit
                </Button>
              </Grid>
              <Grid item xs={6} style={{ display: "flex" }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#05445E",
                    color: "#FFFFFF",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  Online Consultation
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DoctorList;