const AuthService = require('../services/auth-service');

const signup = async (req, res) => {
    try {
        const { email, password, role, name, gender, mobile } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({ success: false, message: 'Email, password, and role are required.' });
        }

        const result = await AuthService.signup(req.body);

        if (result.success) {
            return res.status(201).json({ 
                success: true, 
                message: 'User registered successfully.',
                token: result.token,
                user: { 
                    id: result.user.id, 
                    email: result.user.email, 
                    role: result.user.role, 
                    name: result.user.name
                } 
            });
        } else {
            return res.status(400).json({ success: false, message: result.message });
        }
    } catch (error) {
        console.error('Error in signup controller:', error);
        return res.status(500).json({ success: false, message: 'Internal server error during signup.' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required.' });
        }

        const result = await AuthService.login(email, password);

        if (result.success) {
            return res.status(200).json({ 
                success: true, 
                message: 'Logged in successfully.',
                token: result.token,
                user: { 
                    id: result.user.id, 
                    email: result.user.email, 
                    role: result.user.role
                } 
            });
        } else {
            return res.status(401).json({ success: false, message: result.message });
        }
    } catch (error) {
        console.error('Error in login controller:', error);
        return res.status(500).json({ success: false, message: 'Internal server error during login.' });
    }
};

module.exports = {
    signup,
    login
}; 