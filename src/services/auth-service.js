const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AuthRepository = require('../repositories/auth-repository');

// For now, use a placeholder. We will later externalize this to .env
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'; 

class AuthService {
    async signup(userData) {
        const { email, password, role, name, gender, mobile } = userData;

        // 1. Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            // 2. Create the user
            const user = await AuthRepository.createUser({
                email,
                password: hashedPassword,
                role,
                name,
                gender,
                mobile
            });

            // 3. Assign role-specific IDs if applicable
            if (role === 'doctor') {
                await AuthRepository.createDoctor(user.id);
            } else if (role === 'asha') {
                await AuthRepository.createASHA(user.id);
            }

            // 4. Generate JWT token
            const token = jwt.sign(
                { id: user.id, email: user.email, role: user.role },
                JWT_SECRET,
                { expiresIn: '1h' } // Token expires in 1 hour
            );

            return { success: true, user, token };

        } catch (error) {
            console.error('Error during signup:', error);
            // Handle specific errors like duplicate email if needed
            if (error.name === 'SequelizeUniqueConstraintError') {
                return { success: false, message: 'Email already registered.' };
            }
            return { success: false, message: 'Signup failed: ' + error.message };
        }
    }

    async login(email, password) {
        try {
            // 1. Find the user by email
            const user = await AuthRepository.findUserByEmail(email);
            if (!user) {
                return { success: false, message: 'Invalid credentials.' };
            }

            // 2. Compare passwords
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return { success: false, message: 'Invalid credentials.' };
            }

            // 3. Generate JWT token
            const token = jwt.sign(
                { id: user.id, email: user.email, role: user.role },
                JWT_SECRET,
                { expiresIn: '1h' } // Token expires in 1 hour
            );

            return { success: true, user, token };

        } catch (error) {
            console.error('Error during login:', error);
            return { success: false, message: 'Login failed: ' + error.message };
        }
    }
}

module.exports = new AuthService(); 