const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let visitCount = req.session.visitCount || 0;
    visitCount++;
    req.session.visitCount = visitCount;

    res.render('index', {
        message: `You have visited this page ${visitCount} time(s).`,
        cookie: req.cookies
    });
});

app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'Gani', { maxAge: 60000 });
    res.send('Cookie has been set for 1 minute!');
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) throw err;
        res.send('Session destroyed. Visit / to start again.');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
