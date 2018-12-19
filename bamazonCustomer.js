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
    start();
});

function buyProduct() {
    connection.query("SELECT * FROM products", function (err, res) {
        if(err) throw err;
    inquirer
        .prompt([
            {
               name: "choice",
               type: "inpute",
               choices: function(value) {
                   var choiceArray = [];
                   for (var i = 0; i < res.length; i++) {
                       choiceArray.push(res[i].item_id);
                   }
                   console.table(choiceArray);
               },
               message: "What item_ID would you like to purchase?"
            },
        ]);
        // .then(function(answer) {
        //     var chosenItem;
        //     for (var i = 0; i < res.length; i++) {
        //         if (res[i].item_id === answer.choice) {
        //             chosenItem = res[i];
        //         }
        //     }
        // })

    });
};

function quantity(answer) {
    connection.query("SELECT stock_quantity FROM products WHERE item_id = " + answer.choice, function (err, res) {
        if(err) throw err;

        inquirer
        .prompt([
            {
                name: "choice",
                type: "input",
                message: "How many of this item would you like to purchase?" 
            },
        ])
        .then(function(answer) {
            if(parseInt(amount.choice) <= parseInt(res[0].stock_quantity)) {
                console.log("There is enough you can buy.")
                connection.query()
            }
        })
    })
}


