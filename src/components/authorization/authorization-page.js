import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './authorization-page.scss';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import { signUp, signIn } from '../../helpers/auth'

function AuthorizationPage(props) {
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const handleClickShowPassword = () => {
        setPasswordVisibility(!isPasswordVisible);
    };

    const [email, setEmail] = useState('');
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        changeEmailValidationStatus({ newStatus: true });
    };

    const [isEmailValid, setEmailValidationStatus] = useState(true);
    const changeEmailValidationStatus = (params = {}) => {
        const newValidationStatus = params.newStatus || /^.{1,30}@.{1,63}$/.test(email);
        setEmailValidationStatus(newValidationStatus);
        return newValidationStatus;
    }

    const [password, setPassword] = useState('');
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
        changePasswordValidationStatus({ newStatus: true });
    };

    const [isPasswordValid, setPasswordValidationStatus] = useState(true);
    const changePasswordValidationStatus = (params = {}) => {
        const newValidationStatus = params.newStatus || password.length > 1;
        setPasswordValidationStatus(newValidationStatus);
        return newValidationStatus;

    }

    const handleClickAuthorize = () => {
        const isEmailValid = changeEmailValidationStatus();
        const isPasswordValid = changePasswordValidationStatus();
        if (isEmailValid && isPasswordValid) {
            props.handleClickAuthorize(true);
        }
        // if (isSignInMode) {
        //     signIn({
        //         "email": email,
        //         "enabled": true,
        //         "password": password
        //     })
        // } else {
        //     signUp({
        //         "email": email,
        //         "enabled": true,
        //         "password": password
        //     })
        // }
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [isSignInMode, setAuthorizationMode] = useState();
    const turnOnSigInMode = () => {
        setAuthorizationMode(true);
    };
    const turnOnSigUpMode = () => {
        setAuthorizationMode(false);
    };


    return (
        <div className="authorization-page">
            <header className="authorization-page-header">
                <Button variant="contained" color={isSignInMode ? 'primary' : 'inherit'} onClick={turnOnSigInMode}>Sign in</Button>
                <Button variant="contained" color={isSignInMode ? 'inherit' : 'primary'} onClick={turnOnSigUpMode}>Sign up</Button>
            </header>
            <div className="authorization-body">
                <div className="authorization-form">
                    <FormControl className={'input-email'} variant="outlined" required error={!isEmailValid} onBlur={changeEmailValidationStatus}>
                        <InputLabel htmlFor="input-email">Email</InputLabel>
                        <OutlinedInput
                            type={'text'}
                            value={email}
                            onChange={handleChangeEmail}
                            labelWidth={70}
                        />
                    </FormControl>
                    <FormControl className={'input-password'} variant="outlined" required error={!isPasswordValid} onBlur={changePasswordValidationStatus}>
                        <InputLabel htmlFor="input-password">Password</InputLabel>
                        <OutlinedInput
                            type={isPasswordVisible ? 'text' : 'password'}
                            value={password}
                            onChange={handleChangePassword}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <Button className="apply-button" variant="contained" color="primary" onClick={handleClickAuthorize}>{isSignInMode ? 'Sign in' : 'Sign up'}</Button>
                </div>
            </div>
        </div>
    );
}

export default AuthorizationPage;
