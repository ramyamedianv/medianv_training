/*
Constraints = rules applied on table columns to protect data integrity
Think of them as guards at the database gate
*/
/*
NOT NULL->column must have value
UNIQUE->NO duplicate values
PRIMARY KEY->value must be unique and not null
FOREIGN KEY->Maintain relation 
CHECK->custom consdition
DEFAULT->Default value
*/


--1.NOT NULL

CREATE TABLE users(
id SERIAL,
name VARCHAR(10) NOT NULL
)

INSERT INTO users(name) VALUES(NULL);

--ERROR:  null value in column "name" of relation "users" violates not-null constraint

--2. UNIQUE Constraint

CREATE TABLE employees (
    id SERIAL,
    email VARCHAR(100) UNIQUE
);


INSERT INTO employees(email) VALUES
('r@gmail.com'),
('r@gmail.com');

/*
ERROR:  duplicate key value violates unique constraint "employees_email_key"
Key (email)=(r@gmail.com) already exists. 
*/

--PRIMARY KEY

CREATE TABLE products(
id INT PRIMARY KEY,
name varchar(10)
)

INSERT INTO products(id,name) VALUES
(1,'ramya'),
(1,'vidya');

 /*
 ERROR:  duplicate key value violates unique constraint "products_pkey"
Key (id)=(1) already exists. 
*/

--4. FOREIGN KEY

--parent table

CREATE TABLE customers(
id SERIAL PRIMARY KEY,
name VARCHAR(20) NOT NULL

)

--child table

CREATE TABLE orders(
id SERIAL PRIMARY KEY,
product VARCHAR(20),
customer_id INT,
CONSTRAINT fk_customer
FOREIGN KEY (customer_id) REFERENCES customers(id)
)

INSERT INTO customers (name) VALUES ('Ramya');
INSERT INTO orders (product, customer_id) VALUES ('Laptop', 1);


INSERT INTO orders (product, customer_id) VALUES ('Mobile', 99);
/*
ERROR:  insert or update on table "orders" violates foreign key constraint "fk_customer"
Key (customer_id)=(99) is not present in table "customers". 
*/

--5. CHECK Constraint

CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    balance INT CHECK (balance >= 0)
);


INSERT INTO accounts (balance) VALUES (-500);

/*
ERROR:  new row for relation "accounts" violates check constraint "accounts_balance_check"
Failing row contains (1, -500). 
*/

--6. DEFAULT Constraint
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    status VARCHAR(20) DEFAULT 'pending'
);

INSERT INTO tasks DEFAULT VALUES;

SELECT*FROM tasks;