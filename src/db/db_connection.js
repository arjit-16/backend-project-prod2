import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`)
        //console.log(connectionInstance);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error, "MongoDB Connection failed");
    }
}


export default connectDB;