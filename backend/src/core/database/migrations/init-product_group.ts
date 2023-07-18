import * as Sequelize from 'sequelize';

const tableName = 'ProductGroup';

export async function up({ context }: any) {
  const queryInterface = context as Sequelize.QueryInterface;
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

export async function down({ context }: any) {
  const queryInterface = context as Sequelize.QueryInterface;
  queryInterface.dropTable(tableName);
}
