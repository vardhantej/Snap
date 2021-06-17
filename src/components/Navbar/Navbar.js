import React,{useState,useEffect} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import camera from '../../images/camera.png';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import {AppBar, Avatar, Button, Typography} from '@material-ui/core';
import {Link,useHistory,useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';


//using jwt-decode
import decode from 'jwt-decode';


const Navbar = ({SetMenuButtonStatus,menuButtonStatus, signedIn,setSignedIn}) => {
    
    const classes= useStyles();
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    
    
    const dispatch=useDispatch();

    const history=useHistory();
    const location=useLocation();

    const logout=()=>{
        dispatch({type:'LOGOUT'});
        history.push('/');
        setUser(null);
        setSignedIn(!signedIn);

    }

    useEffect(()=>{
        const token=user?.token;

        if(token){
            const decodedToken=decode(token);

            if(decodedToken.exp *1000 < new Date().getTime()){ // decodedToken.exp *1000 will give a time value in miliseconds
                logout();
            }
        }

        setUser(JSON.parse(localStorage.getItem('profile')));



    },[location]);

    const handleIconOnClick=()=>{
        
        SetMenuButtonStatus(!menuButtonStatus);
        scrollToTop();
        
     }
 
     
     const scrollToTop = () => {
         window.scrollTo({
           top: 0,
           behavior: "smooth"
         });
       };
     
      

    return ( 

        <div>
           <AppBar className={classes.appBar} position="sticky" color="inherit">
            <Toolbar>
            
                <div className={classes.titleBox}>
                    <img className={classes.image} src={camera} alt="memories" height="60"/>
                    <Typography component={Link} to="/" className={classes.heading} variant='h2' align="center">snap</Typography>
                </div>

                <Toolbar className={classes.toolbar}>
                    {user? (
                        <div className={`${classes.profile}`}>
                            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} onClick={logout} >{user.result.name.charAt(0)}</Avatar>
                            <Typography className={`${classes.userName}`} variant="h6">{user.result.name}</Typography>
                            
                        </div>
                    ):(
                        <Button  component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    )}

                </Toolbar>
               
                { (user) && (<>
                <Typography className={classes.headingCreate} variant='h5' align="center">Create</Typography>
                
                <IconButton edge="start" className={`${classes.menuButton}`} color="inherit" aria-label="menu" onClick={handleIconOnClick}>
                    <AddIcon className={`plusIcon ${classes.addIcon}`}/>
                </IconButton>
                </>
                )}   
            </Toolbar>

            </AppBar> 
        </div>


     );
}
 
export default Navbar;