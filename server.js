const express = require("express");
const app = express();
app.get("/api/customer", (req, res) => {
  const customers = [
    { id: 1, firstName: "Rishi", lastName: "Mukherjee" },
    { id: 2, firstName: "Souvik", lastName: "Mukherjee" },
    { id: 3, firstName: "Rahul", lastName: "Mukherjee" }
  ];
  res.json(customers);
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
