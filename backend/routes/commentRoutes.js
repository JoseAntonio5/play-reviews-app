const express = require('express');
const Game = require('../models/Game');
const Comment = require('../models/Comment');

const router = express.Router();

// GET ALL COMMENTS FROM ONE GAME
router.get('/:id/comments/', async (req, res) => {
    try {
      const game = await Game.findById(req.params.id).populate('comments');
      res.json(game.comments);
    } catch (err) {
      console.error(err);
      res.status(500).send('The has been a server error.');
    }
});

// POST A NEW COMMENT TO A GAME
router.post('/:id/comments/', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    const { user, rating, comment } = req.body;

    const newComment = new Comment({
      user: user,
      rating: rating,
      comment: comment,
      game: game._id
    });

    await newComment.save();
    game.comments.push(newComment);
    await game.save();
    res.status(201).json(newComment);

  } catch (err) {
    console.error(err);
    res.status(500).send('The has been a server error.');
  }
});

// DELETE A COMMENT
router.delete('/comments/:id', async (req, res) => {
  try {

    const comment = await Comment.findByIdAndDelete(req.params.id);
    res.json(
      { 
        message: 'Comment deleted successfully' 
      }
    );

  } catch (err) {
    console.error(err);
    res.status(500).send('The has been a server error.');
  }
});

module.exports = router;