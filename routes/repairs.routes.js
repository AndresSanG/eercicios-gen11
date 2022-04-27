const express = require('express');

// Controllers
const {
	getAllRepairs,
	getRepairById,
	createNewRepair,
	updateRepair,
	deleteRepair,
} = require('../controllers/repair.controller');



const router = express.Router();

router.get('/', getAllRepairs);

router.get('/:id', getRepairById);

router.post('/',createNewRepair );

router.patch('/:id', updateRepair);

router.delete('/:id', deleteRepair);


module.exports = { usersRouter: router };