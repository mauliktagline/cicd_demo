 const express = require("express");
 const app = express();

 const port = process.env.PORT || 5000;

 app.get("/", (req, res) => {
    return res.send("Hello World");
 });

app.get("/data",(req,res)=>{
  return res.json({msg:'it is okay'});
  })

app.get("/user",(req,res)=>{
  return res.json({
    name:"Maulik",
    desg:"Backend Engineer" 
  });
 })

app.post("/sum",(req,res)=>{
  const {a,b}=req.body;
  return res.json({sum:a+b});
});
 app.listen(port, () => console.log(`Server running on port ${port} 🔥`));

module.exports=app;
