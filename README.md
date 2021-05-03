# Employee Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)


## Description
*NOTE: the add employee and update employee role functionality are still in development.

This App is an easy solution for employee management. 

- It categorizes your employees by department, role and manager.

- It allows for employee role and manager updating.

- It stores employee salaries.

- It allows for the creation of new departments, employees, and roles.



## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Video](#video)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#test)
- [Challenges](#challenges)
- [Questions](#questions)


## Installation

  In order to run the app on your local system, please clone the repository and follow the steps in installation and usage.

  The Repo contains a package.json file that includes all dependencies.

  In order to run the application, navigate to the directory on your command line and run: 
  
  ```
  npm i
  ```

  This will install all dependencies needed to run the app.


## Usage 

  First the User must create the database.

  In order to do so empolyeeDB-Schema.sql must be executed in your MySQL Workbench.

  The repo contains seed files for each table within the DB. Copy and paste them in the workbench and execute to create these tables.

  The tables must be created in the following order
  1. department
  2. role
  3. employee
    - First execute The Admin and Management group alone.
    - Then execute the rest of the groups.
  
  
  Once the installation process is complete and the database is created, the user can start the app by running the following command:

  ```
  node employeeTracker.js
  ```

  


## Video

[![Demo Video](https://img.youtube.com/vi/aSSZXDQkre4/0.jpg)](https://www.youtube.com/watch?v=aSSZXDQkre4)


## Contributing

If you would like to contribute to the repository, please fork and submit pull requests. All pull requests will be reviewed and approved/denied by the owner of the repository.


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)


## Tests

  There are not any tests written for this repository.


## Challenges

I have yet to implement the functionality of:

`Add Employee` and `Update Employee Role`

The app will be completed in the near future. The most current commit and video presentation demonstrates the current state of the app and what is functioning. 


## Questions

  If you have any questions regarding the repo, please contact me at one of the following:
    
  [Github](https://github.com/Alexva397)

  [LinkedIn](https://www.linkedin.com/in/alexander-vadeboncoeur-287039aa/)

  [asvadeboncoeur@gmail.com](mailto:asvadeboncoeur@gmail.com)