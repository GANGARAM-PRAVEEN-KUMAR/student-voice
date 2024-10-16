import "./head1.css";
import "./user.webp";
import logo from "./logo.webp";
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
        <div className="imgcls">
        <img src={logo} width="600" id="image"/>
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid ">
    
     
    

    
     
    <button className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="normal">
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mx-4  ">
        <li className="nav-item">
          <NavLink className="nav-link active text-dark" aria-current="page" id="text" to="/userhome">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active text-dark" aria-current="page" id="text" to="/dashboard">DashBoard</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link text-dark" id="text" to="/usercontact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" id="but1" onClick={()=>handleLogout()} to="/">Logout</NavLink>
        </li>
       
        </ul>
        
       
      </div>
    </div>
          </div>
        </nav>
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
      </div>

    </>
  );
}

export default HeadUserComponent;
