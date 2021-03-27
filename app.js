const express=require('express');
const bodyParser=require('body-parser');
const product=require('./routes/product.route');
const app=express();
const mongoose=require('mongoose');
//-------------MONGOOSE CONNECTION-----------------
mongoose.connect("mongodb://localhost/productsDB", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected to the Database')
})
.catch(err =>{
    console.log('Could not connect to the Database', err);
    process.exit();
});




// make sure that mongoose connection is before app.use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/products', product);
app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
});