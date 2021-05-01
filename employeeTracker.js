const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
var figlet = require('figlet');

const allEmpQuery = `
SELECT employee.id AS id, employee.first_name, employee.last_name, role.title AS Title, department.name AS Department, CONCAT('$ ', role.salary) AS Salary, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id
LEFT JOIN employee manager ON manager.id = employee.manager_id`;

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
    name: 'main',
    type: 'list',
    message: 'What would you like to do?',
    choices: [
      'View All Employees',
      'View All Employees By Department',
      'View All Employees By Manager',
      'View All Departments',
      'View All Roles',
      'Add Employee',
      'Add Role',
      'Add Department',
      'Remove Employee',
      'Update Employee Role',
      'Update Employee Manager',
      'Exit',
    ],
  })
    .then((answers) => {
      switch (answers.main) {
        case 'View All Employees':
          viewAllEmp();
          break;
        case 'View All Employees By Department':
          viewByDept();
          break;
        case 'View All Employees By Manager':
          viewByManager();
          break;
        case 'View All Departments':
          viewAllDept();
          break;
        case 'View All Roles':
          viewAllRoles();
          break;
        case 'Add Employee':
          addEmp();
          break;
        case 'Add Role':
          addRole();
          break;
        case 'Add Department':
          addDept();
          break;
        case 'Remove Employee':
          removeEmp();
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
          console.log(`Invalid action: ${answers.main}`);
          connection.end();
          break;
      }
    });
}

const viewAllEmp = () => {

  connection.query(allEmpQuery, (err, res) => {
    if (err) throw err;
    console.log('\n');
    console.table(res);
    start();
  });
};

const viewByDept = () => {
  inquirer.prompt({
    name: 'viewDept',
    type: 'list',
    message: 'Please select the department you would like to view.',
    choices: [
      'Administration & Management',
      'Finance & Accounting',
      'Marketing & Sales',
      'Research & Development',
      'Human Resources',
      'Production & Manufacturing',
      'Operations',
      'Information Technologies',
    ],
  })
    .then((answers) => {
      const query = `
      SELECT 
      employee.id AS ID, employee.first_name, employee.last_name, role.title AS Title, department.name AS Department, CONCAT('$ ', role.salary) AS Salary, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager
      FROM employee
      LEFT JOIN role ON employee.role_id = role.id
      LEFT JOIN employee manager ON manager.id = employee.manager_id
      LEFT JOIN department ON role.department_id = department.id WHERE name = ?`;
      connection.query(query, (answers.viewDept), (err, res) => {
        if (err) throw err;
        // console.log(res);
        console.table(res);
        start();
      });
    })
};

const viewByManager = () => {
  const query = `
  SELECT employee.id AS id, CONCAT(employee.first_name, ' ', employee.last_name) AS name
  FROM employee
  LEFT JOIN role ON employee.role_id = role.id
  LEFT JOIN employee manager ON manager.id = employee.manager_id
  LEFT JOIN department ON role.department_id = department.id
  WHERE department.id = 1;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    // console.log(res);
    inquirer.prompt({
      name: 'viewManager',
      type: 'list',
      message: 'Please select a manager to view their employees.',
      choices() {
        const choiceArray = [];
        res.forEach(({ id, name }) => {
          const mngInfo = `${id} - ${name}`;
          choiceArray.push(mngInfo);
        });
        return choiceArray;
      },
    })
      .then((answers) => {
        const query = `
        SELECT
        employee.id AS id, employee.first_name, employee.last_name, role.title AS Title, department.name AS Department, CONCAT('$ ', role.salary) AS Salary,  CONCAT(manager.first_name, ' ', manager.last_name) AS Manager
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN employee Manager ON manager.id = employee.manager_id
        LEFT JOIN department ON role.department_id = department.id
        WHERE employee.manager_id = ?;`;
        connection.query(query, (answers.viewManager[0]), (err, res) => {
          if (err) throw err;
          // console.log(res);
          console.table(res);
          start();
        });
      });
  });
};

// const addEmp = () => {
//   const query = `
//   SELECT role.title AS Title, employee.id AS id, CONCAT(employee.first_name, ' ', employee.last_name) AS name
//   FROM employee
//   INNER JOIN role on employee.role_id = role.id
//   LEFT JOIN employee Manager ON manager.id = employee.manager_id
//   LEFT JOIN department ON role.department_id = department.id
//   WHERE department.id = 1;`;

//   connection.query(query, (err, res) => {
//     if (err) throw err;
//     console.table(res);
//     // inquirer.prompt([
//     //   {
//     //     name: 'addEmpFN',
//     //     type: 'input',
//     //     message: 'Please provide their first name.',
//     //   },
//     //   {
//     //     name: 'addEmpLN',
//     //     type: 'input',
//     //     message: 'Please provide their last name.',
//     //   },
//     // ])
//   });
// };

const addEmp = () => {
  const query = `
    SELECT title AS role, id as role_id FROM role;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    // console.table(res);
    inquirer.prompt([
      {
        name: 'addEmpFN',
        type: 'input',
        message: 'Please provide their first name.',
      },
      {
        name: 'addEmpLN',
        type: 'input',
        message: 'Please provide their last name.',
      },
      {
        name: 'addEmpRole',
        type: 'list',
        message: 'Please choose a role for the new employee.',
        choices() {
          const roleChoices = [];
          res.forEach(({ role, role_id }) => {
            const roleInfo = `${role_id} - ${role}`;
            roleChoices.push(roleInfo);
          });
          return roleChoices;
        }
      },
    ])
    // .then((answers) => {
    //   console.log(answers.addEmpRole);
    // });
  });
};


const removeEmp = () => {
  connection.query(allEmpQuery, (err, res) => {
    if (err) throw err;
    console.table(res);
    inquirer.prompt({
      name: 'removeEmp',
      type: 'list',
      message: 'Please select an employee by ID to remove.',
      choices() {
        const choiceArray = [];
        res.forEach(({ id }) => {
          choiceArray.push(id);
        });
        return choiceArray;
      },
    })
      .then((answers) => {
        const query = `
      DELETE FROM employee
      WHERE employee.id = ${answers.removeEmp};`;
        connection.query(query, (err, res) => {
          if (err) throw err;
          // console.log(res);
          console.log(`\n\nID: ${answers.removeEmp} successfully removed from database.`);
          start();
        });
      });
  });
};

const updateEmpRole = () => {
  // connection.query(allEmpQuery, (err, res) => {
  //   if (err) throw err;
  //   console.table(res);
  //   inquirer.prompt({
  //     name: 'empRole',
  //     type: 'list',
  //     message: 'Please select an employee by ID to Update their role.',
  //     choices() {
  //       const choiceArray = [];
  //       res.forEach(({ id }) => {
  //         choiceArray.push(id);
  //       });
  //       return choiceArray;
  //     },
  //   })
  //   .then((answers) => {

  //   });
  // });
  const query = `SELECT concat(employee.first_name, ' ', employee.last_name) AS name, role.title AS postion
  FROM employee 
  RIGHT JOIN role ON role.id = employee.role_id;`
};

// const updateEmpManager = () => {


// };

const addRole = () => {
  connection.query('SELECT name AS department, id as department_id FROM department', (err, res) => {
    if (err) throw err;
    inquirer.prompt([
      {
        name: 'roleTitle',
        type: 'input',
        message: 'Please input the title of the new position you would like to create.',
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Please input the starting salary for this role.',
      },
      {
        name: 'deptList',
        type: 'list',
        message: 'Please Select the department that the position is within.',
        choices() {
          const choiceArray = [];
          res.forEach(({ department_id, department }) => {
            const deptInfo = `${department_id} - ${department}`;
            choiceArray.push(deptInfo);
          });
          return choiceArray;
        },
      },
    ])
      .then((answers) => {
        connection.query('INSERT INTO role SET ?',
          {
            title: answers.roleTitle,
            salary: answers.salary,
            department_id: answers.deptList[0],
          },
          (err) => {
            if (err) throw err;
            console.log(`${answers.roleTitle} successfully created.`);
          });
      });
  });
};

const addDept = () => {
  inquirer.prompt({
    name: 'addDepartment',
    type: 'input',
    message: 'Please provide the name of the department you would like to add.',
  })
    .then((answers) => {
      connection.query('INSERT INTO department SET ?',
        {
          name: answers.addDepartment
        },
        (err) => {
          if (err) throw err;
          console.log(`${answers.addDepartment} department successfully created.`);
          start();
        });
    });
};

const viewAllDept = () => {
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
};

const viewAllRoles = () => {
  connection.query('SELECT * FROM role', (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
};
