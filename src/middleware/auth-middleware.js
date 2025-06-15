const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; // Use the same secret as in auth-service

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({ success: false, message: 'Authentication token required.' }); // No token provided
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            console.error('Token verification failed:', err);
            // Specific messages for different token errors
            if (err.name === 'TokenExpiredError') {
                return res.status(403).json({ success: false, message: 'Token has expired. Please log in again.' });
            } else if (err.name === 'JsonWebTokenError') {
                return res.status(403).json({ success: false, message: 'Invalid token. Please log in again.' });
            }
            return res.status(403).json({ success: false, message: 'Forbidden: Invalid token.' }); // Token is invalid
        }
        req.user = user; // Attach user payload to the request object
        next();
    });
};

module.exports = authenticateToken; 