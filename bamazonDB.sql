DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price DECIMAL(10,2) NULL,
    stock_quantity INT DEFAULT 0,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone X", "Technology", 1099, 20),
("Apple Watch", "Technology", 500, 40),
("Drone", "Technology", 1000, 5),
("Couch", "Furniture", 200, 2),
("Desk", "Furniture", 100, 3),
("Football", "Sports", 20.50, 50),
("Basketball", "Sports", 19.99, 30),
("Tennis Ball", "Sports", 10.99, 40),
("echo Dot","Smart Home", 29.99, 30),
("Ring Alarm", "Smart Home", 179.99, 15);

SELECT * FROM products;