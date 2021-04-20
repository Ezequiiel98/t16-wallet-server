const db = require("../db/models");

const getAllUsers = async () => {
  const usersFromDB = await db.User.findAll({
    attributes: {
      exclude: ["password"],
    },
  });

  return { users: usersFromDB };
};

module.exports = {
  getAllUsers,
};
