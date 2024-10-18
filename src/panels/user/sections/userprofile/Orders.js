import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Paper,
  Typography,
  Grid,
  CardMedia,
} from "@mui/material";

const Orders = () => {
  const orders = [
    {
      id: 1,
      orderName: "Order 1",
      price: 10.99,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwtNZkmqUF7Cpk2YjVvBCCGVQG27RxNSzLFw&usqp=CAU",
      deliveryDate: "2024-03-25",
      delivered: true,
    },
    {
      id: 2,
      orderName: "Order 2",
      price: 15.99,
      imageUrl:
        "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600",
      deliveryDate: "2024-03-26",
      delivered: false,
    },
    {
      id: 3,
      orderName: "Order 3",
      price: 20.99,
      imageUrl:
        "https://media.istockphoto.com/id/619091536/photo/scoop-of-whey-protein-on-black-background-chocolate-flawour.jpg?b=1&s=612x612&w=0&k=20&c=SzzD4i02XoOLutZQsUWvlHnqnczlw7cnm08mK87vUXY=",
      deliveryDate: "2024-03-27",
      delivered: false,
    },
  ];

  const getDeliveryStatus = (delivered, deliveryDate) => {
    if (delivered) {
      return (
        <Typography variant="body1" sx={{ marginTop: 6.5 }}>
          Delivered on <br />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <b style={{ color: "#189AB4", marginBottom: 0 }}>{deliveryDate}</b>
            <CircleIcon
              sx={{
                color: "green",
                fontSize: "medium",
                verticalAlign: "middle",
                marginLeft: "4px",
              }}
            />
          </Box>
        </Typography>
      );
    } else {
      return (
        <Typography variant="body1" sx={{ marginTop: 6.5 }}>
          Will be delivered on <br />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <b style={{ color: "#189AB4", marginBottom: 0 }}>{deliveryDate}</b>
            <CircleIcon
              sx={{
                color: "red",
                fontSize: "medium",
                verticalAlign: "middle",
                marginLeft: "4px",
              }}
            />
          </Box>
        </Typography>
      );
    }
  };

  return (
    <>
      <Card
        sx={{
          backgroundColor: "#F0FFF9",
          boxShadow: "none",
          width: "100%",
          p: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            style={{ fontFamily: "poppins, sans-serif", color: "#05445E" }}
          >
            My Orders
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {orders.map(
              (order, index) =>
                index < 3 && ( // Render only first three cards
                  <Link
                    to={`/order/${order.id}`}
                    key={order.id}
                    style={{
                      textDecoration: "none",
                      flex: "0 0 calc(30% - 8px)",
                    }} // Adjusted flex properties
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        cursor: "pointer",
                        marginRight: index === 2 ? "16px" : 0,
                      }}
                    >
                      <Grid container spacing={0}>
                        <Grid item xs={12} md={4}>
                          <Grid container direction="column">
                            <Grid item>
                              <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                  fontSize: "small",
                                  color: "#6C6E70",
                                  marginBottom: 0,
                                  fontFamily: "poppins, sans-serif",
                                  marginLeft: "16px",
                                  color: "#189AB4",
                                }}
                              >
                                Order ID: {order.id}
                              </Typography>
                              <CardMedia
                                component="img"
                                height="150"
                                image={order.imageUrl}
                                alt="Order Image"
                                sx={{
                                  marginLeft: "16px",
                                  fontFamily: "poppins, sans-serif",
                                  borderRadius: "5px",
                                  marginBottom: "16px",
                                }}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <CardContent>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                              }}
                            >
                              <Typography
                                variant="body1"
                                gutterBottom
                                sx={{
                                  color: "#000",
                                  fontSize: "1rem",
                                  marginBottom: "4px",
                                  fontFamily: "poppins, sans-serif",
                                }}
                              >
                                {order.orderName}
                              </Typography>
                              <Typography
                                variant="body1"
                                gutterBottom
                                sx={{
                                  color: "#000",
                                  fontSize: "1rem",
                                  marginBottom: "4px",
                                  fontFamily: "poppins, sans-serif",
                                }}
                              >
                                Price: ${order.price}
                              </Typography>
                              {getDeliveryStatus(
                                order.delivered,
                                order.deliveryDate
                              )}
                            </Box>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                )
            )}
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Orders;
