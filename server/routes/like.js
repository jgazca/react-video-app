const express = require('express');
const router = express.Router();
const { Like } = require('../models/like');
const { Disike } = require('../models/dislike');
const { auth } = require('../middleware/auth');

// ====================
//  Likes - Dislikes
// ====================

router.post('/getLikes', (req, res) => {
  let variable = {};
  if (req.body.videoId) {
    variable = { videoId: req.body.videoId };
  } else {
    variable = { commentId: req.body.commentId };
  }

  Like.find(variable).exec((err, likes) => {
    if (err) return res.status;
  });
});
