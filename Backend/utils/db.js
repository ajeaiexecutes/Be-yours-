// import dotenv from "dotenv"
// dotenv.config();
import mongoose from "mongoose";

//database creation
export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI
            || "mongodb+srv://ajaydevxtra_db_user:ajeai@cluster0.7btn7gp.mongodb.net/Thrifts"
        );

        console.log('mongo db connected');
        
    }
    catch (error) {
        console.log("mongoose client error",error);
        
    }
}
