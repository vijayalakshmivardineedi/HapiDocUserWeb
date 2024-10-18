import React from 'react';
import { Typography, Button, Box, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const OrderDetails = () => {
  return (
    <>
    {/* <Navbar /> */}
    <box elevation={3} style={{ padding: '20px', margin: '20px' }}>
      {/* Left Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ marginLeft: '190px' }}> {/* Adjust this value based on your sidebar width */}
          {/* Order Details Heading */}
          <Typography variant="h5" component="h2" sx={{ marginLeft: '20px',fontFamily:"poppins,sans-serif",fontWeight:"500" }}>
            Order Details
          </Typography>

          {/* Shipment Information */}
          <Typography variant="body1" component="p" style={{ marginTop: '20px', marginBottom: '20px', marginLeft: '20px' ,fontFamily:"poppins,sans-serif"}}>
            Shipment 1 of 1(#CC0035368)
          </Typography>

          {/* Divider */}
          <Divider style={{ marginBottom: '20px', marginLeft: '20px' }} />

          {/* Date and Time */}
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <div>
              <Typography variant="body1" component="p" style={{ fontFamily:"poppins,sans-serif",marginRight: '50px', marginLeft: '20px' }}>
                10/03/2024
              </Typography>
              <Typography variant="body2" component="p" style={{ fontFamily:"poppins,sans-serif", marginRight: '50px', marginLeft: '20px' }}>
                2:15 PM
              </Typography>
            </div>

            {/* Delivery Address Heading */}
            <div>
              <Typography variant="h6" component="h3" style={{ fontFamily:"poppins,sans-serif", fontWeight: 'bold', marginTop: '-2.5px', marginLeft: '260px', marginBottom: '10px' }}>
                Delivery Address
              </Typography>

              {/* Random Address */}
              <Typography variant="body2" component="p" style={{ color: '#189AB4', lineHeight: '1.6', marginLeft: '260px' }}>
                1234 Random Street, Suburbia, City<br />
                State, Country 12345<br />
                Landmark: Near the Big Park
              </Typography>
            </div>
          </div>

          {/* Divider below Delivery Address and Date Time */}
          <Divider style={{ marginLeft: '20px', marginBottom: '20px' }} />

          {/* Shipment Details Heading */}
          <Typography variant="h6" component="h3" style={{ fontFamily:"poppins,sans-serif",fontWeight: 'bold', marginTop: '40px', marginLeft: '20px', marginBottom: '25px' }}>
            SHIPMENT DETAILS
          </Typography>

          {/* Total Items Text */}
          <Typography variant="body1" component="p" style={{  fontFamily:"poppins,sans-serif",marginLeft: '20px', marginBottom: '40px' }}>
            Total 2 item(s) in Shipment 1 of 1
          </Typography>

          {/* Table for Shipment Details */}
          <TableContainer>
        <Table sx={{ borderCollapse: 'collapse', width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell style={{  fontFamily:"poppins,sans-serif",width: '50%' }}><strong>ITEM NAME</strong></TableCell>
              <TableCell align="right" style={{ fontFamily:"poppins,sans-serif", width: '25%' }}><strong>QTY</strong></TableCell>
              <TableCell align="right" style={{  fontFamily:"poppins,sans-serif",width: '25%' }}><strong>MRP VALUE</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell style={{ fontFamily:"poppins,sans-serif"}}>ECONORM SACHET 765MG</TableCell>
              <TableCell align="right" style={{ fontFamily:"poppins,sans-serif"}}>1.00</TableCell>
              <TableCell align="right" style={{ fontFamily:"poppins,sans-serif"}}>₹ 62.70</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ fontFamily:"poppins,sans-serif"}}>ECONORM SACHET 765MG</TableCell>
              <TableCell align="right" style={{ fontFamily:"poppins,sans-serif"}}>4.00</TableCell>
              <TableCell align="right" style={{ fontFamily:"poppins,sans-serif"}}>₹ 228</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
        </div>

        {/* Right Section */}
        <div style={{ position: 'relative', marginLeft: '20px',marginRight:20 }}>
          {/* Store Address Heading */}
          <Typography variant="h5" component="h2" style={{ fontFamily:"poppins,sans-serif", marginBottom: '20px', marginRight: '190px', marginLeft: '10px' }}>
            STORE ADDRESS
          </Typography>

          {/* Vertical line */}
        {/* Vertical line */}
<div style={{ borderLeft: '1px solid #CCC', height: 'calc(100vh - 20px)', position: 'absolute', left: '-30px', top: 0 }}></div>


          {/* Store Address Details */}
          <Typography variant="body1" component="p" style={{  fontFamily:"poppins,sans-serif",color: '#189AB4', marginTop: '15px', marginBottom: '8px', marginLeft: '10px', lineHeight: '1.6' }}>
            BACCANNAPALEM-VIZAG<br />
            Survey No. 188/1, Baccannapalem,<br />
            Revallapalem Road, Near D-Mart, Madhurawada (Mo),<br />
            Vizag Dt -530048, AP<br />
            Phone: 7997148737
          </Typography>

          {/* Payment Details Heading */}
          <Typography variant="h5" component="h2" style={{ fontFamily:"poppins,sans-serif", marginTop: '30px', marginLeft: '10px', marginBottom: '20px' }}>
            PAYMENT DETAILS
          </Typography>

          {/* Payment Details */}
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span><strong>MRP Total</strong></span>
              <span style={{ fontFamily:"poppins,sans-serif",marginRight:"10px"}}>₹290.70</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span><strong>Discount Total</strong></span>
              <span style={{ fontFamily:"poppins,sans-serif",marginRight:"10px"}}>-₹29.07</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span><strong>Redeemed Amount</strong></span>
              <span style={{ fontFamily:"poppins,sans-serif",marginRight:"10px"}}>-₹0.00</span>
            </div>
            
            {/* Horizontal Divider */}
            <hr style={{ margin: '10px 0' }} />

            {/* Total Amount */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span><strong>TOTAL</strong></span>
              <span style={{ fontFamily:"poppins,sans-serif",marginRight:"10px"}}>₹261.63</span>
            </div>
          </div>

          {/* Payment Method Heading */}
          <Typography variant="h5" component="h2" style={{ fontFamily:"poppins,sans-serif", marginTop: '25px', marginLeft: '10px', marginBottom: '15px' }}>
            PAYMENT METHOD
          </Typography>

          {/* Payment Method Details */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '10px', marginBottom: '10px' }}>
            <span style={{ fontFamily:"poppins,sans-serif"}}>Cash on Delivery</span>
            <span style={{marginRight:"10px"}}>₹261.63</span>
          </div>

          {/* Horizontal Divider */}
          <hr style={{ margin: '10px 0' }} />

          {/* Re-order Button */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
            <Button variant="contained" style={{ fontFamily:"poppins,sans-serif", backgroundColor: '#189AB4', width: '200px' }}>
              RE-ORDER
            </Button>
          </div>
        </div>
      </div>
    </box>
    </>
  );
};

export default OrderDetails;
