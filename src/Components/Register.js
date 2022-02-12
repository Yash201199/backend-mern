import React, { useState } from "react";
import "./reg.css";

const Register = () => {
  const [state, setstate] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    cpass: "",
  });
  const [view, setview] = useState(true);
  const hndl = (e) => {
    e.preventDefault();
    var name, value;
    name = e.target.name;
    value = e.target.value;
    setstate({ ...state, [name]: [value] });
  };

  const style = {
    "marginTop": "1.5rem",
  };
  return (
    <>
      <div className="register">
        <input
          style={style}
          onChange={hndl}
          value={state.name}
          placeholder="name"
          name="name"
          type="text"
        />
        <input
          style={style}
          onChange={hndl}
          value={state.email}
          placeholder="email"
          name="email"
          type="email"
        />
        <input
          style={style}
          onChange={hndl}
          value={state.password}
          placeholder="password"
          name="password"
          type="password"
        />
        <input
          style={style}
          onChange={hndl}
          value={state.phone}
          placeholder="phone"
          name="phone"
          type="phone"
        />
        <input
          style={style}
          onChange={hndl}
          value={state.cpass}
          placeholder="cpass"
          name="cpass"
          type="password"
        />
        <button onClick={() => setview(!view)}>Register</button>
      </div>
    </>
  );
};

export default Register;
