const express = require('express');
const AdminRouter = express.Router();
const upload = require("../middlewares/Multer");
const { addCar, editCar, listCars, removeCar, getCar } = require("../controllers/carProduct");
const { adminLogin } = require("../controllers/adminLogin");
const { forgotPassword } = require("../controllers/forgotPassword");
const { resetPassword } = require("../controllers/resetPassword");
const { getContactDetails } = require("../controllers/contactInfo");
const verifyAdminToken = require("../middlewares/auth");

// Public route
AdminRouter.post('/login', adminLogin);
AdminRouter.post("/forgot-password", forgotPassword);
AdminRouter.post("/reset-password/:token", resetPassword);

// Protected routes
AdminRouter.post('/addCar', 
  verifyAdminToken,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 }
  ]),
  addCar
);

AdminRouter.put('/editCar/:id',
  verifyAdminToken,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 }
  ]),
  editCar
);

AdminRouter.get("/getCars", verifyAdminToken, listCars);
AdminRouter.get("/getCar/:id", verifyAdminToken, getCar);
AdminRouter.delete("/removeCar/:id", verifyAdminToken, removeCar);

AdminRouter.get("/getContactDetails", verifyAdminToken, getContactDetails);


module.exports = AdminRouter;
