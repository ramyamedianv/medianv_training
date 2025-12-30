--users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

--orders table

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product VARCHAR(100),
    amount INT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


--insert users

INSERT INTO users (name, email) 
VALUES
('Ramya', 'ramya@gmail.com'),
('Vidya', 'vidya@gmail.com'),
('Neha', 'neha@gmail.com'),
('Amit', 'amit@gmail.com');

--Insert orders

INSERT INTO orders (product, amount, user_id) VALUES
('Laptop', 75000, 1),
('Mobile', 25000, 1),
('Headphones', 3000, 2);

--Check tables
SELECT *FROM users;
SELECT *FROM orders;

--joins

--inner join
-- combines rows from two or more tables, returning only the 
-- rows where there's a match in a specified common column


SELECT users.*,orders.product,orders.amount
FROM
users 
INNER JOIN
orders 
ON
users.id=orders.user_id;

--LEFT JOINS

-- LEFT JOIN returns all rows from the left table, and matching rows from the right table.
-- If no matching record exists in the right table, NULL values are returned

SELECT users.*,orders.product,orders.amount 
FROM 
users 
LEFT JOIN 
orders 
ON 
users.id=orders.user_id;

--Example: Users who never ordered
SELECT users.name
FROM users
LEFT JOIN orders
ON users.id = orders.user_id
WHERE orders.id IS NULL;


--RIGHT JOINS
-- RIGHT JOIN returns all rows from the right table, and matching rows from the left table.
-- If no matching record exists in the left table, NULL values are returned

SELECT users.*,orders.product,orders.amount 
FROM users
RIGHT JOIN orders
ON users.id=orders.user_id;


--FULL JOIN (Everything)

SELECT users.name, orders.product, orders.amount
FROM users
FULL JOIN orders
ON users.id = orders.user_id;

--get all orders from particluar user

SELECT users.name,orders.product 
FROM users
FULL JOIN orders
ON users.id=orders.user_id
WHERE users.name='Ramya';

--Count orders per user

SELECT users.name,COUNT(orders.id) AS total_orders 
FROM users JOIN orders 
ON users.id=orders.user_id
GROUP BY users.name;


--CROSS JOIN
--returns the Cartesian product
--Every row of table A is combined with every row of table B.


-- Students table
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

-- Courses table
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    course_name VARCHAR(50)
);

-- Courses table
CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    course_name VARCHAR(50)
);

INSERT INTO students (name) VALUES
('Ramya'),
('Neha'),
('Amit');

INSERT INTO courses (course_name) VALUES
('Java'),
('Python');

SELECT * FROM students;
SELECT * FROM courses;

 --cross join
 
SELECT students.name,courses.course_name
FROM students
CROSS JOIN courses;

CREATE TABLE employees (
id INT,
name VARCHAR(50),
manager_id INT
	)


INSERT INTO employees VALUES
(1, 'Ramya', NULL),
(2, 'Neha', 1),
(3, 'Amit', 1);


--SELF JOIN
--Used when rows in the same table are related to each other


SELECT e.name AS employee,
m.name AS manager from employees e 
 join employees m
ON e.manager_id = m.id;




