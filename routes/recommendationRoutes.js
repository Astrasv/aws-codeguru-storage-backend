const express = require('express');
const router = express.Router();
const validateTokenHandler = require('../middleware/validateTokenHandler');
const RecommendationController = require('../controllers/recommendationController');

// Define routes for recommendations
router.get('/review/:reviewId', validateTokenHandler, RecommendationController.getAllRecommendations);
router.get('/:recommendationId', validateTokenHandler, RecommendationController.getRecommendationById);
router.post('/review/:reviewId', validateTokenHandler, RecommendationController.createRecommendation);
router.put('/:recommendationId', validateTokenHandler, RecommendationController.updateRecommendation);
router.delete('/:recommendationId', validateTokenHandler, RecommendationController.deleteRecommendation);

module.exports = router;
