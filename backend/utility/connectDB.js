const mongoose = require('mongoose');
const {  MONGODB_URL } = require('./config');
const user= require('../model/usermodel');  //default creation of user model
const products =require('../model/productmodel');

const connectdb = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('database connected successfully');
        user;
        products    ;
    } catch (error) {
        if (error.name == 'MongooseServeSelectionError') {

            console.error('Error: Connection refused.Please check if server is accessible');
        } else {

            console.error('Error while connecting to Database server');
        }
        process.exit(1);
    }
}

module.exports = connectdb;
