const asyncHandler = require("express-async-handler");
const Recommendation = require("../models/recommendationModel");

//@desc Get all recommendations of a review
//@route GET /api/recommendations/review/:reviewId
//@access public
const getAllRecommendations = asyncHandler(async (req, res) => {
    const recommendations = await Recommendation.find({ review: req.params.reviewId });
    res.json(recommendations);
});

//@desc Get a recommendation by ID
//@route GET /api/recommendations/:recommendationId
//@access public
const getRecommendationById = asyncHandler(async (req, res) => {
    const recommendation = await Recommendation.findById(req.params.recommendationId);
    res.json(recommendation);
});

//@desc Create a new recommendation
//@route POST /api/recommendations/review/:reviewId
//@access public
const createRecommendation = asyncHandler(async (req, res) => {
    const recommendation = await Recommendation.create({ ...req.body, review: req.params.reviewId });
    res.status(201).json(recommendation);
});

//@desc Update a recommendation
//@route PUT /api/recommendations/:recommendationId
//@access public
const updateRecommendation = asyncHandler(async (req, res) => {
    const recommendation = await Recommendation.findByIdAndUpdate(req.params.recommendationId, req.body, { new: true });
    res.json(recommendation);
});

//@desc Delete a recommendation
//@route DELETE /api/recommendations/:recommendationId
//@access public
const deleteRecommendation = asyncHandler(async (req, res) => {
    await Recommendation.findByIdAndDelete(req.params.recommendationId);
    res.json({ message: 'Recommendation deleted successfully' });
});

module.exports = { getAllRecommendations, getRecommendationById, createRecommendation, updateRecommendation, deleteRecommendation };
