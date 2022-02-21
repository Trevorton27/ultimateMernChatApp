const express = require('express');
const app = express();

// OLD VERSION taught in the course.
// const server = require("http").Server(app);
// const io = require("socket.io")(server);

// LATEST VERSION Socket io @4.4.1
const { createServer } = require('http');
const { Server } = require('socket.io');
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
require('dotenv').config();
const connectDb = require('./serverUtilities/connectDb');

connectDb();
app.use(express.json());

nextApp.prepare().then(() => {
  app.use('/api/signup', require('./api/signup'));
  app.use('/api/auth', require('./api/auth'));
  app.use('/api/search', require('./api/search'));
  const PORT = process.env.PORT || 3000;

  app.all('*', (req, res) => handle(req, res));

  httpServer.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Express server running ${PORT}`);
  });
});
