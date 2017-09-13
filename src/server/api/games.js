// Dependencies
import express from 'express';

// Express Router
const Router = express.Router();

// Data
import games from '../data/games.json';

Router.get('/games', (req, res, next) => {
  res.json(games);
});

export default Router;
