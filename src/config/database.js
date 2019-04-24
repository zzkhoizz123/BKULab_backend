// configura MongoDB
const MONGODB_HOST = process.env.MONGODB_HOST || "127.0.0.1";
const MONGODB_PORT = process.env.MONGODB_PORT || "27017";
const MONGODB_DATABASE = process.env.MONGODB_DATABASE || "BKULab";
const MONGODB_USERNAME = process.env.MONGODB_USERNAME || "";
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || "";
const MONGODB_OPTION = { user: MONGODB_USERNAME, pass: MONGODB_PASSWORD };
const MONGODB_URI =
  process.env.MONGODB_URI ||
  `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`;

module.exports = {
  MONGODB_HOST,
  MONGODB_PORT,
  MONGODB_DATABASE,
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_OPTION,
  MONGODB_URI
};
