const authorizeRoles = (allowedRoles) => {
  return (req, res, next) => {
    // req.user is set by the authenticateToken middleware
    if (!req.user || !req.user.role) {
      return res.status(401).json({ success: false, message: 'Authentication required.' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: 'Forbidden: You do not have the required role to access this resource.' });
    }
    next();
  };
};

module.exports = authorizeRoles; 