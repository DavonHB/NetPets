const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://NetPetsDB:NetPetsDB@cluster0.hjt47cv.mongodb.net/?retryWrites=true&w=majority'
    ,
    {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    }
    
  );

module.exports = mongoose.connection;