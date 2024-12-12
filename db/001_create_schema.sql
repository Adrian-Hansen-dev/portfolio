-- delete tables and types if they already exist
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS INCLUDES;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS skills;
DROP TYPE IF EXISTS academic_title_enum;


-- enums
CREATE TYPE academic_title_enum AS ENUM ('Dr.', 'Prof.', 'Dipl.-Ing.', 'MBA', 'M.Sc.', 'B.Sc.');

-- tables
CREATE TABLE users
(
    id             SERIAL PRIMARY KEY,
    firstname      VARCHAR(100) NOT NULL,
    lastname       VARCHAR(100) NOT NULL,
    academic_title academic_title_enum,
    birthdate      DATE
);

CREATE TABLE projects
(
    id           SERIAL PRIMARY KEY,
    user_id      INT          NOT NULL,
    name         VARCHAR(100) NOT NULL,
    description  VARCHAR(200),
    repoLink     VARCHAR(200),
    creationDate DATE,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE skills
(
    id        SERIAL PRIMARY KEY,
    user_id   INT          NOT NULL,
    name      VARCHAR(100) NOT NULL,
    skillDate DATE,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE

);

CREATE TABLE INCLUDES
(
    project_id INT NOT NULL,
    skill_id   INT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects (id),
    FOREIGN KEY (skill_id) REFERENCES skills (id)
);
