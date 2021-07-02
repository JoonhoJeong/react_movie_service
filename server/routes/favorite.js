const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');

router.post('/favoriteNumber', (req, res) => {

  //DB 중 movieId가 req.body.movieId인 것 찾아오기.
  Favorite.find({"movieId": req.body.movieId})
    .exec((err, info) => {
      if(err) return res.status(400).send(err)
      
      res.status(200).json({success:true, favoriteNumber: info.length})
    });
});


router.post('/favorited', (req, res) => {
  //내가 이 영화를 Favorite 리스트에 넣었는지 정보를 DB에서 가져오기
  Favorite.find({"movieId": req.body.movieId, "userFrom": req.body.userFrom })
    .exec((err, info) => {
      if(err) return res.status(400).send(err)
      
      let result = false;
      if (info.length !== 0) {
        result = true;
      }

      res.status(200).json({success:true, favorited: result})
    });
});

router.post('/removeFavorite', (req, res) => {
  Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
    .exec((err, doc) => {
      if (err) return res.status(400).send(err);
    
      return res.status(200).json({ success: true });
    });
});

router.post('/addToFavorite', (req, res) => {
  const favorite = new Favorite(req.body);

  favorite.save((err, doc) => {
    if (err) return res.status(400).send(err);
    
    return res.status(200).json({ success: true });
  });
});

router.post('/getFavoredMovie', (req, res) => {
  Favorite.find({'userFrom': req.body.userFrom})
    .exec((err, favorites) => {
      if (err) return res.status(400).send(err);
    
      return res.status(200).json({ success: true, favorites });
    })
});


module.exports = router;
