const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define a route



app.get('/billa', (req, res) => {
    const imageLink = 'https://easydrawingguides.com/wp-content/uploads/2019/11/Tom-10.png'

    res.json({image : imageLink});
})

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,"index.html"))
})
// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
