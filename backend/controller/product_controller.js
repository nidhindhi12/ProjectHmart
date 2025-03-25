const productmodel = require('../model/productmodel');


//#region add products
const newproduct = async (req, res) => {
    try {
        const fetchproductdata = req.body;

        if (!fetchproductdata) {
            return res.status(400).json({ status: false, data: { message: 'Data collection is null' } });
        }
        const savedata = new productmodel({
            productname: fetchproductdata.productname,
            serialnumber: fetchproductdata.serialnumber,
            price: fetchproductdata.price,
            quantity: fetchproductdata.quantity,
            description:
            {
                longdescription: fetchproductdata.description.longdescription,
                shortdescription: fetchproductdata.description.shortdescription,
            },
            category: fetchproductdata.category
        });
        await savedata.save()

        return res.status(200).json({ status: true, data: { message: 'Product data collection created successfully', data: savedata } });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ status: false, data: { message: 'internal server error.', data: error } });
    }
}
//#endregion

//#region read products
const readallproduct = async (req, res) => {
    try {

        const productdata = await productmodel.find();
        console.log(productdata);
        res.status(200).json({ status: true, data: { message: "product read successfully", data: productdata } });
    } catch (error) {
        res.status(500).json({ status: false, data: { messsage: 'Internal server error', data: error } })
    }


}
//#endregion

//#region update product

const updateproduct = async (req, res) => {

    try {
        const id = req.params.id
        console.log(id);
        const product = req.body;
        const dbproduct = await productmodel.updateOne({ _id: id }, {
            productname: product.productname,
            serialnumber: product.serialnumber,
            price: product.price,
            quantity: product.quantity,
            description:
            {
                longdescription: product.description.longdescription,
                shortdescription: product.description.shortdescription
            },

            category: product.category

        })
        return res.status(200).json({ status: true, data: { message: 'Product updated successfully', data: dbproduct } });


    } catch (error) {
        res.status(500).json({ status: false, data: { message: 'internal server error.', data: error } });
    }
}
//#endregion

//#region delete product 
const deleteproduct = async (req, res) => {
    try {
        const id = req.params.id;
        
        await productmodel.deleteOne({ _id: id });

        return res.status(200).json({ status: true, data: { message: 'Product deleted successfully.' } });

    } catch (error) {
        return res.status(500).json({ status: false, data: { message: 'Internal server error.' }, data: error });
    }
}
//#endregion



module.exports = { newproduct, readallproduct, updateproduct, deleteproduct };