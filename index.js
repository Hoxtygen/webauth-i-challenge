const server = require('./server.js');

const PORT = process.env.PORT || 5005;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on PORT ${PORT}`);
});
