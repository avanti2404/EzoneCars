const mongoose = require('mongoose')

require('dotenv').config()
const conn1= process.env.MONGO_DB_URI

const connectDatabase=  ()=>{
    try{
        const cars = mongoose.createConnection(conn1, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log("CONNETION ")
        return {cars}
    }
    catch (error) {
        console.error(`Error:${error.message}`)
        process.exit(1)
    }
}
       
module.exports = { connectDatabase }

