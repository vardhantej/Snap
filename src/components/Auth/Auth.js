import React, {useState} from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useDispatch} from 'react-redux';

import Input from './Input';
import {signin, signup} from '../../actions/auth';

import useStyles from './styles';
import Icon from './icon';
import {useHistory} from 'react-router-dom';


//react-google-login
import {GoogleLogin} from 'react-google-login'; //client ID from google api console (OAuth)

const initialState={firstName:'',lastName:'',email:'',password:'',confirmPassword:''};

const Auth = ({isSignup, setIsSignup, signedIn , setSignedIn,}) => {

    
    const [showPassword,setShowPassword]=useState(false);
    const [formData,setFormData]=useState(initialState);
      

    const dispatch = useDispatch();
    
    const history=useHistory();
    
    const classes= useStyles();

    

    const handleShowPassword=()=>{
        setShowPassword((prevShowPassword)=>!prevShowPassword);
        
    }

    const handleSubmit=(e)=>{
        
        e.preventDefault();
        
        if(isSignup){
            dispatch(signup(formData,history));
            setSignedIn(!signedIn);
        }else{
            dispatch(signin(formData,history));
        }
       

    }

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const switchMode=()=>{
        setIsSignup(!isSignup);
        setShowPassword(false);
    }

    const googleSuccess= async (res)=>{
        const result= res?.profileObj; // ?. this is the 'optional chaining' operator which will set the value of result as undefined if we don't have access to res object and hence no error will be displayed
        const token = res?.tokenId;

        try {
            setSignedIn(!signedIn);
            dispatch({type:'AUTH',data:{result, token}});

            history.push('/'); //react-router-dom

        } catch (error) {
            console.log(error);
        }

    }
    
    const googleFailure=(error)=>{
        console.log(error);
    }

    return (
    <div className={classes.outerContainer}>
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>

                <Typography variant="h5">{isSignup?'Sign Up':'Sign In'}</Typography>
                
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange}  half />
                                </>
                        )}
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type= {showPassword? 'text':'password'} handleShowPassword={handleShowPassword} />
                    {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>


                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                        {isSignup? 'Sign Up' : 'Sign In'}
                    </Button>
                    
                    <GoogleLogin 
                        clientId="367803436001-5p2ui521udkpsd4r2dsriauqj019uq2h.apps.googleusercontent.com" 
                        render={(renderProps)=>(
                            <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained" >Sign In with Google</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    
                    />


                    <Grid container justify="center">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                    </Grid>

                </form>

            </Paper>

        </Container>
    </div> 
     );
}
 
export default Auth;

