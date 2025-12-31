CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name TEXT,
    salary NUMERIC
);

INSERT INTO employees(name,salary)
VALUES
('ramya',200000),
('vidya',30000),
('neha',4000);

--Trigger Function

CREATE OR REPLACE FUNCTION  check_salary()
RETURNS TRIGGER AS $$
BEGIN
 IF NEW.salary<0 THEN
   RAISE EXCEPTION 'Salary cannot be Negative'
 END IF;
 RETURN END;

END;

$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_check_salary
BEFORE INSERT OR UPDATE ON employees
FOR EACH ROW
EXECUTE FUNCTION check_salary()

INSERT INTO employees(name,salary) VALUES ('Ram', -5000);


/*
Audit log is a history of data changes maintained for security, accountability, and compliance
*/

CREATE TABLE employee_audit (
    emp_id INT,
    old_salary NUMERIC,
    new_salary NUMERIC,
    changed_at TIMESTAMP
);

CREATE OR REPLACE FUNCTION log_salary_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO employee_audit
    VALUES (
        OLD.id,
        OLD.salary,
        NEW.salary,
        NOW()
    );

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_salary_audit
AFTER UPDATE OF salary ON employees
FOR EACH ROW
EXECUTE FUNCTION log_salary_update();


UPDATE employees SET salary = 50000 WHERE id = 2;


SELECT*FROM employee_audit;
SELECT*FROM employees;

