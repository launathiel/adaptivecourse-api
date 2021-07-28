const apiRoutes = require("./api-routes");

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

//mongoose
const mongoose = require('mongoose');
mongoose
    .connect(process.env.MONGO_URI, {  
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