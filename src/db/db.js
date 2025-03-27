import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

console.log('mongo uri', process.env.MONGODB_URI)
console.log('port', process.env.PORT)
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongodb connected !! DB HOST: ${connectionInstance.connection.host}`)
    }catch (error) {
        console.log("mongodb connection error", error)
        process.exit(1)
    }
}

export default connectDB ;