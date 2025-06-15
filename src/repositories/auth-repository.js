const { User, Doctor, ASHA } = require('../models');

class AuthRepository {
    async createUser(userData) {
        return await User.create(userData);
    }

    async findUserByEmail(email) {
        return await User.findOne({ where: { email } });
    }

    async createDoctor(userId) {
        return await Doctor.create({ userId });
    }

    async createASHA(userId) {
        return await ASHA.create({ userId });
    }
}

module.exports = new AuthRepository(); 