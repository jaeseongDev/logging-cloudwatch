const express = require('express');
const app = express();
const port = 3000;
const logger = require('./utils/logger')

app.get('/', (req, res) => {
  logger.info(new Date().getTime() + 'hello!');
  logger.error(new Date().getTime() + 'error!!');
})

app.listen(port, () => {
  console.log(`서버가 실행됩니다. http://localhost:${port}`);
})
