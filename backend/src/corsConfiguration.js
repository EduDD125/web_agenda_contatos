const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    method: 'GET, PUT, POST, DELETE'
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;