
import { request } from "express";
import User from "../model/user-schema.js";

export const userSignup = async ( request , response) =>
{
 try
 {

    // Tackle if username already exists:
    const exist = await User.findOne({username: request.body.username});
    if(exist)
    {
        return response.status(401).json({message: 'Username already exists'});
    }


    //console.log(request.body);
    const user = request.body;
    const newUser = new User(user); //newUser is a validated user
    await newUser.save();   //push data in db

    response.status(200).json({message: user});

 }
 catch(error)
 {
    response.status(500).json({message: error.message});
 }
}

export const userLogin = async (request, response) => {
    try{
        //storing username and pw entered by user
        const username = request.body.username;
        const password = request.body.password;

        //find user whose username and pw matches with existing data
        let user = await User.findOne({username:username, password:password});

        if(user) 
        {
            return response.status(200).json({data: user});
        }
        else 
        {
            return response.status(401).json('Invalid login');
        }
    }
    catch(error)
    {
        response.status(500).json('Error', error.message);

    }
}