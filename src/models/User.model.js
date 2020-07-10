import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    api_key: { type: String, required: true }
});

// Create a prehook to encrypt password 
userSchema.pre("save", function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        // Hash the password 
        bcrypt.hash(this.password, salt, (hashErr, hashPass) => {
            if (hashErr) return next(hashErr);
            this.password = hashPass; 
            return next(); 
        }); 
    });
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;