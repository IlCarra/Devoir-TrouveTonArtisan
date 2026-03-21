const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');
const artisanRoutes = require('./routes/artisanRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', artisanRoutes);

sequelize.authenticate()
    .then(() => console.log('Connexion a MySQL effectuée'))
    .catch(err => console.log('Erreur de connexion au DB:', err));

app.get('/', (req, res) => {
    res.send('API "Trouve Ton Artisan" est activé');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en execution sur http://localhost:${PORT}`);
});