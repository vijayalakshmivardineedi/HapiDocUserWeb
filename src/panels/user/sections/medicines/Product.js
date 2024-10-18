import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  IconButton,
  Button,
  Checkbox,
  ListItemIcon,
  Tooltip,
  Card,
  CardMedia,
} from "@mui/material";
import { GiShoppingCart } from "react-icons/gi";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineVisibilityOff } from "react-icons/md";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Products = () => {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);
  const [showIcons, setShowIcons] = useState(false);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [sort, setSort] = React.useState("All");
  const [sortedImages, setSortedImages] = useState([]);
  const handleChange = (event) => {
    setSort(event.target.value);
    // Handle sorting based on selected option
    if (event.target.value === "Hight To Low") {
      // Sort by price high to low
      const sortedImages = [...images].sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      setSortedImages(sortedImages);
    } else if (event.target.value === "To Low Hight") {
      // Sort by price low to high
      const sortedImages = [...images].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      setSortedImages(sortedImages);
    } else if (event.target.value === "All") {
      // Sort by price low to high
      const sortedImages = [...images];
      setSortedImages(sortedImages);
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredImageIndex(index);
    setShowIcons(true);
  };

  const handleMouseLeave = () => {
    setHoveredImageIndex(null);
    setShowIcons(false);
  };
  const [babyCareExpanded, setBabyCareExpanded] = useState(false);

  const toggleBabyCare = () => {
    setBabyCareExpanded(!babyCareExpanded);
  };

  const handleAddToCart = (index) => {
    console.log(`Item at index ${index} added to cart`);
  };

  const images = [
    {
      id: 1,
      mainImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/webp-express/webp-images/uploads/2020/12/Image-34-1-800x800.jpg.webp",
      secondaryImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-35-1.jpg",
      title: "PHARMACY",
      subtitle: "Antibody Pills",
      price: "200.00",
    },
    {
      id: 2,
      mainImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-41-480x480.jpg",
      secondaryImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/webp-express/webp-images/uploads/2020/12/Image-46-800x800.jpg.webp",
      title: "ANTISEPTIC",
      subtitle: "Antiseptic Water",
      price: "233.00",
    },
    {
      id: 3,
      mainImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-29-1-480x480.jpg",
      secondaryImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/04/Image-24-480x480.jpg",
      title: "PHARMACY",
      subtitle: "Birth Control Pills",
      price: "30.00",
    },
    {
      id: 4,
      mainImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/04/Image-2-480x480.jpg",
      secondaryImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-20-1-480x480.jpg",
      title: "MEDICINE & HEALTH",
      subtitle: "Biotin 5000 Mcg",
      price: "80.00",
    },
    {
      id: 5,
      mainImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-27-1-480x480.jpg",
      secondaryImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-28-1-480x480.jpg",
      title: "MEDICAL BOX",
      subtitle: "Foot Pain Reliever",
      price: "120.00",
    },
    {
      id: 6,
      mainImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-48-480x480.jpg",
      secondaryImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-43-480x480.jpg",
      title: "PHARMACY",
      subtitle: "Liver Detox Pills",
      price: "350.00",
    },
    {
      id: 7,
      mainImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-16-1-480x480.jpg",
      secondaryImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/04/Image-1-480x480.jpg",
      title: "MEDICINE & HEALTH",
      subtitle: "Measuring Machine",
      price: "500.00",
    },
    {
      id: 8,
      mainImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-14-1-480x480.jpg",
      secondaryImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-38-1-480x480.jpg",
      title: "PHARMACY",
      subtitle: "Medicine For Men",
      price: "180.00",
    },
    {
      id: 10,
      mainImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/04/Image-18-480x480.jpg",
      secondaryImage:
        "https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-31-1-480x480.jpg",
      title: "ANTISEPTIC",
      subtitle: "Object Thermometer",
      price: "214.22",
    },
  ];
  const handleMouseHover = (e) => {
    setIconPosition({ x: e.clientX, y: e.clientY });
    setShowIcons(true);
  };

  return (
    <>
      {/* <Grid item xs={12}>
        <Card>
          <CardMedia
            component="img"
            image="https://img.freepik.com/premium-vector/flat-style-banner-design-with-medicines-tablets-capsules-drug-painkillers-antibiotics-vitamins_285336-1216.jpg?w=740"
            style={{ width: 1200, height: 250 }} // Adjust width and height as needed
          />
        </Card>
      </Grid> */}
      <Grid container spacing={2} sx={{ padding: 4 }}>
        <Grid item xs={4}>
          <div>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#05445E",
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              Filter By
            </Typography>
            <Divider sx={{ border: "1px solid light Grey" }} />
            <Typography
              onClick={toggleBabyCare}
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#05445E",
                fontSize: 20,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              BRANDS
              <span
                style={{
                  fontFamily: "poppins, sans-serif",
                  cursor: "pointer",
                  float: "right",
                  marginLeft: "10px",
                }}
              >
                {babyCareExpanded ? "-" : "+"}
              </span>
            </Typography>
            {babyCareExpanded && (
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  position: "relative",
                  overflow: "auto",
                  maxHeight: 300,
                  "& ul": { padding: 0 },
                }}
                subheader={<li />}
              >
                <li>
                  <ul
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#05445E",
                      fontSize: "16px",
                    }}
                  >
                    {[
                      "Isopure",
                      "Optimum Nutrition",
                      "Qnt",
                      "Dymatize",
                      "Apollo Life",
                      "Nutrix",
                      "Gnc",
                    ].map((item, index) => (
                      <ListItem key={`item-${index}`}>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            size="small"
                            style={{ color: "#189AB4" }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </ul>
                </li>
              </List>
            )}
            <Divider sx={{ border: "1px solid light Grey" }} />
            <Grid style={{ padding: 2 }}>
              <Grid container alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Baby Care"
                    src="https://images.apollo247.in/pub/media/catalog/category/babycare_2.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item sx={{ marginLeft: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#05445E",
                      fontSize: "16px",
                    }}
                  >
                    Baby Care
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ border: "1px solid light Grey" }} />
              <Grid container alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Personal Care"
                    src="https://st3.depositphotos.com/1177973/12669/i/450/depositphotos_126693854-stock-photo-set-of-body-care-products.jpg"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item sx={{ marginLeft: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#05445E",
                      fontSize: "16px",
                    }}
                  >
                    Personal Care
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ border: "1px solid light Grey" }} />
              <Grid container alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Health Drinks & Supplements"
                    src="https://images.apollo247.in/pub/media/catalog/category/health_and_nutrition_2.jpg?tr=w-367.5,q-100,f-webp,c-at_max"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item sx={{ marginLeft: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#05445E",
                      fontSize: "16px",
                    }}
                  >
                    Health Drinks & Supplements
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ border: "1px solid light Grey" }} />
              <Grid container alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Skin Care"
                    src="https://media.istockphoto.com/id/1249579132/photo/beauty-products-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=lDmUkhu7XDdGww_AsQub6jJ55I7WMgAoYrqdopFa-tI="
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item sx={{ marginLeft: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#05445E",
                      fontSize: "16px",
                    }}
                  >
                    Skin Care
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ border: "1px solid light Grey" }} />
              <Grid container alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Women Care"
                    src="https://asset20.ckassets.com/blog/wp-content/uploads/sites/5/2020/03/Health-Hygiene-Products-You-Need-Right-Now.jpg"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item sx={{ marginLeft: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#05445E",
                      fontSize: "16px",
                    }}
                  >
                    Women Care
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ border: "1px solid light Grey" }} />
              <Grid container alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Protein Powders & Drinks"
                    src="https://images.apollo247.in/pub/media/catalog/category/protein_supplements_1.jpg?tr=w-367.5,q-80,f-webp,dpr-1.2999999523162842,c-at_max"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item sx={{ marginLeft: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#05445E",
                      fontSize: "16px",
                    }}
                  >
                    Protein Powders & Drinks
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ border: "1px solid light Grey" }} />
              <Grid container alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Multivitamins"
                    src="https://images.apollo247.in/pub/media/catalog/category/multi_vitamins.jpg?tr=w-367.5,q-80,f-webp,dpr-1.2999999523162842,c-at_max"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item sx={{ marginLeft: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#05445E",
                      fontSize: "16px",
                    }}
                  >
                    Multivitamins
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ border: "1px solid light Grey" }} />
              <Grid container alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Glucometers & Test"
                    src="https://images.apollo247.in/pub/media/catalog/category/glucometer_strips_1.jpg?tr=w-367.5,q-80,f-webp,dpr-1.4999999330593994,c-at_max"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item sx={{ marginLeft: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#05445E",
                      fontSize: "16px",
                    }}
                  >
                    Glucometers & Test
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ border: "1px solid light Grey" }} />
              <Grid container alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Health Devices"
                    src="https://images.apollo247.in/pub/media/catalog/category/healthdevices_2.jpg?tr=w-367.5,q-80,f-webp,dpr-1.4999999330593994,c-at_max"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item sx={{ marginLeft: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#05445E",
                      fontSize: "16px",
                    }}
                  >
                    Health Devices
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ border: "1px solid light Grey" }} />
              <Grid container alignItems="center">
                <Grid item>
                  <Avatar
                    alt="Ayurveda"
                    src="https://images.apollo247.in/pub/media/catalog/category/ayurvedic_range_1.jpg?tr=w-367.5,q-80,f-webp,dpr-1.4999999330593994,c-at_max"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                </Grid>
                <Grid item sx={{ marginLeft: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#05445E",
                      fontSize: "16px",
                    }}
                  >
                    Ayurveda
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ border: "1px solid light Grey" }} />
            </Grid>
          </div>
        </Grid>

        {/* Images Section */}
        <Grid item xs={8}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">All</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={sort}
              label="Sort"
              onChange={handleChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Hight To Low">High To Low</MenuItem>
              <MenuItem value="To Low Hight">Low To High </MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={2}>
            {sort === "All"
              ? // Render all images when the sort is set to "All"
                images.map((image, index) => (
                  <Grid item xs={4} key={index} sx={{ display: "flex" }}>
                    <Paper
                      sx={{
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                      }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={image.mainImage}
                        alt={`Image ${index}`}
                        style={{ maxWidth: "100%", height: "200px", flex: 1 }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: "30%",
                          right: "8px",
                          transform: "translateY(-50%)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                        }}
                      >
                        {showIcons && hoveredImageIndex === index && (
                          <>
                            <Tooltip title="Add to Cart" placement="left" arrow>
                              <IconButton>
                                <GiShoppingCart />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Favorite" placement="left" arrow>
                              <IconButton>
                                <IoMdHeartEmpty />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Hide" placement="left" arrow>
                              <IconButton>
                                <MdOutlineVisibilityOff />
                              </IconButton>
                            </Tooltip>
                          </>
                        )}
                      </Box>
                      <Grid sx={{ padding: 2 }}>
                        <Typography
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 200,
                            color: "#05445E",
                            textAlign: "start",
                            fontSize: "12px",
                          }}
                        >
                          {image.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 500,
                            color: "#05445E",
                            textAlign: "start",
                          }}
                        >
                          {image.subtitle}
                        </Typography>

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            sx={{
                              fontFamily: "Poppins, sans-serif",
                              color: "red",
                              textAlign: "start",
                              marginRight: "10px", // Adjust margin as needed
                            }}
                          >
                            {image.price}
                          </Typography>
                          <Button
                            variant="contained"
                            size="small"
                            style={{
                              backgroundColor: "#189AB4",
                              color: "white",
                              borderRadius: "100px",
                              fontFamily: "Poppins, sans-serif",
                            }}
                          >
                            ADD
                          </Button>
                        </div>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              : // Render sorted images when sort is not set to "All"
                sortedImages.map((image, index) => (
                  <Grid item xs={4} key={index} sx={{ display: "flex" }}>
                    <Paper
                      sx={{
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                      }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <img
                        src={
                          hoveredImageIndex === index
                            ? image.secondaryImage
                            : image.mainImage
                        }
                        alt={`Image ${index}`}
                        style={{ maxWidth: "100%", height: "200px", flex: 1 }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          top: "30%",
                          right: "8px",
                          transform: "translateY(-50%)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                        }}
                      >
                        {showIcons && hoveredImageIndex === index && (
                          <>
                            <Tooltip title="Add to Cart" placement="left">
                              <IconButton>
                                <GiShoppingCart />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Favorite" placement="left">
                              <IconButton>
                                <IoMdHeartEmpty />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Hide" placement="left">
                              <IconButton>
                                <MdOutlineVisibilityOff />
                              </IconButton>
                            </Tooltip>
                          </>
                        )}
                      </Box>
                      <Grid sx={{ padding: 2 }}>
                        <Typography
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 200,
                            color: "#05445E",
                            textAlign: "start",
                            fontSize: "12px",
                          }}
                        >
                          {image.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 400,
                            color: "#189AB4",
                            textAlign: "start",
                          }}
                        >
                          {image.subtitle}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Poppins, sans-serif",
                            color: "red",
                            textAlign: "start",
                          }}
                        >
                          {image.price}
                        </Typography>
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#189AB4",
                            color: "white",
                            borderRadius: "100px",
                            fontFamily: "Poppins, sans-serif",
                          }}
                        >
                          ADD To Cart
                        </Button>
                      </Grid>
                    </Paper>
                  </Grid>
                ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Products;
