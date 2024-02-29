import testData from '../data/testData';

import mysql from 'mysql2/promise';

let connection;

// Perform setup tasks before running the tests
export async function beforeAll() {
  // Connect to the database
  connection = await mysql.createConnection({
    host: '37.140.192.134',
    user: 'u0237203_admin',
    password: 'admin12345',
    database: 'u0237203_openstore'
  });
  console.log('DB connection was established');
  // delete data from the database
  const [rows, fields] = await connection.execute("DELETE FROM oc_customer WHERE DATE(date_added) = '2024-02-28'");
  
  console.log('Data were clened from the DB');
  
};

// Perform teardown tasks after running all the tests
export async function afterAll() {
  // Retrieve data from the database
  const [rows, fields] = await connection.execute("SELECT * FROM oc_customer WHERE DATE(date_added) = '2024-02-29'");
  console.log(rows);
    // Close the database connection
    await connection.end();
  
};



