-- delete tables and types if they already exist
DROP TABLE IF EXISTS includes;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS object_data;
DROP TYPE IF EXISTS academic_title_enum;


-- enums
CREATE TYPE academic_title_enum AS ENUM ('DR', 'PROF', 'MA', 'BA', 'MSC', 'BSC');

-- tables
CREATE TABLE object_data
(
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(100) NOT NULL,
    file_path VARCHAR(100) NOT NULL
);

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
    id             SERIAL PRIMARY KEY,
    name           VARCHAR(100) NOT NULL,
    description    VARCHAR(200),
    repo_link      VARCHAR(200),
    creation_date  DATE,
    user_id        INT          NOT NULL,
    object_data_id INT,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (object_data_id) REFERENCES object_data (id)

);

CREATE TABLE skills
(
    id               SERIAL PRIMARY KEY,
    user_id          INT          NOT NULL,
    name             VARCHAR(100) NOT NULL,
    skill_begin_date DATE,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE

);

CREATE TABLE includes
(
    project_id INT NOT NULL,
    skill_id   INT NOT NULL,
    FOREIGN KEY (project_id) REFERENCES projects (id),
    FOREIGN KEY (skill_id) REFERENCES skills (id)
);