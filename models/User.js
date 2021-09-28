import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true, minlength: 6 },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, minlength: 7 }
}, {
})

const User = mongoose.model("User", userSchema)

export default User