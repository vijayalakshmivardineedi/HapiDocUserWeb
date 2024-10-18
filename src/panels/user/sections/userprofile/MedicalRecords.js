import React, { useState } from 'react';
import { Tabs, Tab, Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';

const MedicalRecords = () => {
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Card styles
  const cardStyle = {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    borderRadius: '5px',
    padding: '16px',
    backgroundColor: '#fff',
    height: '240px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };
  const downloadIconStyle = {
    // Define your styles here
  };
  
  const viewMoreButtonStyle = {
    // Define your styles here
  };
  
  // Styles for the first card with status and ID
  const firstCardStyle = {
    ...cardStyle,
    marginLeft: 'auto',
    position: 'relative',
  };

  // Status and ID styles
  const statusStyle = {
    color: 'green',
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontWeight: 'bold',
  };

  const idStyle = {
    position: 'absolute',
    top: '42px',
    right: '10px',
  };

  const priceNew = {
    position: 'absolute',
    top: '55px',
    left: '15px',
    fontWeight: 'bold',
  };

  const priceNew2 = {
    position: 'absolute',
    top: '65px',
    right: '15px',
    fontWeight: 'bold',
  };

  // Collection date style
  const collectionDateStyle = {
    position: 'absolute',
    top: '45px',
    left: '15px',
  };

  // Lab test style
  const labTestStyle = {
    position: 'absolute',
    top: '80px',
    left: '15px',
  };

  // Patient details style
  const patientDetailsStyle = {
    position: 'absolute',
    top: '115px',
    left: '15px',
  };

  const reportsStyle = {
    position: 'absolute',
    top: '220px',
    left: '15px',
    backgroundColor: '#05445E',
    color: 'white',
    padding: '5px',
    borderRadius: '3px',
    fontSize: '14px',
  };

  const labNameStyle = {
    position: 'absolute',
    top: '219px',
    right: '15px',
    color: '#05445E',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const detailsStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '15px',
  };

  return (
    <div style={{ backgroundColor: '#F2F0F0', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: "#05445E", textAlign: 'center' }}>All Medical Records</h1>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        aria-label="medical records tabs"
        centered
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#05445E',
          },
        }}
      >
        <Tab value="one" label="All" sx={{ '&.Mui-selected': { color: '#189AB4' } }} />
        <Tab value="two" label="Lab Reports" sx={{ '&.Mui-selected': { color: '#189AB4' } }} />
        <Tab value="three" label="Prescription" sx={{ '&.Mui-selected': { color: '#189AB4' } }} />
        <Tab value="four" label="Other" sx={{ '&.Mui-selected': { color: '#189AB4' } }} />
      </Tabs>
      {value === 'one' && (
        <Box sx={{ flexGrow: 1, marginTop: 2 }}>
          <Grid container spacing={4} justifyContent="center">
            {/* First Card */}
            <Grid item xs={12} sm={6} md={4}>
              <div style={firstCardStyle}>
                <h2 style={{ marginTop: "-10px", color: "#05445E" }}>Home Sample</h2>
                <span style={collectionDateStyle}>Collection Date: 8/17/2023</span>
                <p style={priceNew}>Lipid Profile Test </p>
                {/* <h3 style={labTestStyle}>Lipid Profile Test</h3> */}
                {/* Patient details */}
                <div style={patientDetailsStyle}>
                  <p><span style={{ color: "#05445E", fontWeight: "bold" }}>Paavan</span>     23|Male</p>
                  <p style={{ marginTop: "-12px" }}>Flat No302, PRS Rama Towers, Vuda colony PM.Palem,Vizag. 530041</p>
                </div>

                <span style={statusStyle}>Done</span>
                <span style={idStyle}>ID: TRU786</span>
                <span style={priceNew2}>499/-</span>
                <span style={reportsStyle}>Reports By : 5/04/2004</span>
                <span style={labNameStyle}>Vijaya Labs</span>
                <div style={detailsStyle}>
                  {/* Other details */}
                </div>
              </div>
            </Grid>
            {/* Second Card */}
            <Grid item xs={12} sm={6} md={4}>
              <div style={firstCardStyle}>
                <h2 style={{ marginTop: "-10px", color: "#05445E" }}> lab Sample</h2>
                <span style={collectionDateStyle}>Collection Date: 4/11/2024</span>
                <p style={priceNew}>Complete Blood Count Test
 </p>
                {/* <h3 style={labTestStyle}>Complete Blood Count Test</h3> */}
                {/* Patient details */}
                <div style={patientDetailsStyle}>
                  <p><span style={{ color: "#05445E", fontWeight: "bold" }}>Paavan</span>     30|Male</p>
                  <p style={{ marginTop: "-12px" }}><b>Lab Adress : </b>Second Floor, Above Sarvani Sweets,  Sujatha Nagar, Visakhapatnam 530051</p>
                </div>
                <span style={statusStyle}>In Progress</span>
                <span style={idStyle}>ID: XYZ123</span>
                <span style={priceNew2}>999/-</span>
                <span style={reportsStyle}>Reports By : {new Date().toLocaleDateString()}</span>
                <span style={labNameStyle}>Random Labs</span>
                <div style={detailsStyle}>
                  {/* Other details */}
                </div>
              </div>
            </Grid>
            {/* Third Card */}
            <Grid item xs={12} sm={6} md={4}>
              <div style={firstCardStyle}>
                <h2 style={{ marginTop: "-10px", color: "#05445E" }}>Online Consultation</h2>
                <span style={collectionDateStyle}>Collection Date: 4/1/2024</span>
                <p style={priceNew}>Virtual Meeting
 </p>
                {/* <h3 style={labTestStyle}>Virtual Meeting</h3> */}
                {/* Patient details */}
                <div style={patientDetailsStyle}>
                  <p><span style={{ color: "#05445E", fontWeight: "bold" }}>laxmi</span>     25|Female</p>
                  <p style={{ marginTop: "-12px" }}><b> Topic :</b> Nausea, vomiting, fever, tachycardia (fast heartbeats), and foul breath</p>
                </div>
                <span style={statusStyle}>Online</span>
                <span style={idStyle}>ID: ONC123</span>
                <span style={priceNew2}>299/-</span>
                <span style={reportsStyle}>Shedulue No 1</span>
                <span style={labNameStyle}>Apollo Virtual</span>
                <div style={detailsStyle}>
                  {/* Other details */}
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      )}
      {/* Content for Lab Reports tab */}
      {value === 'two' && (
        <Box sx={{ flexGrow: 1, marginTop: 2 }}>
          <Grid container spacing={4} justifyContent="center">
            {/* First Lab Report Card */}
            <Grid item xs={12} sm={6} md={4}>
              <div style={firstCardStyle}>
                <h2 style={{ marginTop: "-10px", color: "#05445E" }}>Lab Report 1</h2>
                <span style={collectionDateStyle}>Collection Date: 8/17/2023</span>
                <p style={priceNew}>Test Type 1 </p>
                {/* <h3 style={labTestStyle}>Test Type 1</h3> */}
                <div style={patientDetailsStyle}>
                  <p><span style={{ color: "#05445E", fontWeight: "bold" }}>Paavan</span>     Age|Gender</p>
                  <p style={{ marginTop: "-12px" }}><b>Address</b></p>
                </div>
                <span style={statusStyle}>Status</span>
                <span style={idStyle}>ID: XYZ123</span>
                <span style={priceNew2}>Price</span>
                <span style={reportsStyle}>Reports By : Date</span>
                <span style={labNameStyle}>Lab Name</span>
                <div style={detailsStyle}>
                  {/* Other details */}
                </div>
              </div>
            </Grid>
            {/* Second Lab Report Card */}
            <Grid item xs={12} sm={6} md={4}>
              <div style={firstCardStyle}>
                <h2 style={{ marginTop: "-10px", color: "#05445E" }}>Lab Report 2</h2>
                <span style={collectionDateStyle}>Collection Date: 4/11/2024</span>
                <p style={priceNew}>Test Type 2 </p>
                {/* <h3 style={labTestStyle}>Test Type 2</h3> */}
                <div style={patientDetailsStyle}>
                  <p><span style={{ color: "#05445E", fontWeight: "bold" }}>Paavan</span>     Age|Gender</p>
                  <p style={{ marginTop: "-12px" }}><b>Address : </b></p>
                </div>
                <span style={statusStyle}>Status</span>
                <span style={idStyle}>ID: XYZ123</span>
                <span style={priceNew2}>Price</span>
                <span style={reportsStyle}>Reports By : Date</span>
                <span style={labNameStyle}>Lab Name</span>
                <div style={detailsStyle}>
                  {/* Other details */}
                </div>
              </div>
            </Grid>
            {/* Third Lab Report Card */}
            <Grid item xs={12} sm={6} md={4}>
              <div style={firstCardStyle}>
                <h2 style={{ marginTop: "-10px", color: "#05445E" }}>Lab Report 3</h2>
                <span style={collectionDateStyle}>Collection Date: 4/1/2024</span>
                <p style={priceNew}>Test Type 3 </p>
                {/* <h3 style={labTestStyle}>Test Type 3</h3> */}
                <div style={patientDetailsStyle}>
                  <p><span style={{ color: "#05445E", fontWeight: "bold" }}>Laxmi</span>     Age|Gender</p>
                  <p style={{ marginTop: "-12px" }}><b>Address : </b></p>
                </div>
                <span style={statusStyle}>Status</span>
                <span style={idStyle}>ID: XYZ123</span>
                <span style={priceNew2}>Price</span>
                <span style={reportsStyle}>Reports By : Date</span>
                <span style={labNameStyle}>Lab Name</span>
                <div style={detailsStyle}>
                  {/* Other details */}
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      )}
      {/* Content for Prescription tab */}
      {value === 'three' && 
      (
        <Box sx={{ flexGrow: 1, marginTop: 2 }}>
          <Grid container spacing={4} justifyContent="center">
            {/* First Prescription Card */}
            <Grid item xs={12} sm={6} md={4}>
              <div style={firstCardStyle}>
                <h2 style={{ marginTop: "-10px", color: "#05445E" }}> Online Consultation</h2>
                <span style={collectionDateStyle}>Collection Date: 8/17/2023</span>
                <p style={priceNew}>Virtual Meeting</p>
                <div style={patientDetailsStyle}>
                  <p><span style={{ color: "#05445E", fontWeight: "bold" }}>Laxmi</span>     Age|Gender</p>
                  <p style={{ marginTop: "-12px" }}><b>Topic : </b></p>
                </div>
                <span style={statusStyle}>Status</span>
                <span style={idStyle}>ID: XYZ123</span>
                <span style={priceNew2}>Price</span>
                <span style={reportsStyle}>Reports By : Date</span>
                <span style={labNameStyle}>Doctor's Name</span>
                <div style={detailsStyle}>
                  {/* Other details */}
                </div>
              </div>
            </Grid>
            {/* Second Prescription Card */}
            <Grid item xs={12} sm={6} md={4}>
              <div style={firstCardStyle}>
                <h2 style={{ marginTop: "-10px", color: "#05445E" }}> Online Consultation</h2>
                <span style={collectionDateStyle}>Collection Date: 4/11/2024</span>
                <p style={priceNew}>Virtual Meeting</p>
                <div style={patientDetailsStyle}>
                  <p><span style={{ color: "#05445E", fontWeight: "bold" }}>Laxmi</span>     Age|Gender</p>
                  <p style={{ marginTop: "-12px" }}><b>Topic : </b></p>
                </div>
                <span style={statusStyle}>Status</span>
                <span style={idStyle}>ID: XYZ123</span>
                <span style={priceNew2}>Price</span>
                <span style={reportsStyle}>Reports By : Date</span>
                <span style={labNameStyle}>Doctor's Name</span>
                <div style={detailsStyle}>
                  {/* Other details */}
                </div>
              </div>
            </Grid>
            {/* Third Prescription Card */}
            <Grid item xs={12} sm={6} md={4}>
              <div style={firstCardStyle}>
                <h2 style={{ marginTop: "-10px", color: "#05445E" }}>Online Consultation</h2>
                <span style={collectionDateStyle}>Collection Date: 4/1/2024</span>
                <p style={priceNew}>Virtual Meeting</p>
                <div style={patientDetailsStyle}>
                  <p><span style={{ color: "#05445E", fontWeight: "bold" }}>Paavan</span>     Age|Gender</p>
                  <p style={{ marginTop: "-12px" }}><b>Topic : </b></p>
                </div>
                <span style={statusStyle}>Status</span>
                <span style={idStyle}>ID: XYZ123</span>
                <span style={priceNew2}>Price</span>
                <span style={reportsStyle}>Reports By : Date</span>
                <span style={labNameStyle}>Doctor's Name</span>
                <div style={detailsStyle}>
                  {/* Other details */}
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      )}
    
      {value === 'four' &&(
        <Box sx={{ flexGrow: 1, marginTop: 2 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card style={firstCardStyle}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ color: "#05445E", marginLeft: "-15px", marginTop: "-15px" }}>
                    AI Report
                  </Typography>
                  <span style={{ position: 'absolute', right: '15px', color: '#05445E', top: '15px' }}>Time spent : 8Min 3sec</span>
                  <IconButton style={downloadIconStyle} aria-label="download">
                  <GetAppIcon />
                  </IconButton>
                </CardContent>
                <div style={viewMoreButtonStyle}>View More</div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card style={firstCardStyle}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ color: "#05445E", marginLeft: "-15px", marginTop: "-15px" }}>
                    Upload Files
                  </Typography>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={6}>
                      <Card>
                        <CardContent style={{ width: "100px", height: "100px", boxShadow: "2px 2px 0 0 rgba(0, 0, 0, 0.2);" }}>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" alt="Google Drive" style={{ width: '100%', height: '100%' }} />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={6}>
                      <Card>
                        <CardContent style={{ width: "100px", height: "100px" }}>
                          <img src="https://winaero.com/blog/wp-content/uploads/2018/12/file-explorer-folder-libraries-icon-18298.png" alt="Windows Upload" style={{ width: '100%', height: '100%' }} />
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </CardContent>
                <div style={viewMoreButtonStyle}>View More</div>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default MedicalRecords;