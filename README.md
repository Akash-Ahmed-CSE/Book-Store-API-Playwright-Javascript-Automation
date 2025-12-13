# Playwright API Testing Tutorial

This project demonstrates **API testing using Playwright** with a full BookStore API workflow. It includes user creation, authentication, book operations, and cleanup with fixtures and repeatable runs.

---

## Features

- Generates a **unique user** for each test run using fixtures.
- Generates and stores **JWT token** in a local variable to reuse across requests.
- Supports **full BookStore API flow**:
  - Get User Details
  - Get Books
  - Order Books
  - Verify Orders
  - Get ISBN Details
  - Delete Single Book
  - Update Book Order
  - Delete All Books
  - Delete User
- **Repeatable test runs** (like a Postman runner) using `repeatEach`.
- Serial execution for dependent API calls with `test.describe.serial`.
- Generates HTML reports in the `test-results` folder after each run.

---


