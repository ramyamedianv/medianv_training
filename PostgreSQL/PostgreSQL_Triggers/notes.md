# PostgreSQL Triggers, Functions & Audit Logs

---

## 1. PostgreSQL Functions

### What is a Function?

A **function** in PostgreSQL is a reusable block of SQL or procedural code that:

* Takes **input parameters**
* Performs operations
* Returns a **value or result set**

Functions help in:

* Reusability
* Cleaner SQL
* Business logic inside the database

---

### Types of Functions

1. **Scalar Functions** – Return a single value
2. **Table Functions** – Return a table
3. **Trigger Functions** – Used only with triggers

---

### Basic Function Syntax

```sql
CREATE OR REPLACE FUNCTION function_name(parameters)
RETURNS return_type
LANGUAGE plpgsql
AS $$
BEGIN
    -- logic
    RETURN value;
END;
$$;
```

---

### Example 1: Simple Function

```sql
CREATE OR REPLACE FUNCTION add_numbers(a INT, b INT)
RETURNS INT
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN a + b;
END;
$$;
```

Usage:

```sql
SELECT add_numbers(5, 3);
```

Output:

```
8
```

---

### Example 2: Function with IF Condition

```sql
CREATE OR REPLACE FUNCTION check_balance(amount INT)
RETURNS TEXT
LANGUAGE plpgsql
AS $$
BEGIN
    IF amount >= 0 THEN
        RETURN 'Valid Balance';
    ELSE
        RETURN 'Invalid Balance';
    END IF;
END;
$$;
```

---

## 2. PostgreSQL Triggers

### What is a Trigger?

A **trigger** is a database object that automatically executes a **trigger function** when a specific event occurs on a table.

Events:

* INSERT
* UPDATE
* DELETE

Timing:

* **BEFORE** – before data change
* **AFTER** – after data change

---

### Why Use Triggers?

* Automatic validation
* Maintain audit logs
* Enforce complex rules
* Sync data between tables

---

### Trigger Workflow

```
Table Event → Trigger → Trigger Function → Action
```

---

### Example: Prevent Negative Balance

#### Step 1: Table

```sql
CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    balance INT
);
```

---

#### Step 2: Trigger Function

```sql
CREATE OR REPLACE FUNCTION prevent_negative_balance()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    IF NEW.balance < 0 THEN
        RAISE EXCEPTION 'Balance cannot be negative';
    END IF;
    RETURN NEW;
END;
$$;
```

---

#### Step 3: Trigger

```sql
CREATE TRIGGER check_balance_before_insert
BEFORE INSERT OR UPDATE ON accounts
FOR EACH ROW
EXECUTE FUNCTION prevent_negative_balance();
```

---

### How it Works

* User inserts/updates data
* Trigger fires **before insert/update**
* Function checks balance
* If invalid → transaction fails

---

## 3. Audit Logs

### What is an Audit Log?

An **audit log** keeps track of:

* Who changed data
* What was changed
* When it was changed
* Type of operation (INSERT, UPDATE, DELETE)

Used for:

* Security
* Debugging
* Compliance

---

### Audit Log Table

```sql
CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    table_name TEXT,
    operation TEXT,
    old_data JSONB,
    new_data JSONB,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### Audit Trigger Function

```sql
CREATE OR REPLACE FUNCTION audit_trigger_function()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO audit_logs(table_name, operation, new_data)
        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(NEW));
        RETURN NEW;

    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO audit_logs(table_name, operation, old_data, new_data)
        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(OLD), row_to_json(NEW));
        RETURN NEW;

    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO audit_logs(table_name, operation, old_data)
        VALUES (TG_TABLE_NAME, TG_OP, row_to_json(OLD));
        RETURN OLD;
    END IF;
END;
$$;
```

---

### Attach Audit Trigger to Table

```sql
CREATE TRIGGER audit_accounts_trigger
AFTER INSERT OR UPDATE OR DELETE ON accounts
FOR EACH ROW
EXECUTE FUNCTION audit_trigger_function();
```

---

### Example Output in audit_logs

| table_name | operation | old_data         | new_data         | changed_at |
| ---------- | --------- | ---------------- | ---------------- | ---------- |
| accounts   | INSERT    | NULL             | {"balance":1000} | timestamp  |
| accounts   | UPDATE    | {"balance":1000} | {"balance":1500} | timestamp  |

---

## 4. Important Trigger Keywords

| Keyword       | Meaning           |
| ------------- | ----------------- |
| NEW           | New row data      |
| OLD           | Previous row data |
| TG_OP         | Operation type    |
| TG_TABLE_NAME | Table name        |
| BEFORE        | Before change     |
| AFTER         | After change      |

---

## 5. BEFORE vs AFTER Triggers

| BEFORE Trigger      | AFTER Trigger         |
| ------------------- | --------------------- |
| Can stop operation  | Cannot stop operation |
| Used for validation | Used for logging      |
| Faster rollback     | Guaranteed execution  |

---

## 6. Common Mistakes

* Forgetting `RETURNS TRIGGER`
* Not returning `NEW` or `OLD`
* Using triggers for heavy logic
* Creating recursive triggers

---

## 7. When NOT to Use Triggers

* Complex business logic
* Heavy calculations
* When application-level logic is better

---

## 8. Summary

* **Functions** → Reusable logic
* **Triggers** → Auto execution on events
* **Audit Logs** → Track changes
* Triggers always call **trigger functions**
* Audit logs are best implemented using **AFTER triggers**

---
