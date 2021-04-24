 const express = require("express");
 const app = express();

 const port = process.env.PORT || 5000;

 app.get("/", (req, res) => {
     return res.json({
         msg: 'we are done with get api...'
     });
 });

 app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
