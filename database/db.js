import mongoose from "mongoose";


export const Connection = async (URL) => {
    //mongodb url:
    //moved to index.js for deployment purposes
    try 
    {
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true});
        console.log('DB connected successfully');
    }    
    catch (error)
    {
        console.log('Error while connecting with database', error.message);
    }
    
};

export default Connection; 
