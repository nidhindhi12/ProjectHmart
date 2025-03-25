const usermodel = require('../model/usermodel');
const JWT = require('jsonwebtoken'); //4
const { JWTSECRET } = require('../utility/config'); //5

const dcrypt = require('bcrypt');

//#region  add 

const newuser = async (req, res) => {

    try {

        const user = req.body;
        console.log(user)

        if (!user) {
            return res.status(400).json({ status: false, data: { message: 'user is null' } });
        }
        const hashpassword = dcrypt.hashSync(user.password, 10);
        const dbuser = new usermodel({
            username: user.username, email: user.email, password: hashpassword,
            address: user.address, phonenumber: user.phonenumber, area: user.area, city: user.city, pincode: user.pincode, landmark: user.landmark
        });
        await dbuser.save();

        return res.status(200).json({ status: true, data: { message: 'User create  successfully.', data: dbuser } })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, data: { message: 'internal server error.', data: error } })
    }

}
//#endregion
//#region readdata

const readalldata = async (req, res) => {

    try {
        const user = await usermodel.find();


        return res.status(200).json({ status: true, data: { message: 'User read  successflly.', data: user } })

    } catch (error) {
        return res.status(500).json({ status: false, data: { message: 'Internal server error.', data: error } })
    }

}
//#endregion

//#region updatauser
const updatedata = async (req, res) => {
    try {
        const id = req.params.id;

        const user = req.body;
        const dbuser = await usermodel.updateOne({ _id: id }, { fullname: user.fullname, email: user.email, password: user.password });

        return res.status(200).json({ status: false, data: { message: 'User updated successfully', data: dbuser } });
    } catch (error) {
        return res.status(500).json({ status: false, data: { message: 'internal server error.', data: error } })
    }

}
//#endregion

//#region delete user
const deletedata = async (req, res) => {
    try {
        const id = req.params.id;
        await usermodel.deleteOne({ _id: id });
        return res.status(200).json({ status: true, data: { message: 'User updated successfully' } });

    } catch (error) {
        return res.status(500).json({ status: false, data: { message: 'internal server error.', data: error } })
    }
}
//#endregion


//#region login

const login = async (req, res) => {

    try {
        const userdetail = req.body;
        const dbuser = await usermodel.findOne({ email: userdetail.email }); //6
        if (!dbuser) {
            return res.status(404).json({ status: false, data: { message: 'E-mail not found' } })
        }

        const checkpass = await dcrypt.compare(userdetail.password, dbuser.password,);


        if (!checkpass) {
            return res.status(404).json({ status: false, data: { message: 'Invalid Password' } })

        }
        const token = JWT.sign({ id: dbuser._id }, JWTSECRET);
        return res.status(200).json({ status: true, data: { message: 'Login successfully.', data: dbuser, token: token } })
    } catch (error) {
        return res.status(500).json({ status: false, data: { message: 'internal server error.', data: error } })
    }
}

//#endregion



module.exports = { newuser, readalldata, updatedata, deletedata, login }; //7