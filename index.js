const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/test', (req, res)=>{
    res.status(200).json({test: "test api"});
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
