# PostgreSQL Advanced Concepts

This document covers advanced PostgreSQL topics including **Joins, Indexes, Constraints, and Transactions** with clear explanations and practical examples

## 1. JOINS IN POSTGRESQL

Joins are used to combine rows from two or more tables based on a related column.

### Types of Joins

#### 1. INNER JOIN

Returns only matching records from both tables.

**Example:**

* Users who have placed orders

```sql
SELECT u.name, o.product
FROM users u
INNER JOIN orders o ON u.id = o.user_id;
```

---

#### 2. LEFT JOIN

Returns all records from the left table and matching records from the right table.

**Example:**

* All users, even those without orders

```sql
SELECT u.name, o.product
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
```

---

#### 3. RIGHT JOIN

Returns all records from the right table and matching records from the left table.

```sql
SELECT u.name, o.product
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;
```

---

#### 4. FULL JOIN

Returns all records when there is a match in either table.

```sql
SELECT u.name, o.product
FROM users u
FULL JOIN orders o ON u.id = o.user_id;
```

---

#### 5. CROSS JOIN

Returns Cartesian product (all combinations).

```sql
SELECT u.name, p.product
FROM users u
CROSS JOIN products p;
```

---

#### 6. SELF JOIN

A table joined with itself.

```sql
SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;
```

---

## 2. INDEXES IN POSTGRESQL

Indexes improve query performance by reducing full table scans.

### Why Indexes?

* Faster SELECT queries
* Efficient filtering and searching

### Types of Indexes

#### 1. B-Tree Index (Default)

Used for equality and range queries.

```sql
CREATE INDEX idx_users_email ON users(email);
```

---

#### 2. Unique Index

Ensures no duplicate values.

```sql
CREATE UNIQUE INDEX idx_unique_email ON users(email);
```

---

#### 3. Composite Index

Index on multiple columns.

```sql
CREATE INDEX idx_name_email ON users(name, email);
```

---

#### 4. Partial Index

Index with condition.

```sql
CREATE INDEX idx_active_users ON users(email)
WHERE is_active = true;
```

---

### Checking Index Usage

```sql
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@gmail.com';
```

---

## 3. CONSTRAINTS IN POSTGRESQL

Constraints ensure data integrity and validity.

### Types of Constraints

#### 1. NOT NULL

Prevents null values.

```sql
name VARCHAR(100) NOT NULL
```

---

#### 2. UNIQUE

Ensures unique values.

```sql
email VARCHAR(100) UNIQUE
```

---

#### 3. PRIMARY KEY

Combination of NOT NULL and UNIQUE.

```sql
id SERIAL PRIMARY KEY
```

---

#### 4. FOREIGN KEY

Maintains relationship between tables.

```sql
FOREIGN KEY (user_id) REFERENCES users(id)
```

---

#### 5. CHECK

Custom validation rule.

```sql
CHECK (age >= 18)
```

---

#### 6. DEFAULT

Provides default value.

```sql
status VARCHAR(20) DEFAULT 'active'
```

---

## 4. TRANSACTIONS IN POSTGRESQL

A transaction is a group of SQL operations executed as a single unit.

### ACID Properties

* **Atomicity** – All or nothing
* **Consistency** – Valid state before and after
* **Isolation** – Transactions don’t interfere
* **Durability** – Data is permanent after commit

---

### Transaction Commands

```sql
BEGIN;
COMMIT;
ROLLBACK;
SAVEPOINT;
```

---

### Example: Money Transfer

```sql
BEGIN;

UPDATE bank_accounts SET balance = balance - 1000 WHERE name = 'Ramya';
UPDATE bank_accounts SET balance = balance + 1000 WHERE name = 'Neha';

COMMIT;
```

---

### Rollback Example

```sql
BEGIN;
INSERT INTO accounts(balance) VALUES (-500); -- violates CHECK
ROLLBACK;
```

---

### SAVEPOINT Example

```sql
BEGIN;
INSERT INTO accounts(balance) VALUES (1000);
SAVEPOINT sp1;
INSERT INTO accounts(balance) VALUES (-200);
ROLLBACK TO sp1;
COMMIT;
```

---

## 5. KEY DIFFERENCES SUMMARY

| Topic        | Purpose                   |
| ------------ | ------------------------- |
| Joins        | Combine data from tables  |
| Indexes      | Improve query performance |
| Constraints  | Ensure data correctness   |
| Transactions | Ensure data consistency   |

---

## Conclusion

Joins help retrieve relational data, indexes optimize performance, constraints protect data integrity, and transactions ensure safe execution of multiple operations.
