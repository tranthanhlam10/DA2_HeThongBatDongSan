import React, { useState } from "react";
import './Register.css'
import { Link, Redirect, useHistory } from 'react-router-dom'
import ReactLoading from "react-loading";
export default function Register() {
    const history = useHistory();

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [checkBox, setCheckBox] = useState();

    const [isValidFirstName, setIsValidFirstName] = useState(true);
    const [isValidLastName, setIsValidLastName] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidconfirmPassword, setIsValidConfirmPassword] = useState(true);
    const [isValidCheckBox, setIsValidCheckBox] = useState(true);

    const [isValid, setIsValid] = useState(false)

    const [border, setBorder] = useState('1px solid #ccc')
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    function AlertDialog(text) {
        alert(`${text}`);
    }

    const validate = (event) => {
        event.preventDefault()

        if (!firstName) {
            setIsValidFirstName(false)
            AlertDialog('Tên không được để trống')
        }
        else {
            setIsValidFirstName(true)
            if (!lastName) {
                setIsValidLastName(false)
                AlertDialog('Họ không được để trống')
            }
            else {
                setIsValidLastName(true)
                if (!lastName) {
                    setIsValidLastName(false)
                    AlertDialog('Họ không được để trống')
                }
                else {
                    setIsValidLastName(true)
                    if (!email) {
                        setIsValidEmail(false)
                        AlertDialog('Email không được để trống')
                    }
                    else {
                        if (!regEmail.test(email)) {
                            AlertDialog('Email không hợp lệ')
                        }
                        else {
                            setIsValidEmail(true)
                        }
                        if (!password) {
                            setIsValidPassword(false)
                            AlertDialog('Mật khẩu không được để trống')
                        }
                        else {
                            setIsValidPassword(true)
                            if (!confirmPassword) {
                                setIsValidConfirmPassword(false)
                                AlertDialog('Vui lòng xác nhận lại mật khẩu')
                            }
                            else {
                                setIsValidConfirmPassword(true)
                                if (!checkBox) {
                                    setIsValidCheckBox(false)
                                    AlertDialog('Vui lòng đọc điều khoản!')
                                }
                                else {
                                    setIsValidCheckBox(true)
                                    setIsValid(true)
                                    if (password !== confirmPassword) {
                                        AlertDialog('Xác nhận mật khẩu không khớp')
                                        setBorder('1px solid red')
                                    }
                                    else {
                                        setBorder('1px solid #ccc')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    const registerBtn = <button className="register-button"
        onClick={validate}>
        Register
    </button>
    const loadingBtn = <button className="register-button">
        <ReactLoading type="bubbles" color="#fff" />
    </button>

    return (
        <div className="register-container">
            <div className="register-center">
                <div className="register-col1">
                    <div className="register-col1-info">
                        <div className="register-col1-title">
                            <span>Information</span>
                        </div>
                        <div className="register-col1-content">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere porta diam eget laoreet. Duis auctor, nisi ac auctor imperdiet, mi ligula ultrices ex, sed malesuada erat ex eget metus. Phasellus sed condimentum erat. Etiam nulla quam, aliquet sit amet pretium in, eleifend pretium massa. Fusce porta maximus tempor. Cras quis efficitur ante. Sed maximus nulla sit amet odio placerat mollis. Vestibulum quis tincidunt enim.

                                Aenean porta dolor ut nisi consequat aliquet. Integer varius condimentum lacus</span>
                        </div>

                    </div>
                </div>
                <div className="register-col2">
                    <div className="register-col2-info">
                        <div className="register-col2-title">
                            <span>Register form</span>
                        </div>
                        <form>
                            <div className="full-name-container">
                                <div className="name-input">
                                    <label for="name">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={firstName}
                                        onChange={event => setFirstName(event.target.value)}
                                    />
                                </div>
                                {!isValidFirstName}
                                <div className="fullname-input">
                                    <label for="lastname">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={lastName}
                                        onChange={event => setLastName(event.target.value)}
                                    />
                                </div>
                                {!isValidLastName}
                            </div>
                            <div className="email-container">
                                <div className="email-input">
                                    <label for="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                </div>
                                {!isValidEmail}
                            </div>
                            <div className="pw-container">
                                <div className="pw-input">
                                    <label for="pw">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={event => setPassword(event.target.value)}
                                    />
                                </div>
                                {!isValidPassword}
                                <div className="confirm-pw-input">
                                    <label for="confirm-pw">Confirm Password</label>
                                    <input
                                        style={{ border: border }}
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={event => setConfirmPassword(event.target.value)}
                                    />
                                </div>
                                {!isValidconfirmPassword}
                            </div>
                            <label for="tac" className="register-agree">
                                <input
                                    id="chekcBox"
                                    type="checkBox"
                                    name="checkBox"
                                    value={checkBox}
                                    onChange={event => setCheckBox(event.target.checked)}
                                />
                                I agree to the <span> Terms and Conditions</span>
                                {!isValidCheckBox}
                            </label>
                        </form>
                        {isValid ? loadingBtn : registerBtn}
                    </div>

                    <div className="have-account">
                        Have already an account ? <Link to="/login">Login here</Link>
                    </div>
                </div>
            </div>
            {/* <Link to="/login">Đăng nhập</Link> */}
        </div>
    )
}
