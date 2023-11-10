require('dotenv').config();
const express = require("express");
const app  = express();
const port = process.env.PORT|| 8000;
const mongoose = require("mongoose")
const { Mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//my routes
const authRoutes  = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")
const paymentRoutes = require("./routes/paymentRoutes")

app.listen(port,()=>{
    console.log(`App is running at ${port}`)
})
//DB connection
mongoose.connect(process.env. databaseURL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log("CONNECTED TO DATABASE")
});
//Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())

//my routes
app.use("/api",authRoutes);
app.use("/api",userRoutes)
app.use("/api",categoryRoutes)
app.use("/api",productRoutes)
app.use("/api",orderRoutes)
app.use("/api",paymentRoutes)