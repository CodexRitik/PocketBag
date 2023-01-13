import "../styles/indexx.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="fullWidth fullHeight">
      <div className="topZ sHeight headBgCol boxShadow pdngL pdngR fixPos flexRow alignCntr">
        <div className="halfWidth">
          <span>
            <h2>Pocket Bag</h2>
          </span>
        </div>
        <div className="halfWidth flexRow relPos alignCntr">
          <div className="relAbs rightM">
            <Link to="/signIn" className="linkText"><span className="linkeffect">Sign In</span></Link>
          </div>
          <div className="relAbs right">
            <span className="linkText linkeffect">Help</span>
          </div>
        </div>
      </div>
      <div className="mrgnTU fullWidth pdngR pdngL midBoxBgCol">
        <div className="fullWidth pdngTMD flexRow">
          <div className="halfWidth pdngR">
            <div className="fitWidth txtBgCol pdngXS mrgnBtmMD">
              <span>Student Helping Platform</span>
            </div>
            <div className="mrgnBtmMD">
              <h2>Heard About Us?</h2>
            </div>
            <div className="mrgnBtmMD">
              <p>
                It is a Website that provides a platform for all students to
                live easy life in college during study period , students will
                post their requirements with a time limit ranging from 30
                minutes to 24 Hrs .Students from a nearby college or the same
                college will accept that post if willing to do and complete the
                task.
              </p>
            </div>
            <div className="fullWidth">
              <button className="fullWidth btnPdng Actbtn btnBgCol">
                Start With Us!
              </button>
            </div>
          </div>
          <div className="halfWidth flex alignCntr justifyEnd ">
            <img
              alt="pocketBag"
              src="assets/pocketBag.jpeg"
              className="images"
            ></img>
          </div>
        </div>
        <div className="textCntr pdngTMD pdngBMD">
          <div className="mrgnBtmMD">
            <h3>Don't struggle anymore</h3>
          </div>
          <div className="">
            <span className="">Why You Should Try?</span>
          </div>
        </div>
        <div className="fullWidth boxShadow pdngLG borderRL txtBgCol">
          <p>
            Like Students Of one college want to be connected to student of
            second college and student has no idea how to get connection with
            him , suppose he is using pocketBag and by chance sees that student
            has posted some requirements of some study materials or things then
            he can accept that request and complete the task.After completion of
            task both had a nice talk and good connection.
          </p>
        </div>
        <div className="textCntr pdngTMD pdngBMD">
          <div className="mrgnBtmMD">
            <h3>Join Us Today</h3>
          </div>
          <div className="">
            <span className="">
              Make More Connection and increase your character Point and grow
              More!.
            </span>
          </div>
        </div>
      </div>
      <div className="flexCol fullWidth alignCntr justifyCntr footerHeight footBgCol whiteTxt pdngL pdngR">
        <div className="flexRow alignCntr justifyBtwn mrgnBtmSM">
          <div>
            <span className="fT">Contact Us</span>
          </div>
          <div>
            <span className="ft">Features</span>
          </div>
          <div>
            <span className="ft">About Us</span>
          </div>
        </div>
        <div className="fullWidth mrgnBtmSM">
          <hr></hr>
        </div>
        <div className="flexRow alignCntr justifyBtwn">
          <div className="">
            <span className="">© 2023 Pocket Bag. All Rights Reserved.</span>
          </div>
          <div>
            <span className="">Privacy Policy | Terms and Conditions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
