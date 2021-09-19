const router = require('express').Router();
const Blogposts = require('../../models/Blogposts');
const clog = require('../../utils/colorLogging');

router.post('/newpost', async (req, res) => {
  try {
      const dbBlogpostData = await Blogposts.create({
          title: req.body.title,
          content: req.body.content
      });
      res.status(200).json(dbBlogpostData);
      console.log(dbBlogpostData.value)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

const { json } = require('body-parser')
router.post('/', json(), (req, res, next) => {
  const body = req.body
  // ...save `body` to database
  // use mysql, sequelize, or knex
  res.send(body)
})

module.exports = router;