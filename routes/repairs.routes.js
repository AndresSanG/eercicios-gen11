const express = require('express');

// Controllers
const {
	getAllRepairs,
	getRepairById,
	createNewRepair,
	repairCompleated,
	cancelRepair,
} = require('../controllers/repairs.controllers');



const router = express.Router();

router.get('/', getAllRepairs);

router.get('/:id', getRepairById);

router.post('/',createNewRepair );

router.patch('/:id', repairCompleated);

router.delete('/:id', cancelRepair);


module.exports = { repairsRouter: router };