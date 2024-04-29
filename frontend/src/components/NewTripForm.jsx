import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useLocation, useNavigate } from "react-router-dom";
import "./NewForm.css";
import Navbar from "./Navbar";
import axios from "axios";
import { BaseUrl } from "../operations/services";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

function NewTripForm() {
  const [validated, setValidated] = useState(false);
  const [formJourney, setFormJourney] = useState({
    country: "",
    city: "",
    state: "",
    zipCode: "",
    description: "",
    images: [],
  });
  const [form, setForm] = useState({
    country: "",
    city: "",
    state: "",
    placeNames: "",
    zipCode: "",
    description: "",
    expenditure: "",
    timings: "",
    images: []
  });
  const [config, setConfig] = useState(null);
  const [publicId, setPublicId] = useState("");
  const [secureUrls, setSecureUrls] = useState([]);
  // const [images, setImages] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const { cloudName = '', uploadPreset = '' } = config || {};
  console.log(cloudName);
  console.log(uploadPreset);
  const [cloudinaryConfig] = useState({
    cloudName: 'dfd6fmijq',
    uploadPreset: 'upload',
    // cropping: true, //add a cropping step
    showAdvancedOptions: true,  //add advanced options (public_id and tag)
    sources: [ "local", "url", "camera", "dropbox", "google_drive"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    folder: "uploads", //upload files to the specified folder
    tags: ["cards", "userTrips"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  function validationCheck(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

//   function previewFiles(files) {
//     const updatedImages = []; // Create a copy of the images array

//     const reader = new FileReader();
//     let currentIndex = 0;

//     reader.onload = () => {
//         updatedImages.push(reader.result); // Update the copy with the new image
//         if (currentIndex < files.length - 1) {
//             // Read the next file
//             currentIndex++;
//             reader.readAsDataURL(files[currentIndex]);
//         } else {
//             // All files have been processed
//             console.log(updatedImages);
//             setForm(prevForm => ({
//                 ...prevForm,
//                 images: updatedImages // Update the form state with the new images array
//             }));
//         }
//     };

//     if (files.length > 0) {
//         // Start reading the first file
//         reader.readAsDataURL(files[currentIndex]);
//     }
// }


  const handleSubmit = async(e) => {
    validationCheck(e);
    if(location.pathname.startsWith("/new/trip")) {
      const res = await axios.post("http://localhost:5000/createJourney", formJourney)
      res.then((res) => {
        console.log(res);
        setFormJourney({});
        navigate(-1);
      })
      .catch((err) => {
        console.log("error", err);s
      });
      
    } else {
      const formData = new FormData();
      await new Promise((resolve) => {
        setForm((prevForm) => ({
          ...prevForm,
          images: [...prevForm.images, ...secureUrls] // Assuming secureUrls is available
        }), resolve);
      });
      console.log(form.images);

      Object.entries(form).forEach(([key, value]) => {
        if (key !== 'images') {
            formData.append(key, value);
        } else {
          form.images.forEach((image, index) => {
            formData.append('images[]', image);
          });
        }
    });
      // console.log("Form Data:", formData); // Log formJourney contents
      // for (const entry of formData.entries()) {
      //     const [key, value] = entry;
      //     console.log(`${key}: ${value}`);
      // }
      // setTimeout(10);
      const res = await axios.post("http://localhost:5000/newCard", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      res.then((res) => {
        console.log(res);
        setForm({});
        navigate("/explore/india/cards");
      })
      .catch((err) => {
        console.log("error", err);
      });


      // Update images and wait for completion before sending data
      // await new Promise((resolve) => {
      //   setForm((prevForm) => ({
      //     ...prevForm,
      //     images: [...prevForm.images, ...secureUrls] // Assuming secureUrls is available
      //   }), resolve);
      // });

      // console.log(form.images);
      // const res = await axios.post("http://localhost:5000/newCard", form);
      // res.then((res) => {
      //   console.log(res);
      //   setForm({});
      //   navigate("/explore/india/cards");
      // })
      // .catch((err) => {
      //   console.log("error", err);
      // });
    }
  };

  const call = () => {
    // const formData = new FormData();
      
    //   console.log(form.images);
    //   const images = [];
    //   form.images.forEach((image, index) => {
    //     images.push(image);
    //   });
    //   console.log(images);
    //   formData.append("images", images);

    //   Object.entries(form).forEach(([key, value]) => {
    //       if (key !== 'images') {
    //           formData.append(key, value);
    //       }
    //   });
    //   // console.log("Form Data:", formData.keys());
    //   for (const entry of formData.entries()) {
    //     const [key, value] = entry;
    //     console.log(`${key}: ${value}`);
    // }
    console.log(secureUrls);
    setForm((prevForm) => ({
      ...prevForm,
      images: [...prevForm.images, ...secureUrls],
    }));
    setTimeout(100);
    console.log(form.images);
    console.log(form);

    // const imageKeys = Array.from(formData.keys()).filter(key => key.startsWith('image_'));
    // const images = imageKeys.map(key => formData.get(key));

    // console.log(images);
  } 

  const redirectPage = () => {
    useNavigate("/explore/india/cards")
  }

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setFormJourney({
      ...formJourney,
      [name]: value,
    });
  };

  // const handleImageChange = (e) => {
  //   const files = e.target.files;
  //   const imgNames = [];
  
  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];
  //     if (file.type.startsWith('image/')) {
  //       imgNames.push(file.name);
  //     } 
  //     // else if (file.type.startsWith('video/')) {
  //     //   newVideos.push(file);
  //     // }
  //   }
  
  //   setForm(prevForm => ({
  //     ...prevForm,
  //     imgNames: [...prevForm.imgNames, ...imgNames]
  //     // videos: [...prevForm.videos, ...newVideos]
  //   }));
  //   previewFiles(files);
  // };

  // const handleUpload = () => {
  //   const widget = window.cloudinary.createUploadWidget(
  //     {
  //       cloudName: cloudinaryConfig.cloudName,
  //       uploadPreset: cloudinaryConfig.uploadPreset,
  //       folder: 'your_folder_name',
  //       cropping: false,
  //       onSuccess: (result) => {
  //         console.log('Upload successful:', result.info.secure_url);
  //         // You can handle the uploaded image URL here
  //       },
  //       onFailure: (error) => {
  //         console.error('Upload failed:', error);
  //       },
  //     },
  //     (error, result) => {
  //       if (!error && result && result.event === 'success') {
  //         console.log('Done! Here is the image info: ', result.info);
  //       }
  //     }
  //   );
  //   widget.open(); // Open the upload widget when the button is clicked
  // };

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName
    }
  });

  const myImage = cld.image(publicId);

  const handleImageChange = (e) => {
    const files = e.target.files;
    setForm({
      ...form,
      images: [...files]
    });
  };

  const handle2Input = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
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
    fetchConfig();
  }, []);

  return (
    <div className="bg">
      <Navbar />
      {location.pathname.startsWith("/new/trip") ? (
        <h1 style={{ color: "white" }}>Create your Journey</h1>
      ) : (
        <h1 style={{ color: "white" }}>Edit your journey</h1>
      )}
      <div className="container tripForm">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            {!location.pathname.startsWith("/new/trip") && (
              <>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Places*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Place name"
                    name="placeNames"
                    value={formJourney.placeNames}
                    onChange={handle2Input}
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Expenditure*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Expenditure"
                    name="expenditure"
                    value={formJourney.expenditure}
                    onChange={handle2Input}
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Timings*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Timings"
                    name="timings"
                    value={formJourney.timings}
                    onChange={handle2Input}
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </>
            )}
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Country*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                name="country"
                value={formJourney.country}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid country.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City*</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={formJourney.city}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State*</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={formJourney.state}
                onChange={handleInputChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zipCode"
                value={formJourney.zipCode}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Description*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Short Description"
                name="description"
                value={formJourney.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Photos</Form.Label>
              {/* <Form.Control
                type="file"
                multiple
                accept="image/*, video/*"
                name="images"
                onChange={handleImageChange}
              /> */}
             <CloudinaryUploadWidget uwConfig={cloudinaryConfig} setPublicId={setPublicId} setSecureUrls={setSecureUrls} />
            </Form.Group>
            {/* <div style={{ width: "800px" }}>
              <AdvancedImage
                style={{ maxWidth: "100%" }}
                cldImg={myImage}
                plugins={[responsive(), placeholder()]}
              />
            </div> */}
          </Row>
          {location.pathname.startsWith("/new/trip") ? (
            <Button type="submit">Create Your Journey</Button>
          ) : (
            <Button type="submit">Edit your journey</Button>
          )}
          {/* <Button type="submit"></Button> */}
        </Form>
      </div>
    </div>
  );
}

export default NewTripForm;
