import connectDB from "./db/db_connection.js";
import { app } from "./app.js";

connectDB()
.then(()=>{
     app.listen(process.env.PORT, ()=>{
        console.log(`Server is listening at ${process.env.PORT}`);
     })
})
.catch((error)=>{
    console.log(error, "Server is not starting");
}) 