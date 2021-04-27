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
    figlet('Employee \nManager', (err, data) => {
      if (err) throw err;
      console.log(data, '\n\n--------------------------------------------------------\n\n');
    });
    start();
  });

  const start = () => {
      inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'View All Employees',
          'View All Employees By Department',
          'View All Employees By Manager',
          'Add Employee',
          'Remove Employee', 
          'Update Employee Role',
          'Update Employee Manager',
          'Exit',
        ],
      })
      .then((answers) => {
        switch (answers.action) {
          case 'View All Employees':
            break;
          case 'View All Employees By Department':
            break;
          case 'View All Employees By Manager':
            break;
          case 'Add Employee':
            break;
          case 'Remove Employee':
            break;
          case 'Update Employee Role':
            break;
          case 'Update Employee Manager':
            break;
          case 'Exit':
            connection.end();
            break;
          default:
            console.log(`Invalid action: ${answer.action}`);
            connection.end();
            break;
        }
      });
  }