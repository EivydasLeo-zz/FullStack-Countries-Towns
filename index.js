require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const CountryTown = require('./models/CountryTownCategory');

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
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json(`Serveris veikia an port ${PORT}`);
});

// get places
app.get('/places', async (req, res) => {
  try {
    const places = await CountryTown.find();
    res.json(places);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new country or town
app.post('/places/new', (req, res) => {
  console.log(req.body);

  const newPlace = new CountryTown(req.body);

  newPlace
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

// delete place

app.delete('/places/delete/:id', async (req, res) => {
  await CountryTown.findOneAndDelete({ _id: req.params.id });
  res.send({ success: true, msg: `Place has been deleted.` });
});
app.listen(PORT, console.log(`Back end online on port ${PORT}`));

// edit place

app.put('/places/edit/:id', async (req, res) => {
  const { title, continent, population, preference } = req.body;
  await CountryTown.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      continent,
      population,
      preference,
    }
  );
  res.send({ success: true, msg: `Place ${title} has been updated.` });
});
