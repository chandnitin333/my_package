
const mysqlConnection = (mysql) => {
    const pool = mysql.createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
    return pool.promise();
  };
  
  // PostgreSQL Connection
  
  const pgConnection = (Pool) => {
    const pool = new Pool({
      host: process.env.PG_HOST,
      user: process.env.PG_USERNAME,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB_NAME,
      port: 5432
    });
    return pool;
  };
  
  // MongoDB Connection
  
  const mongoConnection = async (MongoClient) => {
    const url = process.env.MONGO_CONNECTION_STRING;
    const dbName = process.env.MONGO_DB_NAME;
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    return client.db(dbName);
  };
  
  
  const msSQLConnection = async (sql) => {
      const config = {
          user: process.env.MSSQL_USER,
          password: process.env.MSSQL_PASSWORD,
          server: process.env.MSSQL_SERVER,
          database: process.env.MSSQL_DATABASE,
          options: {
            encrypt: false, 
            enableArithAbort: true // Helps with preventing SQL injection
          }
        };
        const poolPromise = new sql.ConnectionPool(config)
          .connect()
          .then(pool => {
              console.log('Connected to MSSQL');
              return pool;
          })
          .catch(err => {
              console.error('Database connection failed:', err);
              process.exit(1); // Exit process on connection failure
          });
        
    return poolPromise;
  };
  
  
  
  
   const DBConn = async (connName='mongo') => {
      let conn =null;
      switch (connName) {
          case 'mongo':
              const { MongoClient } = require('mongodb');
              conn = await mongoConnection(MongoClient);
              break;
  
          
          case 'mysql':
              const mysql = require('mysql2');
              conn = await mysqlConnection(mysql);
              break;
          case 'mssql':
           
              const mssql = require('mssql');
              conn = await msSQLConnection(mssql);
              break;
  
          case 'pg':
              const { Pool } = require('pg');
          conn = await pgConnection(Pool);
          break;
              
          default:
              break;
      }
  
      return conn;
  
  }
  
 
  module.exports = {
    DBConn
   };