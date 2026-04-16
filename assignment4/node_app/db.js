const mongoose = require("mongoose");

const {
  MONGO_USERNAME, MONGO_PASSWORD,
  MONGO_HOSTNAME, MONGO_PORT, MONGO_DB
} = process.env;

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

const connectWithRetry = () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("MongoDB connection failed, retrying in 5s...", err.message);
    setTimeout(connectWithRetry, 5000);
  });
};

connectWithRetry();
