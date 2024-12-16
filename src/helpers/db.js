const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "test_linkqu",
  password: "Ishlah123",
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.error("Could not connect to PostgreSQL:", err);
  } else {
    console.log("Connected to PostgreSQL.");
  }
});

module.exports = client;
