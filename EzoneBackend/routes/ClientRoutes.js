const express = require('express');
const ClientRouter = express.Router();

const { getRoundtrip } = require("../controllers/getRoundTrip");
const { getOneWay } = require("../controllers/getOneWay");
const { getLocal } = require("../controllers/getLocal");
const { addContactInfo } = require("../controllers/contactInfo");

// Route to get one-way trip cars by source location
ClientRouter.get("/oneway/:source", getOneWay);

// Route to get round-trip cars by source location
ClientRouter.get("/roundtrip/:source", getRoundtrip);

// Route to get local cars by source location
ClientRouter.get("/local/:source/:packageType", getLocal);

// Route to post contact info
ClientRouter.post("/contact", addContactInfo);

module.exports = ClientRouter;
