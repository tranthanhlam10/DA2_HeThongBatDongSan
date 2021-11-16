import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
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
                                <span class="material-icons">
                                    person
                                </span>
                                <input type="text" name="username" id="" placeholder="Username or Email" />
                            </div>
                            <div class="input-group">
                                <span class="material-icons">
                                    key
                                </span>
                                <input type="text" name="pass" id="" placeholder="Password" />
                            </div>
                            <div class="option">
                                <div class="remember">
                                    <input type="checkbox" name="remember" value="remember" />
                                    <label for="rememver">Remember me?</label>
                                </div>
                                <a href="#">Forgot password?</a>
                            </div>
                            <button>Login</button>
                            <p>
                                <span>or Login with</span>
                            </p>
                        </form>
                        <ul class="login-with-group">
                            <li>
                                <a href="#" class="facebook">
                                    <i class='bx bxl-facebook facebook-icon'></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="twitter">
                                    <i class='bx bxl-twitter twitter-icon'></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="google">
                                    <i class='bx bxl-google google-icon'></i>
                                </a>
                            </li>
                        </ul>
                        <p class="sign-up">
                            Don't have an account?
                            <Link to='/register'> Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
