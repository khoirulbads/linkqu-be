const express = require("express");
const cors = require("cors");
const app = express();
const port = 3030;
const dataRoutes = require("./src/routes/data");

app.use(express.json());
app.use(cors({}));
app.get("/", (req, res) => {
  res.send(`Starting at port:${port}`);
});
app.use("/data", dataRoutes);

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});
