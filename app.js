const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

const MONGO_URL = "mongodb://127.0.0.1:27017/DCA_DB";

Main().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
})

async function Main() {
    await mongoose.connect(MONGO_URL);
};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));
app.engine('ejs', ejsMate);

app.get("/", (req, res) => {
    res.send("Home Page");
});

// Add core data models for users, cases, and DCA performance



module.exports = app;