const express = require("express");

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
// app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post ("/", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    sum = num1 + num2;

    res.send("Answer is " + sum);
});

app.get("/bmicalculator", function(req,res) {
    res.sendFile(__dirname + "/bmiCalculator.html");

});

app.post ("/bmiResult", function(req, res) {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var bmi = 0;
    if (height > 0) {
        bmi = (weight / (height * height)) * 703;
    }

    res.send("BMI is " + bmi.toFixed(1));
});

app.listen(port, function() {
    console.log("Listening on port " + port);
});
