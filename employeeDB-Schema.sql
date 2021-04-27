DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT;
    name VARCHAR(30) NOT NULL;
    PRIMARY KEY (id);
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT;
    title VARCHAR(30) NOT NULL;
    salary DECIMAL(10,4) NOT NULL;
    -- department_id
    PRIMARY KEY (id);
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT;
    first_name VARCHAR(30) NOT NULL;
    last_name VARCHAR(30) NOT NULL;
    -- role_id;
    -- manager_id;
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;