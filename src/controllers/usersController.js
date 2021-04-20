const db = require("../db/models");

const getAllUsers = async () => {
  const usersFromDB = await db.User.findAll({
    attributes: {
      exclude: ["password"],
    },
    include: {
      model: db.Account,
      as: "accounts",
      attributes: ["currency", "id"],
    },
  });

  return { users: usersFromDB };
};

module.exports = {
  getAllUsers,
};
