import React, { useState } from "react";
import "./Register.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import ReactLoading from "react-loading";
export default function Register() {
  const informationText =
    "Chúng tôi điều hành trang web www.batdongsan.vn. Chúng tôi là Công ty TNHH MTV Bất Động Sản, một công ty đăng ký tại Việt Nam theo số mã số 0806456324 và có trụ sở chính và địa chỉ giao dịch chính tại khu phố 6, Thủ Đức, Thành phố Hồ Chí Minh.";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [border, setBorder] = useState("1px solid #ccc");
  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  function AlertDialog(text) {
    alert(`${text}`);
  }

  const handleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      history.push("/login");
    }, 3000);
  };

  const validate = (event) => {
    event.preventDefault();

    if (!firstName) {
      setIsValidFirstName(false);
      AlertDialog("Tên không được để trống");
    } else {
      setIsValidFirstName(true);
      if (!lastName) {
        setIsValidLastName(false);
        AlertDialog("Họ không được để trống");
      } else {
        setIsValidLastName(true);
        if (!lastName) {
          setIsValidLastName(false);
          AlertDialog("Họ không được để trống");
        } else {
          setIsValidLastName(true);
          if (!email) {
            setIsValidEmail(false);
            AlertDialog("Email không được để trống");
          } else {
            if (!regEmail.test(email)) {
              AlertDialog("Email không hợp lệ");
            } else {
              setIsValidEmail(true);
            }
            if (!password) {
              setIsValidPassword(false);
              AlertDialog("Mật khẩu không được để trống");
            } else {
              setIsValidPassword(true);
              if (!confirmPassword) {
                setIsValidConfirmPassword(false);
                AlertDialog("Vui lòng xác nhận lại mật khẩu");
              } else {
                setIsValidConfirmPassword(true);
                if (!checkBox) {
                  setIsValidCheckBox(false);
                  AlertDialog("Vui lòng đọc điều khoản!");
                } else {
                  setIsValidCheckBox(true);

                  if (password !== confirmPassword) {
                    AlertDialog("Xác nhận mật khẩu không khớp");
                    setBorder("1px solid red");
                  } else {
                    setBorder("1px solid #ccc");
                    setIsValid(true);
                    handleLoading();
                    AlertDialog("Đăng kí tài khoản thành công");
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  const registerBtn = (
    <button className="register-button" onClick={validate}>
      Đăng kí
    </button>
  );
  const loadingBtn = (
    <button className="register-button">
      <ReactLoading type="bubbles" color="#fff" />
    </button>
  );

  return (
    <div className="register-container">
      <div className="register-center">
        <div className="register-col1">
          <div className="register-col1-info">
            <div className="register-col1-title">
              <span>Thông tin</span>
            </div>
            <div className="register-col1-content">
              <span>{informationText}</span>
            </div>
          </div>
        </div>
        <div className="register-col2">
          <div className="register-col2-info">
            <div className="register-col2-title">
              <span>Đăng kí</span>
            </div>
            <form>
              <div className="full-name-container">
                <div className="name-input">
                  <label for="name">Họ</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                {!isValidFirstName}
                <div className="fullname-input">
                  <label for="lastname">Tên</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
                {!isValidLastName}
              </div>
              <div className="email-container">
                <div className="email-input">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                {!isValidEmail}
              </div>
              <div className="pw-container">
                <div className="pw-input">
                  <label for="pw">Mật khẩu</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                {!isValidPassword}
                <div className="confirm-pw-input">
                  <label for="confirm-pw">Xác nhận mật khẩu</label>
                  <input
                    style={{ border: border }}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
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
                  onChange={(event) => setCheckBox(event.target.checked)}
                />
                Tôi đồng ý với <span> Điều khoản và Điều kiện</span>
                {!isValidCheckBox}
              </label>
            </form>
            {isValid ? loadingBtn : registerBtn}
          </div>

          <div className="have-account">
            Đã có tài khoản ? <Link to="/login">Đăng nhập</Link>
          </div>
        </div>
      </div>
      {/* <Link to="/login">Đăng nhập</Link> */}
    </div>
  );
}
