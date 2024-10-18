import React, { useState, useRef } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { Grid, Typography, Divider, Button } from '@mui/material';

const ProfileDetails = () => {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  // Add your state for age, gender, phone number, email, and DOB here
  const [age, setAge] = useState('Age: 23');
  const [gender, setGender] = useState('Gender: Male');
  const [phoneNumber, setPhoneNumber] = useState('Phone: +1 123-456-7890');
  const [email, setEmail] = useState('Email: paavan@example.com');
  const [dob, setDob] = useState('DOB: January 15, 1998');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleEditClick = () => {
    // Handle edit button click event
  };

  return (
    <div className="profile-details" style={{ marginLeft: '180px', padding: '20px' }}>
      <div className="profile-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h2" style={{ color: '#05445E', fontSize: '24px', fontWeight: 'bold', marginTop:"30px",marginBottom:"15px" }}>Profile Details</Typography>
        <Button variant="outlined" style={{marginTop:"30px",marginBottom:"15px"}}onClick={handleEditClick}>Edit</Button>
      </div>
      <hr />
      <Grid container spacing={3} alignItems="center">
        <Grid item>
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              style={{
                borderRadius: '50%',
                width: '200px',
                height: '200px',
                transition: 'transform 0.3s ease',
              }}
              onClick={handleIconClick}
              className="profile-image-hover"
            />
          ) : (
            <CircleIcon
              sx={{ fontSize: '200px', color: 'grey' }}
              onClick={handleIconClick}
              className="icon-hover"
            />
          )}
        </Grid>
        <Grid item>
          <Typography style={{ marginBottom: '30px', marginLeft: '30px', fontWeight: '600', color: '#05445E'}} variant="h5" gutterBottom>
            Paavan
          </Typography>
          <Typography style={{ marginBottom: '10px', marginLeft: '30px', color: '#189AB4' }} variant="body1">
            {age}
          </Typography>
          <Typography style={{ marginBottom: '10px', marginLeft: '30px', color: '#189AB4' }} variant="body1">
            {gender}
          </Typography>
        </Grid>
        <Grid item style={{ marginLeft: 'auto', marginRight: '20px' }}>
          <Typography variant="h4" style={{ fontWeight: '600', color: '#05445E', marginBottom: '0px',marginLeft:"20px" }}>
            Address
          </Typography>
          <Typography variant="body1" style={{ marginLeft: '20px', color: '#189AB4',marginTop:"20px"}}>
            Flat no 302, PRS Rama Towers
            <br />
            Pm. Palem, Vizag
            <br />
            Visakhapatnam
            <br />
            Andhra Pradesh, India
          </Typography>
        </Grid>
        <Grid item style={{ marginLeft: 'auto', marginRight: '20px' }}>
          <Typography variant="h4" style={{ fontWeight: '600', color: '#05445E', marginBottom: '20px', marginTop:"-20px"}}>
            Additional Details
          </Typography>
          <Typography variant="body1" style={{ marginLeft: '20px', color: '#189AB4', marginTop:"20px"}}>
            {phoneNumber}
            <br />
            {email}
            <br />
            {dob}
          </Typography>
        </Grid>
      </Grid>
      <Divider style={{ margin: '40px 0' }} />
      <input type="file" style={{ display: 'none' }} onChange={handleImageUpload} ref={fileInputRef} />
      {/* Hover effect for the icon */}
      <style>
        {`
          .icon-hover:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default ProfileDetails;