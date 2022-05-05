//This order is necessary
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));


app.use(cors({origin: "http://localhost:3000"}))

require("./config/mongoose.config");

require("./routes/user.routes")(app);



app.listen(process.env.MY_PORT, () => console.log(`Connected to port ${process.env.MY_PORT}`));