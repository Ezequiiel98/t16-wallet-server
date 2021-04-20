const { Router } = require("express");
const usersRouter = require("./usersRouter");
const accountsRouter = require("./accountsRouter");
const router = Router();

router.use("/users", usersRouter);
router.use("/accounts", accountsRouter);

module.exports = router;
