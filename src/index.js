const dotenv = require('dotenv-flow');

dotenv.config({
    node_env: process.env.NODE_ENV || 'development'
});

const apiRoutes = require("./api-routes");

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

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`this server running on port ${port}`);
});


console.log('database user:', process.env.MONGO_ROOT_USERNAME);
console.log('database passwd:', process.env.MONGO_ROOT_PASSWORD);
console.log('database name:', process.env.DB_NAME);
console.log('database host:', process.env.DB_HOST);
console.log('default port:', process.env.PORT);