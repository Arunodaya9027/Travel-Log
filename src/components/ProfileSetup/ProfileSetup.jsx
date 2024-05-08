import { react, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProfileSetup.css';
// import Navbar from '../Navbar';
import axios from 'axios';
import CloudinaryUploadWidget from "../CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";

function ProfileSetup() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [config, setConfig] = useState(null);
    const [publicId, setPublicId] = useState("");
    const [secureUrls, setSecureUrls] = useState("");

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        username: "",
        dob: "",
        profilePic: secureUrls,
        gender: "",
        pincode: "",
        bio: "",
        address: ""
    });

    const [errorMessages, setErrorMessages] = useState({
        firstName: '',
        lastName: '',
        username: '',
        dob: '',
        gender: '',
        phone: '',
        email: '',
        password: '',
        confirm: ''
    });

    const [successMessages, setSuccessMessages] = useState({
        firstName: '',
        lastName: '',
        username: '',
        dob: '',
        gender: '',
        phone: '',
        email: '',
        password: '',
        confirm: ''
    });

    const [currentCard, setCurrentCard] = useState(0);

    const handleNext = () => {
        if (currentCard < 1) {
            setCurrentCard(currentCard + 1);
        }
        console.log(form);
    };

    const handlePrevious = () => {
        if (currentCard > 0) {
        setCurrentCard(currentCard - 1);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
        ...form,
        [name]: value,
        });
    };

    const { cloudName = '', uploadPreset = '' } = config || {};
    console.log(cloudName);
    console.log(uploadPreset);

    const [cloudinaryConfig] = useState({
        cloudName: 'dfd6fmijq',
        uploadPreset: 'profile',
        cropping: true, //add a cropping step
        showAdvancedOptions: true,  //add advanced options (public_id and tag)
        sources: [ "local", "url", "camera", "dropbox", "google_drive", "instagram", "facebook"], // restrict the upload sources to URL and local files
        multiple: false,  //restrict upload to a single file
        folder: "uploads", //upload files to the specified folder
        tags: ["cards", "userTrips"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
        styles:{
          palette: {
            window: "#FFF",
            windowBorder: "#90A0B3",
            tabIcon: "#0E2F5A",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link:  "#0078FF",
            action:  "#FF620C",
            inactiveTabIcon: "#0E2F5A",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#E4EBF1"
          },
          frame: {
            background: "#0E2F5B99"
          }
        },
          fonts: {
              "'Cute Font', cursive": "https://fonts.googleapis.com/css?family=Cute+Font",
          },
        eager: [
          { width: 1000, crop: "scale" },
          { quality: "auto" },
          { fetch_format: "auto" },
        ],
    });
    
    const cld = new Cloudinary({
    cloud: {
        cloudName
    }
    });

    const myImage = cld.image(publicId);

    const renderCard = (cardIndex) => {
        switch (cardIndex) {
        case 0:
            return (
            <div className="card-setup">
                <form className='form'>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            className="form-control" 
                            name="firstName" value={form.firstName} 
                            onChange={handleInputChange}
                            onInput={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z]/g, ''); }} 
                            required 
                        />
                        <label htmlFor="lastName">Last Name:</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            className="form-control" 
                            name="lastName" 
                            value={form.lastName} 
                            onChange={handleInputChange} 
                            onInput={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            className="form-control" 
                            name="username" 
                            value={form.username} 
                            disabled
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input 
                            type="text" 
                            id="dob" className="form-control" 
                            name="dob" 
                            value={form.dob} 
                            onFocus={(e) => {e.target.type="date"}}
                            onBlur={(e) => {e.target.type="text"}} 
                            onChange={handleInputChange} 
                            required 
                        />
                        
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender" onChange={handleInputChange} value={form.gender} required>
                            <option value="Not Prefer To Say">Not Prefer To Say</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input 
                            type="text" 
                            id="phone" 
                            className="form-control" 
                            name="phone" 
                            value={form.phone} 
                            onChange={handleInputChange} 
                            onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }}
                            required 
                        />
                        <label htmlFor="pincode">Pincode:</label>
                        <input 
                            type="number" 
                            id="pincode"
                            className="form-control" 
                            name="pincode" 
                            value={form.pincode} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>
                    <div className="button-container">
                        <button id="button" type="button" className="previous" disabled={currentCard === 0} onClick={handlePrevious}>
                        Previous
                        </button>
                        <button id="button" type="button" className="next" onClick={handleNext}>
                        Next
                        </button>
                    </div>
                </form>
            </div>
            );
        case 1:
            return (
            <div className="card-setup">
                <form className='form'>
                    <div className="image-upload">
                        <label htmlFor="profilePic">Profile Picture</label>
                        <div className="profile-pic-container">
                            {/* <img
                                className="profile-pic"
                                src={form.profilePic}
                                alt="Profile Picture"
                                height="90%"
                                width="auto"
                            /> */}
                            {publicId ? (
                                <img
                                    className="profile-pic"
                                    src={secureUrls}
                                    alt="Profile Picture"
                                />
                                ) : (
                                <img
                                    className="profile-pic default"
                                    src={form.profilePic} // Replace with your default image path
                                    alt="Default Profile Picture"
                                />
                            )}
                            
                        </div>
                        <div className='edit-pic'>
                            <CloudinaryUploadWidget 
                                uwConfig={cloudinaryConfig} 
                                setPublicId={setPublicId} 
                                setSecureUrls={setSecureUrls}
                                name="Edit Picture"
                            />
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio:</label>
                        <textarea 
                            id="bio" 
                            name="bio" 
                            rows="5" 
                            value={form.bio} 
                            onChange={handleInputChange} 
                        >
                        </textarea>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="visitPlaces">Favourite Places to Visit:</label>
                        <textarea id="visitPlaces" name="visitPlaces" rows="3" required></textarea>
                    </div> */}
                    <div className="button-container">
                        <button id="button" type="button" className="previous" onClick={handlePrevious}>
                        Previous
                        </button>
                        <button id="button" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
            );
        default:
            return null;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            ['profilePic']: secureUrls,
        });
        console.log(form);
        axios.post(`http://localhost:5000/setup-profile/${id}`, form)
        .then((res) => {
            navigate("/");
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    };

    const loadData = () => {
        console.log(id);
        axios.get(`http://localhost:5000/setup-profile/${id}`)
        .then((res) => {
            console.log(res.data[0]);
            setForm(res.data[0]);
            // setForm({
            //     ...form,
            //     ['username']: res.data[0].username,
            // });
            console.log(form);
        })
        .catch((err) => {
            console.log(err);
        })
    };

    const fetchConfig = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/config');
          setConfig(response.data);
        } catch (error) {
          console.error('Failed to fetch config:', error);
        }
    };

    useEffect(() => {
        loadData(id);
        fetchConfig();
    }, [id]);

    return (
        <>
            <div className="profile-container">{renderCard(currentCard)}</div>
        </>
        
    );
};

export default ProfileSetup;