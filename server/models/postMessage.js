import mongoose from 'mongoose';


//Each post will follow this blueprint
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name:String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes:{type: [String],default:[]},
    createdAt:{
        type: Date,
        default: new Date()
    },

});

//A model is a class with which we construct documents. In this case, each document will be an online post having a title, message etc
const PostMessage = mongoose.model('PostMessage', postSchema); 
export default PostMessage;