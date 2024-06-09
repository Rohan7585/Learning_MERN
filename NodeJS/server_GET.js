const express = require('express');
const app = express();
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
    res.json({message: 'This is my first express app.'});
})

app.get('/user', (req, res) => {
    const user = {
        id: 1,
        name: 'Rohan',
        email: 'example@example.com'
    }
    res.json(user);
});

app.get('/item', (req, res) => {
    const item = [
        {id: 10, name:'Product1', price: 100},
        {id: 11, name:'Product2', price: 200},
        {id: 12, name:'Product3', price: 300}
    ];
    res.json(item);
});

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
})
