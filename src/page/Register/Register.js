import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import ImgList from "../../ImgList";
import "../Register/RegisterStyle.css";
import PrimaryButton from "../../component/PrimaryButton/PrimaryButton";
import ButttonLongin from "../../component/ButttonLongin/ButttonLongin";

export default function Register() {
  const history = useHistory();

  const toLogin = () => history.replace("/");

  const [telephone, setTelephone] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [bank, setBank] = useState("");
  const [comfrimRegisterPassword, setComfrimRegisterPassword] = useState("");
  const [numberBank, setNumberBank] = useState("");
  const [name, setName] = useState("");
  const [lineId, setLineId] = useState("");

  const onRegister = () => {
    // call api register
    // $('#ModalRegister').modal('show')
    history.push("/termCondition");
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
              <ButttonLongin
                text="เข้าสู่ระบบ"
                onClick={toLogin}
                isButton={false}
              />
              <ButttonLongin text="สมัครสมาชิก" isButton={true} />
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="card-body">
            <form class="form-horizontal" autocomplete="off">
              <RegisterPanel
                onClick={onRegister}
                onTelephoneChange={setTelephone}
                onRegisterPasswordChange={setRegisterPassword}
                onConfirmRegisterPasswordChange={setComfrimRegisterPassword}
                onNumberBankChange={setNumberBank}
                onNameChange={setName}
                onLineIdChange={setLineId}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const MockGetBank = async () => {
  return {
    status: true,
    data: [
      { bankId: 1, bankName: "SCB" },
      { bankId: 2, bankName: "KTB" },
      { bankId: 3, bankName: "KBank" },
      { bankId: 4, bankName: "JIB" },
    ],
  };
};

const RegisterPanel = ({
  onClick,
  onTelephoneChange,
  onRegisterPasswordChange,
  onConfirmRegisterPasswordChange,
  onNumberBankChange,
  onNameChange,
  onLineIdChange,
  onBankChange,
}) => {
  const [bankList, setbBankList] = useState([]);

  useEffect(() => {
    initialData();
  }, []);

  const initialData = async () => {
    const reponse = await MockGetBank();
    if (reponse.status) {
      setbBankList(reponse.data);
    }
  };

  return (
    <div class="row">
      <div class="row col-12 logo">
        <div class="row col-4 mt-4 logo">
          <img src={ImgList.Logo} alt="Logo" />
        </div>
      </div>
      <div class="row col-12 login-input mt-3">
        <div class="row col-4  ">
          <div class="input-group mb-4">
            <input
              type="text"
              class="form-control "
              placeholder="เบอร์โทรศัพท์"
              aria-label="เบอร์โทรศัพท์"
              aria-describedby="basic-addon1"
              onChange={(e) => onTelephoneChange(e.target.value)}
            />
          </div>
          <div class="input-group mb-4">
            <input
              type="password"
              class="form-control"
              placeholder="รหัสผ่าน"
              aria-label="รหัสผ่าน"
              aria-describedby="basic-addon1"
              onChange={(e) => onRegisterPasswordChange(e.target.value)}
            />
          </div>
          <div class="input-group mb-4">
            <input
              type="password"
              class="form-control"
              placeholder="ยืนยันรหัสผ่าน"
              aria-label="ยืนยันรหัสผ่าน"
              aria-describedby="basic-addon1"
              onChange={(e) => onConfirmRegisterPasswordChange(e.target.value)}
            />
          </div>
          <select
            class="custom-select mb-4"
            aria-label=".form-select-lg example"
            onChange={onBankChange}
          >
            <option selected>กรุณาเลือกธนาคาร</option>
            {bankList.map((bank) => {
              return (
                <option key={`bank_${bank.bankId}`} value={bank.bankId}>
                  {bank.bankName}
                </option>
              );
            })}
          </select>
          <div class="col-12">
            <p style={{ color: "white", fontSize: "14px", textAlign: "left" }}>
              *เลขบัญชีต้องตรงกับบัญชีที่โอนเงิน
            </p>
          </div>
          <div class="input-group mb-4">
            <input
              type="number"
              class="form-control"
              placeholder="เลขที่บัญชี"
              aria-label="เลขที่บัญชี"
              aria-describedby="basic-addon1"
              onChange={(e) => onNumberBankChange(e.target.value)}
            />
          </div>
          <div class="input-group mb-4">
            <input
              type="text"
              class="form-control "
              placeholder="ชื่อ-นามสกุล"
              aria-label="ชื่อ-นามสกุล"
              aria-describedby="basic-addon1"
              onChange={(e) => onNameChange(e.target.value)}
            />
          </div>{" "}
          <div class="input-group mb-4">
            <input
              type="text"
              class="form-control "
              placeholder="ไลน์ไอดี"
              aria-label="ไลน์ไอดี"
              aria-describedby="basic-addon1"
              onChange={(e) => onLineIdChange(e.target.value)}
            />
          </div>
          <PrimaryButton text="สมัครสมาชิก" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};
