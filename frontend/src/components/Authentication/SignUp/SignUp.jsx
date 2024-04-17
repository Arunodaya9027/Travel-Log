import React, { useState, useRef } from 'react';
import './styles/style.css';

function SignUp() {
    const btnRegister = useRef(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        dob: '',
        gender: 'Select Your Gender',
        // options: ['Male', 'Female', 'Other'],
        pincode: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        // Add other form fields here
    });

    const [errorMessages, setErrorMessages] = useState({
        firstName: '',
        lastName: '',
        userName: '',
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
        userName: '',
        dob: '',
        gender: '',
        phone: '',
        email: '',
        password: '',
        confirm: ''
    });

    const [card, setCard] = useState(0); 
    
    const handleNext = (e) => {
        setCard({
            card : card +1
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateFname = () => {
        const fname = formData.firstName.trim();
        if (fname === '' || fname.length === 0) {
            setErrorMessages({
                ...errorMessages,
                firstName: 'First Name is Required'
            });
            setSuccessMessages({
                ...successMessages,
                firstName: ''
            });
            return false;
        }
        if (!fname.match(/^[a-zA-Z]*$/) || fname.length < 3) {
            setErrorMessages({
                ...errorMessages,
                firstName: 'Write Full First Name'
            });
            setSuccessMessages({
                ...successMessages,
                firstName: ''
            });
            return false;
        }
        setErrorMessages({
            ...errorMessages,
            firstName: ''
        });
        setSuccessMessages({
            ...successMessages,
            firstName: 'true'
        });
        return true;
    };

    const validateLname = () => {
        const lname = formData.lastName.trim();
        if (lname === '' || lname.length === 0) {
            setErrorMessages({
                ...errorMessages,
                lastName: 'Last Name is Required'
            });
            setSuccessMessages({
                ...successMessages,
                lastName: ''
            });
            return false;
        }
        if (!lname.match(/^[a-zA-Z\s]*$/) || lname.length < 3) {
            setErrorMessages({
                ...errorMessages,
                lastName: 'Write Full Last Name'
            });
            setSuccessMessages({
                ...successMessages,
                lastName: ''
            });
            return false;
        }
        setErrorMessages({
            ...errorMessages,
            lastName: ''
        });
        setSuccessMessages({
            ...successMessages,
            lastName: 'true'
        });
        return true;
    };
    
    const validateUsername = () => {
        const user = formData.userName.trim();
        if (user === '' || user.length === 0) {
            setErrorMessages({
                ...errorMessages,
                userName: 'Username is Required'
            });
            setSuccessMessages({
                ...successMessages,
                userName: ''
            });
            return false;
        }
        if (!user.match(/^[a-z_0-9]*$/)) {
            setErrorMessages({
                ...errorMessages,
                userName: 'Invalid Username'
            });
            setSuccessMessages({
                ...successMessages,
                userName: ''
            });
            return false;
        }
        setErrorMessages({
            ...errorMessages,
            userName: ''
        });
        setSuccessMessages({
            ...successMessages,
            userName: 'true'
        });
        return true;
    };
    
    const validateDate = () => {
        const date = formData.dob;
        if (date === '' || date.length === 0) {
            setErrorMessages({
                ...errorMessages,
                dob: 'Enter your DOB'
            });
            setSuccessMessages({
                ...successMessages,
                dob: ''
            });
            return false;
        }
        const dobPattern = /^(19[5-9]\d|20[0-1]\d)-\d{2}-\d{2}$/;
        if (!dobPattern.test(date)) {
            setErrorMessages({
                ...errorMessages,
                dob: 'Invalid DOB'
            });
            setSuccessMessages({
                ...successMessages,
                dob: ''
            });
            return false;
        }
        setErrorMessages({
            ...errorMessages,
            dob: ''
        });
        setSuccessMessages({
            ...successMessages,
            dob: 'true'
        });
        return true;
    };
    
    const validateGender = () => {
        console.log(formData);
        const gender = formData.gender;
        if (gender == "") {
            setErrorMessages({
                ...errorMessages,
                gender: 'Select the Gender'
            });
            setSuccessMessages({
                ...successMessages,
                gender: ''
            });
            return false;
        }
        setErrorMessages({
            ...errorMessages,
            gender: ''
        });
        setSuccessMessages({
            ...successMessages,
            gender: 'true'
        });
        return true;
    };

    // const validateCourse = () => {
    //     if (!formData.course) {
    //         setErrorMessages({
    //             ...errorMessages,
    //             course: 'Select a Course'
    //         });
    //         setSuccessMessages({
    //             ...successMessages,
    //             course: ''
    //         });
    //         return false;
    //     }
    //     setErrorMessages({
    //         ...errorMessages,
    //         course: ''
    //     });
    //     setSuccessMessages({
    //         ...successMessages,
    //         course: 'true'
    //     });
    //     return true;
    // };
    
    const validateNumber = () => {
        const phone = formData.phone.trim();
        if (phone === '' || phone.length === 0) {
            setErrorMessages({
                ...errorMessages,
                phone: 'Mobile No is Required'
            });
            setSuccessMessages({
                ...successMessages,
                phone: ''
            });
            return false;
        }
        if (phone.length !== 10 || !phone.match(/^\d{10}$/)) {
            setErrorMessages({
                ...errorMessages,
                phone: 'Invalid Mobile No'
            });
            setSuccessMessages({
                ...successMessages,
                phone: ''
            });
            return false;
        }
        setErrorMessages({
            ...errorMessages,
            phone: ''
        });
        setSuccessMessages({
            ...successMessages,
            phone: 'true'
        });
        return true;
    };
    
    const validateEmail = () => {
        const email = formData.email.trim();
        if (email === '' || email.length === 0) {
            setErrorMessages({
                ...errorMessages,
                email: 'Email is Required'
            });
            setSuccessMessages({
                ...successMessages,
                email: ''
            });
            return false;
        }
        if (!email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )) {
            setErrorMessages({
                ...errorMessages,
                email: 'Invalid Email'
            });
            setSuccessMessages({
                ...successMessages,
                email: ''
            });
            return false;
        }
        setErrorMessages({
            ...errorMessages,
            email: ''
        });
        setSuccessMessages({
            ...successMessages,
            email: 'true'
        });
        return true;
    };
    
    const validatePassword = () => {
        const password = formData.password;
        if (password.length === 0) {
            setErrorMessages({
                ...errorMessages,
                password: 'Password is required'
            });
            setSuccessMessages({
                ...successMessages,
                password: ''
            });
            return false;
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
        if (!password.match(regex)) {
            setErrorMessages({
                ...errorMessages,
                password: 'Password should be Alphanumeric'
            });
            setSuccessMessages({
                ...successMessages,
                password: ''
            });
            return false;
        }
        setErrorMessages({
            ...errorMessages,
            password: ''
        });
        setSuccessMessages({
            ...successMessages,
            password: 'true'
        });
        return true;
    };
    
    const confirmPassword = () => {
        const password = formData.password;
        const confirmPassword = formData.confirm;
        if (confirmPassword === '' || confirmPassword.length === 0) {
            setErrorMessages({
                ...errorMessages,
                confirm: 'Password is required'
            });
            setSuccessMessages({
                ...successMessages,
                confirm: ''
            });
            return false;
        }
        if (password !== confirmPassword) {
            setErrorMessages({
                ...errorMessages,
                confirm: "Password doesn't match"
            });
            setSuccessMessages({
                ...successMessages,
                confirm: ''
            });
            return false;
        }
        setErrorMessages({
            ...errorMessages,
            confirm: ''
        });
        setSuccessMessages({
            ...successMessages,
            confirm: 'true'
        });
        return true;
    };

    const onLastName = () => {
        validateFname();
    };
    
    const onUser = () => {
        validateFname();
        validateLname();
    };
    
    const onDob = () => {
        validateFname();
        validateLname();
        validateUsername();
    };
    
    const onGender = () => {
        validateFname();
        validateLname();
        validateUsername();
        validateDate();
    };
    
    // const onCourse = () => {
    //     validateFname();
    //     validateLname();
    //     validateUsername();
    //     validateDate();
    //     validateGender();
    // };
    
    const onPhone = () => {
        validateFname();
        validateLname();
        validateUsername();
        validateDate();
        validateGender();
        // validateCourse();
    };
    
    const onEmail = () => {
        validateFname();
        validateLname();
        validateUsername();
        validateDate();
        validateGender();
        // validateCourse();
        validateNumber();
    };
    
    const onPassword = () => {
        validateFname();
        validateLname();
        validateUsername();
        validateDate();
        validateGender();
        // validateCourse();
        validateNumber();
        validateEmail();
    };
    
    const onConfirm = () => {
        validateFname();
        validateLname();
        validateUsername();
        validateDate();
        validateGender();
        // validateCourse();
        validateNumber();
        validateEmail();
        validatePassword();
    };
    
    const onCheck = () => {
        validateFname();
        validateLname();
        validateUsername();
        validateDate();
        validateGender();
        // validateCourse();
        validateNumber();
        validateEmail();
        validatePassword();
        confirmPassword();
    };    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCard({
            card : 0
        });
        const isFormValid =
            validateFname() &&
            validateLname() &&
            validateUsername() &&
            validateDate() &&
            validateGender() &&
            validateNumber() &&
            validateEmail() &&
            validatePassword() &&
            confirmPassword();

        if (!isFormValid) {
            // Handle form submission
            btnRegister.current.style.disabled = 'true';
            alert('Please check the fields');
        } else {
            btnRegister.current.style.disabled = 'false';
            try {
                const response = await fetch('http://127.0.0.1:5000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
    
                if (response.ok) {
                    console.log('Registered successfully');
                    // Redirect or perform other actions upon successful registration
                } else {
                    console.error('Failed to register');
                }
            } catch (error) {
                console.error('Error registering:', error);
            }
        }
    };

    return (
        <>
            <div className="container-fluid sign-in">
                <div className="row">
                    <div className="card">
                        <div className="card-body mt-0">
                            <div className="card-title text-center">
                                <h1><b>Registration Form</b></h1>
                                <h6><b>_____________________________________________________________</b></h6>
                                <h6><b>*Hover on specific field for any instructions</b></h6>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="card-text row ms-4 me-4">
                                    <div className="form-group mb-2">
                                        <div className="input-group">
                                            <i className="fa-solid fa-feather input-group-text"></i>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                onKeyUp={validateFname}
                                                onInput={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z]/g, ''); }}
                                                required
                                            />
                                            {successMessages.firstName === 'true' && <i className="fas fa-check-circle"></i>}
                                            <span>{errorMessages.firstName}</span>
                                        </div>
                                    </div>
                                    <div className="form-group mb-2">
                                        <div className="input-group">
                                            <i className="fa-solid fa-feather input-group-text"></i>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Last Name"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                onKeyUp={validateLname} 
                                                onClick={onLastName} 
                                                onInput={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); }}
                                            />
                                            {successMessages.lastName === 'true' && <i className="fas fa-check-circle"></i>}
                                            <span>{errorMessages.lastName}</span>
                                        </div>
                                    </div>
                                    <div className="form-group mb-2">
                                        <div className="input-group">
                                            <i className="fa-solid fa-user input-group-text"></i>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Username"
                                                name="userName"
                                                value={formData.userName}
                                                onChange={handleChange}
                                                onKeyUp={validateUsername} 
                                                onClick={onUser} 
                                                onInput={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z0-9_]/g, ''); }}
                                                rel="tooltip" 
                                                title="Please create username containing only lowercase alphabets, numerics and Underscore(_)"
                                            />
                                            {successMessages.userName === 'true' && <i className="fas fa-check-circle"></i>}
                                            <span>{errorMessages.userName}</span>
                                        </div>
                                    </div>
                                    <div className="form-group mb-2">
                                        <div className="input-group">
                                            <i className="fa-solid fa-calendar input-group-text"></i>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Birth Date"
                                                name="dob"
                                                value={formData.dob}
                                                onChange={handleChange}
                                                onKeyUp={validateDate} 
                                                onClick={onDob} 
                                                onFocus={(e) => {e.target.type="date"}} 
                                                onBlur={(e) => {e.target.type="text"}}
                                            />
                                            {successMessages.dob === 'true' && <i className="fas fa-check-circle"></i>}
                                            <span>{errorMessages.dob}</span>
                                        </div>
                                    </div>
                                    <div className="form-group mb-2">
                                        <div className="input-group">
                                            <i className="fa-solid fa-venus-mars input-group-text"></i>
                                            <select
                                                className="form-select dropdown-content"
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                onClickCapture={validateGender}
                                                onClick={onGender}
                                            >
                                                <option value="" selected>Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            {successMessages.gender === 'true' && <i className="fas fa-check-circle"></i>}
                                            <span>{errorMessages.gender}</span>
                                        </div>
                                    </div>
                                    <div className="form-group mb-2">
                                        <div className="input-group">
                                            <i className="fa-solid fa-phone input-group-text"></i>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Phone Number"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                onKeyUp={validateNumber} 
                                                onClick={onPhone}
                                                onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, ''); }} 
                                            />
                                            {successMessages.phone === 'true' && <i className="fas fa-check-circle"></i>}
                                            <span>{errorMessages.phone}</span>
                                        </div>
                                    </div>
                                    <div className="form-group mb-2">
                                        <div className="input-group">
                                            <i className="fa-solid fa-envelope input-group-text"></i>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Your Email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onKeyUp={validateEmail} 
                                                onClick={onEmail} 
                                                onInput={(e) => { e.target.value = e.target.value.replace(/[^a-z0-9_.@]/g, ''); }}
                                            />
                                            {successMessages.email === 'true' && <i className="fas fa-check-circle"></i>}
                                            <span>{errorMessages.email}</span>
                                        </div>
                                    </div>
                                    <div className="form-group mb-2">
                                        <div className="input-group">
                                            <i className="fa-solid fa-key input-group-text"></i>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter Your Password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                onKeyUp={validatePassword} 
                                                onClick={onPassword} 
                                                rel="tooltip" 
                                                title="Your password should be atleast 8 characters long with containing atleast 1 Uppercase, 1 Lowercase, 1 number & 1 special character (excluding -) making it a aplhanumeric combination."
                                            />
                                            {successMessages.password === 'true' && <i className="fas fa-check-circle"></i>}
                                            <span>{errorMessages.password}</span>
                                        </div>
                                    </div>
                                    <div className="form-group mb-2">
                                        <div className="input-group">
                                            <i className="fa-solid fa-key input-group-text"></i>
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                name="confirm"
                                                value={formData.confirm}
                                                onChange={handleChange}
                                                onKeyUp={confirmPassword} 
                                                onClick={onConfirm} 
                                                rel="tooltip" 
                                                title="Your Password must needed to be same case-sensitively as written above"
                                            />
                                            {successMessages.confirm === 'true' && <i className="fas fa-check-circle"></i>}
                                            <span>{errorMessages.confirm}</span>
                                        </div>
                                    </div>
                                    <div className="form-group mb-3 ms-1 me-1 mt-2">
                                        <div className="terms">
                                            <input type="checkbox" id="tnc" required />
                                            <label htmlFor="tnc" className="text-justify" style={{ fontSize: '14px' }}>By clicking this, you are confirming that you have read, understood & agreed with the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a> of BetterPlace</label>
                                        </div>
                                    </div>
                                    {/* Add other form fields here */}
                                    <button ref={btnRegister} type="submit" className="btn btn-primary btn-block col-md-12 text-center ms-2 me-2">
                                        Register Me
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;