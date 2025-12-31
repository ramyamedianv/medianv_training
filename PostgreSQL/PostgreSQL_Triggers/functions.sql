/*
A function is a reusable block of SQL code that does some work and returns a result

Built-in functions
LENGTH()
UPPER()
LOWER()
NOW()

*/

SELECT LENGTH('hello');
SELECT UPPER('hello');
SELECT LOWER('TTT');
SELECT NOW();

-- User-defined functions
-- Example 1: Add two numbers

CREATE FUNCTION addNUmbers(a INT,b INT)
RETURNS INT
LANGUAGE plpgsql

AS $$
BEGIN
RETURN a+b;
END
$$;

SELECT addNUmbers(10, 20);

-- Function with NO input (simple)

CREATE FUNCTION say_hello()
RETURNS TEXT
LANGUAGE plpgsql
AS
$$

BEGIN
RETURN 'HELLO WORLD!!!';
END;
$$;

SELECT say_hello();

CREATE TABLE employees(
id SERIAL PRIMARY KEY,
name VARCHAR(20),
salary INT
)


INSERT INTO employees(name,salary)
VALUES
('ramya',200000),
('vidya',30000),
('neha',4000);

SELECT*FROM employees;


CREATE FUNCTION findSalary(Ename TEXT)
RETURNS INT
LANGUAGE plpgsql
 AS $$
DECLARE
 emp_salary INT;
 BEGIN
 SELECT salary INTO emp_salary
 FROM employees WHERE name=Ename;
 RETURN emp_salary;

 END;
 $$;
 

SELECT findSalary('ramya');

















































