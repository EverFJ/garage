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

// carModel.create([{
//     brand: "Renault",
//     model: "Espace",
//     year: 1999
// }, {
//     brand: "Renault",
//     model: "Scenic",
//     year: 2004
// }, {
//     brand: "Peugeot",
//     model: "308",
//     year: 2017
// }])

carModel.findById("615dbbc85e878700926fec6f")
    .then(car => console.log("car with _id: 615db4c5fc1b831e2ad5b376 is", car))
    .catch(error => console.error(error))

carModel.updateOne({
        _id: "615dbbc85e878700926fec6f"
    }, {
        year: 2000
    })
    .then(car => console.log("car updated is : ", car))
    .catch(error => console.error(error))

// carModel.deleteMany({
//         brand: "Renault"
//     })
//     .then(console.log)
//     .catch(console.error)

// carModel.insertMany([{
//     brand: "Aston Martin",
//     model: "DB9",
//     year: 2010
// }, {
//     brand: "Range Rover",
//     model: "Discovery Sport",
//     year: 2017
// }])

carModel.find({
        year: {
            $gte: 2015
        }
    })
    .then(cars => console.log("Cars after 2015 : ", cars))
    .catch(console.error)

carModel.find({
        model: {
            $regex: 'o',
            $options: "i"
        }
    })
    .then(cars => console.log("Cars models containing an \"o\" : ", cars))
    .catch(console.error)

mongoose.connect(db, (error) => {
    if (error) {
        console.log(error)
        process.exit(1)
    } else console.log('connected to', db);

})


server.listen(port, () => console.log('Server running on port', port))