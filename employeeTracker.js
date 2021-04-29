const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
// var figlet = require('figlet');

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
    // figlet('Employee \nManager', (err, data) => {
    //   if (err) throw err;
    //   console.log(data);
    // });
    consol.log('Employee Manager');
    console.log('\n\n---------------------------------------------------------------\n\n');
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
            viewAllEmp();
            break;
          case 'View All Employees By Department':
            viewByDept();
            break;            
          case 'View All Employees By Manager':
            viewByManager();
            break;
          case 'Add Employee':
            addEmp();
            break;
          case 'Remove Employee':
            remEmp();
            break;
          case 'Update Employee Role':
            updateEmpRole();
            break;
          case 'Update Employee Manager':
            updateEmpManager();
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

  const viewAllEmp = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
      if (err) throw err;
      console.log(res);
      start();
    });
  };

  const viewByDept = () => {

  };
  
  const viewByManager = () => {
    
  };
  const addEmp = () => {
    
  };
  const remEmp = () => {
    
  };
  const updateEmpRole = () => {
    
  };
  const updateEmpManager = () => {
    
  };