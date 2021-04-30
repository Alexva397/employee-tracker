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
        // figlet('Employee \nManager', (err, data) => {
    //   if (err) throw err;
    //   console.log(data);
    // });
    console.log('Employee Manager');
    start();
  });

  const start = () => {
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
    const query = `
    SELECT employee.id AS ID, employee.first_name, employee.last_name, role.title AS Title, department.name AS Department, CONCAT('$ ', role.salary) AS Salary, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employee manager ON manager.id = employee.manager_id`;

    connection.query(query, (err, res) => {
      if (err) throw err;
      // console.log(res);
      console.table(res);
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