import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // otp: { type: String, required: true }
});

const userModel = mongoose.models.user || mongoose.model('user', userSchema);

console.log("✅ userModel loaded:", userModel); // Debugging step

export default userModel;
