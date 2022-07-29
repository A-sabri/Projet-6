//importaion des dépendances
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

//importaion des routes 
const saucesRoutes = require('./routes/sauces');
const userRoutes = require('./routes/user');


//mise en place de la base de données 
mongoose.connect('mongodb+srv://S-Ali:htmlx123@cluster0.eioox1e.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


//parser les elements 
app.use(express.json());


//mise en place du Header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


//mise en place des routes
app.use('/api/auth', userRoutes);
app.use('/api/sauces', saucesRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));


//exportaion du module
module.exports = app;