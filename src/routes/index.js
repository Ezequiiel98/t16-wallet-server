const { Router } = require("express");
const usersRouter = require("./usersRouter");
const accountsRouter = require("./accountsRouter");
const transactionsRouter = require("./transactionsRouter");
const fixedTermDepositsRouter = require("./fixedTermDepositsRouter");
const transferencesRouter = require("./transferencesRouter");
const router = Router();

router.use("/users", usersRouter);
router.use("/accounts", accountsRouter);
router.use("/transactions", transactionsRouter);
router.use("/deposits", fixedTermDepositsRouter);
router.use("/transferences", transferencesRouter);

module.exports = router;
