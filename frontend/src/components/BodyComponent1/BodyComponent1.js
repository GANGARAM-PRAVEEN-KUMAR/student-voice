import "./body.css";
import './admin.jpg'
import './student.jpg'
import './voice.jpg'
import './new.gif'
import {NavLink} from 'react-router-dom'
function BodyComponent1() {
  return (
    <>
      <div className="middle-body">
      <div className="scroll">
        <div className="scroll-bar">
          
          <span>UPDATES |</span>
        </div>
        <div className="scroll-con">
          <marquee>
            <pre><img src={require('./new.gif')} id="new-img"/>Raise a Anonymous complaint   <img src={require('./new.gif')} id="new-img"/>Welcome to CVR Complaint Webiste   
              </pre>
          </marquee>
        </div>
      </div>

      <div className="updates">
        <img src={require('./voice.jpg')}  />
      </div>

      <div className="logins">
        <div className="std-login">
          <NavLink to="/login" id="text"><span>Student</span></NavLink>
          <NavLink to="/login"><img src={require('./student.jpg')} id="adm-img"/></NavLink>
        </div>
        <div className="log-con">Login</div>
        <div className="adm-login">
          <NavLink to="/login" id="text"><span>Admin</span></NavLink>
          <NavLink to="/login"><img src={require('./admin.jpg')} id="adm-img" /></NavLink>
        </div>
      </div>
    </div>
    </>
  );
}

export default BodyComponent1;
