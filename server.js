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

//CV-Schema
const cvSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: [true, "Företagsnamn måste skickas med"],
    },
    jobtitle: {
        type: String,
        required: [true, "Jobbtitel måste skickas med"],
    },
    location: {
        type: String,
        required:[true, "Arbetets plats måste skickas med"]
    }
}); 

//Inkludera schemat till databasen
const cv = mongoose.model("Cv", cvSchema);      //model motsvarar 1 tabell i databasen. Tabellens namn blir Cv och det är strukturen från cvSchema som vi vill använda

//Routes
app.get("/cv", async(req, res) => {              //async används då anrop kommer göras till databasen
    try { 
        let result = await cv.find({});         //Hämta in all data från cv-schemat
    
    return res.json(result);
    }catch(error) {
        return res.status(500).json(error);
    }
})

//Skapa den post i databasen
app.post("/cv", async(req, res) => {
    try {
        let result = await cv.create(req.body)   //Tar in req från klientsidan och skickar med svaret (bodyn) vi får till createmetoden
    
        return res.json(result);
    }catch(error) {
        return res.status(400).json(error);
    }
});

//Route för update


//Route för delete
app.delete("/cv/:id", async(req, res) => {
    try {
        let result = await cv.deleteOne({_id: req.params.id});   //Hämtar in ID för routeparametern
    
        return res.json(result);
    }catch(error) {
        return res.status(400).json(error);
    }
});



app.listen(port, () => {
    console.log("Server is running on port:" + port);
});