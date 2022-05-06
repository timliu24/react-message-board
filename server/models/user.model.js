const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "Username is required"]
    },

    email: {
        type: String,
        required: [true, "Email address is required"]
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password MUST be at least 8 characters"] 
    },

}, {timestamps: true})

UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value)

UserSchema.pre("validate", function(next){
    if (this.password !== this.confirmPassword){
        this.invalidate("confirmPassword", "Password must match!!!")
        console.log("Password don't match")
    }
    next()
})

UserSchema.pre("save", function(next){
    console.log("in pre save");
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
        this.password = hashedPassword;
    next()
    })
})


const User = mongoose.model("User", UserSchema);
module.exports = User;