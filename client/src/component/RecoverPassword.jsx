import "../styles/indexx.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import OtpInput from 'react18-input-otp';
const RecoverPassword = () => {
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  const [sent,setSent] = useState(true);
  return (
    <div className="fullWidth fullHV">
      <div className="headerHeight headBgCol boxShadow pdngL pdngR flexRow alignCntr">
        <div className="halfWidth">
          <span>
            <h2>Pocket Bag</h2>
          </span>
        </div>
        <div className="halfWidth flexRow relPos alignCntr">
          <div className="relAbs rightM">
            <Link to="/signIn" className="linkText">
              <span className="linkeffect">Sign In</span>
            </Link>
          </div>
          <div className="relAbs right">
            <span className="linkText linkeffect">Help</span>
          </div>
        </div>
      </div>
      <div className="flexCntr fullWidth pdngR pdngL midBoxBgCol SignUpHeight">
        <div className="halfWidth pdngTMD">
          <div className="mrgnBtmMD fullWidth flexCntr">
            <img
              src="assets/pocketBag.jpeg"
              alt="leftImage"
              className="images"
            />
          </div>
          <div className="mrgnBtmMD">
            <div className="fullWidth flexCntr mrgnBtmMD">
              <h4>
                Build meaningful relationships between Students and Your
                Collegemates
              </h4>
            </div>
            <div className="fullWidth flexCntr">
              <p>
                The Student Helping Platforms with an Unparalleled User
                Experience
              </p>
            </div>
          </div>
        </div>
        <div className="halfWidth pdgTMD pdngL">
          <div className="loginh mrgnBtmMD flexCntr fullWidth">
            <h3>Recover Password</h3>
          </div>
          <div className="login-inputs mrgnBtmMD">
            <div className="pdngBTM">
              <label className="">
                Enter the OTP sent to your registered email, and then create a
                new password*
              </label>
            </div>
            <OtpInput
              containerStyle="flex fullWidth alignCntr justifyBtwn mrgnBtmMD"
              inputStyle="otpHeight otpFontSize "
              value={otp}
              onChange={handleChange}
              numInputs={6}
            //   separator={<span>-</span>}
              separateAfter={1}
              onSubmit={console.log(otp)}
            />
          </div>
          <div className="flexRow alignCntr justifyBtwn mrgnBtmMD">
            <p className="redText">20 s</p>
            <button className="btnPdng btnBgCol whiteTxt borderN borderRd">Resend OTP</button>
          </div>
          <div className="mrgnBtmMD"><hr></hr></div>
          <div className="mrgnBtmMD">
            <div className="pdngBTM">
              <h4>Create New Password*</h4>
            </div>
            <div className="fullWidth mrgnBtmMD pdngBTM">
                <p>Note: Your new password must have at least 8 characters in length and contain at least one symbol (example: $), one number (example: 9), and one upper case letter (example: U).</p>
            </div>
          </div>
          <div className="mrgnBtmMD">
            <div className="pdngBTM">
              <label>Password*</label>
            </div>
            <input
              type="password"
              name="adminPassword"
              // onChange={handleChange}
              placeholder="ex : Abc64rf# length must be >= 8"
              className="fullWidth inputBox"
            ></input>
          </div>
          <div className="mrgnBtmMD">
            <div className="pdngBTM">
              <label>Confirm Password*</label>
            </div>
            <input
              type="password"
              name="adminCnfPassword"
              placeholder="ex : Abc64rf# length must be >= 8"
              className="fullWidth inputBox"
            ></input>
          </div>
          <div className="fullWidth flexCntr mrgnBtmMD">
            <button className="fullWidth btnPdng btnBgCol borderN borderRd">
              Recover Password
            </button>
          </div>
          <div className="fullWidth flexCntr mrgnBtmMD">
            <span>Remember Password?</span>
            <Link to={"/SignIn"} className="linkText pdngXLM">
              <span className="blueText"> Sign In</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="headerHeight fullWidth flexCntr">
        <span>© 2023 Pocket Bag. All Rights Reserved. I agree to the </span>
        <span className="logintext blueText pdngXLM">Terms & Conditions</span>
      </div>
    </div>
  );
};

export default RecoverPassword;
