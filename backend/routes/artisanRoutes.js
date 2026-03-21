const express = require('express');
const router = express.Router();
const Artisan = require('../models/Artisan');
const { Op } = require('sequelize');



router.get('/search', async (req, res) => {
    const query = req.query.q || '';
    const results = await Artisan.findAll({
        where: { nom: {[Op.like]: `%${query}%` } }
    });
    res.json(results);
});

router.get('/top', async (req, res) => {
    const topArtisans = await Artisan.findAll({ where: {top: 1} });
    res.json(topArtisans);
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