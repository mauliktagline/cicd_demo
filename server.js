 const express = require("express");
 const app = express();

 const port = process.env.PORT || 5000;

 app.get("/", (req, res) => {
    return res.send("Hello World");
 });

 app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

module.exports=app;
