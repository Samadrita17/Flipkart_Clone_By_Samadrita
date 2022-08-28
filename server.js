//DEPLOYMENT:
// This was index.js. But in production env, we dony have index.js. Instead, server.js
//Changes name in json(server) also. "main": "server.js" instead of inex, "start": "node server.js", instead of nodemon index.js
//We nvr push node-modules .  So,
//to use node-modules in client folder, write script in package.json(server): "client-innstall":"cd client && npm install". npm install will make the node moudles
// To make a build of client: in package.json(server): "client-build" : "cd client && npm run build"
// To make a build of client and run after deployment of backend:  //this cmd runs automatically after the application in deployed in heroku. This command will run the above two scripts
// we also dont push package-lock.json and .env:
// so, amke a .gitignore file in server 
// .gitignore file ignores all the file names mentioned in it

//Changes in client-->src-->service-->api.js //change uRL coz now we want production url. url will bw injected by itself
// same in client-->src-->redux-->actions-->productAction.js // empty url
      
//Make changes in MongoDB. Now we can access it from anywhere

// In terminal : cd server--> heroku login(to logina nd use heroku commands)
// In terminal : (server)--> 
   // git init // To make an empty repository
   // git add
   // git commit "commit msg"

import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
import bodyParser from 'body-parser';

// it is imp to write .js extension for backend
import Connection from './database/db.js';

//Actual data
import DefaultData from './default.js';


import Router from './routes/route.js';


//Initialize express as a function:
const app= express();

dotenv.config();


app.use(cors());
app.use(bodyParser.json( {extended:true} ));

//to parse URL:
app.use(bodyParser.urlencoded({ extended:true }));

app.use('/', Router);

//const PORT=8000;
const PORT = process.env.PORT || 8000; //whichever port available on Heroke. 8000 might not be available. In local env, it will be at 8000 

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@-shard-00-00.wb6lkpw.mongodb.net:27017,ac-5t9tdb8-shard-00-01.wb6lkpw.mongodb.net:27017,ac-5t9tdb8-shard-00-02.wb6lkpw.mongodb.net:27017/?ssl=true&replicaSet=atlas-85juiz-shard-0&authSource=admin&retryWrites=true&w=majority`;


//call(from db.js):
  //Connection(USERNAME,PASSWORD); changed to:
Connection(URL); //pass url

if(process.env.NODE_ENV==='production')  // value of NODE_ENV in Heroku is production. When it is production run the code
{
    app.use(express.static('client/build'))   //Also, to deploy frontend, make a build. Build in in package.json in client folder. Using that we can make a build
}

//Make an express server, using listen fuc that takes 2 args listen(Port no, callback fun)
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));

DefaultData();

