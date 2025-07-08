const carSchema = require('../schema/carsSchema');

exports.getOneWay = async (req, res) => {
    try {
        const { source } = req.params;

        // Get all cars with non-empty oneway ratePerKm
        const cars = await carSchema.find({
            "tripType.oneway.ratePerKm": { $ne: "" }
        });

        // Extract car names
        const carNames = cars.map(car => car.carName);

        // Find cars that match the source location and filtered car names
        const result = await carSchema.find({
            carName: { $in: carNames },
            location: source
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
