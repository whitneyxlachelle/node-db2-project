// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3', //specifies the DBMS
    connection: {
      filename: './data/car-dealer.db3', //location of my db
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
