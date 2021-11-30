import React, { useState } from "react";
import "./Login.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import Loading from '../../common/Loading'

import ReactLoading from "react-loading";

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPass, setIsValidPass] = useState(true);
    const [error, setError] = useState();
    const [isValid, setIsValid] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleLoading = () => {
        setIsLoading(true)
        setTimeout(() => {
            history.push('/')
        }, 3000)
    }
    const validate = (event) => {
        event.preventDefault()

        if (!email) {
            setIsValidEmail(false)
            setError('Tên tài khoản không được để trống')
        } else {
            if (email !== 'admin@gmail.com' && email !== 'duybao') {
                setIsValidEmail(false)
                setError('Tài khoản không tồn tại')
            }
            else {
                setIsValidEmail(true)
                if (!password) {
                    setIsValidPass(false)
                    setError('Mật khẩu không được để trống')
                } else {
                    if (password !== 'admin') {
                        setIsValidPass(false)
                        setError('Sai mật khẩu')
                    }
                    else {
                        setIsValidPass(true);
                        handleLoading();
                    }
                }
            }
        }
    }

    const loginBtn = <button onClick={validate}>Login</button>

    const loading = <button className="login-loading-btn" >
        <ReactLoading type="bubbles" color="#fff" />
    </button>
    return (
        <div className="login-container">
            <div className="login-col1">
                <img src="https://media.ex-cdn.com/EXP/media.taichinhdoanhnghiep.net.vn/files/news/2021/03/26/ha-noi-diem-danh-nhieu-ong-trum-bat-dong-san-tri-hoan-nop-tien-dat-134146.jpg" />
            </div>
            <div className="login-col2">
                <div class="login-col2-center">
                    <div class="login-col2-container">
                        <form action="" class="login-form">
                            <div class="input-group">
                                <span class="material-icons">person</span>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username or Email"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                            </div>
                            {!isValidEmail && <span className="error">{error}</span>}
                            <div class="input-group">
                                <span class="material-icons">key</span>
                                <input type="password" name="pass" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
                            </div>
                            {!isValidPass && <span className="error">{error}</span>}
                            <div class="option">
                                <div class="remember">
                                    <input type="checkbox" name="remember" value="remember" />
                                    <label for="remember">Remember me?</label>
                                </div>
                                <a href="#">Forgot password?</a>
                            </div>
                            {isLoading ? loading : loginBtn}
                            <p>
                                <span>or Login with</span>
                            </p>
                        </form>
                        <ul class="login-with-group">
                            <li>
                                <a href="#" class="facebook">
                                    <i class="bx bxl-facebook facebook-icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="twitter">
                                    <i class="bx bxl-twitter twitter-icon"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="google">
                                    <i class="bx bxl-google google-icon"></i>
                                </a>
                            </li>
                        </ul>
                        <p class="sign-up">
                            Don't have an account?
                            <Link to="/register"> Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
