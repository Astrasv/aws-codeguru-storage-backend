const express = require('express');
const router = express.Router();
const validateTokenHandler = require('../middleware/validateTokenHandler');
const ReviewController = require('../controllers/reviewController');

// Define routes for reviews
router.get('/project/:projectId', validateTokenHandler, ReviewController.getAllReviews);
router.get('/:reviewId', validateTokenHandler, ReviewController.getReviewById);
router.post('/project/:projectId', validateTokenHandler, ReviewController.createReview);
router.put('/:reviewId', validateTokenHandler, ReviewController.updateReview);
router.delete('/:reviewId', validateTokenHandler, ReviewController.deleteReview);

module.exports = router;
