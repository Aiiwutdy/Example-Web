import React, { useState } from "react";
import ImgList from "../../ImgList";
import "../Login/LoginStyle.css";
import PrimaryButton from "../../component/PrimaryButton/PrimaryButton";
import ButttonLongin from "../../component/ButttonLongin/ButttonLongin";
import { useHistory } from "react-router";
import { login } from "../../service/auth.service"

export default function Login() {
  const history = useHistory();

  const toRegister = () => history.push("/register");
  const toLogin = () => history.push("/");

  const [username, setUsername] = useState("");
  const [confrim, setConfrim] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    // call api login
    // history.replace('/term')
    try {
      const response = await login({
        username: username,
        password: password
      })
      
      if (response.data.status) {
        alert(response.data.data.token)
        history.replace('/term') 

      } else {
        alert(response.data.message)
      }
    } catch (error) {
      console.log(error)
      alert('Login failed')
    }
  };

  return (
    <div class="bg-1 ">
      <div class="container-fluid ">
        <div class="row col-12">
          <div class="col-6"></div>
          <div
            class="row col-6"
            style={{
              textAlign: "right",
              marginTop: "20px",
              paddingRight: "50px",
            }}
          >
            <div class="col-6"></div>
            <div class="row col-6">
              <ButttonLongin text="เข้าสู่ระบบ" onClick={toLogin} isButton={true} />
              <ButttonLongin
                text="สมัครสมาชิก"
                onClick={toRegister}
                isButton={false}

              />
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="card-body">
            <form class="form-horizontal" autocomplete="off">
              <LoginPanel
                onUsernameChange={setUsername}
                onPasswordChange={setPassword}
                onClick={onLogin}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const LoginPanel = ({ onClick, onUsernameChange, onPasswordChange }) => (
  <div class="row">
    <div class="row col-12 logo">
      <div class="row col-4 mt-5 logo">
        <img src={ImgList.Logo} alt="Logo" />
      </div>
    </div>
    <div class="row col-12 login-input mt-5">
      <div class="row col-4 ">
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <i class="fa fa-user" aria-hidden="true"></i>
            </span>
          </div>
          <input
            type="text"
            class="form-control "
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => onUsernameChange(e.target.value)}
          />
        </div>
        <div class="input-group mb-4">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={(e) => onPasswordChange(e.target.value)}
          />
        </div>
        <PrimaryButton text="เข้าสู่ระบบ" onClick={onClick} />
      </div>
    </div>
  </div>
);
