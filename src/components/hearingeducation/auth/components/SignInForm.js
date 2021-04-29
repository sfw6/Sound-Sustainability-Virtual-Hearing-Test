import { useState } from "react";
// import { useHistory } from "react-router-dom";
import './SignInForm.css';
// import { auth } from '../../../util/firebase';

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error /*, setError*/] = useState(null);

  // const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSignin = async (event) => {
    event.preventDefault();
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   history.push('/dashboard');
    // } catch (error) {
    //   setError("Error signing in with password and email!");
    // }
  }

  function handleChange(event) {
    const {name, value} = event.currentTarget;

    if(name === 'userEmail') {
        setEmail(value);
    }
    else if(name === 'userPassword'){
      setPassword(value);
    }
  }

  return (
    <div>
      <form onSubmit={handleSignin}>
        <label className="signin-form-label">Email</label>
        <br></br>
        <input className="signin-input" onChange={(e) => handleChange(e)} value={email} type="email" name="userEmail" id="userEmail"></input>
        <br></br>      
        <label className="signin-form-label">Password</label>
        <br></br>
        <input className="signin-input" onChange={(e) => handleChange(e)} value={password} type="password" name="userPassword" id="userPassword"></input>     
        <br></br>
        <br></br>
        <button type="submit" className="signin-button" disabled={!validateForm()}>Sign in</button>
      </form>
      <br></br>
      <br></br>
      {error !== null && <div style={{color:'red'}}>{error}</div>}
    </div>
  )
};

export default SignInForm;