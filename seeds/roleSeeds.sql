USE employeeDB;

INSERT INTO role (title, salary, department_id)
VALUES
    ('CEO', 250000, 1),
    ('Accounting Manager', 150000, 1),
    ('Marketing Manager', 150000, 1),
    ('R & D Manager', 180000, 1),
    ('HR Manager', 140000, 1),
    ('Production Manager', 180000, 1),
    ('Operations Manager', 140000, 1),
    ('IT Manager', 160000, 1),

    ('Finance Specialist', 80000, 2),
    ('Accountant', 70000, 2),

    ('Marketing & Sales Analyst', 90000, 3),
    ('Marketing Team', 60000, 3),
    ('Sales Team', 40000, 3),

    ('Product Development Team', 70000, 4),
    ('Product Testing Team', 70000, 4),

    ('Human Resources Specialist', 60000, 5),

    ('Factory Manager', 100000, 6),
    ('Factory Staff', 40000, 6),

    ('Logistics Manager', 80000, 7),
    ('Logistics & Distrubution Staff', 45000, 7),

    ('Senior IT Developer', 90000, 8),
    ('Junior IT Team Member', 60000, 8),
    ('IT Team Assistant', 40000, 8);