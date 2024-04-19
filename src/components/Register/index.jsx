import { CiUser } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import google from "../../assets/google.png";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { add } from "../../redux/tokenSlice";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const emailRef = useRef(null);
  const pasRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.value);
  const handleSubmit = (e) => {
    e.preventDefault()
    let user = users.find((el) => {
        return el.email === emailRef.current.value && el.password === pasRef.current.value
    })
    if (user) {
        dispatch(add(user.email))
        navigate('/')
    } else {
        alert('Noto\'g\'ri elektron pochta yoki parol kiritildi!')
    }
}
  return (
    <>
      <div className="conteiner">
        <h2 className="title">Welcome back!</h2>
        <form>
          <label className="label">Full Name</label>
          <div className="cont_form">
            <IoMailOutline className="icon" />
            <input type="email" placeholder="example@site.com" ref={emailRef} />
          </div>

          <label className="label">Password</label>
          <div className="cont_form">
            <CiLock className="icon" />
            <input
              type="password"
              placeholder="Minimum 8 characters"
              ref={pasRef}
            />
          </div>
          <button className="button" onClick={handleSubmit}>
            Log in
          </button>
          <div className="gogle">
            <img src={google} alt="" />
            <p>Sign Up with Google</p>
          </div>
          <p className="desc">or login with SSO</p>
          <Link to="/register">Register</Link>
        </form>
      </div>
    </>
  );
}

export default Register;
