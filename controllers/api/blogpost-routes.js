const router = require('express').Router();
const Blogposts = require('../../models/Blogposts');
const clog = require('../../utils/colorLogging');

/*
//reopen lines 6 to 10 if below doenst work
// logs 'hello world' in Insomnia, but 404 in inspector
router.get('/', function (req, res) {
  res.send('hello world')
})
*/

//Try this from here: https://stackoverflow.com/questions/50448214/inserting-form-data-into-mysql-database-when-using-nodejs-express
/*
const { json } = require('body-parser')
router.post('/', json(), (req, res, next) => {
  const body = req.body
  // ...save `body` to database
  // use mysql, sequelize, or knex
  res.send(body)
})
*/

router.post('/', async (req, res) => {
  try {
      const dbBlogpostData = await Blogposts.create({
          title: req.body.title,
          content: req.body.content
      });
      res.status(200).json(dbBlogpostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;