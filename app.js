const express = require('express');
const path = require('path');



const app = express();

//middleware
//view engine
app.set('view engine', 'ejs');
//Static folder
app.use(express.static(path.join(__dirname, 'public')));
//routes
app.get('/', (req, res)=> res.render('index'));
app.get('/newMembers', (req, res)=> res.render('newMembers'));
app.get('/signup', (req, res)=> res.render('signup'));
app.get('/login', (req, res)=> res.render('login'));

//Other

app.listen('3000', () => console.log('Server started on Port 3000...'));