const { PeerServer } = require('peer');

// Render provides a PORT environment variable. Use it, or default to 9000 for local testing.
const port = process.env.PORT || 9000;

const peerServer = PeerServer({
  port: port,
  path: '/peerjs', // Important: remember this path for your client code
});

console.log(`PeerServer started on port ${port} with path /peerjs`);