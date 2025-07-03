import mongoose from "mongoose";

const mongooseConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://talha18513:v6ElJyjzuHmjCTZV@cluster0.fcrys1b.mongodb.net/")
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}

export default mongooseConnection;