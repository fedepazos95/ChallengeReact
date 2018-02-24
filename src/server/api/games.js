// Dependencies
import express from 'express';

// Express Router
const Router = express.Router();

// Data
import games from './games.json';

Router.get('/', (req, res, next) => {
  res.json(games);
});

export default Router;
