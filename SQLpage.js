// SQLpage.js

// Import necessary libraries
const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',       // Replace with your database host
    user: 'root',            // Replace with your database username
    password: '',            // Replace with your database password
    database: 'example_db'   // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

// Example function to perform a simple query
const fetchData = () => {
    const query = 'SELECT * FROM example_table'; // Replace with your SQL query

    connection.query(query, (err, results, fields) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }
        console.log('Query results:', results);
    });
};

// Call the function to fetch data
fetchData();

// Close the connection
connection.end((err) => {
    if (err) {
        console.error('Error closing the connection:', err);
        return;
    }
    console.log('Connection closed.');
});
