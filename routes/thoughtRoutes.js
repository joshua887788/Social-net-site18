const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../controllers/thoughtController');

// Get all thoughts
router.route('/').get(getAllThoughts).post(createThought);

// Get, update, or delete a thought by id
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);

// Add or remove a reaction
router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
