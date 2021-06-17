//middleware?
//action (for eg liking the post) => auth middleware(NEXT) => like controller

import jwt from 'jsonwebtoken';

const auth= async (req,res,next)=>{
    try {

        //retrieving token from req
        const token=req.headers.authorization.split(" ")[1];

        //checking if the token is Google OAuth or a custom one
        const isCustomAuth=token.length <500;

        let decodedData;

        if(token && isCustomAuth){
            decodedData=jwt.verify(token, 'test');
            req.userId= decodedData?.id;

        }else{
            //if the token if from Google OAuth
            decodedData=jwt.decode(token);
            req.userId=decodedData?.sub; //sub is OAuth id used to differentiate users
        }

        next(); //refers to the next action
    } catch (error) {
        console.log(error);
    }
}

export default auth;