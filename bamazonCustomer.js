var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    
    port: 3306,
    
    user: "root",
    
    password: "root",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    displayInventory()
});

function displayInventory () {
    connection.query("SELECT * FROM PRODUCTS", function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res, null, 2));
        purchaseItems();
    });
};

function purchaseItems() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Which product you wish to buy:",
            choices: [
                "iPhone",
                "Apple Watch",
                "Drone",
                "Couch",
                "Desk",
                "Football",
                "Basketball",
                "Tennis Ball",
                "echo Dot",
                "Ring Alarm",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action){
                case "iPhone":
                getIphoneInput();
                break;
                case "Apple Watch":
                getAppleWatchInput();
                break;
                case "Drone":
                getDroneInput();
                break;
                case "Couch":
                getCouchInput();
                break;
                case "Desk":
                getDeskInput();
                break;
                case "Football":
                getFootballInput();
                break;
                case "Basketball":
                getBasketballInput();
                break;
                case "Tennis Ball":
                getTennisballInput();
                break;
                case "echo Dot":
                getEchodotInput();
                break;
                case "Ring Alarm":
                getRingalarmInput();
                break;
                case "Exit":
                console.log("Goodbye, nice doing business with you.");
                connection.end();
                break;
            }
        });
}

function getIphoneInput() {
    inquirer
        .prompt({
            name: "iPhone",
            type: "inpute",
            message: "How man would you like?"
        })
        .then(function(answer){
            byIphone(answer.iPhone);
        });
}

function byIphone(iPhone) {
    console.log("")
}