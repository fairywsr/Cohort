import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"]
    }, 
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken: {
        type: String,
    },
    resetPasswordtoken: {
        type: String,
    },
    resetPasswordExpiry: {
        type: Date,
    },


},
 {
    timestamps: true,
})


userSchema.pre("save", async function(next){
if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 10)
}
    next();
});

const User = mongoose.model("user", userSchema)

export default User;