const mongoose = require('mongoose');

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DATABASE
} = process.env;

const options = {useNewUrlParser: true};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`;

mongoose.connect(url, options).then( function() {
  console.log('MongoDB is connected');
})
  .catch( function(err) {
  console.log(err);
});
