const mongoose = require('mongoose');
const Game = require('./models/Game');

mongoose.connect('mongodb://localhost:27017/play-reviews', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const games = [
  {
    title: 'The Legend of Zelda: Breath of the Wild',
    genre: 'Action-adventure',
    description: 'An action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
  },
  {
    title: 'Super Mario Odyssey',
    genre: 'Platformer',
    description: 'A platform game developed and published by Nintendo for the Nintendo Switch console.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Super_Mario_Odyssey.jpg',
  },
  {
    title: 'Red Dead Redemption 2',
    genre: 'Action-adventure',
    description: 'An action-adventure game developed and published by Rockstar Games for the PlayStation 4, Xbox One, and PC.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_2.jpg',
  }
];

Game.deleteMany({})
  .then(res => {
    console.log('Deleted all games.');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));

Game.insertMany(games)
  .then(res => {
    console.log('Games has been added to the database (seeded).');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));