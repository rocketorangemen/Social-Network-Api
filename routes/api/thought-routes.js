const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    addReaction,
    updateThought,
    removeThought,
    removeReaction
  } = require('../../controllers/thought-controller');


// Set up GET all at /api/thoughts
router.route('/').get(getAllThoughts);
  
// Set up GET one at /api/thoughts/:id
router.route('/:id').get(getThoughtById);

router.route('/:userId/:thoughtId')
      .put(addReaction)
      .delete(removeThought);

router.route('/:userId').post(addThought);

router.route('/:thoughtId').put(updateThought);
  
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;