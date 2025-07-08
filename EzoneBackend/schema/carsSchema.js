const mongoose = require('mongoose')

const {connectDatabase} = require("../database/db")
 
const carsSchema = new mongoose.Schema({
    carName:{
        type:String,
        required: true,
    },
    carType:{
        type:String,
        // required: true,
    },
    images:{
        type:Array,
        required: true,
    },
    seaters:{
        type:Number,
        // required: true,
    },
    location: {
        type:Array,
    },
    tripType:{
        oneway:{
            ratePerKm :{
                type:String,
                // required: true,
            },
            minimumKmPD:{
                type:String,
                // required: true,
            },
            dA:{
                type:String,
                // required: true,
            },
        },
        local:{
            baseFare:{
                type:String,
                // required: true,
            },
            packageType:{
                type:String
            }
        },

        roundTrip:{
            ratePerKm :{
                type:String,
                // required: true,
            },
            minimumKmPD:{
                type:String,
                // required: true,
            },
            dA:{
                type:String,
                // required: true,
            },
        },
        airport:{
            ratePerKm :{
                type:String,
                // required:true
            },
            minimumKmPD:{
                type:String,
                // required:true
            }
        }
    },
    // tripType:{
    //     type:Object,
    //     required:true,
    // }

 
})

const {cars} = connectDatabase()
const carSchema = cars.model("CarsSchema",carsSchema)
module.exports = carSchema
