const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../controllers/userController');

// Get all users
router.route('/').get(getAllUsers).post(createUser);

// Get, update, or delete a user by id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

// Add or remove a friend
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
