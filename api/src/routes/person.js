const express = require('express');
const router = express.Router();

const { createPerson, recuperarPerson } = require('../controllers/person.Controller');

router.post('/person', createPerson),
router.get('/person', recuperarPerson)




module.exports = router;