import http from 'http';
import app from './app.js';
import { env } from './config/env.js';

const server = http.createServer(app);
const port = env.PORT;

const shutdown = () => {
  console.log('Shutting down CartPilot server...');
  server.close(() => process.exit(0));
};

server.listen(port, () => {
  console.log(`CartPilot API running on http://localhost:${port}`);
});

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

export default server;
