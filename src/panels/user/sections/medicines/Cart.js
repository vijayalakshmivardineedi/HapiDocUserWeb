import React, { useState } from "react";
import {
  Typography,
  Button,
  Grid,
  Card,
  Container,
  CardContent,
  CardMedia,
  Paper,
  Divider,
} from "@mui/material";
import { IoIosSend } from "react-icons/io";
import { MdDirectionsBike } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cart = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const images = [
    "https://images.apollo247.in/pub/media/catalog/product/a/p/apr0077_1-sep2023.jpg",
    "https://images.apollo247.in/pub/media/catalog/product/a/p/aph0001_1-sep2023.jpg",
    "https://images.apollo247.in/pub/media/catalog/product/i/m/img_20210108_171908__front__cough_drops_3.jpg",
    "https://images.apollo247.in/pub/media/catalog/product/A/P/APH0080_1-JULY23_1.jpg",
    "https://images.apollo247.in/pub/media/catalog/product/A/P/APS0087_1-JULY23_1.jpg",
    "https://images.apollo247.in/pub/media/catalog/product/i/m/img_20210108_174942__front__omega-3_fish_oil_4__1.jpg",
  ];

  const originalPrices = [200, 190, 180, 210, 195, 200];
  const offerPrices = [150, 140, 130, 160, 155, 185];

  return (
    <Container sx={{ marginBottom: "20px" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <Typography
            variant="h6"
            style={{
              color: "#05445E",
              marginTop: "20px",
              fontFamily: "poppins, sans-serif",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            MY CART
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              color: "#05445e",
              marginTop: "20px",
              fontWeight: "600",
              fontFamily: "poppins, sans-serif",
              fontSize: "14px",
              marginLeft: "170px",
            }}
          >
            OFFERS & DISCOUNTS
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {!isLoggedIn && (
            <Grid sx={{ border: "1px solid lightgrey", marginTop: "10px" }}>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 1,
                }}
              >
                <Grid>
                  <IoIosSend
                    style={{
                      color: "#05445E",
                      fontFamily: "poppins, sans-sarif",
                      fontWeight: "600",
                      fontSize: "15px",
                    }}
                  />
                  Add address to unlock extra discounts and best offers.
                </Grid>
                <Button
                  sx={{
                    color: "#05445E",
                    fontWeight: "600",
                    fontFamily: "poppins, sans-sarif",
                  }}
                >
                  Address
                </Button>
              </Typography>
            </Grid>
          )}
          {isLoggedIn && (
            <Card>
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 1,
                }}
              >
                <Grid>
                  <Typography
                    style={{
                      fontWeight: "500",
                      fontFamily: "poppins, sans-sarif",
                      fontSize: "px",
                    }}
                  >
                    {" "}
                    <IoIosSend
                      style={{
                        color: "#189AB4",
                      }}
                    />
                    Bill to T.JHANSI DEVI
                  </Typography>
                  <Typography
                    style={{
                      marginLeft: "15px",
                      fontWeight: "600",
                      fontFamily: "poppins, sans-sarif",
                    }}
                  >
                    East Godavari 533001
                  </Typography>
                </Grid>
                <Button
                  sx={{
                    backgroundColor: "white",
                    color: "#189AB4",
                    fontWeight: "600",
                    fontFamily: "poppins, sans-sarif",
                  }}
                >
                  SELECT ADDRESS
                </Button>
              </Typography>
              <Grid
                style={{
                  backgroundColor: "#F0FFF9",
                  padding: 8,
                  fontWeight: "600",
                  fontFamily: "poppins, sans-sarif",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontFamily: "poppins, sans-sarif",
                    fontSize: "13px",
                  }}
                >
                  <MdDirectionsBike
                    style={{
                      marginRight: 8,
                      color: "#05445E",
                      fontWeight: "800",
                      fontSize: "18px",
                    }}
                  />
                  Deliver by: Today, by 2:00 PM
                </Typography>
              </Grid>
            </Card>
          )}
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Typography
              sx={{
                color: "#05445E",
                fontFamily: "poppins, sans-sarif",
                fontWeight: "600",
                fontSize: "13px",
                backgroundColor: "#F0FFF9",
              }}
            >
              ITEM(S) IN YOUR CART (1)
            </Typography>
            <Button
              sx={{
                color: "#05445E",
                fontWeight: "600",
                fontFamily: "poppins, sans-sarif",
              }}
            >
              ADD ITEMS
            </Button>
          </Grid>
          <Paper>
            <Grid item xs={12}>
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 5,
                  backgroundColor: "#F0FFF9",
                  color: "#05445E",
                  fontSize: "15px",
                }}
              >
                <span style={{ fontFamily: "poppins, sans-sarif" }}>
                  SHIPMENT 1
                </span>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontFamily: "poppins, sans-serif",
                    fontSize: "12px",
                  }}
                >
                  Arriving Tomorrow, by 2:00 PM
                </Typography>
              </Typography>
            </Grid>
          </Paper>
          <Paper
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CardMedia
              style={{ width: 50, height: 50 }}
              image="https://images.apollo247.in/pub/media/catalog/product/G/L/GLU0036_1-JULY23_1.jpg "
              title="Glucon-D"
            />
            <CardContent>
              <Grid container item xs={12}>
                <Grid item xs={10}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#05445E",
                      fontFamily: "poppins, sans-sarif",
                      fontSize: "12px",
                    }}
                  >
                    Glucon-D Regular Instant Energy Drink Powder, 1 kg Refill
                    Pack
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <RxCross2
                    style={{
                      marginLeft: "70px",
                      cursor: "pointer",
                      color: "#05445E",
                      fontSixe: "50px",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid>
                <Grid
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    style={{
                      borderRadius: "20px",
                      width: "5px",
                      height: "20px",
                    }}
                    onClick={handleDecrease}
                  >
                    <Typography variant="button">-</Typography>
                  </Button>
                  <Typography>{count}</Typography>
                  <Button
                    variant="outlined"
                    style={{
                      borderRadius: "20px",
                      width: "10px",
                      height: "20px",
                    }}
                    onClick={handleIncrease}
                  >
                    <Typography variant="button">+</Typography>
                  </Button>
                  <Typography
                    style={{
                      textDecoration: "line-through",
                      marginLeft: "330px",
                      fontFamily: "poppins, sans-sarif",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  >
                    MRP ₹{(62.5 * count).toFixed(2)}
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "5px",
                      marginLeft: "8px",
                      fontFamily: "poppins, sans-sarif",
                      fontSize: "14px",
                    }}
                  >
                    ₹{(53.13 * count).toFixed(2)}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Paper>
          <Typography
            sx={{
              marginTop: "20px",
              color: "#05445e",
              fontWeight: "600",
              fontFamily: "poppins, sans-sarif",
              fontSize: "20px",
            }}
          >
            LAST MINUTE BUYS
          </Typography>
          <Grid
            container
            spacing={2}
            style={{
              width: "120%",
              height: "auto",
              backgroundColor: "#F0FFF9",
            }}
          >
            {[1, 2, 3, 4, 5].map((item, index) => (
              <Grid item xs={12} sm={6} md={2} key={item}>
                <Card>
                  <CardContent>
                    <div style={{ marginBottom: 16 }}>
                      <img
                        src={images[index % images.length]}
                        alt={`Image ${item}`}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <Typography
                      variant="body1"
                      gutterBottom
                      style={{ color: "#05445E" }}
                    >
                      <span style={{ textDecoration: "line-through" }}>
                        ${originalPrices[index]}
                      </span>{" "}
                      <strong>${offerPrices[index]}</strong>{" "}
                    </Typography>
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#189AB4",
                        color: "white",
                        borderRadius: "100px",
                      }}
                    >
                      ADD
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ marginTop: "10px" }}>
            <Paper sx={{ backgroundColor: "#F0FFF9" }}>
              <Grid container alignItems="center">
                <Grid item xs={8} sx={{ marginLeft: "20px" }}>
                  <Typography
                    sx={{
                      fontFamily: "poppins, sans-sarif",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}
                  >
                    Save ₹109.90 on this order
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "poppins, sans-sarif",
                      fontSize: "12px",
                      marginBottom: "5px",
                    }}
                  >
                    Free Delivery + 5% cashback & more benefits
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <MdOutlineKeyboardArrowRight
                    style={{ cursor: "pointer", color: "#05445E" }}
                  />
                </Grid>
              </Grid>
            </Paper>
            <Grid
              container
              alignItems="center"
              sx={{ border: "1px solid lightgrey", marginTop: "10px" }}
            >
              <Grid item xs={8} sx={{ marginLeft: "20px" }}>
                <Typography
                  sx={{
                    fontFamily: "poppins, sans-sarif",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Apply Coupon
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "poppins, sans-sarif",
                    fontSize: "12px",
                    marginBottom: "5px",
                  }}
                >
                  Use AIRTELAP to get 10% cashback
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <MdOutlineKeyboardArrowRight
                  style={{ cursor: "pointer", color: "#05445E" }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              alignItems="center"
              sx={{ border: "1px solid lightgrey", marginTop: "10px" }}
            >
              <Grid item xs={8} sx={{ marginLeft: "20px" }}>
                <Typography
                  sx={{
                    fontFamily: "poppins, sans-sarif",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Use Health Credits
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "poppins, sans-serif",
                    fontSize: "12px",
                    marginBottom: "5px",
                    color: "error.main",
                  }}
                >
                  No available health credits
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <MdOutlineKeyboardArrowRight
                  style={{ cursor: "pointer", color: "#05445E" }}
                />
              </Grid>
            </Grid>
            <Grid sx={{ marginLeft: "30px" }}>
              <Typography
                sx={{
                  marginTop: "20px",
                  fontFamily: "poppins, sans-sarif",
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#05445E",
                }}
              >
                CART BREAKDOWN
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6} style={{ color: "#05445E" }}>
                  <Typography
                    sx={{
                      marginTop: "10px",
                      fontFamily: "poppins, sans-sarif",
                      fontSize: "12px",
                    }}
                  >
                    Cart Total
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                  >
                    Discount on MRP
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                  >
                    Coupon Discount
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                  >
                    Handling & Packaging Fee
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                  >
                    Delivery Charges
                  </Typography>
                </Grid>
                <Grid item xs={6} style={{ color: "#05445E" }}>
                  <Typography
                    align="right"
                    sx={{
                      marginTop: "10px",
                      fontFamily: "poppins, sans-sarif",
                      fontSize: "13px",
                    }}
                  >
                    ₹240
                  </Typography>
                  <Typography
                    align="right"
                    sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                  >
                    - ₹24
                  </Typography>
                  <Typography
                    align="right"
                    sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                  >
                    + Apply Coupon
                  </Typography>
                  <Typography
                    align="right"
                    sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                  >
                    ₹4
                  </Typography>
                  <Typography
                    align="right"
                    sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                  >
                    ₹100 ₹75
                  </Typography>
                </Grid>
              </Grid>
              <Divider
                sx={{ border: "1px solid light Grey", marginTop: "10px" }}
              />
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: "3px" }}>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    marginLeft: "20px",
                    fontFamily: "poppins, sans-sarif",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  TO PAY
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  align="right"
                  sx={{
                    fontFamily: "poppins, sans-sarif",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  ₹295
                </Typography>
              </Grid>
            </Grid>
            <Divider
              sx={{ border: "1px solid light Grey", marginTop: "10px" }}
            />
            <Card sx={{ padding: "20px", backgroundColor: "#f0fff9" }}>
              <Typography
                variant="h6"
                align="center"
                sx={{
                  fontFamily: "poppins, sans-serif",
                  fontSize: "15px",
                  fontWeight: "600",
                  backgroundColor: "#189AB4",
                }}
              >
                You saved ₹49 on this order
              </Typography>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={6}>
                  <Typography
                    sx={{
                      fontFamily: "poppins, sans-serif",
                      fontSize: "13px",
                      marginTop: "10px",
                    }}
                  >
                    Savings
                  </Typography>
                  <Typography
                    component="ul"
                    sx={{ fontFamily: "poppins, sans-serif", fontSize: "13px" }}
                  >
                    <li>Discount On MRP</li>
                    <li>Subsidised Delivery</li>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    align="right"
                    sx={{
                      fontFamily: "poppins, sans-serif",
                      fontSize: "13px",
                      marginTop: "10px",
                    }}
                  >
                    ₹24
                  </Typography>
                  <Typography
                    align="right"
                    sx={{
                      fontFamily: "poppins, sans-serif",
                      fontSize: "13px",
                    }}
                  >
                    ₹25
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
