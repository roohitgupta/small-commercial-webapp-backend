const express = require('express');
const connect = require('./db');
const cors = require('cors');
const dotenv = require('dotenv');
const Router = express.Router();

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use('/api', Router);
// Router.post('/product/form', ProductForm);



app.listen(process.env.PORT || 5000, async ()=> {
    try {
        await connect();
        console.log("Server is running on port 5000!!");
    } catch (error) {
        console.log("error:", error);
    }
});