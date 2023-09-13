const moment = require('moment');

// Middleware pour vérifier l'heure de la demande
function checkHeureOuvrable(req, res, next) {
    const now = moment();
    const isWeekday = now.isoWeekday() >= 1 && now.isoWeekday() <= 5;
    const isWorkingHours = now.isBetween(moment('09:00', 'HH:mm'), moment('17:00', 'HH:mm'));

    if (isWeekday && isWorkingHours) {
        // Si l'heure est dans les heures ouvrables, continuez la demande
        next();
    } else {
        // Sinon, renvoyez une réponse d'erreur
        res.status(404).send('L\'application n\'est disponible que pendant les heures ouvrables (du lundi au vendredi, de 9h à 17h).');
    }
}

module.exports = checkHeureOuvrable;
