/*
TRANSACTIONS (Data Consistency)
Transaction = group of SQL queries that execute as ONE unit

key Rule->ACID
Atomocity->all or nothing
Consistency->valid state only
Isolation->Transaction don't crash
Durability->changes persist


Transaction Command

BEGIN-> start transaction
COMMIT->save changes
ROLL BACK-> Undo changes

SAVE POINT->Partial rollback

*/

CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    balance INT CHECK (balance >= 0)
);

--1. Basic Transaction Example


BEGIN;

INSERT INTO accounts(balance) VALUES(2000);
INSERT INTO accounts(balance) VALUES(4000);

COMMIT;
-- 2. ROLLBACK Example (Failure Case)

BEGIN;

INSERT INTO accounts(balance) VALUES(2000);
INSERT INTO accounts(balance) VALUES(-4000);

ROLLBACK;

-- 3. Bank Transfer (Real-Life Example)

CREATE TABLE bank_acc(
id SERIAL PRIMARY KEY,
name VARCHAR(20),
balance INT CHECK(balance>=0)
);

INSERT INTO bank_acc(name,balance) VALUES
('ramya',2000),
('vidya',1000);

--3.Transfer ₹1000 from ramya → vidya
BEGIN;

 UPDATE bank_acc SET balance=balance-1000
 WHERE name='ramya';
 UPDATE bank_acc SET balance=balance+1000
 WHERE name='vidya';

COMMIT;


-- 4. Failure → ROLLBACK
BEGIN;

UPDATE bank_accounts
SET balance = balance - 6000
WHERE name = 'Ramya'; --  balance becomes negative

ROLLBACK;


-- 5. SAVEPOINT (Partial Rollback)


BEGIN;

INSERT INTO accounts (balance) VALUES (6000);

SAVEPOINT sp1;

INSERT INTO accounts (balance) VALUES (-200); --negative values cannot accept

ROLLBACK TO sp1;

COMMIT;
 
SELECT*FROM accounts;

SELECT*FROM bank_acc;

