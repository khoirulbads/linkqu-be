const express = require("express");
const router = express.Router();
const db = require("../helpers/db");

router.post("/", async (req, res) => {
  const { data } = req.body;
  let name = "";
  let age = "";
  let city = "";

  if (!data) {
    return res.status(400).json({ message: "Data field is required." });
  }

  try {
    const arrayString = data.split(" ");
    let ageIndex = -1;

    if (arrayString.length < 3) {
      return res.status(400).json({ message: "Input not valid" });
    }

    for (let i = 0; i < arrayString.length; i++) {
      if (arrayString[i].match(/^\d+/)) {
        age = arrayString[i].match(/^\d+/)[0];
        ageIndex = i;
      }

      if (age === "" && arrayString[i]) {
        name += arrayString[i].toUpperCase() + " ";
        continue;
      }

      if (
        i > ageIndex &&
        !["th", "thn", "tahun"].includes(arrayString[i].toLowerCase())
      ) {
        city += arrayString[i].toUpperCase() + " ";
      }
    }

    const query = `INSERT INTO users (NAME, AGE, CITY) VALUES ($1, $2, $3)`;
    db.query(query, [name.trim(), age, city.trim()], (err, result) => {
      if (err) {
        console.error("Error inserting data into the database:", err);
        return res
          .status(500)
          .json({ message: "Error storing data in the database" });
      }

      res.status(201).json({
        message: "Succeed",
      });
    });
  } catch (error) {
    console.error("Error processing the request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
