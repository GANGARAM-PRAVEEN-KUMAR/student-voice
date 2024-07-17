import "./register.css";
import "./register.gif";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import axios from "axios";
function RegisterComponent() {
  
  const navigate = useNavigate();

  const handleRegister = async () => {
    //event.preventDefault();
    try {
      const password1 = document.getElementById("password1").value;
      const password2 = document.getElementById("password2").value;
      if (password1 !== password2) {
        alert("confirm password does not match");
        navigate("/");
      }
      
       const genderElement = document.querySelector('input[name="gender"]:checked');
       const gender = genderElement ? genderElement.value : null;

      const user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password1").value,
        username: document.getElementById("name").value,
        userId: document.getElementById("rollno").value,
        mobileNumber: document.getElementById("mobilenumber").value,
        active: true,
        role: "user",
        gender: gender
      };
      console.log("hii")
      const response = await axios.post("https://student-voice-backend.onrender.com/signup", user);
      console.log(response.status);
      if (response.status === 200) {
        //alert("Registered Successfully");
        console.log(response.data)
        navigate("/login");
        console.log("byee")
      } else {
        alert("user already exists !");
        navigate("/");
        
      }
    } catch (error) {
      console.error(error);
      navigate("/");
    }
  };

  return (
    <>
      <div className="register">
        
          <div className="box">
            <h1>Registration</h1>
            <div className="con1">
              <div className="con2">
                <p>Full Name </p>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  id="name"
                  required
                />
                <p>Email </p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <p>Password </p>
                <input
                  type="password"
                  placeholder="password"
                  id="password1"
                  required
                />
              </div>
              <div className="con3">
                <p>User ID </p>
                <input type="text" placeholder="Roll No" id="rollno" required />
                <p>Phone no </p>
                <input
                  type="text"
                  placeholder="phone no"
                  id="mobilenumber"
                  required
                />
                <p>Confirm password </p>
                <input
                  type="password"
                  name="password"
                  id="password2"
                  placeholder="confirm password"
                  required
                />
              </div>
            </div>

            <p className="con4">Gender</p>

            <label>
              <input type="radio" name="gender" value="male" />
              Male &nbsp;&nbsp;
            </label>
            <label>
              <input type="radio" name="gender" value="female" />
              Female &nbsp;&nbsp;&nbsp;
            </label>
            <label>
              <input type="radio" name="gender" id="prefer not to say" />
              Prefer not to say&nbsp;&nbsp;&nbsp;
            </label>
            <br />
            <button id="register" onClick={() => {handleRegister()}}>
              Register
            </button>
            <div>
            <span>Already a member ?<NavLink to="/login" >login</NavLink></span>
            </div>
          </div>
     
        <div className="gif">
          <img src={require("./register.gif")} id="gif" alt="" />
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default RegisterComponent;
