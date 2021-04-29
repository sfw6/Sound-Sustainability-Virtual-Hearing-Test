import { useState } from 'react';
import './Auth.css';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';


const Auth = () => {
  const [ signingIn, setSigningIn ] = useState(true);

  return (
    <div >
      <div className='auth-toggle-container'>
        <button style={{color: signingIn ? '#FF914D' : '#B1B1B1'}} onClick={() => setSigningIn(true)}>Sign In</button>
        <button style={{color: !signingIn ? '#FF914D' : '#B1B1B1'}} onClick={() => setSigningIn(false)}>Sign Up</button>
        {signingIn ? 
          <SignInForm /> : 
          <SignUpForm />}
      </div> 
    </div>
  );

}

export default Auth