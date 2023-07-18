const { Sequelize } = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'Nest_Kirill',
});
const umzug = new Umzug({
    context: sequelize.getQueryInterface(),
    migrations: {
        glob: `./src/core/database/migrations/*.ts`,
        params: [sequelize, sequelize.constructor],
    },
    storage: new SequelizeStorage({ sequelize }),
    logger: console,
});
const task = (process.argv[2] || '').trim();
switch (task) {
    case 'up':
        umzug.up().then((result) => {
            console.log('Migrations up went successful!', result);
            process.exit(0);
        });
        break;
    case 'down':
        umzug.down().then((result) => {
            console.log('Migrations down went successful!', result);
            process.exit(0);
        });
        break;
    default:
        break;
}
//# sourceMappingURL=migrate.js.map