const express = require('express');

const { addArgonautes, getArgonautes } = require('../db');

const router = express.Router();

router.get('/', async (_, res) => {
  res.status(200);
  res.send(await getArgonautes());
});

router.post('/add', async (req, res) => {
  res.status(201);
  res.json(await addArgonautes(req.body));
});

export default router;