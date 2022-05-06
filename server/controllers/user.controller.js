const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {

    register: (req, res) => {
        const user = new User(req.body);
        user.save()
            .then((newUser) => {
                console.log(newUser);
                console.log("Successfully Registered");
                res.json({
                    successMessage: "You have successfully registered",
                    user: newUser
                });
            })
            .catch((err) => {
                console.log("Registration not successfull")
                res.status(400).json(err);
            })
    },

    login: (req, res) => {
        User.findOne({email: req.body.email})
            .then((userRecord) => {
                if(userRecord === null){
                    res.status(400).json({message: "Email or Password is incorrect"})
                }
                else{
                    bcrypt.compare(req.body.password, userRecord.password)
                        .then((isPasswordValid) => {
                            if(isPasswordValid){
                                console.log("Password is valid");
                                res.cookie(
                                    "usertoken",
                                    jwt.sign(
                                        {
                                            id: userRecord._id,
                                            email: userRecord.email,
                                            username: userRecord.username
                                        },
                                        process.env.JWT_SECRET
                                    ),
                                    {
                                        httpOnly: true,
                                        expires: new Date(Date.now() + 9000000)
                                    },
                                ).json({
                                    message: "Successfully",
                                    userLoggedIn: userRecord.username,
                                    userID: userRecord._id
                                });
                            }
                            else{
                                res.status(400).json({
                                    message: "Login or email is invalid"
                                })
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            res.status(400).json({message: "Invalid Attempt"});
                        })
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json({message: "Invalid Attempt"});
            })
    },

    logout: (req, res) => {
        console.log("Logging out");
        res.clearCookie("usertoken");
        res.json({message: "You have successfully logged out."});
    },

    getOneUser: (req, res) => {
        User.findOne({_id: req.params.id})
            .then((oneUser) => {
                console.log(oneUser);
                res.json(oneUser);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    
}