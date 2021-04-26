const mysql = require('mysql');
const inquirer = require('inquirer');
var figlet = require('figlet');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // MySQL local instance
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: 'Howardthedog8675309!@',
    database: 'employeeDB',
  });

  connection.connect((err) => {
    if (err) throw err;
    start();
  });

  const start = () => {
      figlet('Employee \nManager', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
//       inquirer.prompt([

//       ])
  }