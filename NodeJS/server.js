const express = require('express');
const app = express();
app.use(express.json());
const port = 5000;

app.post('/submit', (req, res) => {
    const data = req.body;
    console.log("Received Data: ", data);
    res.json(
        {
            message: "Data received successfully.",
            receivedData: data
        }
    )
});

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
})