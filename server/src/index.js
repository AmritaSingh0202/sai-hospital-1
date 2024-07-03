// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5454, ()=>{
        console.log(`Server is running on port ${process.env.PORT || 5454}`)
    })
    app.on("error", (error)=>{
        console.log("MongoDB Connection Error", error)
        throw error
    })
})
.catch( (err)=>{
    console.log("MONGODB connection Failed !!!", err)

})