--user table

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT,
    city VARCHAR(50)
);

--orders 

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    product VARCHAR(100),
    amount INT,
    user_id INT REFERENCES users(id)
);
-- adding values into the users table

INSERT INTO users (name, email, age, city) VALUES
('Ramya', 'ramya@gmail.com', 23, 'Bangalore'),
('Neha', 'neha@gmail.com', 25, 'Delhi'),
('Vidya', 'vidya@gmail.com', 23, 'Hyderabad'),
('Amit', 'amit@gmail.com', 30, 'Mumbai'),
('Ravi', 'ravi@gmail.com', 25, 'Delhi');

INSERT INTO orders (product, amount, user_id) VALUES
('Laptop', 75000, 1),
('Mobile', 25000, 1),
('Tablet', 30000, 2),
('Headphones', 3000, 3),
('Smart Watch', 12000, 2);

INSERT INTO users (name, email)
SELECT 
    'User ' || generate_series,
    'user' || generate_series || '@gmail.com'
FROM generate_series(1, 100000);


SELECT * FROM users;
SELECT * FROM orders;


EXPLAIN ANALYZE
SELECT * FROM users WHERE email = 'ramya@gmail.com';


CREATE INDEX idx_users_email ON users(email);

EXPLAIN ANALYZE
SELECT * FROM users WHERE email = 'ramya@gmail.com';


DROP INDEX idx_users_email;

---Foreign Key Index

EXPLAIN ANALYZE
SELECT * FROM orders WHERE user_id = 1;

CREATE INDEX idx_orders_user_id ON orders(user_id);

EXPLAIN ANALYZE
SELECT * FROM orders WHERE user_id = 1;

--JOIN Index Test ->Real Use Case

EXPLAIN ANALYZE
SELECT u.name, o.product
FROM users u
JOIN orders o ON u.id = o.user_id;


---Composite Index (City + Age)

CREATE INDEX idx_users_city_age ON users(city, age);

EXPLAIN ANALYZE
SELECT * FROM users
WHERE city = 'Delhi' AND age = 25;


---Unique Index

CREATE UNIQUE INDEX idx_users_unique_email ON users(email);

INSERT INTO users (name, email, age, city)
VALUES ('Test', 'ramya@gmail.com', 22, 'Pune');




