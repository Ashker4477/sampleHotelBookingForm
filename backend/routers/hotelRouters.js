const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const hotel = require('../models/hotelModels');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hotelBookDB', () => console.log(`DB Conected`));

const hotelRouter = express.Router();

hotelRouter.get(`/details/:id`, async (req, res) => {
    const id = req.params.id;
    const hotelDetail = await hotel.findOne({ id }, { __v: 0 });
    if (!hotelDetail) {
        return res.status(404).send({ message: 'Hotel Booked Details not found' });
    }
    return res.status(200).json(hotelDetail);
});

hotelRouter.post(`/details`, async (req, res) => {
    const newHotelBooked = await hotel.collection.insertOne(req.body);
    return res.send(newHotelBooked);
});

hotelRouter.get(`/details`, async (req, res) => {
    const HotelBooked = await hotel.find({});
    if (HotelBooked.length === 0) {
        return res.status(404).send({ message: 'No Details found' });
    }
    return res.send(HotelBooked);
});

module.exports = hotelRouter;
