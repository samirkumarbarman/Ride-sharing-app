import jwt from 'jsonwebtoken';
import user from '../models/user.js'

const authMiddleware = async (req, res, next) =>{
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {
        try {
          // Get token from header
          token = req.headers.authorization.split(' ')[1]; // Split "Bearer <token>"
    
          // Verify token
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
          // Get user from token (excluding password)
          req.user = await User.findById(decoded.id).select('-password');
    
          next(); // Call the next middleware or route handler
    
        } catch (error) {
          console.error(error);
          res.status(401).json({ message: 'Not authorized, token failed' });
        }
      }
    
      if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
      }
    };
    
    export default authMiddleware;
