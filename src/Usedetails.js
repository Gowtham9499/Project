import React, { useState } from "react";

function Usedetails() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [ success, setSuccess] = useState(false)

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regexPassword = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#%&])(?=.{8,})/;

const handleClick = (e) => {

  e.preventDefault()

  if (email.length == 0) {
    setEmailError("Email should not Be Empty")
  } else if (!regexEmail.test(email)) {
    setEmailError("Please enter a valid Email")
  } else {
    setEmailError(false)
  }

  if (password.length == 0) {
    setPasswordError("Password should not Be Empty")
  } else if (!regexPassword.test(password)) {
    setPasswordError("Please enter the Correct Password")
  } else {
    setPasswordError(false)
  }
}

  return (
    <div className='Container'>

      <form className="Form-main">
        <h1>
          LOGIN
        </h1>

        <input onChange={e => setEmail(e.target.value)} name="email" placeholder="Email" /><br />
        <p style={{ color: "red", fontsize: "13px" }}>{emailError}</p>

        <input type={'password'} onChange={e => setPassword(e.target.value)} name="password" placeholder="Password" /><br />
        <p style={{ color: "red", fontsize: "13px" }}>{passwordError}</p>

        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default Usedetails;