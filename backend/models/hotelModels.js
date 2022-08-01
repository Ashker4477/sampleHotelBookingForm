const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        street_address: { type: String, required: true },
        street_address_line2: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: Number, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        arrival_date: { type: Date, required: true },
        departure: { type: Date, required: true },
        no_of_adults: { type: Number, required: true },
        no_of_kids: { type: Number, required: true },
        paymentMethod: { type: String, required: true },
        special_request: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

const hotel = mongoose.model('hotel', hotelSchema);

module.exports = hotel;
