USE employeeDB;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    -- Admin and Management
    ('Burt', 'Macklin', 24),
    ('Frank', 'Mitchell', 25, 1),
    ('Mary', 'Harris', 26, 1),
    ('Rebecca', 'Parker', 27, 1),
    ('Aaron', 'Thomas', 28, 1),
    ('Ernest', 'Lopez', 29, 1),
    ('Lawrence', 'Morris', 30, 1),
    ('Eugene', 'Levy', 31, 1),

    -- Fin and Acct
    ('Refugio', 'Nicholson', 32, 2),
    ('Ellsworth', 'Mccune', 33, 2),
    ('Abbey', 'Camachp', 33, 2),
    ('Luella', 'Martino', 33, 2),

    -- marketing and sales
    ('Dwight', 'Holt', 34, 3),
    ('Thomas', 'Stewart', 35, 3),
    ('Ida', 'Taylor', 35, 3),
    ('Luke', 'Sullivan', 35, 3),
    ('Victoria', 'Flowers', 36, 3),
    ('Whitney', 'Houston', 36, 3),
    ('Bobby', 'Brown', 36, 3),
    ('Steve', 'Henderson', 36, 3),

    -- R & D
    ('Benny', 'Ford', 37, 4),
    ('Charles', 'Diaz', 37, 4),
    ('Alverta', 'Sutton', 37, 4),
    ('Rafael', 'Bishop', 37, 4),
    ('Tracy', 'Wong', 38, 4),
    ('Preston', 'Huff', 38, 4),
    ('Rex', 'Peterson', 38, 4),

    -- HR
    ('Toby', 'Jennings', 39, 5),
    ('Maggie', 'Hill', 39, 5),
    ('Florence', 'Barnes', 39, 5),
    ('Lionel', 'Richie', 39, 5),

    -- Prod and Man 
    ('Hank', 'Hill', 40, 6),
    ('Dale', 'Gribble', 40, 6),
    ('Bill', 'Dauterive', 41, 6), 
    ('Buck', 'Strickland', 41, 6),
    ('John', 'Redcorn', 41, 6),
    ('Luanne', 'Platter', 41, 6),
    ('Kahn', 'Souphanousinphone', 41, 6),
    ('Jeffrey', 'Boomhauer', 41, 6),
    ('Karen', 'Stroup', 41, 6),
    ('Joe', 'Jack', 41, 6),
    ('Ted', 'Wassonasong', 41, 6),
    ('Chuck', 'Mangione', 41, 6),

    -- Operations
    ('Carroll', 'Morrison', 42, 7),
    ('Dorothy', 'Ramos', 43, 7),
    ('Claude', 'Allison', 43, 7),
    ('Warren', 'French', 43, 7),
    ('Han', 'Solo', 43, 7),
    ('Charles', 'Cunningham', 43, 7),
    ('Marc', 'James', 43, 7),

    -- IT
    ('Cynthia', 'Collier', 44, 8),
    ('Dorothy', 'Mantooth', 45, 8),
    ('Nikola', 'Tesla', 45, 8),
    ('Rowan', 'Atkinson', 45, 8),
    ('John', 'Travolta', 46, 8),
    ('Bill', 'Withers', 46, 8),
    ('Tom', 'Landry', 46, 8);