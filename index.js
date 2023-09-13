const express = require('express');
const checkHeureOuvrable = require('./heureMiddleware');

const app = express();
const port = 3000;

// Middleware pour vérifier les heures de fonctionnement
app.use(checkHeureOuvrable);

// Configuration du moteur de template Pug
app.set('views','./views');
app.set('view engine', 'pug');

// Gestion des routes
app.get('/', (req, res) => {
    res.render('accueil', { title: 'Accueil' });
});

app.get('/services', (req, res) => {
    res.render('services', { title: 'Nos services' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contactez-nous' });
});

// Fichiers statiques (CSS)
app.use(express.static('public'));

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
