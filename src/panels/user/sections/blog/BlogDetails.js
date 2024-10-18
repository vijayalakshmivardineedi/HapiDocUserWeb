import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  Radio,
  FormControlLabel,
  RadioGroup,
  Paper,
  InputBase,
  Box,
  Avatar,
  Checkbox,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const BlogDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategory1, setSelectedCategory1] = useState("");
  const [hovered, setHovered] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);

  const handleLikeClick = () => {
    setLikeClicked(true);
    setDislikeClicked(false);
  };

  const handleDislikeClick = () => {
    setDislikeClicked(true);
    setLikeClicked(false);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleCategoryChange1 = (event) => {
    setSelectedCategory1(event.target.value);
  };

  return (
    <Container sx={{ marginTop: "20px" }}>
      <Grid
        container
        spacing={2}
        sx={{ paddingRight: "10%", paddingLeft: "10%" }}
      >
        {/* First row */}
        <Grid item md={8}>
          <Card>
            <CardMedia
              component="img"
              image="http://azim.commonsupport.com/Docpro/assets/images/news/news-18.jpg"
              alt="Card 1 Image"
            />
            <CardContent>
              <Typography
                variant="h6"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                  color: hovered ? "#05445E" : "#189AB4",
                  transition: "color 0.3s ease",
                  fontWeight: "bold",
                  display: "inline-block",
                  fontFamily: "poppins, sans-sarif",
                  fontSize: "16px",
                }}
              >
                The Evolution of Medicine : From Ancient Remedies to Modern
                Healthcare.
              </Typography>
              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                <Avatar
                  alt="Cindy Baker"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/66848033-1500-412e-84e9-84ab12ac9f39/dfvztc0-6d31dd41-0a32-491e-b8dd-4da6f5ce703f.jpg/v1/fill/w_1280,h_1280,q_75,strp/ai_art___pretty_girl_by_habaricszs_dfvztc0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzY2ODQ4MDMzLTE1MDAtNDEyZS04NGU5LTg0YWIxMmFjOWYzOVwvZGZ2enRjMC02ZDMxZGQ0MS0wYTMyLTQ5MWUtYjhkZC00ZGE2ZjVjZTcwM2YuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.D9n5YcmFdfFEw6gryYN_wj5lDQjPVoE1chVITSERydk"
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                />
                <div
                  sx={{
                    marginLeft: "5px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "poppins, sans-sarif",
                      fontWeight: 600,
                      color: "#05445e",
                    }}
                  >
                    Medhavani
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "10px", fontFamily: "poppins, sans-sarif" }}
                  >
                    April 19, 2023
                  </Typography>
                </div>
              </Grid>
              <Grid>
                <Grid>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "13px",
                      color: "#05445E",
                      fontFamily: "poppins, sans-sarif",
                    }}
                  >
                    In the vast annals of human history, the story of medicine
                    is one of continual evolution and innovation. From ancient
                    civilizations to the cutting-edge technologies of today, the
                    practice of medicine has undergone profound changes, shaping
                    the course of human health and well-being. Join us on a
                    journey through time as we explore the fascinating history
                    of medicine, from its humble beginnings to the complex
                    healthcare systems of the 21st century.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Grid>
            <Paper sx={{ padding: "15px" }}>
              <Grid>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#05445E",
                    marginBottom: "15px",
                    fontFamily: "Jost, sans-serif",
                  }}
                >
                  Search
                </Typography>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "50px",
                  border: "1px solid #189AB4",
                  padding: "5px",
                  width: "90%",
                  height: "30px",
                }}
              >
                <InputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  sx={{ flex: 1, marginLeft: "15px", fontSize: "12px" }}
                />
                <SearchIcon
                  sx={{
                    color: "white",
                    backgroundColor: "#189AB4",
                    borderRadius: "50%",
                    padding: "7px",
                    fontSize: "medium",
                  }}
                />
              </Box>
            </Paper>
            <Paper sx={{ padding: "5%", marginTop: "10px" }}>
              <Grid>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#05445E",
                    marginBottom: "10px",
                    fontFamily: "poppins, sans-sarif",
                  }}
                >
                  Categories
                </Typography>
                <RadioGroup
                  aria-label="categories"
                  name="categories"
                  value={selectedCategory1}
                  onChange={handleCategoryChange1}
                >
                  <FormControlLabel
                    value="PediatricsSurgery"
                    control={<Radio size="small" />} // Adjust the size here
                    label={
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "poppins, sans-sarif",
                          fontSize: "13px",
                        }}
                      >
                        Pediatrics
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="Cardiology"
                    control={<Radio size="small" />}
                    label={
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "poppins, sans-sarif",
                          fontSize: "13px",
                        }}
                      >
                        Cardiology
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="Dermatology"
                    control={<Radio size="small" />}
                    label={
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "poppins, sans-sarif",
                          fontSize: "13px",
                        }}
                      >
                        Dermatology
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="FamilyMedicine"
                    control={<Radio size="small" />}
                    label={
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "poppins, sans-sarif",
                          fontSize: "13px",
                        }}
                      >
                        Family Medicine
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="ObstetricsAndGynecology"
                    control={<Radio size="small" />}
                    label={
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "poppins, sans-sarif",
                          fontSize: "13px",
                        }}
                      >
                        Obstetrics & Gynecology
                      </Typography>
                    }
                  />
                </RadioGroup>
              </Grid>
            </Paper>
            <Paper sx={{ padding: "5%", marginTop: "10px" }}>
              <Grid>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#05445E",
                    marginBottom: "10px",
                    fontFamily: "poppins, sans-sarif",
                  }}
                >
                  Archives
                </Typography>
                <RadioGroup
                  aria-label="categories"
                  name="categories"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <FormControlLabel
                    value="Cardiology"
                    control={<Radio size="small" sx={{ fontSize: "5px" }} />}
                    label={
                      <Typography variant="body2">
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontFamily: "poppins, sans-sarif",
                            fontSize: "13px",
                          }}
                        >
                          <span>November 2016</span>
                          <span sx={{ marginLeft: "20px" }}>(5)</span>
                        </Grid>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="Dermatology"
                    control={<Radio size="small" />}
                    label={
                      <Typography variant="body2">
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontFamily: "poppins, sans-sarif",
                            fontSize: "13px",
                          }}
                        >
                          <span>December 2020</span>
                          <span sx={{ marginLeft: "20px" }}>(7)</span>
                        </Grid>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="FamilyMedicine"
                    control={<Radio size="small" />}
                    label={
                      <Typography variant="body2">
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontFamily: "poppins, sans-sarif",
                            fontSize: "13px",
                          }}
                        >
                          <span>January 2021</span>
                          <span sx={{ marginLeft: "35px" }}>(5)</span>
                        </Grid>
                      </Typography>
                    }
                  />

                  <FormControlLabel
                    value="ObstetricsAndGynecology"
                    control={<Radio size="small" />}
                    label={
                      <Typography variant="body2">
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontFamily: "poppins, sans-sarif",
                            fontSize: "13px",
                          }}
                        >
                          <span>February 2023</span>
                          <span sx={{ marginLeft: "28px" }}>(2)</span>
                        </Grid>
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="Oncology"
                    control={<Radio size="small" />}
                    label={
                      <Typography variant="body2">
                        <Grid
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontFamily: "poppins, sans-sarif",
                            fontSize: "13px",
                          }}
                        >
                          <span>March 2023</span>
                          <span sx={{ marginLeft: "45px" }}>(9)</span>
                        </Grid>
                      </Typography>
                    }
                  />
                </RadioGroup>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* First row */}
        <Grid container spacing={1} md={8} sx={{ marginTop: "10px" }}>
          <Grid item md={6}>
            <CardMedia
              component="img"
              image="http://azim.commonsupport.com/Docpro/assets/images/news/news-19.jpg"
              alt="Card 1 Image"
              height="350"
            />
          </Grid>
          <Grid item md={6}>
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#05445E",
                  marginBottom: "10px",
                  fontFamily: "poppins, sans-sarif",
                }}
              >
                Two Most-Cited Reasons
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "gray",
                  fontSize: "13px",
                  color: "#05445E",
                  fontFamily: "poppins, sans-sarif",
                }}
              >
                Product popularity often relies on user-friendly design and
                clear instructions. A compelling value proposition distinguishes
                it from competitors, attracting and retaining customers,
                fostering brand loyalty.
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#05445E",
                  marginBottom: "10px",
                  fontFamily: "poppins, sans-sarif",
                }}
              >
                Your text goes here
              </Typography>
              <FormControlLabel
                control={<Checkbox size="small" />} // Set size to small
                label={
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "12px", fontFamily: "poppins, sans-sarif" }}
                  >
                    Success is something of which we want.
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox size="small" />} // Set size to small
                label={
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "12px", fontFamily: "poppins, sans-sarif" }}
                  >
                    Most people believe that success is difficult.
                  </Typography>
                }
              />
              <FormControlLabel
                control={<Checkbox size="small" />} // Set size to small
                label={
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "12px", fontFamily: "poppins, sans-sarif" }}
                  >
                    The four levels of the healthcare system.
                  </Typography>
                }
              />
            </CardContent>
          </Grid>
          <Typography
            variant="h4"
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#05445E",
              marginTop: "20px",
              fontFamily: "poppins, sans-sarif",
            }}
          >
            Two Most-Cited Reasons
          </Typography>
          <Typography
            variant="body"
            sx={{
              fontSize: "13px",
              color: "#05445E",
              marginTop: "10px",
              fontFamily: "poppins, sans-sarif",
            }}
          >
            In today's competitive landscape, two key factors stand out as the
            most-cited reasons for success: user experience and value
            proposition. User experience encompasses the ease of use and
            intuitive design of a product or service, accompanied by clear
            instructions and minimalistic features. On the other hand, a strong
            value proposition highlights unique benefits compared to
            competitors, attracting and retaining customers while fostering
            brand loyalty and advocacy over time.
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#05445E",
              marginBottom: "10px",
              fontFamily: "poppins, sans-sarif",
            }}
          >
            Recent Posts
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item md={4}>
              <img
                src="http://azim.commonsupport.com/Docpro/assets/images/news/post-1.jpg"
                alt="Post Image"
                sx={{ width: "100%", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item md={8}>
              <Grid>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                >
                  Insert your recent post content here.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={4}>
              <img
                src="	http://azim.commonsupport.com/Docpro/assets/images/news/post-2.jpg
                  "
                alt="Post Image"
                sx={{ width: "100%", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item md={8}>
              <Grid>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                >
                  Great food is not just eating energy.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={4}>
              <img
                src="http://azim.commonsupport.com/Docpro/assets/images/news/post-3.jpg"
                alt="Post Image"
                sx={{ width: "100%", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item md={8}>
              <Grid>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                >
                  The smell of good bread baking.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md={4}>
              <img
                src="	http://azim.commonsupport.com/Docpro/assets/images/news/news-5.jpg"
                alt="Post Image"
                sx={{ width: "100%", borderRadius: "10px" }}
              />
            </Grid>
            <Grid item md={12}>
              <Grid>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                >
                  Including animation in your design system.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          md={12}
          justifyContent="flex-start" // Changed from 'center' to 'flex-start'
          alignItems="center"
          sx={{
            backgroundColor: "#F0FFF9",
            marginTop: "10px",
            borderRadius: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
              fontFamily: "poppins, sans-serif",
            }}
          >
            We Are Social On:
          </Typography>
          <Grid
            item
            container
            md={9}
            justifyContent="flex-end"
            alignItems="center"
            sx={{ backgroundColor: "#F0FFF9" }}
          >
            <Grid item>
              <IconButton aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="Google">
                <GoogleIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={12}>
          {/* Sample Comment */}
          <Typography
            variant="h5"
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#05445E",
              marginBottom: "10px",
              fontFamily: "poppins, sans-sarif",
            }}
          >
            Comments
          </Typography>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <Grid item md={1} sx={{ marginBottom: "20px" }}>
              <Avatar
                alt="User Avatar"
                src="	http://azim.commonsupport.com/Docpro/assets/images/news/comment-1.png"
                sx={{ marginRight: "16px", height: "60px", width: "60px" }}
              />
            </Grid>
            <Grid item md={11}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  fontFamily: "poppins, sans-sarif",
                  color: "#05445e",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                Aakesh
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
              >
                Fascinating read! It's incredible to see how far we've come in
                the field of medicine. Understanding our roots helps us
                appreciate the advancements we enjoy today.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Grid item md={12}>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Grid item md={1} sx={{ marginBottom: "20px" }}>
                <Avatar
                  alt="User Avatar"
                  src="http://azim.commonsupport.com/Docpro/assets/images/news/comment-2.png"
                  sx={{ marginRight: "16px", height: "60px", width: "60px" }}
                />
              </Grid>
              <Grid item md={11}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    fontFamily: "poppins, sans-sarif",
                    color: "#05445e",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  Priyanka
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                >
                  I never realized how much ancient civilizations contributed to
                  medicine until I read this post. It's inspiring to see the
                  ingenuity of our ancestors and how it paved the way for modern
                  healthcare.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Grid item md={12}>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Grid item md={1} sx={{ marginBottom: "20px" }}>
                <Avatar
                  alt="User Avatar"
                  src="	http://azim.commonsupport.com/Docpro/assets/images/news/comment-3.png"
                  sx={{ marginRight: "16px", height: "60px", width: "60px" }}
                />
              </Grid>
              <Grid item md={11}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    fontFamily: "poppins, sans-sarif",
                    color: "#05445e",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  John Doe
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "poppins, sans-sarif", fontSize: "13px" }}
                >
                  As a healthcare professional, this post resonated with me
                  deeply. It's a testament to the continuous pursuit of
                  knowledge and improvement in medicine. Well-researched and
                  insightful!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} sx={{ padding: 2 }}>
          <Grid sx={{ padding: 2 }}>
            <Typography
              onClick={handleLikeClick}
              sx={{ fontFamily: "poppins, sans-sarif", fontWeight: "500" }}
            >
              Like
              <AiOutlineLike
                style={{
                  color: likeClicked ? "green" : "inherit",
                  cursor: "pointer",
                }}
              />
            </Typography>
            <Typography
              onClick={handleDislikeClick}
              sx={{ fontFamily: "poppins, sans-sarif", fontWeight: "500" }}
            >
              Dislike
              <AiOutlineDislike
                style={{
                  color: dislikeClicked ? "red" : "inherit",
                  cursor: "pointer",
                }}
              />
            </Typography>
          </Grid>
          <TextField
            id="outlined-basic"
            label="Comment"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            sx={{ fontFamily: "poppins, sans-sarif" }}
          />
          <Button
            style={{
              marginTop: "10px",
              backgroundColor: "#05445E",
              color: "white",
              fontFamily: "poppins, sans-sarif",
            }}
          >
            Post Comment
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default BlogDetails;