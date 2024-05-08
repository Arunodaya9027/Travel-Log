
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../MainScreen";
import "./ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/userActions";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picMessage, setPicMessage] = useState();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPic(userInfo.pic);
    }
  }, [history, userInfo]);

  const postDetails = (pics) => {
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(pic);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ name, email, password, pic }));
  };

  return (
    <MainScreen title="EDIT PROFILE">
      <div>
        <Row className="profileContainer">
          <Col md={6}>
            <Form onSubmit={submitHandler}>
              {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              {picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )}
              <Form.Group controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                <Form.File
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                />
              </Form.Group>
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={pic} alt={name} className="profilePic" />
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default ProfileScreen;



// import { Component, React } from 'react'
 
// import UserProfile from 'react-user-profile';
// import Navbar from "./Navbar";
// import './userprofile.css';
 
// class Userprofile extends Component {
//   render() {
//     const photo = 'https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg'
//     const userName = 'Harvey Specter'
//     const location = 'New York, USA'
 
//     const comments = [
//       {
//         id: '1',
//         photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg',
//         userName: 'Mike Ross',
//         content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentsesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ',
//         createdAt: 1543858000000
//       }
//     ]

//     const totalFollowers = 1000;
//     const totalFollowing = 500;
//     const age = 25;
//     const gender = 'Female';
//     const numCountries = 20;
//     const numCities = 50;
 
//     return (
//       <>
//         <div className='user-page'>
//           <Navbar />
//           {/* <div style={{ margin: '0 auto', width: '100%' }}>
//             <UserProfile photo={photo} userName={userName} location={location} initialLikesCount={121} initialFollowingCount={723}/>
//           </div> */}
//           <div className="profile-container">
//             <div className="profile-pic-container">
//               <img src={photo} alt="Profile Picture" className="profile-pic" />
//             </div>
//             <div className="profile-info">
//               <h1 className="name">{userName}</h1>
//               <p className="location">from {location}</p>
//               <p className="stats">
//                 <span className="followers">{totalFollowers} Followers</span>
//                 <span className="following">Following {totalFollowing}</span>
//               </p>
//             </div>
//             <p className="bio">
//               Welcome to my travel log! I'm a {age}-year-old {gender} who loves to explore new places and cultures. I've been to {numCountries} countries and {numCities} cities around the world, and I'm always looking for my next adventure. Follow me for updates on my latest travels and tips for planning your own trips!
//             </p>
//             <ul className="recent-trips">
//               <li><a href="/recent-trip-1" target="_blank">Recent Trip 1</a></li>
//               <li><a href="/recent-trip-2" target="_blank">Recent Trip 2</a></li>
//               <li><a href="/recent-trip-3" target="_blank">Recent Trip 3</a></li>
//             </ul>
//             <ul className="popular-posts">
//               <li><a href="/popular-post-1" target="_blank">Popular Post 1</a></li>
//               <li><a href="/popular-post-2" target="_blank">Popular Post 2</a></li>
//               <li><a href="/popular-post-3" target="_blank">Popular Post 3</a></li>
//             </ul>
//             <ul className="social-links">
//               <li><a href="https://www.facebook.com/your-facebook-profile" target="_blank"><img src="facebook-icon.png" alt="Facebook" /></a></li>
//               <li><a href="https://www.twitter.com/your-twitter-profile" target="_blank"><img src="twitter-icon.png" alt="Twitter" /></a></li>
//               <li><a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank"><img src="linkedin-icon.png" alt="LinkedIn" /></a></li>
//               <li><a href="https://www.github.com/your-github-profile" target="_blank"><img src="github-icon.png" alt="GitHub" /></a></li>
//             </ul>
//             <ul className="testimonials">
//               <li>"Your blog is amazing! I love reading about your travels and getting inspiration for my own trips." - Sarah</li>
//               <li>"I've learned so much from your travel tips and advice. Thanks for sharing your experiences!" - John</li>
//             </ul>
//           </div>
//         </div>
//       </>
//     )
//   }
// }
 
// export default Userprofile;
