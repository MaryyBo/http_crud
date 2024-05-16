// static - вказує на те ,що я буду взаємодіяти з усією таблицею

class Thing {
        static _tableName = 'things';
        static _client; //налаштуємо в index model

        // методи моделі
        
        static async create() {};
        static async findByPk() {}; // знаходити сутність за первинним ключем
        static async findAll() {};
        static async updateByPk() {};
        static async deleteByPk() {};
        }


module.exports = Thing;

