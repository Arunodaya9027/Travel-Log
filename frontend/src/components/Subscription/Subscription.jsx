import React from 'react'
import "./Subscription.css"
import axios from 'axios';
import { toast } from "react-toastify";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const CardContent = ({ title, price, quote, onClick }) => (
  <Card.Body>
    <h2>{title}</h2>
    <p>Charge: ₹{price}</p>
    <blockquote>"{quote}"</blockquote>
    <button onClick={onClick}>Pay Now</button>
  </Card.Body>
);

function Subscription() {
  const amount = 500;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_3VEMKJB9ldtRD3", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Acme Corp", //your business name
      description: "Test Transaction",
      image: "",
      order_id: order.id, //This is a sample Order ID. Pass the id obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:5000/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "Web Dev Matrix", //your customer's name
        email: "webdevmatrix@example.com",
        contact: "9000000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  function handlePayment(){
    axios
      .post("https://api.razorpay.com/v1/orders", body, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        toast.error("Task not Created");

        console.log(err);
      });
  }

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <Row>
            <Col md={4}>
              <Card>
                <CardContent
                  title="Subscription Plan 1"
                  price="199"
                  quote="Travel is the only thing you buy that makes you richer."
                  onClick={handlePayment}
                />
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardContent
                  title="Subscription Plan 2"
                  price="249"
                  quote="Change your mind and change your life."
                  onClick={handlePayment}
                />
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <CardContent
                  title="Subscription Plan 3"
                  price="299"
                  quote="Life is what happens when you're busy making other plans."
                  onClick={handlePayment}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Subscription