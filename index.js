const express = require('express');
const mongoose = require('mongoose');
const itemsRotuer = require('./routers/items')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const uri = "mongodb+srv://admin:admin@assessment.ijve7.mongodb.net/CRUD?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connedted!');
})

app.use(cors());
app.use(express.json());
app.use('/items', itemsRotuer);

app.listen(port, () => console.log(`Listening on port ${port}`));