const usermodel = require('../model/usermodel');
const JWT = require('jsonwebtoken'); //4
const { JWTSECRET } = require('../utility/config'); //5

const bcrypt = require('bcrypt');
const { decrypt } = require('dotenv');

//#region  add 

const newuser = async (req, res) => {

    try {

        const user = req.body;
        console.log(user)

        if (!user) {
            return res.status(400).json({ status: false, data: { message: 'user is null' } });
        }
        const hashpassword = bcrypt.hashSync(user.password, 10);
        const dbuser = new usermodel({
            username: user.username, email: user.email, password: hashpassword,
            address: user.address, phonenumber: user.phonenumber, area: user.area, city: user.city, pincode: user.pincode, landmark: user.landmark, usertype: user.usertype
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
        const dbuser = await usermodel.updateOne({ _id: id }, {
            username: user.username, email: user.email,
            address: user.address, phonenumber: user.phonenumber, area: user.area, city: user.city, pincode: user.pincode, landmark: user.landmark
        });

        return res.status(200).json({ status: true, data: { message: 'User updated successfully', data: dbuser } });
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
        console.log(userdetail)
        const dbuser = await usermodel.findOne({ email: userdetail.email }); //6
        console.log(dbuser);
        if (!dbuser) {
            return res.status(404).json({ status: false, data: { message: 'E-mail not found' } })
        }

        const checkpass = await bcrypt.compare(userdetail.password, dbuser.password,);
        console.log(checkpass)


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

//#region  updatePassword
const updatePassword = async (req, res) => {
    try {
        const id = req.params.id;
        const userdetail = req.body;

        const dbuser = await usermodel.findOne({ _id: id });


        if (!dbuser) {
            return res.status(404).json({ status: false, data: { message: 'account not found' } })
        }
        const checkpass = await bcrypt.compare(userdetail.oldpassword, dbuser.password);

        if (!checkpass) {
            return res.status(404).json({ status: false, data: { message: 'Incorrect Password' } })
        }
        const hashpassword = bcrypt.hashSync(userdetail.newpassword, 10);
        let updbuser = await usermodel.updateOne({ _id: id }, {
            password: hashpassword,
        });
        return res.status(200).json({ status: true, data: { message: 'Password updated successfully.', data: updbuser } })
    } catch (error) {
        return res.status(500).json({ status: false, data: { message: 'internal server error.', data: error } })

    }
}
//#endregion

//#region  printverify
const AuthVerify = async (req, res) => {
    return res.status(200).json({ status: true, data: { message: 'Authentication verified', data: req.user } })
}
//#endregion

module.exports = { newuser, readalldata, updatedata, deletedata, login, updatePassword, AuthVerify }; //