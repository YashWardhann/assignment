import mongoose from "mongoose";

const userIntegerSchema = new mongoose.Schema({
    api_key: { type: String, required: true },
    integer: { type: Number, default: 0 }
});

const UserIntegerModel = mongoose.model("UserInteger", userIntegerSchema);

export default UserIntegerModel;