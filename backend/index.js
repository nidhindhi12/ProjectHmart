const cors=require('cors');
const express = require('express')
const connection =require('./utility/connectDB');
const userroutes =require('./routes/userroutes')
const productroutes=require('./routes/productroutes');


const app=express();
const port =5000;
app.use(cors());
app.use(express.json());

app.use('/api',userroutes);
app.use('/product',productroutes);


const startServer= async () =>{
    try {
        await connection()
        app.listen(port ,()=>{
            console.log(`Server is ruuning on port ${port}`)
        })
    } catch (error) {
        console.error('Failed to start a server: ',error)
        process.exit(1);
    }
}

startServer();