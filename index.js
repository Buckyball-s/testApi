const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader("Access-Control-Expose-Headers", 'Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
let counter=0;
app.get('/api/test', (req, res)=>{
    console.log("get request",counter);
    counter++;
    res.status(200).json({test: "test api"});
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
