import React, {useState,useEffect} from 'react';
import {Container} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import {getPosts} from './actions/posts';

import {BrowserRouter,Switch,Route} from 'react-router-dom'; //used to change route after clicking on an element



import './plusIcon.css';
import './App.css';
import footerImage from './images/footerImage.jpg'

import ScrollTopButton from './components/ScrollTopButton/ScrollTopButton';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';



const App = () => {
    const [currentId,setCurrentId]=useState(null);
    const [menuButtonStatus, SetMenuButtonStatus]=useState(false);
    const [isSignup, setIsSignup]=useState(false);
    const [signedIn,setSignedIn]=useState(false);

    const dispatch= useDispatch();


    
    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch]);

    
    
    

    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    
      if(currentId){
          scrollToTop();
      }




    return ( 

        <div>  
            <BrowserRouter>
                <Container maxWidth='lg'>
                    <ScrollTopButton />
                    <Navbar SetMenuButtonStatus={SetMenuButtonStatus} menuButtonStatus={menuButtonStatus} currentId={currentId} signedIn={signedIn} setSignedIn={setSignedIn} isSignup={isSignup} />
                    
                        <Switch>
                            <Route path="/" exact  ><Home menuButtonStatus={menuButtonStatus} SetMenuButtonStatus={SetMenuButtonStatus} currentId={currentId} setCurrentId={setCurrentId} signedIn={signedIn}/></Route>
                            <Route path="/auth"><Auth isSignup={isSignup} setIsSignup={setIsSignup} signedIn={signedIn} setSignedIn={setSignedIn}></Auth></Route>
                        </Switch>
                    
                </Container>

                <img src={footerImage} className='bottom'/>
            </BrowserRouter>        
         </div>
        
     );
}
 
export default App;