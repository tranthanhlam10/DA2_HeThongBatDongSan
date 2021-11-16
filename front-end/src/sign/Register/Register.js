import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
export default function Register() {
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
                                    <input type="text" id="name" name="name" />
                                </div>
                                <div className="fullname-input">
                                    <label for="lastname">Last Name</label>
                                    <input type="text" id="lastname" name="lastname" />
                                </div>
                            </div>
                            <div className="email-container">
                                <div className="email-input">
                                    <label for="email">Your Email</label>
                                    <input type="email" id="email" name="email" />
                                </div>
                            </div>
                            <div className="pw-container">
                                <div className="pw-input">
                                    <label for="pw">Password</label>
                                    <input type="password" id="pw" name="pw" />
                                </div>
                                <div className="confirm-pw-input">
                                    <label for="confirm-pw">Confirm Password</label>
                                    <input type="password" id="confirm-pw" name="confirm-pw" />
                                </div>
                            </div>
                        </form>
                        <label for="tac" className="register-agree">
                            <input id="tac" type="checkbox" name="terms-and-conditions" />
                            I agree to the <span> Terms and Conditions</span>
                        </label>
                    </div>
                </div>
            </div>
            {/* <Link to="/login">Đăng nhập</Link> */}
        </div>
    )
}
