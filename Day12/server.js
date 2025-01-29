const exp = require('express');
const server = exp();
const port = 5000;
const mongoose = require('mongoose');
require('dotenv').config();

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Name is required
        trim: true       // Trims extra whitespace
    }
}, { timestamps: true });  // Timestamps will add 'createdAt' and 'updatedAt' automatically

// Create the model for the Product using the schema
const Product = mongoose.model('Product', productSchema);

const mongo_uri = process.env.mongo_uri;
mongoose.connect(mongo_uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));

server.use(exp.json());

server.get('/', (req, res) => {
    res.end("Server is running");
});

// GET all products
server.get('/product', async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products from MongoDB
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// POST a new product
server.post('/product', async (req, res) => {
    try {
        // Create a new Product instance
        const newProduct = new Product({
            name: req.body.name
        });

        // Save the product to MongoDB
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ error: "Failed to create product" });
    }
});

// PUT to update a product by id
server.put('/product/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name: req.body.name },
            { new: true } // Return the updated document
        );

        if (updatedProduct) {
            res.json(updatedProduct);
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        res.status(400).json({ error: "Failed to update product" });
    }
});

server.delete('/product/:id',async(req,res)=>{
    try{
       const deleteditem=await Item.findByIdAndDelete(req.params.id);
       if(deleteditem){
        res.json(deleteditem);
       }else{
        res.status(404).json({message:'Item not found'});
       }
    }
    catch (error) {
        res.status(400).json({ message: 'error deleting product',error });
    }
});
// Start the server
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
