// 1. Middlewares

// const express = require("express");
// const app = express();

// // bad way of performing prechecks
// app.get("/health-checkup", function(req,res){
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     // authentication
    // if(username != "ayush" || password != "ayushi"){
    //     res.status(400).json({
    //         msg: "Not valid"
    //     })
//         return;
//     }

//     // Input check
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(400).json({
//             msg: "Invalid inputs"
//         })
//         return;
//     }
    
//     res.json({
//         msg: "Your kidneys are fine"
//     })
// })

// app.listen(3000);


// actually using middlewares


// const express = require("express");
// const app = express();
// let numberOfCalls = 0;
// function kidneyMiddleware(req,res,next){
//     const kidneyId = req.query.kidneyId;
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg: "Invalid Inputs"
//         })
//     }
//     else{
//         next();
//     }
// }

// function userMiddleware(req,res,next){
//     const username = req.headers.username; 
//     const password = req.headers.password; 
//     if(username != "ayush" || password != "ayushi"){
//         res.status(411).json({
//             msg: "Invalid Credentials"
//         })
//     }
//     else{
//         next();
//     }
// }

// function countCalls(req,res,next){
//     numberOfCalls++;
//     console.log(numberOfCalls);
//     next();
// }

// app.use(countCalls,userMiddleware,kidneyMiddleware);

// app.get("/health-check",function(req,res){

//     res.status(200).json({
//         msg: "your heart is healthy"
//     })
// })

// app.listen(3000);

// const express = require("express");
// const app = express();

// app.use(express.json());

// app.post('/',function(req,res){
//     const kidneys = req.body.kidneys;
//     const no_of_kidneys = kidneys.length;
//     res.send("your have " + no_of_kidneys + " kidneys");
// })


// // 2. global catches


// app.use(function(err,req,res,next){
//     res.json({
//         msg: "Server Down"
//     })
// })
// app.listen(3000);


// 3. ZOD used for validating inputs


// const express = require("express");
// const zod = require("zod");
// const app = express();

// // schema represents an array of numbers
// const schema = zod.array(zod.number());

// app.use(express.json());

// app.post('/',function(req,res){
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);
//     res.send({
//         response
//     })
// })

// app.listen(3000);

// const zod = require("zod");
// function validateInput(obj){
//     const schema = zod.object({
//         email: zod.string().email(),
//         password: zod.string().min(8)
//     })

//     const response = schema.safeParse(obj);
//     console.log(response);
// }
// validateInput({
//     email: "harkita@gmail.com",
//     password: "l"
// });


// 4. Assignment ( using the jwt to create an authorization token )

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";
// const app = express();

// app.use(express.json());
// const all_users = [
//     {
//         username: "harkirat@gmail.com",
//         password: "123",
//         name: "harkirat singh"
//     },
//     {
//         username: "ayush@gmail.com",
//         password: "1234",
//         name: "ayush stark"
//     },
//     {
//         username: "khushi@gmail.com",
//         password: "12345",
//         name: "khushi jangid"
//     }
// ];

// function userExists(username,password){
//     let user_exists = false;
//     all_users.forEach((item) =>{
//         if(item.username == username && item.password == password){
//             user_exists = true;
//         }
//     })
//     return user_exists;
// }

// app.post("/signin",function(req,res){
//     const username = req.body.username;
//     const password = req.body.password;

//     if(!userExists(username,password)){
//         return res.status(403).json({
//             msg: "User doesn't exist"
//         })
//     }

//     var token = jwt.sign({username: username},jwtPassword);
//     return res.json({
//         token,
//     })
// })

// app.get("/users",function(req,res){
//     const token = req.headers.authorization;
//     try{
//         const decoded = jwt.verify(token,jwtPassword);
//         const username = decoded.username;
//         res.status(200).json({
//             users: all_users.filter(function(value){
//                 if(value.username == username){
//                     return false;
//                 }
//                 else{
//                     return true;
//                 }
//             })
//         })
//     }
//     catch(err){
//         return res.status(403).json({
//             msg: "Invalid Token"
//         })
//     }
// })

// app.listen(3000);


// Mongoose library ( for performing operations on mongodb database)


// const express = require("express");
// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://ayushjangid:AyushJangid@cluster0.spcqt0j.mongodb.net/userappnew");

// const User = mongoose.model('Users', {name : String, email: String, password: String});
// const app = express();

// app.use(express.json());
// app.post("/signup",async function(req,res){
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

//   const existing_user = await User.findOne({email: email});
//   if(existing_user){
//     return res.status(400).send("User already exists");
//   }
//   const user = new User({
//     name: name,
//     email: email,
//     password: password
//   });
//   user.save();

//   res.send("User created successfully")
// });

// app.listen(3000);
