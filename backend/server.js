const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

// routes
const gameRoutes = require('./routes/gameRoutes');

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

db.once('open', function() {
    console.log('Database connected successfully!');
});
db.on('error', console.error.bind(console, 'There has been a connection error:'));

app.use('/api/games', gameRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});