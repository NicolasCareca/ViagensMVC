
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();




dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado ao MongoDB');
  })
  .catch((err) => {
    console.error(`Erro ao conectar ao MongoDB: ${err}`);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs'); 

const packageRoutes = require('./routes/packageRoutes');
app.use('/', packageRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});




