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
    connection.query("SELECT * FROM products", function(err, res) {
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
        }, 
            {
                name: "quantity",
                type: "input",
                Message: "How Many would you like?"
            })
        .then(function (answer) {
            switch (answer.action){
                case "iPhone":
                case "Apple Watch":
                case "Drone":
                case "Couch":
                case "Desk":
                case "Football":
                case "Basketball":
                case "Tennis Ball":
                case "echo Dot":
                case "Ring Alarm":
                    itemChecker(answer.action);
                    break;
                case "Exit":
                console.log("Goodbye, nice doing business with you.");
                connection.end();
                break;
            }
        });
}

var total = 0;

function itemChecker (shoppingCart) {
    var query = connection.query(
        "SELECT * FROM products WHERE product_name = answer.action",
        console.log(query)
    );
};

function shopping(){
    var query = connection.query(
        "SELECT * FROM products",
        function (err, res) {
            console.log("aright, cool \n total cost " + total)
            inquirer
                .prompt({
                    name: "shop_again",
                    type: "confirm",
                    message: "you done?",
                    default: 0
                })
                .then(function (answer) {
                    if (answer.shop_again) {
                        quitter();
                    }
                    else {
                        itemLister()
                    };
                });
        }
    );
};

function quitter() {
    console.log("so long, sucker!");
    connection.end()
};