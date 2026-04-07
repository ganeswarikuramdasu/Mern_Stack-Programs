const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { name: 'Gani', friend: 'Friend' });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
