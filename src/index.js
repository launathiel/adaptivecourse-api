const dotenv = require('dotenv-flow');
dotenv.config({
    node_env: process.env.NODE_ENV || 'development'
});

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

//mongoose
const connectionString = `mongodb://${process.env.MONGO_ROOT_USERNAME}:${process.env.MONGO_ROOT_PASSWORD}@${process.env.DB_HOST}`

const mongoose = require('mongoose');
mongoose
    .connect(connectionString, {  
        dbName: process.env.DB_NAME,
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));

const apiRoutes = require("./api-routes");
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`this server running on port ${port}`);
});