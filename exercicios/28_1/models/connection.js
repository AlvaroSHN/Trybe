const { MongoClient } = require('mongodb');

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017/';
const DATABASE = 'jwt_exercise'

const connection = async () => {
  return await MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then((conn) => conn.db(DATABASE))
    .catch((err) => {
      process.exit();
    });
};

module.exports = connection;
