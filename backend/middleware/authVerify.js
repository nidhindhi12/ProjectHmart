const usermodel = require('../model/usermodel')
const jwt = require('jsonwebtoken')
const { JWTSECRET } = require("../utility/config")




const Auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log(token)
        if (!token) {
            return res.status(400).json({ status: false, data: { messsage: "your token is null" } })
        }
        const user = jwt.verify(token, JWTSECRET)  //dcrypt of token
        console.log(user)
        if (!user) {
            return res.status(400).json({ status: false, data: { messsage: "Invalid Token" } });

        }
        const dbuser = await usermodel.findById({ _id: user.id }).select("-password");
        console.log(dbuser)
        if(!dbuser)
        {
            return res.status(400).json({ status: false, data: { messsage: "Unathorized access" }});

        }
        req.user=dbuser
        next()
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, data: { messsage: "Internal server eerror", data:error }});

    }

}

module.exports= Auth