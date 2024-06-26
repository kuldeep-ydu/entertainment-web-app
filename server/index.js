const app = require('./app');
const config = require('./utils/config');
const logger = require('./utils/logger');
const http = require('http');

const server = http.createServer(app);

server.listen(config.PORT, '0.0.0.0', () => {
  logger.info(`Server running on port ${config.PORT}`);
});
