// src/models/User.js (or models/User.js if not in /src)
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
