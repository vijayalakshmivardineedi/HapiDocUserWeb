import React, { useState } from 'react';
import { Box, Card, CardContent, Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LabTest = () => {
  // Dummy data for lab tests
  const labTests = [
    { id: 1, testName: 'Blood Test', date: '2024-03-20', status: 'completed', images: [
      'https://images.template.net/wp-content/uploads/2017/04/Test-Report-Email.jpg',
      'https://assets-global.website-files.com/6572fdb617211ce3d9d76878/6572fdb717211ce3d9d7e750_CBC%20Blood%20Test.png'
    ] },
    { id: 2, testName: 'Urine Test', date: '2024-03-21', status: 'pending', images: [
      'https://images.template.net/wp-content/uploads/2017/04/Test-Report-Email.jpg'
    ] },
    { id: 3, testName: 'X-ray', date: '2024-03-22', status: 'not yet', images: [
      'https://assets-global.website-files.com/6572fdb617211ce3d9d76878/6572fdb717211ce3d9d7e750_CBC%20Blood%20Test.png'
    ] },
    { id: 4, testName: 'MRI Scan', date: '2024-03-23', status: 'completed', images: [
      'https://images.template.net/wp-content/uploads/2017/04/Test-Report-Email.jpg',
      'https://assets-global.website-files.com/6572fdb617211ce3d9d76878/6572fdb717211ce3d9d7e750_CBC%20Blood%20Test.png'
    ] },
  ];

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleOpenDialog = (images) => {
    setSelectedImages(images);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Box ml={23} mt={0} p={4  } sx={{backgroundColor:" #05445E "}}>
        <Grid container spacing={3}>
          {labTests.map(test => (
            <Grid item key={test.id} xs={12} sm={6} md={6} lg={6}>
              <Card sx={{ backgroundColor: '#189AB4  ', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <CardContent>
                  <Typography style={{color:"white"}} variant="h5" gutterBottom>{test.testName}</Typography>
                  <Typography style={{color:"white"}}  variant="body1" gutterBottom>Date: {test.date}</Typography>
                  <Typography style={{color:"white"}}  variant="body1" gutterBottom>Status: {test.status}</Typography>
                  <Box display="flex" justifyContent="center" mt={2}>
                    <img
                      src={test.images[0]} // Display only the first image
                      alt={test.testName}
                      style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                      onClick={() => handleOpenDialog(test.images)}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth style={{ margin: 'auto', maxHeight: '110vh', height: '70vh' }}>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">View Images</Typography>
            <IconButton onClick={handleCloseDialog}>
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Slider dots slidesToShow={1} slidesToScroll={1}>
            {selectedImages.map((image, index) => (
              <Box key={index} p={1}>
                <img src={image} alt={`Image ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
              </Box>
            ))}
          </Slider>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default LabTest;