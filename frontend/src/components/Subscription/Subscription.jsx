import {React, useState, useEffect} from 'react'
import "./Subscription.css"
import axios from 'axios';
import { toast } from "react-toastify";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MainNav from '../MainNav';

const CardContent = ({ title, price, quote, onClick }) => (
  <Card.Body>
    <h2 className='h2'>{title}</h2>
    <p className='p'>Charge: ₹{price}</p>
    <blockquote className='blockquote'>"{quote}"</blockquote>
    <button className='button' onClick={onClick}>Pay Now</button>
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

  // function handleClick(amt) {
  //   setAmount(amt);
  //   paymentHandler();
  // }

  // function handlePayment(){
  //   axios
  //     .post("https://api.razorpay.com/v1/orders", body, {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       toast.error("Task not Created");

  //       console.log(err);
  //     });
  // }

  const [session, setSession] = useState();
    const [details, setDetails] = useState();

    const loadData = (session) => {
        if (session != null) {
            console.log(session);
            const id = session;
            console.log(id);
            axios.get(`http://localhost:5000/session/${id}`)
            .then((res) => {
                console.log(res.data);
                setDetails(res.data);
                console.log(details);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    useEffect(() => {
        const retrievedSession = localStorage.getItem('session');
        setSession(retrievedSession || null); // Set default empty string if not found
        loadData(session);
    }, [session])

  return (
    <div className='subscription-main'>
      {session ? (
            
        <div className="card-container">
          <div className='navbar-main'>
            <MainNav />
          </div>
        
        <div className="card" style={{backgroundColor: "transparent"}}>
          <div className="card-content">
            <Row>
              <Col md={4}>
                <Card>
                  <CardContent
                    title="Subscription Plan 1"
                    price="199"
                    quote="Travel is the only thing you buy that makes you richer."
                    onClick={paymentHandler}
                  />
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <CardContent
                    title="Subscription Plan 2"
                    price="349"
                    quote="Change your mind and change your life."
                    onClick={paymentHandler}
                  />
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <CardContent
                    title="Subscription Plan 3"
                    price="999"
                    quote="Life is what happens when you're busy making other plans."
                    onClick={paymentHandler}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
        ) : (
           <h2>Page Not Found</h2>
        )}
      
    </div>
  );
}

export default Subscription