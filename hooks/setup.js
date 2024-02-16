import testData from '../data/testData';

import mysql from 'mysql2/promise';

let connection;

// Perform setup tasks before running the tests
beforeAll(async () => {
  // Connect to the database
  connection = await mysql.createConnection({
    host: '37.140.192.134',
    user: 'u0237203_admin',
    password: 'admin12345',
    database: 'u0237203_openstore'
  });
});

// Perform teardown tasks after running all the tests
afterAll(async () => {
  try {
    // Retrieve data from the database
    const [rows, fields] = await connection.execute(
      'SELECT firstname, email FROM oc_customer WHERE firstName = ?',
      [testData.user2.firstName[0]]
    );
    
  } catch (error) {
    console.error('Error retrieving data from the database:', error);
    throw error;

  } finally {
   
    // delete data from the database
    await connection.execute('DELETE FROM oc_customer WHERE email = ?', [testData.user2.firstName[0]]);

    // Close the database connection
    await connection.end();
  }
});