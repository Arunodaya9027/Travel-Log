import { useState } from "react";
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

function NewTripForm() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    zipCode: "",
    description: "",
    image: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  function validationCheck(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  const handleSubmit = (e) => {
    validationCheck(e);

    axios
      .post("http://localhost:5000/createJourney", formData)
      .then((res) => {
        console.log(res);
        setFormData({});
        navigate("/india/cards");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
                  <Form.Label>Placename*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Place name"
                    name="placeName"
                    value={formData.placeName}
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
                    value={formData.expenditure}
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
                    value={formData.timings}
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </>
            )}
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City*</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
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
                value={formData.state}
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
                value={formData.zipCode}
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
                value={formData.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Photos</Form.Label>
              <Form.Control
                type="file"
                multiple
                name="images"
                value={formData.image}
                onChange={handleInputChange}
              />
            </Form.Group>
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
