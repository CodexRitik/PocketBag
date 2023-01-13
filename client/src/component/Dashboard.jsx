import "../styles/indexx.css";
import { Link } from "react-router-dom";
import { FaBraille ,FaRegBell,FaSistrix,FaExternalLinkAlt} from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="fullWidth fullHeight">
      <div className="flexRow alignCntr pdngOtp pdngL pdngR boxShadow">
        <div className="qwidth flexRow alignCntr">
            <FaBraille className="iconBox"/>
            <h3 className="pdngLMD">Welcome, User</h3>
        </div>
        <div className="halfWidth relPos flex alignCntr">
            <input type="text" placeholder="Search......." className="fullWidth pdngSM"/>
            <FaSistrix className="iconBox relAbs rightP"/>
        </div>
        <div className="qwidth flex alignCntr justifyEnd">
            <FaRegBell className="iconBox mrgnRMM iconHover"/>
            <FaExternalLinkAlt className="iconBox mrgnRMM iconHover"/>
            <div className="userImageBox flexCntr">
                <img alt="userImage" src="assets/uIcon.png" className="uImage"></img>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
