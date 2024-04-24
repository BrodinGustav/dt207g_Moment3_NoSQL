//Serverinställningar
const express = require('express');         // Ramverk för applikationen
const cors = require ('cors');              //Möjliggör korsdomän förfrågningar till servern
const mongoose = require ('mongoose');      //Ramverk för mongoDB

const app = express();
const port = process.env.PORT || 3000;      //Omvanldar inkommande JSON-data till JS-objekt

//Middleware
app.use(cors());
app.use(express.json());

//Anslutning till mongodb
mongoose.connect("mongodb://localhost:27017/mom3_noSQL").then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to database" + error);
})


//Routes


app.listen(port, () => {
    console.log("Server is running on port:" + port);
});