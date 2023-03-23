

require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`, (error) => {
    console.log(error);
})
// Middlewares
// Servir contenido estático
app.use(express.static('public'));

// ROUTES
app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Jordán Guzmán Salas',
        titulo: "Curso de Node"
    });
})

app.get('/generic', (req,res) => {
    res.render('generic', {
        nombre: 'Jordán Guzmán Salas',
        titulo: "Curso de Node"
    })
})

app.get('/elements', (req,res) => {
    res.render('elements', {
        nombre: 'Jordán Guzmán Salas',
        titulo: "Curso de Node"
    })
})

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/404.html`);
})

app.listen(port, "localhost", () => {
    console.log(`App is listening on port ${port}`);
});