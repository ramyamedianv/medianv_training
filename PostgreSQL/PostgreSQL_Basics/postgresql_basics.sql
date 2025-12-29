-- user table

CREATE TABLE users(
id SERIAL PRIMARY KEY,
name VARCHAR(20) NOT NULL,
email VARCHAR(30) UNIQUE
)

-- orders table 

CREATE TABLE orders(
 order_id SERIAL PRIMARY KEY,
 product_name VARCHAR(100),
 price INT,
 user_id INT,
 FOREIGN KEY (user_id) REFERENCES users(id)
);


--crud operations 
--Insert into users
INSERT INTO users (name ,email) VALUES('Ramya','ramya@gmail.com')
INSERT INTO users (name, email)
VALUES
('Vidya', 'vidya@gmail.com'),
('Neha', 'neha@gmail.com');


--Insert into orders (FK in action)

INSERT INTO orders (product_name, price, user_id)
VALUES ('Laptop', 75000, 1);

--read

SELECT * FROM users;
SELECT * FROM orders;


--Get orders with user details

SELECT users.*,orders.* FROM users 
JOIN orders ON users.id=orders.user_id;

--Update user name
UPDATE users SET
name='Ramya S' WHERE id=1;

--Update order price
UPDATE orders SET price='60000' WHERE order_id=1;

--DELETE

DELETE FROM orders WHERE order_id=1; 


--Delete a user-->If FK exists → deletion may fail unless handled properly

DELETE FROM users WHERE id=2;
