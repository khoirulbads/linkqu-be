1. npm install
2. set your db connection in helpers/db.js, set port in index
3. create table in pgadmin/other use this query
   CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   name VARCHAR(255) NOT NULL,
   age INT NOT NULL,
   city VARCHAR(255) NOT NULL
   );
4. npm nodemon index.js
