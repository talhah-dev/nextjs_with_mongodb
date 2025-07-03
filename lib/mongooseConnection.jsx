// src/lib/mongooseConnection.js
import mongoose from 'mongoose'

const mongooseConnection = async () => {
  if (mongoose.connection.readyState >= 1) return

  return mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

export default mongooseConnection
