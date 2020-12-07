const express = require('express')
const router = express.Router();
const Item = require('./models/item')

router.get('/', async(req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch(err){
    res.send('Error' + err)
  }
})

router.post('/', async(req, res) => {
  try {
    const newItem = new Item();
    newItem.name = req.body.name;
    newItem.save().then(function(err, result){
     console.log('User Created')
   })
    res.json(newItem);
  } catch(err){
    res.send('Error' + err)
  }
})

router.get('/:id', async(req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch(err){
    res.send('Error' + err)
  }
})

router.patch('/:id', async(req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    item.name = req.body.name;
    item.save().then(function(err, result){
      console.log('Item name updated')
    })
    res.json(item);
  } catch(err){
    res.send('Error' + err)
  }
})

router.delete('/:id', async(req, res) => {
  try {
    const removedItem = await Item.remove({_id: req.params.id})
    res.json(removedItem);
  } catch(err){
    res.send('Error' + err)
  }
})

module.exports = router;