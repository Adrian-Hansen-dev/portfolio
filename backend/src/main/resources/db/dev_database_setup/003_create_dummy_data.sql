-- delete all values
DELETE
FROM includes;
DELETE
FROM projects;
DELETE
FROM users;
DELETE
FROM skills;
DELETE
FROM object_data;



-- user
INSERT INTO users (first_name, last_name, profession, description, github_link, linked_in_link)
VALUES ('Adrian', 'Hansen', 'Software Engineering Student', 'I’m Adrian Hansen, a software developer with a Bachelor’s degree in Media Design Informatics. My focus is on web and app development, working with modern technologies such as Java, TypeScript, React, Angular, and Docker. I’m especially interested in the intersection of software architecture and human-centered design, which I also explored in my thesis on integrating generative AI into design processes. Outside of coding, I’m passionate about music production, fitness, and traveling.', 'https://github.com/Adrian-Hansen-dev', 'https://www.linkedin.com/in/adrian-hansen-496736316/' );
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

-- bestehende User-, Skills- und Objekt-Daten bleiben unverändert

-- zusätzliche Projekte
INSERT INTO projects (name, description, creation_date, repo_link, demo_link, user_id)
VALUES ('Open GL Space Demo', 'In this OpenGL project, fundamental computer graphics concepts are demonstrated within a space-themed 3D scene.', '2022-06-01', 'https://github.com/Adrian-Hansen-dev/opengl-space-demo', 'https://adrian-hansen-dev.github.io/opengl-space-demo/', 1);

INSERT INTO projects (name, description, creation_date, user_id)
VALUES ('3D Visualisierung für Architekturbüro', 'Freelance Projekt mit Fokus auf 3D-Modellen', '2023-04-01', 1);

INSERT INTO projects (name, description, creation_date, user_id)
VALUES ('E-Learning Plattform', 'Uni Projekt mit Fokus auf interaktive Lerninhalte', '2022-10-01', 1);

INSERT INTO projects (name, description, creation_date, user_id)
VALUES ('AI Chatbot Integration', 'Internes Projekt zur Unterstützung im Kundenservice', '2024-02-01', 1);

INSERT INTO projects (name, description, creation_date, user_id)
VALUES ('Warenwirtschaftssystem für kleinen Einzelhandel', 'Kundenprojekt zur Digitalisierung von Bestellungen', '2023-08-01', 1);

INSERT INTO projects (name, description, creation_date, user_id)
VALUES ('Online Terminbuchungssystem', 'Projekt mit Fokus auf UX/UI', '2022-11-01', 1);

INSERT INTO projects (name, description, creation_date, user_id)
VALUES ('IoT Dashboard zur Gerätesteuerung', 'Entwicklung eines Frontends zur Überwachung von Smart Devices', '2024-05-01', 1);

INSERT INTO projects (name, description, creation_date, user_id)
VALUES ('Finanzverwaltungstool', 'Tool zur Haushaltsbuchführung für Privatnutzer', '2023-03-01', 1);

INSERT INTO projects (name, description, creation_date, user_id)
VALUES ('Multiplayer Quiz App', 'Spaßprojekt zur Übung mit WebSockets', '2022-09-01', 1);

INSERT INTO projects (name, description, creation_date, user_id)
VALUES ('Datenanalyse Dashboard', 'Projekt zur Visualisierung großer Datenmengen', '2024-06-01', 1);

-- Portfolio Website (5)
INSERT INTO includes (project_id, skill_id) VALUES (5, 1);
INSERT INTO includes (project_id, skill_id) VALUES (5, 5);

-- 3D Visualisierung (6)
INSERT INTO includes (project_id, skill_id) VALUES (6, 4);
INSERT INTO includes (project_id, skill_id) VALUES (6, 5);

-- E-Learning Plattform (7)
INSERT INTO includes (project_id, skill_id) VALUES (7, 1);
INSERT INTO includes (project_id, skill_id) VALUES (7, 2);
INSERT INTO includes (project_id, skill_id) VALUES (7, 3);

-- AI Chatbot (8)
INSERT INTO includes (project_id, skill_id) VALUES (8, 4);
INSERT INTO includes (project_id, skill_id) VALUES (8, 1);

-- Warenwirtschaftssystem (9)
INSERT INTO includes (project_id, skill_id) VALUES (9, 3);
INSERT INTO includes (project_id, skill_id) VALUES (9, 5);

-- Terminbuchungssystem (10)
INSERT INTO includes (project_id, skill_id) VALUES (10, 1);
INSERT INTO includes (project_id, skill_id) VALUES (10, 2);

-- IoT Dashboard (11)
INSERT INTO includes (project_id, skill_id) VALUES (11, 2);
INSERT INTO includes (project_id, skill_id) VALUES (11, 3);
INSERT INTO includes (project_id, skill_id) VALUES (11, 5);

-- Finanztool (12)
INSERT INTO includes (project_id, skill_id) VALUES (12, 3);
INSERT INTO includes (project_id, skill_id) VALUES (12, 5);

-- Multiplayer Quiz App (13)
INSERT INTO includes (project_id, skill_id) VALUES (13, 1);
INSERT INTO includes (project_id, skill_id) VALUES (13, 4);

-- Datenanalyse Dashboard (14)
INSERT INTO includes (project_id, skill_id) VALUES (14, 4);
INSERT INTO includes (project_id, skill_id) VALUES (14, 5);



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