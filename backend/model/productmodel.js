const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true,
        unique: true,
    },
    serialnumber: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity:
    {
        type: Number,
        required: true,
    },
    description:
    {
        longdescription: {
            type: String,
            required: true,
            unique: true,

        },

        shortdescription:
        {
            type: String,
            required: true,
        }
    },
    category:
    {
        type: String,
        required: true,
        unique: true,
    },


}, { timestamps: true })


module.exports = mongoose.model('products', productSchema);