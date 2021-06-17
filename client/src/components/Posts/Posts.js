import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux'; //To fetch information from redux

import Post from './Post/Post';

import useStyles from './styles';


const Posts = ({setCurrentId}) => {
    const posts = useSelector((state)=>state.posts);
    const classes=useStyles();

 

    return ( 
        !posts.length?<CircularProgress/>:(
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} title={post.title} selectedFile={post.selectedFile} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>

        )
     );
}
 
export default Posts;