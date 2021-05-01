USE employeeDB;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    -- Admin and Management
    ('Burt', 'Macklin', 1, NULL),
    ('Frank', 'Mitchell', 2, 1),
    ('Mary', 'Harris', 3, 1),
    ('Rebecca', 'Parker', 4, 1),
    ('Aaron', 'Thomas', 5, 1),
    ('Ernest', 'Lopez', 6, 1),
    ('Lawrence', 'Morris', 7, 1),
    ('Eugene', 'Levy', 8, 1),

    -- Fin and Acct
    ('Refugio', 'Nicholson', 9, 2),
    ('Ellsworth', 'Mccune', 10, 2),
    ('Abbey', 'Camachp', 10, 2),
    ('Luella', 'Martino', 10, 2),

    -- marketing and sales
    ('Dwight', 'Holt', 11, 3),
    ('Thomas', 'Stewart', 12, 3),
    ('Ida', 'Taylor', 12, 3),
    ('Luke', 'Sullivan', 12, 3),
    ('Victoria', 'Flowers', 13, 3),
    ('Whitney', 'Houston', 13, 3),
    ('Bobby', 'Brown', 13, 3),
    ('Steve', 'Henderson', 13, 3),

    -- R & D
    ('Benny', 'Ford', 14, 4),
    ('Charles', 'Diaz', 14, 4),
    ('Alverta', 'Sutton', 14, 4),
    ('Rafael', 'Bishop', 14, 4),
    ('Tracy', 'Wong', 15, 4),
    ('Preston', 'Huff', 15, 4),
    ('Rex', 'Peterson', 15, 4),

    -- HR
    ('Toby', 'Jennings', 16, 5),
    ('Maggie', 'Hill', 16, 5),
    ('Florence', 'Barnes', 16, 5),
    ('Lionel', 'Richie', 16, 5),

    -- Prod and Man 
    ('Hank', 'Hill', 17, 6),
    ('Dale', 'Gribble', 17, 6),
    ('Bill', 'Dauterive', 18, 6), 
    ('Buck', 'Strickland', 18, 6),
    ('John', 'Redcorn', 18, 6),
    ('Luanne', 'Platter', 18, 6),
    ('Kahn', 'Souphanousinphone', 18, 6),
    ('Jeffrey', 'Boomhauer', 18, 6),
    ('Karen', 'Stroup', 18, 6),
    ('Joe', 'Jack', 18, 6),
    ('Ted', 'Wassonasong', 18, 6),
    ('Chuck', 'Mangione', 18, 6),

    -- Operations
    ('Carroll', 'Morrison', 19, 7),
    ('Dorothy', 'Ramos', 20, 7),
    ('Claude', 'Allison', 20, 7),
    ('Warren', 'French', 20, 7),
    ('Han', 'Solo', 20, 7),
    ('Charles', 'Cunningham', 20, 7),
    ('Marc', 'James', 20, 7),

    -- IT
    ('Cynthia', 'Collier', 21, 8),
    ('Dorothy', 'Mantooth', 22, 8),
    ('Nikola', 'Tesla', 22, 8),
    ('Rowan', 'Atkinson', 22, 8),
    ('John', 'Travolta', 23, 8),
    ('Bill', 'Withers', 23, 8),
    ('Tom', 'Landry', 23, 8);