const carSchema = require('../schema/carsSchema');

exports.getLocal = async (req, res) => {
    try {
        const { source } = req.params;
        const {packageType} = req.params
        console.log(packageType);
        let pT = packageType.replace(/  /g, '%20%20');
        console.log(pT);
        
        // Get all cars with non-empty oneway ratePerKm
        const cars = await carSchema.find({
            "tripType.local.ratePerKm": { $ne: "" }
        });

        // Extract car names
        const carNames = cars.map(car => car.carName);
        console.log(carNames);
        
        // Find cars that match the source location and filtered car names
        const result = await carSchema.find({
            carName: { $in: carNames },
            location: source,
            'tripType.local.packageType':pT
        });

        console.log(result);
        
        res.status(200).json({
            status: 200,
            message: "Success",
            data: result
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
