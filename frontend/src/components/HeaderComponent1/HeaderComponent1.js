import "./head.css";
import './cvr name.webp';
import {NavLink} from 'react-router-dom'
function HeaderComponent() {
 
  return (
    <>
      <div className="head">
        <div className="imgcls">
        <img src={require('./cvr name.webp')}  id="image"/>
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
          <NavLink className="nav-link active text-dark" aria-current="page" id="text" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" id="text"  to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" id="text" to="/signup">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" id="text" to="/contact">Contact Us</NavLink>
        </li>
        </ul>
       
      </div>
    </div>
    </div>
</nav>

      </div>
    </>
  );
}

export default HeaderComponent;
