import React from "react";
import { Link, useNavigate } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Paavan",
      age: 30,
      email: "johndoe@example.com",
      profileImage: null,
    };
    this.fileInputRef = React.createRef(); // Create a ref for file input
  }

  // Function to handle file input change
  handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.setState({
          profileImage: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle image icon click
  handleImageIconClick = () => {
    this.fileInputRef.current.click(); // Trigger file input click
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "#F0FFF9",
          fontFamily: "poppins, sans-serif",
          marginTop: "-25px",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            color: "#05445E",
            marginBottom: "-10px",
            marginLeft: "20px",
          }}
        >
          Profiles
        </h1>

        {/* First row */}
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1", padding: "20px", marginRight: "20px" }}>
            {/* First Profile Card */}
            <Link
              to="/profileDetails"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {/* Left side: Profile Image and Details */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "#ccc",
                      marginRight: "10px",
                      backgroundImage: `url(${
                        this.state.profileImage || "placeholder.jpg"
                      })`,
                      backgroundSize: "cover",
                      cursor: "pointer",
                    }}
                    onClick={this.handleImageIconClick}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    ref={this.fileInputRef}
                    onChange={this.handleFileChange}
                  />
                  <div>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginTop: "-15px",
                      }}
                    >
                      {this.state.username}
                    </span>
                    <p style={{ color: "black", marginTop: "40px" }}>
                      UHID: DILI.0000000034
                    </p>
                  </div>
                </div>

                {/* Right side: Additional Details */}
                <div
                  style={{
                    textAlign: "right",
                    alignSelf: "center",
                  }}
                >
                  <div style={{ marginBottom: "50px", marginTop: "10px" }}>
                    Self
                  </div>
                  <div>DOB: 01 Jan, 1990</div>
                  <div style={{ marginBottom: "0px" }}>+919876543210</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Second Profile Card */}
          <div style={{ flex: "1", padding: "20px" }}>
            <Link
              to="/profileDetails"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "#ccc",
                      marginRight: "10px",
                      backgroundImage: `url(${
                        this.state.profileImage || "placeholder.jpg"
                      })`,
                      backgroundSize: "cover",
                      cursor: "pointer",
                    }}
                    onClick={this.handleImageIconClick}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    ref={this.fileInputRef}
                    onChange={this.handleFileChange}
                  />
                  <div>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginTop: "-15px",
                      }}
                    >
                      Laxmi
                    </span>
                    <p style={{ color: "black", marginTop: "40px" }}>
                      UHID: DILI.0000000035
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    textAlign: "right",
                    alignSelf: "center",
                  }}
                >
                  <div style={{ marginBottom: "50px", marginTop: "10px" }}>
                    Mother
                  </div>
                  <div>DOB: 15 Feb, 1975</div>
                  <div style={{ marginBottom: "0px" }}>+918765432109</div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Second row */}
        <div style={{ display: "flex", marginTop: "20px" }}>
          <div style={{ flex: "1", padding: "20px", marginRight: "20px" }}>
            {/* Third Profile Card */}
            <Link
              to="/profileDetails"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "#ccc",
                      marginRight: "10px",
                      backgroundImage: `url(${
                        this.state.profileImage || "placeholder.jpg"
                      })`,
                      backgroundSize: "cover",
                      cursor: "pointer",
                    }}
                    onClick={this.handleImageIconClick}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    ref={this.fileInputRef}
                    onChange={this.handleFileChange}
                  />
                  <div>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginTop: "-15px",
                      }}
                    >
                      Nagu
                    </span>
                    <p style={{ color: "black", marginTop: "40px" }}>
                      UHID: DILI.0000000036
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    textAlign: "right",
                    alignSelf: "center",
                  }}
                >
                  <div style={{ marginBottom: "30px", marginTop: "10px" }}>
                    Father
                  </div>
                  <div>DOB: 20 Mar, 1960</div>
                  <div style={{ marginBottom: "0px" }}>+911234567890</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Fourth Profile Card */}
          <div style={{ flex: "1", padding: "20px" }}>
            <Link
              to="/profileDetails"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "#ccc",
                      marginRight: "10px",
                      backgroundImage: `url(${
                        this.state.profileImage || "placeholder.jpg"
                      })`,
                      backgroundSize: "cover",
                      cursor: "pointer",
                    }}
                    onClick={this.handleImageIconClick}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    ref={this.fileInputRef}
                    onChange={this.handleFileChange}
                  />
                  <div>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginTop: "-15px",
                      }}
                    >
                      Your Name
                    </span>
                    <p style={{ color: "black", marginTop: "40px" }}>
                      UHID: DILI.0000000037
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    textAlign: "right",
                    alignSelf: "center",
                  }}
                >
                  <div style={{ marginBottom: "30px", marginTop: "10px" }}>
                    Relation
                  </div>
                  <div>DOB: 20 Jan, 1985</div>
                  <div style={{ marginBottom: "0px" }}>+919876543210</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
