import React, { useState } from "react";
import {
    Grid,
    CardContent,
    Typography,
    CardMedia,
    Container,
    Paper,
    InputBase,
    Box,
    IconButton,
    Button,
    Card,
    Radio,
    FormControlLabel,
    RadioGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const BlogCards = () => {
    const [hovered, setHovered] = useState(false);
    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [hovered3, setHovered3] = useState(false);
    const [hovered4, setHovered4] = useState(false);
    const [hovered5, setHovered5] = useState(false);
    const [hovered6, setHovered6] = useState(false);
    const [hovered7, setHovered7] = useState(false);
    const [hovered8, setHovered8] = useState(false);
    const [hovered9, setHovered9] = useState(false);
    const [hovered10, setHovered10] = useState(false);
    const [hovered11, setHovered11] = useState(false);
    const [hovered12, setHovered12] = useState(false);
    const [hovered13, setHovered13] = useState(false);
    const [hovered14, setHovered14] = useState(false);
    const [hovered15, setHovered15] = useState(false);
    const [hovered16, setHovered16] = useState(false);

    const [showButton, setShowButton] = useState(false);
    const [showButton1, setShowButton1] = useState(false);
    const [showButton2, setShowButton2] = useState(false);
    const [showButton3, setShowButton3] = useState(false);
    const [showButton4, setShowButton4] = useState(false);
    const [showButton5, setShowButton5] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedCategory1, setSelectedCategory1] = useState("");

    const handleMouseEnter = () => {
        setShowButton(true);
    };
    const handleMouseEnter1 = () => {
        setShowButton1(true);
    };
    const handleMouseEnter2 = () => {
        setShowButton2(true);
    };
    const handleMouseEnter3 = () => {
        setShowButton3(true);
    };
    const handleMouseEnter4 = () => {
        setShowButton4(true);
    };
    const handleMouseEnter5 = () => {
        setShowButton5(true);
    };

    // set arrow Hover effect function
    const handleArrowHover = () => {
        setShowButton(true);
    };

    const handleArrowHover1 = () => {
        setShowButton1(true);
    };
    const handleArrowHover2 = () => {
        setShowButton2(true);
    };
    const handleArrowHover3 = () => {
        setShowButton3(true);
    };
    const handleArrowHover4 = () => {
        setShowButton4(true);
    };
    const handleArrowHover5 = () => {
        setShowButton5(true);
    };

    const handleArrowClick = () => {
        console.log("Read More clicked!");
    };

    const handleArrowClick1 = () => {
        console.log("Read More clicked!");
    };
    const handleArrowClick2 = () => {
        console.log("Read More clicked!");
    };
    const handleArrowClick3 = () => {
        console.log("Read More clicked!");
    };

    const handleArrowClick4 = () => {
        console.log("Read More clicked!");
    };
    const handleArrowClick5 = () => {
        console.log("Read More clicked!");
    };
    const handleButtonLeave = () => {
        setShowButton(false);
    };
    const handleButtonLeave1 = () => {
        setShowButton1(false);
    };
    const handleButtonLeave2 = () => {
        setShowButton2(false);
    };
    const handleButtonLeave3 = () => {
        setShowButton3(false);
    };
    const handleButtonLeave4 = () => {
        setShowButton4(false);
    };
    const handleButtonLeave5 = () => {
        setShowButton5(false);
    };

    const handleMouseLeave = () => {
        setShowButton(false);
    };
    const handleMouseLeave1 = () => {
        setShowButton1(false);
    };
    const handleMouseLeave2 = () => {
        setShowButton2(false);
    };
    const handleMouseLeave3 = () => {
        setShowButton3(false);
    };
    const handleMouseLeave4 = () => {
        setShowButton4(false);
    };
    const handleMouseLeave5 = () => {
        setShowButton(false);
    };
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleCategoryChange1 = (event) => {
        setSelectedCategory1(event.target.value);
    };

    const handleMouseOver6 = () => {
        setHovered6(true);
    };

    const handleMouseOut6 = () => {
        setHovered6(false);
    };
    const handleMouseOver7 = () => {
        setHovered7(true);
    };
    const handleMouseOut7 = () => {
        setHovered7(false);
    };
    const handleMouseOver8 = () => {
        setHovered8(true);
    };
    const handleMouseOut8 = () => {
        setHovered8(false);
    };
    const handleMouseOver9 = () => {
        setHovered9(true);
    };
    const handleMouseOut9 = () => {
        setHovered9(false);
    };
    const handleMouseOver10 = () => {
        setHovered10(true);
    };
    const handleMouseOut10 = () => {
        setHovered10(false);
    };

    return (
        <Container sx={{ marginTop: "20px" }}>
            <Grid
                container
                spacing={2}
                sx={{ paddingRight: "8%", paddingLeft: "8%" }}
            >
                <Grid item xs={4}>
                    <Card
                        onMouseEnter={() => setHovered11(true)}
                        onMouseLeave={() => setHovered11(false)}
                        sx={{
                            borderRadius: "10px",
                            transition: "transform 0.3s",
                            transform: hovered11 ? "scale(1.05)" : "scale(1)",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="auto"
                            image="http://azim.commonsupport.com/Docpro/assets/images/news/news-1.jpg"
                            alt="Card 1 Image"
                        />
                    </Card>
                    <CardContent>
                        <Typography
                            variant="body1"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            style={{
                                color: hovered ? "#189AB4" : "#05445E",
                                transition: "color 0.3s ease",
                                fontWeight: "bold",
                                display: "inline-block",
                                fontFamily: "Jost, sans-serif",
                                fontSize: "15px",
                            }}
                        >
                            Including animation in your design system.
                        </Typography>

                        <Grid
                            container
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                padding: "5px",
                                borderRadius: "5px",
                            }}
                        >
                            <Avatar
                                alt="Cindy Baker"
                                src="https://media.licdn.com/dms/image/C4E03AQGOr91nW0kWSQ/profile-displayphoto-shrink_200_200/0/1549566297593?e=2147483647&v=beta&t=Oa5aIZ5RQ6-7VMkRZF6ujUb3KoKMAdT8Q-mWOe09w7w"
                                style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                }}
                            />
                            <Grid>
                                <Typography
                                    variant="body2"
                                    style={{
                                        fontSize: 12,
                                        fontWeight: "bold",
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    Julia Pate
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ fontSize: "10px", fontFamily: "Poppins, sans-serif" }}
                                >
                                    April 19, 2020
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    fontFamily: "Poppins, sans-serif",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisic do eiusmod
                                tempor incididunt.
                            </Typography>
                        </Grid>
                        <Box
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            {showButton && (
                                <Button
                                    component={Link}
                                    to="/blogDetails"
                                    onMouseLeave={handleButtonLeave5}
                                    style={{
                                        marginTop: "10px",
                                        backgroundColor: "#05445E",
                                        color: "white",
                                        borderRadius: "20px",
                                        width: "100px",
                                        padding: "4px",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textTransform: "none",
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    Read More <ArrowForwardIcon style={{ fontSize: "medium" }} />
                                </Button>
                            )}
                            <IconButton
                                aria-label="Arrow"
                                onMouseEnter={handleArrowHover}
                                onClick={handleArrowClick}
                                style={{
                                    display: showButton ? "none" : "flex",
                                    alignItems: "center",
                                    padding: "2px",
                                    marginTop: "10px",
                                }}
                            >
                                <ArrowForwardIcon
                                    style={{ color: "#189AB4", backgroundColor: "#F0FFF9" }}
                                />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Grid>
                <Grid item xs={4}>
                    <Card
                        onMouseEnter={() => setHovered12(true)}
                        onMouseLeave={() => setHovered12(false)}
                        sx={{
                            borderRadius: "10px",
                            overflow: "hidden", // Ensure the image does not overflow the card when scaled
                            transition: "transform 0.3s",
                            transform: hovered12 ? "scale(1.05)" : "scale(1)",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="auto"
                            image="http://azim.commonsupport.com/Docpro/assets/images/news/news-2.jpg"
                            alt="Card 2 Image"
                        />
                    </Card>
                    <CardContent>
                        <Typography
                            variant="body1"
                            component="div"
                            onMouseEnter={() => setHovered1(true)}
                            onMouseLeave={() => setHovered1(false)}
                            style={{
                                color: hovered1 ? "#189AB4" : "#05445E",
                                transition: "color 0.3s ease",
                                fontWeight: "bold",
                                display: "inline-block",
                                fontSize: "15px",
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            Baking can be done with a few things.
                        </Typography>
                        <Grid
                            container
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                padding: "5px",
                                borderRadius: "5px",
                            }}
                        >
                            <Avatar
                                alt="Cindy Baker"
                                src="https://media.licdn.com/dms/image/C5103AQEkRuC6aQKJtg/profile-displayphoto-shrink_200_200/0/1516950177584?e=2147483647&v=beta&t=8X995ocm0IWtal9HiqghDIsriFLnwjBVbla4obHZiLg"
                                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                            />
                            <Grid>
                                <Typography
                                    variant="body2"
                                    style={{ fontSize: 12, fontWeight: "bold" }}
                                >
                                    Karen Christilles
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ fontSize: "10px", fontFamily: "Poppins, sans-serif" }}
                                >
                                    Mar 25, 2023
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    fontFamily: "Poppins, sans-serif",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisic do eiusmod
                                tempor incididunt.
                            </Typography>
                        </Grid>

                        <Box
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            {showButton1 && (
                                <Button
                                    component={Link}
                                    to={"/blogDetails"}
                                    onClick={handleArrowClick5}
                                    onMouseLeave={handleButtonLeave5}
                                    style={{
                                        marginTop: "10px",
                                        backgroundColor: "#05445E",
                                        color: "white",
                                        borderRadius: "20px",
                                        width: "100px",
                                        padding: "4px",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textTransform: "none",
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    Read More <ArrowForwardIcon style={{ fontSize: "medium" }} />
                                </Button>
                            )}
                            <IconButton
                                aria-label="Arrow"
                                onMouseEnter={handleArrowHover1}
                                onClick={handleArrowClick1}
                                style={{
                                    display: showButton1 ? "none" : "flex",
                                    alignItems: "center",
                                    padding: "2px",
                                    marginTop: "10px",
                                }}
                            >
                                <ArrowForwardIcon
                                    style={{ color: "#189AB4", backgroundColor: "#F0FFF9" }}
                                />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Grid>

                <Grid item xs={4}>
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
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        color: "#05445E",
                                        marginBottom: "10px",
                                        fontFamily: "Jost, sans-serif",
                                    }}
                                >
                                    Categories
                                </Typography>
                                <RadioGroup
                                    aria-label="categories"
                                    name="categories"
                                    value={selectedCategory}
                                    onChange={handleCategoryChange}
                                >
                                    <FormControlLabel
                                        value="Cardiology"
                                        control={
                                            <Radio
                                                size="small"
                                                sx={{
                                                    fontSize: "5px",
                                                    fontFamily: "Poppins, sans-serif",
                                                }}
                                            />
                                        }
                                        label={
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Poppins, sans-serif",
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
                                                    fontSize: "14px",
                                                    fontFamily: "Poppins, sans-serif",
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
                                                    fontSize: "14px",
                                                    fontFamily: "Poppins, sans-serif",
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
                                                    fontSize: "14px",
                                                    fontFamily: "Poppins, sans-serif",
                                                }}
                                            >
                                                Obstetrics & Gynecology
                                            </Typography>
                                        }
                                    />
                                    <FormControlLabel
                                        value="Oncology"
                                        control={<Radio size="small" />}
                                        label={
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Poppins, sans-serif",
                                                }}
                                            >
                                                Oncology
                                            </Typography>
                                        }
                                    />
                                    <FormControlLabel
                                        value="OrthopedicSurgery"
                                        control={<Radio size="small" />} // Adjust the size here
                                        label={
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Poppins, sans-serif",
                                                }}
                                            >
                                                Orthopedic Surgery{" "}
                                            </Typography>
                                        }
                                    />
                                </RadioGroup>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={2}
                sx={{ paddingRight: "8%", paddingLeft: "8%" }}
            >
                <Grid item xs={4}>
                    <Card
                        onMouseEnter={() => setHovered13(true)}
                        onMouseLeave={() => setHovered13(false)}
                        sx={{
                            borderRadius: "10px",
                            overflow: "hidden", // Ensure the image does not overflow the card when scaled
                            transition: "transform 0.3s",
                            transform: hovered13 ? "scale(1.05)" : "scale(1)",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="auto"
                            image="http://azim.commonsupport.com/Docpro/assets/images/news/news-3.jpg"
                            alt="Card 1 Image"
                            sx={{ borderRadius: "10px" }}
                        />
                    </Card>

                    <CardContent>
                        <Typography
                            variant="body1"
                            onMouseEnter={() => setHovered2(true)}
                            onMouseLeave={() => setHovered2(false)}
                            style={{
                                color: hovered2 ? "#189AB4" : "#05445E",
                                transition: "color 0.3s ease",
                                fontWeight: "bold",
                                display: "inline-block",
                                fontSize: "15px",
                                fontFamily: "Jost, sans-serif",
                            }}
                        >
                            Great food is not just eating energy.
                        </Typography>

                        <Grid
                            container
                            style={{
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
                                style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                }}
                            />
                            <Grid>
                                <Typography
                                    variant="body2"
                                    style={{
                                        fontSize: "12px",
                                        fontWeight: "500",
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    Emily Chen
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ fontSize: "10px", fontFamily: "Poppins, sans-serif" }}
                                >
                                    April 19, 2023
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    fontFamily: "Poppins, sans-serif",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisic do eiusmod
                                tempor incididunt.
                            </Typography>
                        </Grid>
                        <Box
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            {showButton2 && (
                                <Button
                                    component={Link}
                                    to={"/blogDetails"}
                                    onClick={handleArrowClick5}
                                    onMouseLeave={handleButtonLeave5}
                                    style={{
                                        marginTop: "10px",
                                        backgroundColor: "#05445E",
                                        color: "white",
                                        borderRadius: "20px",
                                        width: "100px",
                                        padding: "4px",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textTransform: "none",
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    Read More <ArrowForwardIcon style={{ fontSize: "medium" }} />
                                </Button>
                            )}
                            <IconButton
                                aria-label="Arrow"
                                onMouseEnter={handleArrowHover2}
                                onClick={handleArrowClick2}
                                style={{
                                    display: showButton2 ? "none" : "flex",
                                    alignItems: "center",
                                    padding: "2px",
                                    marginTop: "10px",
                                }}
                            >
                                <ArrowForwardIcon
                                    style={{ color: "#189AB4", backgroundColor: "#F0FFF9" }}
                                />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Grid>

                <Grid item xs={4}>
                    <Card
                        onMouseEnter={() => setHovered14(true)}
                        onMouseLeave={() => setHovered14(false)}
                        sx={{
                            borderRadius: "10px",
                            overflow: "hidden", // Ensure the image does not overflow the card when scaled
                            transition: "transform 0.3s",
                            transform: hovered14 ? "scale(1.05)" : "scale(1)",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="auto"
                            image="	http://azim.commonsupport.com/Docpro/assets/images/news/news-4.jpg"
                            alt="Card 2 Image"
                            sx={{ borderRadius: "10px" }}
                        />
                    </Card>
                    <CardContent>
                        <Typography
                            variant="body1"
                            component="div"
                            onMouseEnter={() => setHovered3(true)}
                            onMouseLeave={() => setHovered3(false)}
                            style={{
                                color: hovered3 ? "#189AB4" : "#05445E",
                                transition: "color 0.3s ease",
                                fontWeight: "bold",
                                display: "inline-block",
                                fontFamily: "Jost, sans-serif",
                            }}
                        >
                            The smell of good bread baking.
                        </Typography>
                        <Grid
                            container
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                padding: "5px",
                                borderRadius: "5px",
                            }}
                        >
                            <Avatar
                                alt="Cindy Baker"
                                src="https://www.the-sun.com/wp-content/uploads/sites/6/2023/02/AS_AI-WOMEN_OP.jpg?strip=all&quality=100&w=1620&h=1080&crop=1"
                                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                            />
                            <Grid>
                                <Typography
                                    variant="body2"
                                    style={{
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    Sophia Garcia
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ fontSize: "10px", fontFamily: "Poppins, sans-serif" }}
                                >
                                    May 5, 2022
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    fontFamily: "Poppins, sans-serif",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisic do eiusmod
                                tempor incididunt.
                            </Typography>
                        </Grid>

                        <Box
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            {showButton3 && (
                                <Button
                                    onClick={handleArrowClick5}
                                    onMouseLeave={handleButtonLeave5}
                                    style={{
                                        marginTop: "10px",
                                        backgroundColor: "#05445E",
                                        color: "white",
                                        borderRadius: "20px",
                                        width: "100px",
                                        padding: "4px",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textTransform: "none",
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    Read More <ArrowForwardIcon style={{ fontSize: "medium" }} />
                                </Button>
                            )}
                            <IconButton
                                aria-label="Arrow"
                                onMouseEnter={handleArrowHover3}
                                onClick={handleArrowClick3}
                                style={{
                                    display: showButton3 ? "none" : "flex",
                                    alignItems: "center",
                                    padding: "2px",
                                    marginTop: "10px",
                                }}
                            >
                                <ArrowForwardIcon
                                    style={{ color: "#189AB4", backgroundColor: "#F0FFF9" }}
                                />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Grid>

                <Grid item xs={4}>
                    <Paper sx={{ padding: "5%", marginTop: "10px" }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "#05445E",
                                marginBottom: "10px",
                                fontFamily: "Jost, sans-serif",
                            }}
                        >
                            Recent Posts
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={4}>
                                <img
                                    src="http://azim.commonsupport.com/Docpro/assets/images/news/post-1.jpg"
                                    alt="Post Image"
                                    style={{
                                        width: "100%",
                                        borderRadius: "10px",
                                        marginTop: "10px",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <Grid>
                                    <Typography
                                        variant="body2"
                                        style={{
                                            color: "#05445e",
                                            fontWeight: "bold",
                                            fontFamily: "Jost, sans-serif",
                                        }}
                                    >
                                        Baking can be done with a few things.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <img
                                    src="	http://azim.commonsupport.com/Docpro/assets/images/news/post-2.jpg
                  "
                                    alt="Post Image"
                                    style={{ width: "100%", borderRadius: "10px" }}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <Grid>
                                    <Typography
                                        variant="body2"
                                        style={{
                                            color: "#05445e",
                                            fontWeight: "bold",
                                            fontFamily: "Jost, sans-serif",
                                        }}
                                    >
                                        Great food is not just eating energy.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <img
                                    src="http://azim.commonsupport.com/Docpro/assets/images/news/post-3.jpg"
                                    alt="Post Image"
                                    style={{ width: "100%", borderRadius: "10px" }}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <Grid>
                                    <Typography
                                        variant="body2"
                                        style={{
                                            color: "#05445e",
                                            fontWeight: "bold",
                                            fontFamily: "Jost, sans-serif",
                                        }}
                                    >
                                        The smell of good bread baking.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <img
                                    src="	http://azim.commonsupport.com/Docpro/assets/images/news/news-5.jpg"
                                    alt="Post Image"
                                    style={{ width: "100%", borderRadius: "10px" }}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <Grid>
                                    <Typography
                                        variant="body2"
                                        style={{
                                            color: "#05445e",
                                            fontWeight: "bold",
                                            fontFamily: "Jost, sans-serif",
                                        }}
                                    >
                                        Including animation in your design system.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

            {/**Complted Grid Two */}

            <Grid
                container
                spacing={2}
                sx={{ paddingRight: "8%", paddingLeft: "8%" }}
            >
                <Grid item xs={4}>
                    <Card
                        onMouseEnter={() => setHovered15(true)}
                        onMouseLeave={() => setHovered15(false)}
                        sx={{
                            borderRadius: "10px",
                            overflow: "hidden", // Ensure the image does not overflow the card when scaled
                            transition: "transform 0.3s",
                            transform: hovered15 ? "scale(1.05)" : "scale(1)",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="auto"
                            image="http://azim.commonsupport.com/Docpro/assets/images/news/news-5.jpg"
                            alt="Card 1 Image"
                            sx={{ borderRadius: "10px" }}
                        />
                    </Card>
                    <CardContent>
                        <Typography
                            variant="body1"
                            onMouseEnter={() => setHovered4(true)}
                            onMouseLeave={() => setHovered4(false)}
                            style={{
                                color: hovered4 ? "#189AB4" : "#05445E",
                                transition: "color 0.3s ease",
                                fontWeight: "bold",
                                display: "inline-block",
                                fontFamily: "Jost, sans-serif",
                            }}
                        >
                            Including animation in your design system.
                        </Typography>

                        <Grid
                            container
                            style={{
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
                                style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                }}
                            />
                            <Grid>
                                <Typography
                                    variant="body2"
                                    style={{
                                        fontSize: "12px",
                                        fontWeight: "500",
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    Ava Johnson
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ fontSize: "10px", fontFamily: "Poppins, sans-serif" }}
                                >
                                    Jan 22, 2021
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    fontFamily: "Poppins, sans-serif",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisic do eiusmod
                                tempor incididunt.
                            </Typography>
                        </Grid>
                        <Box
                            onMouseEnter={handleMouseEnter4}
                            onMouseLeave={handleMouseLeave4}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            {showButton4 && (
                                <Button
                                    onClick={handleArrowClick5}
                                    onMouseLeave={handleButtonLeave5}
                                    style={{
                                        marginTop: "10px",
                                        backgroundColor: "#05445E",
                                        color: "white",
                                        borderRadius: "20px",
                                        width: "100px",
                                        padding: "4px",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textTransform: "none",
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    Read More <ArrowForwardIcon style={{ fontSize: "medium" }} />
                                </Button>
                            )}
                            <IconButton
                                aria-label="Arrow"
                                onMouseEnter={handleArrowHover4}
                                onClick={handleArrowClick}
                                style={{
                                    display: showButton4 ? "none" : "flex",
                                    alignItems: "center",
                                    padding: "2px",
                                    marginTop: "10px",
                                }}
                            >
                                <ArrowForwardIcon
                                    style={{ color: "#189AB4", backgroundColor: "#F0FFF9" }}
                                />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Grid>

                <Grid item xs={4}>
                    <Card
                        onMouseEnter={() => setHovered16(true)}
                        onMouseLeave={() => setHovered16(false)}
                        sx={{
                            borderRadius: "10px",
                            overflow: "hidden", // Ensure the image does not overflow the card when scaled
                            transition: "transform 0.3s",
                            transform: hovered16 ? "scale(1.05)" : "scale(1)",
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="auto"
                            image="	http://azim.commonsupport.com/Docpro/assets/images/news/news-6.jpg"
                            alt="Card 2 Image"
                            sx={{ borderRadius: "10px" }}
                        />
                    </Card>
                    <CardContent>
                        <Typography
                            variant="body1"
                            component="div"
                            onMouseEnter={() => setHovered5(true)}
                            onMouseLeave={() => setHovered5(false)}
                            style={{
                                color: hovered5 ? "#189AB4" : "#05445E",
                                transition: "color 0.3s ease",
                                fontWeight: "bold",
                                display: "inline-block",
                                fontFamily: "Jost, sans-serif",
                            }}
                        >
                            Baking can be done with a few things.
                        </Typography>
                        <Grid
                            container
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                padding: "5px",
                                borderRadius: "5px",
                            }}
                        >
                            <Avatar
                                alt="Cindy Baker"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLag5_TX5fulI7olEzaBvHk4XP-ax6aU_MDzkzi4fILgo_FIyuZZAhvTbrxFmPTFuwiI&usqp=CAU"
                                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                            />
                            <Grid>
                                <Typography
                                    variant="body2"
                                    style={{
                                        fontSize: "12px",
                                        fontWeight: "500",
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    Amelia Jones
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ fontSize: "10px", fontFamily: "Poppins, sans-serif" }}
                                >
                                    July 14, 2020
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: "500",
                                    fontFamily: "Poppins, sans-serif",
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisic do eiusmod
                                tempor incididunt.
                            </Typography>
                        </Grid>

                        <Box
                            onMouseEnter={handleMouseEnter5}
                            onMouseLeave={handleMouseLeave5}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            {showButton5 && (
                                <Button
                                    onClick={handleArrowClick5}
                                    onMouseLeave={handleButtonLeave5}
                                    style={{
                                        marginTop: "10px",
                                        backgroundColor: "#05445E",
                                        color: "white",
                                        borderRadius: "20px",
                                        width: "100px",
                                        padding: "4px",
                                        fontSize: "10px",
                                        fontWeight: "bold",
                                        textTransform: "none",
                                        fontFamily: "Poppins, sans-serif",
                                    }}
                                >
                                    Read More <ArrowForwardIcon style={{ fontSize: "medium" }} />
                                </Button>
                            )}
                            <IconButton
                                aria-label="Arrow"
                                onMouseEnter={handleArrowHover5}
                                onClick={handleArrowClick5}
                                style={{
                                    display: showButton5 ? "none" : "flex",
                                    alignItems: "center",
                                    padding: "2px",
                                    marginTop: "10px",
                                }}
                            >
                                <ArrowForwardIcon
                                    style={{ color: "#189AB4", backgroundColor: "#F0FFF9" }}
                                />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Grid>
                <Grid item xs={4}>
                    <Grid>
                        <Paper sx={{ padding: "5%", marginTop: "10px" }}>
                            <Grid>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: "bold",
                                        color: "#05445E",
                                        marginBottom: "10px",
                                        fontFamily: "Jost, sans-serif",
                                    }}
                                >
                                    Archives
                                </Typography>
                                <RadioGroup
                                    aria-label="categories"
                                    name="categories"
                                    value={selectedCategory1}
                                    onChange={handleCategoryChange1}
                                >
                                    <FormControlLabel
                                        value="Cardiology"
                                        control={<Radio size="small" sx={{ fontSize: "5px" }} />}
                                        label={
                                            <Typography variant="body2">
                                                <Grid
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "14px",
                                                            fontFamily: "Poppins, sans-serif",
                                                        }}
                                                    >
                                                        November 2016
                                                    </span>
                                                    <span style={{ marginLeft: "20px" }}>(5)</span>
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
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "14px",
                                                            fontFamily: "Poppins, sans-serif",
                                                        }}
                                                    >
                                                        December 2020
                                                    </span>
                                                    <span style={{ marginLeft: "20px" }}>(7)</span>
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
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "14px",
                                                            fontFamily: "Poppins, sans-serif",
                                                        }}
                                                    >
                                                        January 2021
                                                    </span>
                                                    <span style={{ marginLeft: "35px" }}>(5)</span>
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
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "14px",
                                                            fontFamily: "Poppins, sans-serif",
                                                        }}
                                                    >
                                                        February 2023
                                                    </span>
                                                    <span style={{ marginLeft: "28px" }}>(2)</span>
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
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "14px",
                                                            fontFamily: "Poppins, sans-serif",
                                                        }}
                                                    >
                                                        March 2023
                                                    </span>
                                                    <span style={{ marginLeft: "45px" }}>(9)</span>
                                                </Grid>
                                            </Typography>
                                        }
                                    />
                                </RadioGroup>
                            </Grid>
                        </Paper>
                        <Paper sx={{ padding: "10px", marginTop: "10px" }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    color: "#05445E",
                                    marginBottom: "10px",
                                    fontFamily: "Jost, sans-serif",
                                }}
                            >
                                Tags
                            </Typography>
                            <Grid container spacing={1} justifyContent="center">
                                {/* First row with three buttons */}
                                <Grid item xs={6} sm={4} md={4} lg={3} xl={3}>
                                    <Button
                                        style={{
                                            borderRadius: "30px",
                                            border: hovered6
                                                ? "1px solid #05445E"
                                                : "1px solid #05445E",
                                            transition: "border 0.3s ease",
                                            backgroundColor: hovered6 ? "#05445E" : "#F0FFF9",
                                            color: hovered6 ? "#F0FFF9" : "black",
                                            textTransform: "none",
                                            fontSize: "14px",
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                        onMouseOver={handleMouseOver6}
                                        onMouseOut={handleMouseOut6}
                                    >
                                        Medicine
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        style={{
                                            borderRadius: "30px",
                                            border: hovered7
                                                ? "1px solid #05445E"
                                                : "1px solid #05445E",
                                            transition: "border 0.3s ease",
                                            backgroundColor: hovered7 ? "#05445E" : "#F0FFF9",
                                            color: hovered7 ? "#F0FFF9" : "black",
                                            textTransform: "none",
                                            fontSize: "14px",
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                        onMouseOver={handleMouseOver7}
                                        onMouseOut={handleMouseOut7}
                                    >
                                        Treatment
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        style={{
                                            borderRadius: "30px",
                                            border: hovered8
                                                ? "1px solid #05445E"
                                                : "1px solid #05445E",
                                            transition: "border 0.3s ease",
                                            backgroundColor: hovered8 ? "#05445E" : "#F0FFF9",
                                            color: hovered8 ? "#F0FFF9" : "black",
                                            textTransform: "none",
                                            fontSize: "14px",
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                        onMouseOver={handleMouseOver8}
                                        onMouseOut={handleMouseOut8}
                                    >
                                        Pills
                                    </Button>
                                </Grid>
                                {/* Second row with two buttons */}
                                <Grid item>
                                    <Button
                                        style={{
                                            borderRadius: "30px",
                                            border: hovered9
                                                ? "1px solid #05445E"
                                                : "1px solid #05445E",
                                            transition: "border 0.3s ease",
                                            backgroundColor: hovered9 ? "#05445E" : "#F0FFF9",
                                            color: hovered9 ? "#F0FFF9" : "black",
                                            textTransform: "none",
                                            fontSize: "14px",
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                        onMouseOver={handleMouseOver9}
                                        onMouseOut={handleMouseOut9}
                                    >
                                        Specialist
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        style={{
                                            borderRadius: "30px",
                                            border: hovered10
                                                ? "1px solid #05445E"
                                                : "1px solid #05445E",
                                            transition: "border 0.3s ease",
                                            backgroundColor: hovered10 ? "#05445E" : "#F0FFF9",
                                            color: hovered10 ? "#F0FFF9" : "black",
                                            textTransform: "none",
                                            fontSize: "14px",
                                            fontFamily: "Poppins, sans-serif",
                                        }}
                                        onMouseOver={handleMouseOver10}
                                        onMouseOut={handleMouseOut10}
                                    >
                                        Doctors
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogCards;