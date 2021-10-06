const http = require("http");
const server = http.createServer();
const mongoose = require("mongoose");
const carModel = require("./models/carModel");
const port = 8000;
const db = "mongodb://localhost:27017/garage";

const car1 = new carModel({
    brand: "Renault",
    model: "Espace",
    year: 1999
})
const car2 = new carModel({
    brand: "Renault",
    model: "Scenic",
    year: 2004
})
const car3 = new carModel({
    brand: "Peugeot",
    model: "308",
    year: 2017
})

// car1.save()
// car2.save()
// car3.save()

carModel.findById("615dadb7d0821aa6ac884f52")
    .then(car => console.log("car is : ", car))
    .catch(error => console.error(error))

carModel.updateOne({
        _id: "615dadb7d0821aa6ac884f52"
    }, {
        year: 2000
    })
    .then(car => console.log("car is : ", car))
    .catch(error => console.error(error))

carModel.deleteMany({
        brand: "Renault"
    })
    .then(console.log)
    .catch(console.error)

mongoose.connect(db, (error) => {
    if (error) {
        console.log(error)
        process.exit(1)
    } else console.log('connected to', db);

})


server.listen(port, () => console.log('Server running on port', port))