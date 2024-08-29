const cors = require('cors');

const corsOptions = {
    method: 'GET, PUT, POST, DELETE'
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;