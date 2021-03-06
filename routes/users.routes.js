const express = require('express');

// Controllers
const {
	getAllUsers,
	getUserById,
	createNewUser,
	updateUser,
	deleteUser,
} = require('../controllers/users.controllers');



const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/', createNewUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);


module.exports = { usersRouter: router };