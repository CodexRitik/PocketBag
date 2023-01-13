import "../styles/indexx.css";
import { useNavigate ,Link} from "react-router-dom";
const SignIn = () => {
  const dashboard = useNavigate("/signIn");
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
            <Link to="/signUp" className="linkText">
              <span className="linkeffect">Sign Up</span>
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
              The Student Helping Platforms with an Unparalleled User Experience
            </p>
            </div>
          </div>
        </div>
        <div className="halfWidth pdgTMD pdngL">
          <div className="loginh mrgnBtmMD flexCntr fullWidth">
            <h3>Sign In</h3>
          </div>
          <div className="login-inputs mrgnBtmMD">
            <div className="pdngBTM">
              <label className="">Email*</label>
            </div>
            <input
              type="email"
              name="adminEmail"
              // onChange={handleChange}
              placeholder="ex : thirsttyguy@gmail.com"
              className="fullWidth inputBox"
            ></input>
          </div>
          <div className="login-inputs mrgnBtmMD">
            <div className="pdngBTM">
              {" "}
              <label className="">Password*</label>
            </div>
            <input
              type="password"
              name="adminPassword"
              // onChange={handleChange}
              placeholder="ex : Abc64rf# length must be >= 8"
              className="fullWidth inputBox"
            ></input>
          </div>
          <div className="fullWidth flexCntr mrgnBtmMD ">
            <button className="fullWidth btnPdng btnBgCol borderN borderRd" onClick={()=>dashboard("/dashboard")}>
              SIGN IN
            </button>
          </div>
          <div className="fullWidth flexCntr mrgnBtmMD">
          <Link to={"/forgotPassword"} className="linkText pdngXLM">
              <span className="blueText"> Forgot Password ?</span>
            </Link>
          </div>
          <div className="fullWidth flexCntr mrgnBtmMD">
            <span>Don't have an account?</span>
            <Link to={"/SignUp"} className="linkText pdngXLM">
              <span className="blueText"> Sign Up</span>
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

export default SignIn;
