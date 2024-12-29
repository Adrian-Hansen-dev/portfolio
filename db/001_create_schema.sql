-- delete tables and types if they already exist
DROP TABLE IF EXISTS INCLUDES;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS users;
DROP TYPE IF EXISTS academic_title_enum;


-- enums
CREATE TYPE academic_title_enum AS ENUM ('DR', 'PROF', 'MA', 'BA', 'MSC', 'BSC');

-- tables
CREATE TABLE users
(
    id             SERIAL PRIMARY KEY,
    first_name     VARCHAR(100) NOT NULL,
    last_name      VARCHAR(100) NOT NULL,
    academic_title academic_title_enum,
    birthdate      DATE
);

CREATE TABLE projects
(
    id            SERIAL PRIMARY KEY,
    user_id       INT          NOT NULL,
    name          VARCHAR(100) NOT NULL,
    description   VARCHAR(200),
    repo_link     VARCHAR(200),
    creation_date DATE,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE skills
(
    id         SERIAL PRIMARY KEY,
    user_id    INT          NOT NULL,
    name       VARCHAR(100) NOT NULL,
    skill_begin_date DATE,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE

);

CREATE TABLE INCLUDES
(
    project_id INT NOT NULL,
    skill_id   INT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects (id),
    FOREIGN KEY (skill_id) REFERENCES skills (id)
);
