"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const Sequelize = require("sequelize");
const tableName = 'ProductGroup';
async function up({ context }) {
    const queryInterface = context;
    queryInterface.createTable(tableName, {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
        },
        type: {
            type: Sequelize.CHAR(200),
            allowNull: false,
        },
        path: {
            type: Sequelize.CHAR(200),
            allowNull: false,
        },
        created_at: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
        updated_at: Sequelize.DATE,
        deleted_at: Sequelize.DATE,
    });
}
exports.up = up;
async function down({ context }) {
    const queryInterface = context;
    queryInterface.dropTable(tableName);
}
exports.down = down;
//# sourceMappingURL=init-product_group.js.map