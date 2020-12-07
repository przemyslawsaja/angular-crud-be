"use strict";

var express = require('express');

var router = express.Router();

var Item = require('./models/item');

router.get('/', function _callee(req, res) {
  var items;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Item.find());

        case 3:
          items = _context.sent;
          res.json(items);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.send('Error' + _context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.post('/', function _callee2(req, res) {
  var newItem;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            newItem = new Item();
            newItem.name = req.body.name;
            newItem.save().then(function (err, result) {
              console.log('User Created');
            });
            res.json(newItem);
          } catch (err) {
            res.send('Error' + err);
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get('/:id', function _callee3(req, res) {
  var item;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Item.findById(req.params.id));

        case 3:
          item = _context3.sent;
          res.json(item);
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.send('Error' + _context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.patch('/:id', function _callee4(req, res) {
  var item;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Item.findById(req.params.id));

        case 3:
          item = _context4.sent;
          item.name = req.body.name;
          item.save().then(function (err, result) {
            console.log('Item name updated');
          });
          res.json(item);
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          res.send('Error' + _context4.t0);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
});
router["delete"]('/:id', function _callee5(req, res) {
  var removedItem;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Item.remove({
            _id: req.params.id
          }));

        case 3:
          removedItem = _context5.sent;
          res.json(removedItem);
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.send('Error' + _context5.t0);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;