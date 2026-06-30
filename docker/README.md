## Why Docker?

### Problem Before Docker

Different environments can cause the same application to behave
differently.

Example:

  Developer       Production
  --------------- ---------------
  Python 3.11     Python 3.8
  PostgreSQL 14   PostgreSQL 16
  Redis 7         Redis 6

Possible results:

-   Application fails to start
-   Runtime errors
-   Different behavior
-   Random bugs

**This is called *Environment Mismatch*.**

------------------------------------------------------------------------

## Why Version Mismatch Causes Problems

Applications depend on:

``` text
Application
↓
Runtime (Python/Java/Node)
↓
Libraries
↓
Operating System
↓
Kernel
```

If one layer changes, the application may fail.

Example:

``` python
match value:
    case 1:
        print("One")
```

`match-case` requires **Python 3.10+**.

Running on **Python 3.8** gives:

``` text
SyntaxError
```

------------------------------------------------------------------------

## How Docker Solves It

Docker packages:

-   Application
-   Runtime
-   Libraries
-   Dependencies
-   Configuration

Instead of deploying only:

``` text
app.py
```

Docker deploys:

``` text
Docker Image
├── Application
├── Python 3.11
├── Libraries
├── Dependencies
└── Configuration
```

Result:

The application runs the same in Development, Testing, Staging, and
Production.

------------------------------------------------------------------------

## Does Docker Copy the Entire OS?

**No.**

Docker includes:

-   Filesystem
-   Libraries
-   Binaries
-   Runtime

Docker **shares the Host Linux Kernel**, making containers lightweight.

------------------------------------------------------------------------

## Production Perspective

Without Docker:

-   Install software on every server
-   Configure every server
-   Maintain every server

With Docker:

``` text
Pull Image
    ↓
Run Container
    ↓
Application Starts
```

Only Docker Engine is required on the server.

------------------------------------------------------------------------

# Assignment (With Answers)

### Q1. Why was Docker created?

**Answer:** To solve environment inconsistency by packaging the
application with its dependencies.

### Q2. What is Environment Mismatch?

**Answer:** Different software versions or configurations causing
applications to behave differently.

### Q3. Does Docker fix application bugs?

**Answer:** No. It only provides a consistent runtime environment.

### Q4. What does "It works on my machine" mean?

**Answer:** The application works on the developer's environment but
fails elsewhere because environments differ.

------------------------------------------------------------------------

# Exercises (With Answers)

### Exercise 1

Write your machine details.

``` text
OS:
Python:
Node:
Java:
Git:
Docker:
```

------------------------------------------------------------------------

### Exercise 2

Developer uses Node 20.

Production uses Node 16.

**What can happen?**

**Answer:**

-   Build failure
-   Runtime failure
-   Unsupported APIs
-   Dependency conflicts

------------------------------------------------------------------------

### Exercise 3

Instead of installing Python on every server, what does Docker do?

**Answer:** Packages Python inside the Docker image.

------------------------------------------------------------------------

# Interview Questions (With Answers)

### 1. Why was Docker introduced?

To eliminate environment inconsistency.

### 2. What problem does Docker solve?

Dependency conflicts, version mismatches, and inconsistent deployments.

### 3. Does Docker use the host operating system?

It shares the host kernel but uses its own isolated filesystem and
runtime.

### 4. Why are containers lightweight?

Because they share the host kernel instead of running a full guest
operating system.

### 5. Can different containers use different Python versions?

Yes. Each container has its own isolated runtime.

------------------------------------------------------------------------

# Quick Revision

-   Docker solves **environment mismatch**.
-   Docker packages the **application + runtime + dependencies**.
-   Docker does **not** fix application bugs.
-   Containers share the **host kernel**.
-   Same Docker image = Same behavior everywhere.
