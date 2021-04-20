const app = require("./src/App");
const { API_PORT } = require('./config')

app.listen(API_PORT, () => {
  console.log(`App listening at http://localhost:${API_PORT}`);
});
