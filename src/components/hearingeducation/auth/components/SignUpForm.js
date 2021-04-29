import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { auth } from "../../../util/firebase";
import './SignUpForm.css';

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error/*, setError*/] = useState(null);

  // const history = useHistory();

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    // try {
    //   await auth.createUserWithEmailAndPassword(email, password);
    //   history.push('/dashboard');
    // } catch(error) {
    //   setError(error.message);
    // }

  };

  const handleChange = (event) => {
    const {name, value} = event.currentTarget;

    if(name === 'userEmail') {
        setEmail(value);
    }
    else if(name === 'userPassword'){
      setPassword(value);
    }

  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <label className="signup-form-label">Email</label>
        <br></br>
        <input className="signup-input" onChange={(e) => handleChange(e)} value={email} type="email" name="userEmail" id="userEmail"></input>
        <br></br>      
        <label className="signup-form-label">Password</label>
        <br></br>
        <input className="signup-input" onChange={(e) => handleChange(e)} value={password} type="password" name="userPassword" id="userPassword"></input>     
        <br></br>
        <br></br>
        <button type="submit" className="signup-button" disabled={!validateForm()}>Sign Up</button>
      </form>
      <br></br>
      <br></br>
      {error !== null && <div style={{color:'red'}}>{error}</div>}
    </div>
  )
};

export default SignUpForm;