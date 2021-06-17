import React, {useState, useEffect} from 'react';
import {Container, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import useStyles from '../../styles';


const Home = ({menuButtonStatus, SetMenuButtonStatus, currentId, setCurrentId, signedIn}) => {

    const classes=useStyles();
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
        <Grow in>
                <Container className={classes.gridContainer}>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3} >
                        <Grid item xs={12} sm={12} md={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                        
                            <Form currentId={currentId} setCurrentId={setCurrentId} menuButtonStatus={menuButtonStatus} signedIn={signedIn}/>
                        
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    );
}
 
export default Home;