import React, {useState} from "react";
import { useHistory } from "react-router";
import PrimaryButton from "../../component/PrimaryButton/PrimaryButton";
import ButttonLongin from "../../component/ButttonLongin/ButttonLongin";
import TermConditionStkye from "../TermCondition/TermConditionStkye.css";

export default function TermCondition() {
  const history = useHistory();

  const onRegister = () => history.replace("/register");

  const onCondition = () => {
    // call api register
    // $('#ModalRegister').modal('show')
    history.push("/term");
  };

  return (
    <div>
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
                  onClick={onRegister}
                  isButton={false}
                />
                <ButttonLongin text="สมัครสมาชิก" isButton={true} />
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="card-body">
              <form class="form-horizontal" autocomplete="off"></form>
              <ConditionPanel 
              onClick = {onCondition}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ConditionPanel = ({ onClick }) => {

  const [acceptTerm, setAcceptTerm] = useState(false)

  return (
    <div class="row">
      <div class="col-12 mt-5">
        <h5 style={{ color: "#fff" }}>เงื่อนไขและข้อตกลงในการสมัคร</h5>
      </div>
      <div class="card-body col-4"></div>
      <div class="card col-4 mt-3">
        <div class="card-body text-left">
          <p>
            1. เบอร์โทรศัพท์ที่ใช้ ต้องสามารถรับ ข้อความได้
            เพราะระบบจำเป็นต้องส่งรหัสยืนยันไปยังเบอร์โทรศัพท์ของท่าน
            มิเช่นนั้นจะไม่สามารถทำรายการต่างๆได้
          </p>
          <p>
            2. ชื่อ - นามสกุล
            จะต้องตรงกับชื่อบัญชีมิเช่นนั้นจะไม่สามารถถอนเงินได้
          </p>
          <p>3. ต้องใช้บัญชีที่สมัครฝากเงินเข้ามาเท่านั้น</p>
          <p>
            4. ถ้าเกิดข้อผิดพลาดของระบบ ให้ทำการ แจ้งพนักงานทันทีกรณีที่ไม่แจ้ง
            ทางเราขอสงวนสิทธิ์การถอนเงิน ทุกกรณี
          </p>
          <p>
            5. สมาชิก 1 คน ต่อ 1 ไอดีเท่านั้น กรณีตรวจพบว่ามีการสมัครหลายไอดี
            ทางเราจะสงวนสิทธิ์การถอนทุกกรณี
          </p>
        </div>
      </div>
      <div class="card-body col-4"></div>

      <div class="row col-12 mt-3">
        <div class="col-4"></div>
        <div class=" col-4">
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck1"
              value={acceptTerm}
              checked={acceptTerm}
              onChange={(e) => setAcceptTerm(e.target.value)}
            />
            <label class="custom-control-label" for="customCheck1">
              ยอมรับเงือนไขและข้อตกลงทั้งหมด
            </label>
          </div>
        </div>
        <div class="col-4"></div>
      </div>

      <div class="row col-12 mt-3">
        <div class="col-4"></div>
        <div class="col-4">
          <PrimaryButton text="Submit" onClick={onClick} disabled={!acceptTerm} />
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  );
};
