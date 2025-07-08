const carSchema = require('../schema/carsSchema');
const cloudinary = require("cloudinary").v2;
const { ObjectId } = require('mongodb');

exports.addCar = async (req, res) => {
    try {
        const { name, carType, seaters, location } = req.body;
        const { tripType } = req.body;
        
        let newLoc = location.split(",").map(city => city.trim());
        console.log(newLoc);
        
        const jsonTrip = JSON.parse(tripType);
        
        const img1 = req.files.image1 && req.files.image1[0];
        const img2 = req.files.image2 && req.files.image2[0];
        const img3 = req.files.image3 && req.files.image3[0];
        
        const images = [img1, img2, img3].filter((item) => item !== undefined);
        
        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url;
            })
        );

        const newCar = await carSchema.create({
            carName: name,
            carType: carType,
            seaters: seaters,
            tripType: jsonTrip,
            images: imagesUrl,
            location: newLoc
        });

        res.status(201).json({
            success: true,
            data: newCar
        });
    } 
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

exports.removeCar = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Check if ID is valid
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, error: 'Invalid car ID' });
        }

        // Delete images from Cloudinary first (optional)
        const car = await carSchema.findById(id);
        if (car) {
            for (const imageUrl of car.images) {
                const publicId = imageUrl.split('/').pop().split('.')[0];
                await cloudinary.uploader.destroy(publicId);
            }
        }

        const deletedCar = await carSchema.findByIdAndDelete(id);
        
        if (!deletedCar) {
            return res.status(404).json({ success: false, error: 'Car not found' });
        }

        res.json({
            success: true,
            data: deletedCar
        });
    } 
    catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

exports.editCar = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, carType, seaters } = req.body;
        const { tripType } = req.body;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, error: 'Invalid car ID' });
        }

        const jsonTrip = JSON.parse(tripType);
        
        // Handle image updates
        let imagesUrl = [];
        if (req.files) {
            const img1 = req.files.image1 && req.files.image1[0];
            const img2 = req.files.image2 && req.files.image2[0];
            const img3 = req.files.image3 && req.files.image3[0];
            
            const images = [img1, img2, img3].filter((item) => item !== undefined);
            
            imagesUrl = await Promise.all(
                images.map(async (item) => {
                    let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                    return result.secure_url;
                })
            );
        }

        const updateData = {
            carName: name,
            carType: carType,
            seaters: seaters,
            tripType: jsonTrip
        };

        // Only update images if new ones were uploaded
        if (imagesUrl.length > 0) {
            // Delete old images from Cloudinary (optional)
            const car = await carSchema.findById(id);
            if (car) {
                for (const imageUrl of car.images) {
                    const publicId = imageUrl.split('/').pop().split('.')[0];
                    await cloudinary.uploader.destroy(publicId);
                }
            }
            updateData.images = imagesUrl;
        }

        const updatedCar = await carSchema.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedCar) {
            return res.status(404).json({ success: false, error: 'Car not found' });
        }

        res.json({
            success: true,
            data: updatedCar
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

exports.getCar = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, error: 'Invalid car ID' });
        }

        const car = await carSchema.findById(id);
        
        if (!car) {
            return res.status(404).json({ success: false, error: 'Car not found' });
        }

        res.json({
            success: true,
            data: car
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

exports.listCars = async (req, res) => {
    try {
        const cars = await carSchema.find({});
        res.json({
            success: true,
            count: cars.length,
            data: cars
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};