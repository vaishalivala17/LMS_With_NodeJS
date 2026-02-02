- [x] Update index.js: Add MongoDB connection via Mongoose, enable JSON parsing with express.json(), ensure dotenv is loaded.
- [x] Create models/User.js: Schema with name, email, password (hashed), role (enum: admin, teacher, student), subjects (array of ObjectIds for teachers), standard (ObjectId for students).
- [x] Create models/Subject.js: Schema with name and standard (ObjectId reference).
- [x] Create models/Standard.js: Schema with name (e.g., "10th Grade").
- [x] Create middleware/auth.js: Middleware to verify JWT token, attach user to request, and check user role for route access.
- [x] Update routes/main_routes.js: Implement routes for authentication (login), user management (admin registers teacher, admin/teacher registers student, CRUD operations for users based on roles), and admin-only routes for subjects/standards.
- [x] Ensure .env file has MONGO_URI and JWT_SECRET.
- [x] Provide instructions for manually inserting the first admin user into MongoDB.
=======
# TODO List for Role-Based Authentication System

- [x] Update index.js: Add MongoDB connection via Mongoose, enable JSON parsing with express.json(), ensure dotenv is loaded.
- [x] Create models/User.js: Schema with name, email, password (hashed), role (enum: admin, teacher, student), subjects (array of ObjectIds for teachers), standard (ObjectId for students).
- [x] Create models/Subject.js: Schema with name and standard (ObjectId reference).
- [x] Create models/Standard.js: Schema with name (e.g., "10th Grade").
- [x] Create middleware/auth.js: Middleware to verify JWT token, attach user to request, and check user role for route access.
- [x] Refactor routes: Create separate route files for admin, teacher, student, and controllers for teacher and student.
- [x] Update routes/main_routes.js: Implement routes for authentication (login), user management (admin registers teacher, admin/teacher registers student, CRUD operations for users based on roles), and admin-only routes for subjects/standards.
- [x] Update routes/main_routes.js: Implement routes for authentication (login), user management (admin registers teacher, admin/teacher registers student, CRUD operations for users based on roles), and admin-only routes for subjects/standards.
- [x] Ensure .env file has MONGO_URI and JWT_SECRET.
- [x] Provide instructions for manually inserting the first admin user into MongoDB.
