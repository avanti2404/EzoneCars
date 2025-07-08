const carSchema = require("../schema/carsSchema");

exports.getRoundtrip = async (req, res) => {
    try {
        const { source } = req.params;

        // Find all cars with non-empty roundTrip ratePerKm
        const cars = await carSchema.find({
            "tripType.roundTrip.ratePerKm": { $ne: "" }
        });

        // Extract car names
        const carNames = cars.map(car => car.carName);

        // Find cars that match both the source location and car names
        const result = await carSchema.find({
            carName: { $in: carNames },
            location: source
        });

        res.status(200).json({
            status: 200,
            message: "Success",
            data: result
        });
    } 
    catch (error) {
        res.status(500).json({
            status: 500,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
