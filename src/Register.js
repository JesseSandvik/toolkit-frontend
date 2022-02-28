import { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{6,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errorRef = useRef();

    const [ user, setUser ] = useState('');
    const [ validName, setValidName ] = useState(false);
    const [ userFocus, setUserFocus ] = useState(false);

    const [ password, setPassword ] = useState('');
    const [ validPassword, setValidPassword ] = useState(false);
    const [ passwordFocus, setPasswordFocus ] = useState(false);

    const [ matchPassword, setMatchPassword ] = useState('');
    const [ validMatch, setValidMatch ] = useState(false);
    const [ matchFocus, setMatchFocus ] = useState(false);

    const [ errorMessage, setErrorMessage ] = useState('');
    const [ successful, setSuccessful ] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [ user ]);

    useEffect(() => {
        const result = PASSWORD_REGEX.test(password);
        console.log(result);
        console.log(password);
        setValidPassword(result);
        const match = password === matchPassword;
        setValidMatch(match);
    }, [ password, matchPassword ]);

    useEffect(() => {
        setErrorMessage('');
    }, [ user, password, matchPassword ])

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userValidation = USER_REGEX.test(user);
        const passwordValidation = PASSWORD_REGEX.test(password);

        if (!userValidation || !passwordValidation) {
            setErrorMessage('Invalid Entry');
            return;
        } else {
            window.alert('Submit Successful!');
        }
    }

  return (
      <section className='register-form'>
          <p ref={ errorRef } className={ errorMessage ? 'errmsg' : 'offscreen' } aria-live='assertive'>{ errorMessage }</p>
          <h1>Register</h1>
          <form onSubmit={ handleSubmit }>
              <div className='item'>
                <label htmlFor='username'>
                    Username:
                </label>
                <input
                    type='text'
                    id='username'
                    ref={userRef}
                    autoComplete='off'
                    onChange={ (event) => setUser(event.target.value) }
                    required
                    aria-invalid={ validName ? 'false' : 'true' }
                    aria-describedby='uidnote'
                    onFocus={ () => setUserFocus(true) }
                    onBlur={ () => setUserFocus(false) }
                />
                <span className={ validName ? 'valid' : 'hide' }>
                    <FontAwesomeIcon icon={ faCheck } />
                </span>
                <span className={ validName || !user ? 'hide' : 'invalid' }>
                    <FontAwesomeIcon icon={ faTimes } />
                </span>
                <p id='uidnote' className={ userFocus && user && !validName ? 'instructions' : 'offscreen' }>
                    <FontAwesomeIcon icon={ faInfoCircle } />
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, & hyphens are allowed.
                </p>
              </div>
              <div className='item'>
                <label htmlFor='password'>
                    Password:
                </label>
                <input
                    type='password'
                    id='password'
                    onChange={ (event) => setPassword(event.target.value) }
                    required
                    aria-invalid={ validPassword ? 'false' : 'true' }
                    aria-describedby='passwordnote'
                    onFocus={ () => setPasswordFocus(true) }
                    onBlur={ () => setPasswordFocus(false) }
                />
                <span className={ validPassword ? 'valid' : 'hide' }>
                    <FontAwesomeIcon icon={ faCheck } />
                </span>
                <span className={ validPassword || !password ? 'hide' : 'invalid' }>
                    <FontAwesomeIcon icon={ faTimes } />
                </span>
                <p id='passwordnote' className={ passwordFocus && !validPassword ? 'instructions' : 'offscreen' }>
                    <FontAwesomeIcon icon={ faInfoCircle } />
                    8 to 24 characters.<br />
                    Must include uppercase & lowercase letters, a number, & a special character.<br />
                    Allowed special characters: <span aria-label='exclamation mark'>!</span>
                    <span aria-label='at symbol'>@</span>
                    <span aria-label='hashtag'>#</span>
                    <span aria-label='dollar sign'>$</span>
                    <span aria-label='percent'>%</span>
                </p>
              </div>
              <div className='item'>
                <label htmlFor='confirm_password'>
                    Confirm Password:
                </label>
                <input
                    type='password'
                    id='confirm_password'
                    onChange={ (event) => setMatchPassword(event.target.value) }
                    required
                    aria-invalid={ validMatch ? 'false' : 'true' }
                    aria-describedby='confirmnote'
                    onFocus={ () => setMatchFocus(true) }
                    onBlur={ () => setMatchFocus(false) }
                />
                <span className={ validMatch && matchPassword ? 'valid' : 'hide' }>
                    <FontAwesomeIcon icon={ faCheck } />
                </span>
                <span className={ validMatch || !matchPassword ? 'hide' : 'invalid' }>
                    <FontAwesomeIcon icon={ faTimes } />
                </span>
                <p id='confirmnote' className={ matchFocus && !validMatch ? 'instructions' : 'offscreen' }>
                    <FontAwesomeIcon icon={ faInfoCircle } />
                    Must match the password from the above input field.
                </p>
              </div>
              <button disabled={ !validName || !validPassword || !validMatch ? true : false }>Sign Up</button>
          </form>
          <p>
              Already registered?<br />
              <span className='line'>
                  {/* put router link here */}
                  <a href='#'>Sign In</a>
              </span>
          </p>
      </section>
  );
}

export default Register;