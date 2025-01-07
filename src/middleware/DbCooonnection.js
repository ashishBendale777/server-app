import mongoose from "mongoose";

let connectToDatabase = async () => {
    const connection = await mongoose.connect("mongodb://localhost:27017/db-2025")

    console.log("DB Name", connection.connection.name);
}

export { connectToDatabase }