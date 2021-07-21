require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const CountryTownCategory = require('./models/CountryTownCategory');

const app = express();

const PORT = 4000;

// prisijungimas prie duomenu bazes
mongoose
  .connect(process.env.MONGO_CONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Conneced to Mongo ooooooooose');
  })
  .catch((err) => console.error(err.message));

// MIddleware
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json(`Serveris veikia an port ${PORT}`);
});

// app.get gauti listus
app.get('/country_town', async (req, res) => {
  try {
    const places = await CountryTownCategory.find();
    res.json(places);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new country or town
app.post('/country_town/new', (req, res) => {
  console.log(req.body);

  const newPlace = new CountryTownCategory({
    title: 'Chile',
    continent: 'Sounth America',
    population: 18000000,
    tipe: 'country',
  });

  newPlace
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.listen(PORT, console.log(`Back end online on port ${PORT}`));
