import "./body1.css";
import "./cvr1.jpg";
import "./cvr2.jpg";
import "./complaint.jpg";
import "./anon.jpg";

import { NavLink } from "react-router-dom";
function BodyUserComponent() {

 const handleAnonymous=()=>{
  localStorage.setItem("type","anonymous")
 }

  return (
    <>
      <div className="usercomplaint">
        <div className="raisecomplnt">
          <div className="complaint">
            <NavLink to="/complaint">
            <span id="text">Raise Complaint</span>
              <img src={require("./complaint.jpg")} id="raise-img" />
            </NavLink>
          </div>
          <div className="anonyms">
            <NavLink to="/complaint" onClick={()=>handleAnonymous()} >
            <span id="text">Anonymous Complaint</span>
              <img src={require("./anon.jpg") } id="anony-img" />
            </NavLink>
          </div>
        </div>
        <div className="about-cvr">
          <div className="cvr-img1">
            <img src={require("./cvr1.jpg")} />
          </div>
          <div className="cvr-img2">
            <img src={require("./cvr2.jpg")} />
          </div>
          <div className="cvr-matter">
            <p id="passage">
              The{" "}
              <NavLink to="https://cvr.ac.in/home4/">
                CVR College of Engineering
              </NavLink>{" "}
              was established in 2000. It is approved by the All India Council
              for Technical Education and accredited by the National Board of
              Accreditation, India.
            </p>
            <p>
              CVR College of Engineering was affiliated with Jawaharlal Nehru
              Technological University, Hyderabad. The college is located in{" "}
              <NavLink to="https://en.wikipedia.org/wiki/Mangalpally,_Ranga_Reddy_district">
                Mangalpally
              </NavLink>
              (V),{" "}
              <NavLink to="https://en.wikipedia.org/wiki/Ibrahimpatnam,_Ranga_Reddy_district">
                Ibrahimpatnam
              </NavLink>
              (M), Ranga Reddy, 20 km from the center of Hyderabad, India. The
              college is supported by the Cherabuddi Educational Society.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodyUserComponent;
