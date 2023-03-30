const express = require('express');
const Game = require('../models/Game');

const router = express.Router();

//GET
router.get('/', async(req, res) => {
    try {
        const games = await Game.find({});
        res.json(games);
    } catch (err) {
        console.error(err);
        res.status(500).send('The has been a server error.');
    }
});

//READ
router.get('/:id', async(req, res) => {

    const { id } = req.params;

    try {
        const game = await Game.findById(id);
        res.json(game);
    } catch (err) {
        console.error(err);
        res.status(500).send('The has been a server error.');
    }
});

// POST
router.post('/', async(req, res) => {
    try {
        const game = new Game(req.body);
        await game.save();
        console.log(`\nThe game ${req.body.title} has been added to the database\n`);
        res.json(game);
    } catch (err) {
        console.error(err);
        res.status(500).send('The has been a server error.');
      }
});

// UPDATE
router.put('/:id', async(req, res) => {
    const { id } = req.params;
    const { title, description, genre, imageUrl } = req.body;

    try {
        const updatedGame = await Game.findByIdAndUpdate(
          id,
          { title, description, genre, imageUrl },
          { new: true }
        );
        console.log(`\nThe game ${title} has been updated!\n`);
        res.json(updatedGame);
      } catch (err) {
        console.error(err);
        res.status(500).send('There has been a server error.');
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
      const game = await Game.findByIdAndDelete(req.params.id);
      if (!game) {
        return res.status(404).json({ message: 'Game was not found' });
      }
      res.json({ message: 'Game deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send('There has been a server error');
    }
  });

module.exports = router;