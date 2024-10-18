import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box, styled, Divider, Grid } from '@mui/material';

// StyledButton with custom background color
const StyledButton = styled(Button)({
  backgroundColor: '#05445E',
  fontFamily: "poppins, sans-serif",
});

const Settings = () => {
  const [value, setValue] = useState(0);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  const [receivePromotional, setReceivePromotional] = useState(true);
  const [receiveAnnouncements, setReceiveAnnouncements] = useState(false);
  const [receiveHealthTips, setReceiveHealthTips] = useState(false);
  const [receiveSavings, setReceiveSavings] = useState(false);
  const [receiveInformational, setReceiveInformational] = useState(false);
  const [receiveFeedback, setReceiveFeedback] = useState(false);
  const [deleteAccountPassword, setDeleteAccountPassword] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // If "Notification Settings" tab is selected, show notification settings
    if (newValue === 1) {
      setShowNotificationSettings(true);
    } else {
      setShowNotificationSettings(false);
    }
  };

  const handleSavePassword = () => {
    // Handle saving password
    console.log('Password saved!');
  };

  const handleDeleteAccount = () => {
    // Handle account deletion
    console.log('Account deleted!');
  };

  const handleReceivePromotionalChange = (event) => {
    setReceivePromotional(event.target.checked);
  };

  const handleReceiveAnnouncementsChange = (event) => {
    setReceiveAnnouncements(event.target.checked);
  };

  const handleReceiveHealthTipsChange = (event) => {
    setReceiveHealthTips(event.target.checked);
  };

  const handleReceiveSavingsChange = (event) => {
    setReceiveSavings(event.target.checked);
  };

  const handleReceiveInformationalChange = (event) => {
    setReceiveInformational(event.target.checked);
  };

  const handleReceiveFeedbackChange = (event) => {
    setReceiveFeedback(event.target.checked);
  };

  const handleDeleteAccountPasswordChange = (event) => {
    setDeleteAccountPassword(event.target.value);
  };

  return (
    <>
    <Box sx={{backgroundColor:"#F0FFF9", padding:"20px"}}>
      <Paper elevation={1} sx={{ padding: '10px', margin: '20px', fontFamily: 'poppins, sans-serif' }}>
        <Typography variant="h5" sx={{ fontFamily: 'poppins, sans-serif' }}>Settings</Typography>
      </Paper>
      <Paper elevation={1} component="div" sx={{ padding: '10px', margin: '20px', display: 'flex', fontFamily: 'poppins, sans-serif' }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="Horizontal tabs example"
          indicatorColor="#05445E" // Change the color of the indicator
          sx={{ flex: 1 }}
        >
          <Tab label="Change Password" sx={{ color: '#05445E', fontFamily: 'poppins, sans-serif' }} />
          <Tab label="Notification Settings" sx={{ color: '#05445E', fontFamily: 'poppins, sans-serif' }} />
          <Tab label="Delete Account" sx={{ color: '#05445E', fontFamily: 'poppins, sans-serif' }} />
        </Tabs>
      </Paper>
      {value === 0 && (
        <Paper elevation={1} sx={{ padding: '20px', margin: '20px', fontFamily: 'poppins, sans-serif' }}>
          <Typography variant="h6" sx={{ fontFamily: 'poppins, sans-serif' }}>Change Password</Typography>
          <Box style={{ marginBottom: '10px' }}>
            <TextField
              label="Current Password"
              variant="outlined"
              fullWidth
              margin="normal"
              size="small"
              sx={{
                width: '25%',
                marginBottom: '10px',
                fontFamily: 'poppins, sans-serif',
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#05445E',
                },
              }}
            />
          </Box>
          <Box style={{ marginBottom: '10px' }}>
            <TextField
              label="New Password"
              variant="outlined"
              fullWidth
              margin="normal"
              size="small"
              sx={{
                width: '25%',
                marginBottom: '10px',
                fontFamily: 'poppins, sans-serif',
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#05445E',
                },
              }}
            />
          </Box>
          <Box style={{ marginBottom: '10px' }}>
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              margin="normal"
              size="small"
              sx={{
                width: '25%',
                marginBottom: '10px',
                fontFamily: 'poppins, sans-serif',
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#05445E',
                },
              }}
            />
          </Box>
          <StyledButton variant="contained" color="primary" onClick={handleSavePassword}>
            Save
          </StyledButton>
        </Paper>
      )}
      {showNotificationSettings && (
        <Paper elevation={1} sx={{ padding: '20px', margin: '20px', fontFamily: 'poppins, sans-serif' }}>
          <Typography variant="h6" sx={{ fontFamily: 'poppins, sans-serif' }}>Notification Settings</Typography>
          <Divider sx={{ marginY: '10px' }} />
          <Grid container alignItems="center" sx={{ marginTop: '10px' }}>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox checked={receivePromotional} onChange={handleReceivePromotionalChange} />}
                label="Receive Promotional"
                sx={{ color: '#05445E', fontFamily: 'poppins, sans-serif' }}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" sx={{ marginTop: '10px' }}>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox checked={receiveAnnouncements} onChange={handleReceiveAnnouncementsChange} />}
                label="Receive Announcements"
                sx={{ color: '#05445E', fontFamily: 'poppins, sans-serif' }}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" sx={{ marginTop: '10px' }}>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox checked={receiveHealthTips} onChange={handleReceiveHealthTipsChange} />}
                label="Receive Health Tips"
                sx={{ color: '#05445E', fontFamily: 'poppins, sans-serif' }}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" sx={{ marginTop: '10px' }}>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox checked={receiveSavings} onChange={handleReceiveSavingsChange} />}
                label="Receive Savings"
                sx={{ color: '#05445E', fontFamily: 'poppins, sans-serif' }}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" sx={{ marginTop: '10px' }}>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox checked={receiveInformational} onChange={handleReceiveInformationalChange} />}
                label="Receive Informational"
                sx={{ color: '#05445E', fontFamily: 'poppins, sans-serif' }}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" sx={{ marginTop: '10px' }}>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox checked={receiveFeedback} onChange={handleReceiveFeedbackChange} />}
                label="Receive Feedback"
                sx={{ color: '#05445E', fontFamily: 'poppins, sans-serif' }}
              />
            </Grid>
          </Grid>
        </Paper>
      )}
      {value === 2 && (
        <Paper elevation={1} sx={{ padding: '20px', margin: '20px', fontFamily: 'poppins, sans-serif' }}>
          <Typography variant="h6" sx={{ fontFamily: 'poppins, sans-serif' }}>Delete Account</Typography>
          <Box style={{ marginBottom: '10px' }}>
            <TextField
              label="Enter Password"
              variant="outlined"
              fullWidth
              margin="normal"
              size="small"
              value={deleteAccountPassword}
              onChange={handleDeleteAccountPasswordChange}
              type="password"
              sx={{
                width: '25%',
                marginBottom: '10px',
                fontFamily: 'poppins, sans-serif',
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#05445E',
                },
              }}
            />
          </Box>
          <StyledButton variant="contained" color="primary" onClick={handleDeleteAccount}>
            Delete Account
          </StyledButton>
        </Paper>
      )}
      </Box>
    </>
  );
};

export default Settings;