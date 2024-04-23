import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import {useLocation} from "react-router-dom"
import "./NewForm.css"
import Navbar from "./Navbar";


function NewTripForm() {
  const [validated, setValidated] = useState(false);
  const location = useLocation()

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            {!location.pathname.startsWith("/new/trip") && (
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Placename</Form.Label>
                <Form.Control required type="text" placeholder="Last name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            )}
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Photos</Form.Label>
              <Form.Control type="file" multiple placeholder="Zip" />
            </Form.Group>
          </Row>

          <Button type="submit">{location.pathname.startsWith("/new/trip") ? "Create Your Journey" :"Edit your journey"}</Button>
        </Form>
      </div>
    </div>
  );
}

export default NewTripForm;
