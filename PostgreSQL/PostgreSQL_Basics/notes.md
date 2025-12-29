# PostgreSQL Basics – Tables, Primary Key (PK), Foreign Key (FK), CRUD Queries

## 1. What is PostgreSQL?

PostgreSQL (Postgres) is an **open‑source relational database management system (RDBMS)**.
It stores data in **tables** and uses **SQL (Structured Query Language)** to manage data.

Key features:

* Open source and free
* ACID compliant (reliable transactions)
* Supports relations, constraints, indexes
* Used in real‑world backend applications

---

## 2. What is a Table?

A **table** is used to store data in **rows and columns**.

* **Row** → One record (entry)
* **Column** → One field (property)

### Example: users table

| id | name  | email                                     |
| -- | ----- | ----------------------------------------- |
| 1  | Ramya | [ramya@gmail.com](mailto:ramya@gmail.com) |
| 2  | Neha  | [neha@gmail.com](mailto:neha@gmail.com)   |

---

## 3. Creating a Table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);
```

### Explanation:

* `SERIAL` → Auto‑increment integer
* `PRIMARY KEY` → Unique identifier
* `NOT NULL` → Value is required
* `UNIQUE` → No duplicate values

---

## 4. Primary Key (PK)

A **Primary Key**:

* Uniquely identifies each row
* Cannot be `NULL`
* Cannot be duplicated

### Example:

```sql
id SERIAL PRIMARY KEY
```

Why PK is important:

* Faster searching
* Used to create relationships
* Ensures data integrity

---

## 5. Foreign Key (FK)

A **Foreign Key** is used to create a **relationship between two tables**.

* FK in one table refers to PK in another table
* Maintains referential integrity

---

## 6. Example: Users & Orders Relationship

### users table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);
```

### orders table (FK example)

```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  product VARCHAR(100),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Relationship:

* One **user** can have **many orders**
* `user_id` in orders → `id` in users

---

## 7. CRUD Operations

CRUD stands for:

* **C** → Create
* **R** → Read
* **U** → Update
* **D** → Delete

---

## 8. CREATE (INSERT)

Used to add new data into a table.

### Insert single record

```sql
INSERT INTO users (name, email)
VALUES ('Ramya', 'ramya@gmail.com');
```

### Insert multiple records

```sql
INSERT INTO users (name, email)
VALUES
  ('Neha', 'neha@gmail.com'),
  ('Amit', 'amit@gmail.com');
```

---

## 9. READ (SELECT)

Used to fetch data from tables.

### Fetch all data

```sql
SELECT * FROM users;
```

### Fetch specific columns

```sql
SELECT name, email FROM users;
```

### Fetch with condition

```sql
SELECT * FROM users WHERE id = 1;
```

---

## 10. UPDATE

Used to modify existing data.

### Update specific record

```sql
UPDATE users
SET name = 'Ramya S'
WHERE id = 1;
```

⚠️ **Always use WHERE**, otherwise all rows will be updated.

---

## 11. DELETE

Used to remove data.

### Delete specific record

```sql
DELETE FROM users WHERE id = 2;
```

### Delete all records (dangerous)

```sql
DELETE FROM users;
```

---

## 12. JOIN (Using PK & FK)

Used to combine data from multiple tables.

### Example: Get users with their orders

```sql
SELECT users.name, orders.product
FROM users
JOIN orders ON users.id = orders.user_id;
```

### Result:

| name  | product |
| ----- | ------- |
| Ramya | Laptop  |
| Ramya | Mobile  |

---

## 13. Common Constraints

| Constraint  | Meaning           |
| ----------- | ----------------- |
| PRIMARY KEY | Unique identifier |
| FOREIGN KEY | Relationship      |
| NOT NULL    | Required value    |
| UNIQUE      | No duplicates     |
| CHECK       | Custom validation |
| DEFAULT     | Default value     |

---

## 14. Summary

* Tables store structured data
* Primary Key uniquely identifies records
* Foreign Key creates table relationships
* CRUD operations manage data
* JOIN combines related tables
