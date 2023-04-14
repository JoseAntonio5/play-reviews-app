const mongoose = require('mongoose');
const Game = require('./models/Game');
const Comment = require('./models/Comment');

mongoose.connect('mongodb://localhost:27017/play-reviews', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const games = [
  {
    title: 'The Legend of Zelda: Breath of the Wild',
    genre: 'Action-adventure',
    description: 'An action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles.',
    imageUrl: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58',
    comments: [
      {
        user: 'John Doe',
        rating: 4,
        comment: 'Great game, I really enjoyed the graphics and the story!'
      },
      {
        user: 'Jane Smith',
        rating: 5,
        comment: 'One of the best games I have ever played!'
      }
    ]
  },
  {
    title: 'Super Mario Odyssey',
    genre: 'Platformer',
    description: 'A platform game developed and published by Nintendo for the Nintendo Switch console.',
    imageUrl: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5',
    comments: [
      {
        user: 'Bob Smith',
        rating: 4,
        comment: 'Fun game, but can be challenging at times.'
      },
      {
        user: 'Sarah Johnson',
        rating: 5,
        comment: 'Absolutely love this game!'
      }
    ]
  },
  {
    title: 'Red Dead Redemption 2',
    genre: 'Action-adventure',
    description: 'An action-adventure game developed and published by Rockstar Games for the PlayStation 4, Xbox One, and PC.',
    imageUrl: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png',
    comments: [
      {
        user: 'George Williams',
        rating: 5,
        comment: 'A masterpiece of a game!'
      },
      {
        user: 'Emily Brown',
        rating: 3,
        comment: 'Good game, but can get repetitive.'
      }
    ]
  }
];

// Game.deleteMany({})
//   .then(res => {
//     console.log('Deleted all games.');
//     mongoose.connection.close();
//   })
//   .catch(err => console.error(err));

Game.insertMany(games)
  .then(res => {
    console.log('Games has been added to the database.');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));