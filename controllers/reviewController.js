const asyncHandler = require("express-async-handler");
const Review = require("../models/reviewModel");

//@desc Get all reviews of a project
//@route GET /api/reviews/project/:projectId
//@access public
const getAllReviews = asyncHandler(async (req, res) => {
    const reviews = await Review.find({ project: req.params.projectId });
    res.json(reviews);
});

//@desc Get a review by ID
//@route GET /api/reviews/:reviewId
//@access public
const getReviewById = asyncHandler(async (req, res) => {
    const review = await Review.findById(req.params.reviewId);
    res.json(review);
});

//@desc Create a new review
//@route POST /api/reviews/project/:projectId
//@access public
const createReview = asyncHandler(async (req, res) => {
    const review = await Review.create({ ...req.body, project: req.params.projectId });
    res.status(201).json(review);
});

//@desc Update a review
//@route PUT /api/reviews/:reviewId
//@access public
const updateReview = asyncHandler(async (req, res) => {
    const review = await Review.findByIdAndUpdate(req.params.reviewId, req.body, { new: true });
    res.json(review);
});

//@desc Delete a review
//@route DELETE /api/reviews/:reviewId
//@access public
const deleteReview = asyncHandler(async (req, res) => {
    await Review.findByIdAndDelete(req.params.reviewId);
    res.json({ message: 'Review deleted successfully' });
});

module.exports = { getAllReviews, getReviewById, createReview, updateReview, deleteReview };
