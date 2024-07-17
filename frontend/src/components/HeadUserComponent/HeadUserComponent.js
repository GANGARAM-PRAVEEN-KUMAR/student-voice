import "./head1.css";
import "./user.webp";
import "./logo.webp";
import "./new.gif";
import { NavLink, useNavigate } from "react-router-dom";
function HeadUserComponent() {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("username")
    localStorage.removeItem("type")
    navigate("/")
    return ;
}

  return (
    <>
      <div className="head2">
        <img src={require("./logo.webp")} width="600" />
        &nbsp;&nbsp;&nbsp;
        <nav className="nav-bar">
          <div className="box">
            <div className="Name">
              {" "}
              <div className="img">
                <img id="img1" src={require("./user.webp")} alt="" />
              </div>
              <div className="Name">{localStorage.getItem("username")}</div>
            </div>

            <div className="box1">
              <NavLink to="/userhome" id="text">Home</NavLink>
            </div>
            <div className="box1">
              <NavLink to="/dashboard" id="text">dashboard  </NavLink>
            </div>
            <div className="box1">
              <NavLink to="/usercontact" id="text">Contact us</NavLink>
            </div>
            <div className="box2">
              <button id="but1" onClick={()=>handleLogout()}>logout</button>
            </div>
          </div>
        </nav>
        <div className="scroll">
          <div className="scroll-bar">
            <span>UPDATES |</span>
          </div>
          <div className="scroll-con">
            <marquee>
              <pre>
                <img src={require("./new.gif")} id="new-img" />
                Raise a Anonymous complaint <img src={require("./new.gif")} id="new-img" />
                B.Tech III YEAR I SEM Regular Examinations (R18/B21) held in
                January-2024
              </pre>
            </marquee>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadUserComponent;
