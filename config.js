require("dotenv").config();

module.exports = {
  API_PORT: process.env.PORT || 3000,
  JTW_SECRET: process.env.JWT_SECRET_KEY || "SecretKeyT16",
};
