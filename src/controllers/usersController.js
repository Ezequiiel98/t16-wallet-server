const db = require("../db/models");
const { paginateWithParamsAndQuery } = require("../utils");

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

const getAllUsersWithPagination = async (req) => {

  const { pageSize, offset } = paginateWithParamsAndQuery(req.params.page, req.query.page_size);

  const usersFromDB = await db.User.findAll({
    order: ["id"],
    offset,
    limit: pageSize,
  });

  return { users: usersFromDB };
}

module.exports = {
  getAllUsers,
  getAllUsersWithPagination,
};


