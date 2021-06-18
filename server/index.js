import express from 'express'; //to use this syntax, add "type":"module" in package.json
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

import dotenv from 'dotenv';

//using bcryptjs and jsonwebtoken for authentication

const app= express();

dotenv.config();

app.use(bodyParser.json({limit : "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit : "30mb",extended: true}));
app.use(cors()); //Allows cross origin resource sharing

app.use('/posts',postRoutes);
app.use('/user',userRoutes);




const PORT= process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>app.listen(PORT, ()=> console.log(`Server Running on port: ${PORT}`)).catch((error)=>console.log(error.message)));

mongoose.set('useFindAndModify',false);

