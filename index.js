const express = require('express');
const path = require('path');
const DB = require('./db');
const app = express();
const PORT = process.env.PORT || 3009;

DB.sync();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { title: 'Pedro' });
});

app.use('/livros', require('./routes/livrosRoutes'));
app.use('/autores', require('./routes/autoresRoutes'));



app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
