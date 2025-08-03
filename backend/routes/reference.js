const express = require('express');
const router = express.Router();
const model = require('../models/reference');

router.get('/', async (req, res) => {
  const data = await model.getAllReferences();
  res.json(data);
});

router.post('/', async (req, res) => {
  const { title, pdf_link } = req.body;
  await model.createReference(title, pdf_link);
  res.status(201).send("Created");
});

router.delete('/:id', async (req, res) => {
  await model.deleteReference(req.params.id);
  res.send("Deleted");
});

module.exports = router;