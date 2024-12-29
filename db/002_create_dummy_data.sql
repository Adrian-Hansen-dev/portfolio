-- delete all values
DELETE
FROM skills;
DELETE
FROM projects;
DELETE
FROM users;
DELETE
FROM includes;


-- user
INSERT INTO users (first_name, last_name, birthdate)
VALUES ('Adrian', 'Hansen', '01-01-2000');
-- skills
INSERT INTO skills (name, skill_begin_date, user_id)
VALUES ('React', '2022-01-01', 1);
INSERT INTO skills (name, skill_begin_date, user_id)
VALUES ('Angular', '2021-05-01', 1);
INSERT INTO skills (name, skill_begin_date, user_id)
VALUES ('Java', '2020-08-01', 1);
INSERT INTO skills (name, skill_begin_date, user_id)
VALUES ('Python', '2020-08-01', 1);
INSERT INTO skills (name, skill_begin_date, user_id)
VALUES ('PostgreSQL', '2023-01-01', 1);

-- projects
INSERT INTO projects (name, description, creation_date, user_id)
VALUES ('Escape Game für Messeveranstaltungen', 'Internes Projekt mit einem Entwicklungzeitraum von 5 Monaten',
        '2022-01-01', 1);
INSERT INTO projects (name, description, creation_date, user_id)
VALUES ('Kommunikationsplattform für Studierende', 'Kunden Projekt mit einem Entwicklungzeitraum von 10 Monaten',
        '2023-01-01',1);
INSERT INTO projects (name, description, creation_date, user_id)
VALUES ('Webanwendung zur Verwaltung von Organisationseinheiten',
        'Uni Projekt mit einem Entwicklungzeitraum von 7 Monaten', '2024-01-01',1 );
INSERT INTO projects (name, description, creation_date, user_id)
VALUES ('App für Logistikmanagement', 'Kunden Projekt mit einem Entwicklungzeitraum von 5 Monaten', '2023-01-01',1);

-- used skills
INSERT INTO includes (project_id, skill_id) VALUES (1, 1);
INSERT INTO includes (project_id, skill_id) VALUES (1, 2);
INSERT INTO includes (project_id, skill_id) VALUES (1, 2);

INSERT INTO includes (project_id, skill_id) VALUES (2, 1);
INSERT INTO includes (project_id, skill_id) VALUES (2, 2);
INSERT INTO includes (project_id, skill_id) VALUES (2, 3);
INSERT INTO includes (project_id, skill_id) VALUES (2, 4);

INSERT INTO includes (project_id, skill_id) VALUES (3, 1);
INSERT INTO includes (project_id, skill_id) VALUES (3, 2);