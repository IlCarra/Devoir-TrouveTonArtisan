const express = require('express');
const router = express.Router();
const Artisan = require('../models/Artisan');
const Sequelize = require('sequelize');



router.get('/search', async (req, res) => {
    try {
        const query = req.query.q || '';
        const searchPattern = `%${query}%`;

        const results = await Artisan.findAll({
            where: Sequelize.literal(`
                (nom LIKE :pattern OR
                spécialité LIKE :pattern OR
                categorie LIKE :pattern OR
                localisation LIKE :pattern) 
                `),
                replacements: { pattern: searchPattern }
        });

        res.json(results);
    } catch (error) {
        console.error("Erreur SQL dettaillé:", error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/top', async (req, res) => {
    try {
        const topArtisans = await Artisan.findAll({
            order: [['note', 'DESC']],
            limit: 3
        });
        res.json(topArtisans);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

router.get('/categorie/:cat', async (req, res) => {
    try{
        const results = await Artisan.findAll({
            where: {categorie: req.params.cat }
        });
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/artisan/:id', async (req, res) => {
    try {
        const artisan = await Artisan.findByPk(req.params.id);
        if (artisan) {
            res.json(artisan);
        } else {
            res.status(404).json({message: "Artisan pas trouvé"});
        }
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
});

module.exports = router;