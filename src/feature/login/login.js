import { useState } from "react";
import { loginData } from "../../data";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { changeAuthState } from "../../redux/auth.slice";
import "./style.css"

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (event) => {
    console.log("LOGIN SUBMIT ", event);
    event.preventDefault();
    if (
      formInput.email == loginData.email &&
      formInput.password == loginData.password
    ) {
      dispatch(changeAuthState())
      navigate("/");
    } else {
      alert("Invalid login details !!")
    }
  };
  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div className="form-container">
        <div className="input-box">
      <label>Email</label>
      <input
        name="email"
        onChange={(event) => {
          setFormInput({
            ...formInput,
            email: event.target.value,
          });
        }}
        value={formInput.email}
      />
      </div>
      <div className="input-box">
      <label>Password</label>
      <input
        name="password"
        onChange={(event) => {
          setFormInput({
            ...formInput,
            password: event.target.value,
          });
        }}
        value={formInput.password}
      />
      </div>
      <button type="submit">submit</button>
      </div>
    </form>
  );
}
