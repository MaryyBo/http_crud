// static - вказує на те ,що я буду взаємодіяти з усією таблицею

class Thing {
        static _tableName = 'things';
        static _client; //налаштуємо в index model
        static name = 'Thing';

        static _attributes = {
                body: 'string'
        }

        // методи моделі

        static async create(insertValues) {
                // 1. відсіяли "ліві" атрибути, яких ми не очікуємо
                const insertAttr = Object.entries(this._attributes)
                        .filter(([attr, domain]) => attr in insertValues)
                        .map(([attr]) => attr);

                //2. До кожного атрибуту додаємо кавички і кому в кінці
                // Робимо строку, яка визначає стовпці, які ми вставляємо та порядок , в якому ми ці стовпці будемо передавати
                const insertSchema = insertAttr.map(currentAttr => `"${currentAttr}"`).join(',');

                //3. Зробити строчку запиту на створення, огортаючи її в одинарні лапки (частина ПІСЛЯ VALUES)
                const insertValuesStr = insertAttr.map(currentAttr => {
                        const value = insertValues[currentAttr];
                        // Якщо лежить строка, загортаємо її в кавички
                        return typeof value === 'string' ? `'${value}'` : value;
                }).join(',');

                //4. Запит до BD
                const queryStr = `
                INSERT INTO ${this._tableName} (${insertSchema})
                VALUES (${insertValuesStr})
                RETURNING *;
                `;

                //5.Виконуємо запит
                const { rows } = await this._client.query(queryStr);
                return rows;

        };



        static async findByPk(pk) { // pk - id - знаходити сутність за первинним ключем
                const { rows } = await this._client.query(`
                SELECT * FROM ${this._tableName}
                WHERE id = ${pk} 
                `);
                return rows;
        };


        static async findAll() {
                const { rows } = await this._client.query(`
                SELECT * FROM ${this._tableName}
                `);
                return rows;
        };

        static async updateByPk(id, updateValues) {
                const insertAttr = Object.entries(this._attributes)
                        .filter(([attr, domain]) => attr in updateValues)
                        .map(([attr]) => attr);

                const insertVAluesStr = insertAttr.map(attr => {
                        const value = updateValues[attr];

                        return `${attr} = ${typeof values === 'string' ? `'${value}'` : value}`
                }).join(',');

                const { rows } = await this._client.query(`
               UPDATE ${this._tableName}
               SET ${insertVAluesStr}
               WHERE id = ${id}
               RETURNING *;
               `);

                return rows;
        };

        static async deleteByPk() {
                const { rows } = await this._client.query(`
                DELETE FROM ${this._tableName}
                WHERE id = ${pk} 
                RETURNING *;
                `);
                return rows;
        };
}


module.exports = Thing;

