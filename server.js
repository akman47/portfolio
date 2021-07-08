// express, database, and routes
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const path = require('path');

// express-handlebars and session
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config();

// create server and port
const app = express();
const PORT = process.env.PORT || 3001;

// set up express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set up handlebar.js as template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// connect express-session to database
const sess = {
    secret: process.env.Session_Secret,
    rolling: true,
    cookie: {
        expire: 5*60*1000
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// turn on routes
app.use(routes);

// connect database to server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
